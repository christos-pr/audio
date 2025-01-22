/**
 * Audio Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from media gallery component
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * audio: {
 *   class: AudioTool,
 *   config: {
 *     selectFiles: () => { }
 *   },
 * },
 */

/**
 * @typedef {object} AudioToolData
 * @description Audio Tool's input and output data format
 * @property {string} caption — Audio caption
 * @property {object} file — Audio file data returned from backend
 * @property {string} file.url — Audio URL
 */

import './index.css';

import Ui from './ui';
import Uploader from './uploader';

/**
 * @typedef {object} AudioConfig
 * @description Config supported by Tool
 * @property {object} endpoints - upload endpoints
 * @property {string} endpoints.byFile - upload by file
 * @property {string} endpoints.byUrl - upload by URL
 * @property {string} field - field name for uploaded audio
 * @property {string} types - available mime-types
 * @property {string} captionPlaceholder - placeholder for Caption field
 * @property {object} additionalRequestData - any data to send with requests
 * @property {object} additionalRequestHeaders - allows to pass custom headers with Request
 * @property {string} buttonContent - overrides for Select File button
 * @property {object} [uploader] - optional custom uploader
 * @property {function(): Promise.<UploadResponseFormat>} selectFiles - method that selects an audio file from a custom file/ asset manager
 */

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file uploading
 * @property {number} success - 1 for successful uploading, 0 for failure
 * @property {object} file - Object with file data.
 *                           'url' is required,
 *                           also can contain any additional data that will be saved and passed back
 * @property {string} file.url - [Required] audio source URL
 */
export default class AudioTool {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      title: 'Audio',
      icon: `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.31 3.532V15.91a.536.536 0 0 1-.254.464.517.517 0 0 1-.581-.037l-4.24-3.297a.259.259 0 0 1-.098-.203V6.609c0-.08.038-.155.1-.204l4.24-3.297a.517.517 0 0 1 .832.424ZM4.843 6.62h-1.81C2.464 6.62 2 7.082 2 7.654v4.137c0 .571.463 1.034 1.034 1.034h1.81a.259.259 0 0 0 .26-.258v-5.69a.259.259 0 0 0-.26-.258Zm8.196 1.348a.517.517 0 0 0-.047.73 1.552 1.552 0 0 1 0 2.05.517.517 0 1 0 .776.685c.86-.977.86-2.442 0-3.419a.517.517 0 0 0-.731-.046h.002Zm2.643-1.692a.517.517 0 1 0-.77.689 4.137 4.137 0 0 1 0 5.517.517.517 0 1 0 .77.69 5.172 5.172 0 0 0 0-6.896Z" fill="#5C6B7A" fill-rule="nonzero"/></svg>`,
    };
  }

  /**
   * Available audio tools
   *
   * @returns {Array}
   */
  static get tunes() {
    return [
      {
        name: 'stretched',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M1 160h640v320H1V160Zm120-80h400v20H121V80Zm0 460h400v20H121v-20Z"/></svg>`,
        title: 'Stretch audio',
        toggle: true,
      },
      {
        name: 'withBackground',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M181 200h280v240H181V200ZM81 120h480v20H81v-20Zm0 380h480v20H81v-20Z"/></svg>`,
        title: 'With background',
        toggle: true,
      },
      {
        name: 'withBorder',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 640"><rect width="512" height="409" x="64" y="115" fill="none" fill-rule="evenodd" stroke="#5C6B7A" stroke-linecap="round" stroke-width="34" rx="40"/></svg>`,
        title: 'With border',
        toggle: true,
      },
    ];
  }

  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {AudioToolData} tool.data - previously saved data
   * @param {AudioConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   */
  constructor({ data, config, api, readOnly }) {
    this.api = api;
    this.readOnly = readOnly;

    /**
     * Tool's initial config
     */
    this.config = {
      endpoints: config.endpoints || '',
      additionalRequestData: config.additionalRequestData || {},
      additionalRequestHeaders: config.additionalRequestHeaders || {},
      field: config.field || 'audio',
      types: config.types || 'audio/*',
      captionPlaceholder: this.api.i18n.t(config.captionPlaceholder || 'Caption'),
      buttonContent: config.buttonContent || '',
      uploader: config.uploader || undefined,
      actions: config.actions || [],
      selectFiles: config.selectFiles || undefined,
    };

    /**
     * Module for file uploading
     */
    this.uploader = new Uploader({
      config: this.config
    });

    /**
     * Module for working with UI
     */
    this.ui = new Ui({
      api,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (src) => {
            this.ui.showPreloader(src);
          },
        });
      },
      readOnly,
    });

    /**
     * Set saved state
     */
    this._data = {};
    this.data = data;
  }

  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data);
  }

  /**
   * Validate data: check if sound file exists
   *
   * @param {AudioToolData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(savedData) {
    return savedData.file && savedData.file.url;
  }

  /**
   * Return Block data
   *
   * @public
   *
   * @returns {AudioToolData}
   */
  save() {
    const caption = this.ui.nodes.caption;

    this._data.caption = caption.innerHTML;

    return this.data;
  }

  /**
   * Returns configuration for block tunes: add background, stretch audio player
   *
   * @public
   *
   * @returns {Array}
   */
  renderSettings() {
    // Merge default tunes with the ones that might be added by user
    // @see https://github.com/editor-js/image/pull/49
    const tunes = AudioTool.tunes.concat(this.config.actions);

    return tunes.map(tune => ({
      icon: tune.icon,
      label: this.api.i18n.t(tune.title),
      name: tune.name,
      toggle: tune.toggle,
      isActive: this.data[tune.name],
      onActivate: () => {
        /* If it'a user defined tune, execute it's callback stored in action property */
        if (typeof tune.action === 'function') {
          tune.action(tune.name);

          return;
        }
        this.tuneToggled(tune.name);
      },
    }));
  }

  /**
   * Fires after clicks on the Toolbox Audio Icon
   * Initiates click on the Select File button
   *
   * @public
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }

  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */

  /**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {AudioToolData} data - data in Audio Tool format
   */
  set data(data) {
    this.audio = data.file;

    this._data.caption = data.caption || '';
    this.ui.fillCaption(this._data.caption);

    AudioTool.tunes.forEach(({ name: tune }) => {
      const value = typeof data[tune] !== 'undefined' ? data[tune] === true || data[tune] === 'true' : false;

      this.setTune(tune, value);
    });
  }

  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {AudioToolData}
   */
  get data() {
    return this._data;
  }

  /**
   * Set new audio file
   *
   * @private
   *
   * @param {object} file - uploaded file data
   */
  set audio(file) {
    this._data.file = file || {};

    if (file && file.url) {
      this.ui.fillAudio(file);
    }
  }

  /**
   * Callback fired when Block Tune is activated
   *
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   * @returns {void}
   */
  tuneToggled(tuneName) {
    // inverse tune state
    this.setTune(tuneName, !this._data[tuneName]);
  }

  /**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   * @returns {void}
   */
  setTune(tuneName, value) {
    this._data[tuneName] = value;

    this.ui.applyTune(tuneName, value);

    if (tuneName === 'stretched') {
      /**
       * Wait until the API is ready
       */
      Promise.resolve().then(() => {
        const blockId = this.api.blocks.getCurrentBlockIndex();

        this.api.blocks.stretchBlock(blockId, value);
      })
        .catch(err => {
          console.error(err);
        });
    }
  }
}
