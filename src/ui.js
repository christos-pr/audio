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
      audioTitle: 'audio-tool__audio-title',
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

    button.innerHTML = this.config.buttonContent || `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.412 1.71V18.21a.715.715 0 0 1-.337.62.69.69 0 0 1-.776-.049l-5.651-4.396a.345.345 0 0 1-.131-.272V5.812c0-.106.05-.206.133-.271l5.652-4.397a.69.69 0 0 1 .862.014c.16.138.252.34.248.552Zm-8.62 4.116H1.38A1.38 1.38 0 0 0 0 7.205v5.517c0 .761.617 1.379 1.38 1.379h2.413c.19 0 .344-.155.344-.345V6.17a.345.345 0 0 0-.344-.345ZM14.72 7.622a.69.69 0 0 0-.062.974 2.069 2.069 0 0 1 0 2.734.69.69 0 1 0 1.034.912 3.448 3.448 0 0 0 0-4.558.69.69 0 0 0-.975-.062h.003Zm3.524-2.256a.69.69 0 1 0-1.027.92 5.517 5.517 0 0 1 0 7.355.69.69 0 1 0 1.027.92 6.896 6.896 0 0 0 0-9.195Z" fill="#5C6B7A" fill-rule="nonzero"/></svg> ${this.api.i18n.t('Click to select an audio file...')}`;

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
    this.nodes.audioContainer.appendChild(this.nodes.audioElement);
    this.nodes.audioContainer.appendChild(this.nodes.audioTitle);
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
