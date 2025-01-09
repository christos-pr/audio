import { make } from './utils/dom';

/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */
export default class Ui {
  /**
   * @param {object} ui - audio tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {AudioConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api, config, onSelectFile, readOnly }) {
    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.readOnly = readOnly;
    this.nodes = {
      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
      audioContainer: make('div', [ this.CSS.audioContainer ]),
      fileButton: this.createFileButton(),
      audioTitle: make('span', this.CSS.audioTitle),
      audioElement: undefined,
      audioPreloader: make('div', this.CSS.audioPreloader),
      caption: make('div', [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly,
      }),
    };

    /**
     * Create base structure
     *  <wrapper>
     *    <audio-container>
     *      <audio-preloader />
     *    </audio-container>
     *    <caption />
     *    <select-file-button />
     *  </wrapper>
     */
    this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;
    this.nodes.audioContainer.appendChild(this.nodes.audioPreloader);
    this.nodes.wrapper.appendChild(this.nodes.audioContainer);
    this.nodes.wrapper.appendChild(this.nodes.caption);
    this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }

  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,

      /**
       * Tool's classes
       */
      wrapper: 'audio-tool',
      audioContainer: 'audio-tool__audio',
      audioPreloader: 'audio-tool__audio-preloader',
      audioTitle: 'embed-tool__audio-title',
      audioElement: 'audio-tool__audio-element',
      caption: 'audio-tool__caption',
    };
  };

  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: 'empty',
      UPLOADING: 'loading',
      FILLED: 'filled',
    };
  }

  /**
   * Renders tool UI
   *
   * @param {AudioeToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(toolData) {
    if (!toolData.file || Object.keys(toolData.file).length === 0) {
      this.toggleStatus(Ui.status.EMPTY);
    } else {
      this.toggleStatus(Ui.status.UPLOADING);
    }

    return this.nodes.wrapper;
  }

  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const button = make('div', [ this.CSS.button ]);

    button.innerHTML = this.config.buttonContent || `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#5C6B7A" fill-rule="nonzero" d="M20 17.778V2.222A2.222 2.222 0 0 0 17.778 0H2.222A2.222 2.222 0 0 0 0 2.222v15.556C0 19.006.994 20 2.222 20h15.556A2.222 2.222 0 0 0 20 17.778ZM6.111 11.667l2.778 3.339L12.778 10l5 6.667H2.222l3.89-5Z"/></svg> ${this.api.i18n.t('Click to select an audio file...')}`;

    button.addEventListener('click', () => {
      this.onSelectFile();
    });

    return button;
  }

  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(src) {
    this.nodes.audioPreloader.style.backgroundImage = `url(${src})`;

    this.toggleStatus(Ui.status.UPLOADING);
  }

  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.audioPreloader.style.backgroundImage = '';
    this.toggleStatus(Ui.status.EMPTY);
  }

  /**
   * Shows audio
   *
   * @param {Object} file - audio source
   * @returns {void}
   */
  fillAudio(file) {
    const attributes = {
      controls: true,
      src: file.url,
      autoplay: false,
      loop: false,
      muted: false,
    };

    let eventName = 'loadeddata';

    /**
     * Compose tag with defined attributes
     *
     * @type {Element}
     */
    this.nodes.audioElement = make('AUDIO', this.CSS.audioElement, attributes);
    this.nodes.audioTitle.innerHTML = file.title;
    /**
     * Add load event listener
     */
    this.nodes.audioElement.addEventListener(eventName, () => {
      this.toggleStatus(Ui.status.FILLED);

      /**
       * Preloader does not exists on first rendering with presaved data
       */
      if (this.nodes.audioPreloader) {
        this.nodes.audioPreloader.style.backgroundImage = '';
      }
    });
    this.nodes.audioContainer.appendChild(this.nodes.audioTitle);
    this.nodes.audioContainer.appendChild(this.nodes.audioElement);
  }

  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(text) {
    if (this.nodes.caption) {
      this.nodes.caption.innerHTML = text;
    }
  }

  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(status) {
    for (const statusType in Ui.status) {
      if (Object.prototype.hasOwnProperty.call(Ui.status, statusType)) {
        this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${Ui.status[statusType]}`, status === Ui.status[statusType]);
      }
    }
  }

  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(tuneName, status) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${tuneName}`, status);
  }
}
