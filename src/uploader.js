// import isPromise from './utils/isPromise';

/**
 * Module for file uploading from audio gallery component.
 */
export default class Uploader {
  /**
   * @param {object} params - uploader module params
   * @param {AudioConfig} params.config - image tool config
   */
  constructor({ config, onUpload, onError }) {
    this.config = config;
  }

  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview }) {
    if (this.config.selectFiles != undefined && typeof this.config.selectFiles === 'function') {
      upload = this.config.selectFiles()
        .then(() => {
          onPreview('');

          return {
            success: 1,
            file: '',
          };
        });
    }
  }
}
