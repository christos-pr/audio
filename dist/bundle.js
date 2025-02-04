/*!
 * Image tool
 * 
 * @version 1.0.0
 * 
 * @package https://github.com/editor-js/image
 * @licence MIT
 * @author CodeX <https://codex.so>
 */
!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ImageTool=t():n.ImageTool=t()}(window,(function(){return function(n){var t={};function o(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=n,o.c=t,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)o.d(e,i,function(t){return n[t]}.bind(null,i));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="/",o(o.s=4)}([function(n,t){function o(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}n.exports=function(n,t,e){return t&&o(n.prototype,t),e&&o(n,e),n}},function(n,t){n.exports=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},function(n,t){n.exports=function(n,t){(null==t||t>n.length)&&(t=n.length);for(var o=0,e=new Array(t);o<t;o++)e[o]=n[o];return e}},function(n,t,o){var e=o(9),i=o(10),a=o(11),r=o(12);n.exports=function(n){return e(n)||i(n)||a(n)||r()}},function(n,t,o){n.exports=o(13)},function(n,t,o){var e=o(6),i=o(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1},r=(e(i,a),i.locals?i.locals:{});n.exports=r},function(n,t,o){"use strict";var e,i=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},a=function(){var n={};return function(t){if(void 0===n[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}n[t]=o}return n[t]}}(),r=[];function l(n){for(var t=-1,o=0;o<r.length;o++)if(r[o].identifier===n){t=o;break}return t}function d(n,t){for(var o={},e=[],i=0;i<n.length;i++){var a=n[i],d=t.base?a[0]+t.base:a[0],u=o[d]||0,s="".concat(d," ").concat(u);o[d]=u+1;var c=l(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==c?(r[c].references++,r[c].updater(p)):r.push({identifier:s,updater:v(p,t),references:1}),e.push(s)}return e}function u(n){var t=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var i=o.nc;i&&(e.nonce=i)}if(Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(t);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var s,c=(s=[],function(n,t){return s[n]=t,s.filter(Boolean).join("\n")});function p(n,t,o,e){var i=o?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=c(t,i);else{var a=document.createTextNode(i),r=n.childNodes;r[t]&&n.removeChild(r[t]),r.length?n.insertBefore(a,r[t]):n.appendChild(a)}}function f(n,t,o){var e=o.css,i=o.media,a=o.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),a&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var h=null,g=0;function v(n,t){var o,e,i;if(t.singleton){var a=g++;o=h||(h=u(t)),e=p.bind(null,o,a,!1),i=p.bind(null,o,a,!0)}else o=u(t),e=f.bind(null,o,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(o)};return e(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;e(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var o=d(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<o.length;e++){var i=l(o[e]);r[i].references--}for(var a=d(n,t),u=0;u<o.length;u++){var s=l(o[u]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}o=a}}}},function(n,t,o){(t=o(8)(!1)).push([n.i,'.audio-tool {\n  --bg-color: #ebf0f5;\n  --front-color: #388ae5;\n  --border-color: #d3dce6;\n}\n\n  .audio-tool__audio {\n    margin-bottom: 8px;\n  }\n\n  .audio-tool__audio-element {\n      width: 100%;\n      max-width: 100%;\n      display: block;\n    }\n\n  .audio-tool__audio-preloader {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-size: cover;\n      margin: auto;\n      position: relative;\n      background-color: var(--bg-color);\n      background-position: center center;\n    }\n\n  .audio-tool__audio-preloader::after {\n        content: "";\n        position: absolute;\n        z-index: 3;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        border: 2px solid var(--bg-color);\n        border-top-color: var(--front-color);\n        left: 50%;\n        top: 50%;\n        margin-top: -30px;\n        margin-left: -30px;\n        animation: audio-preloader-spin 2s infinite linear;\n        box-sizing: border-box;\n      }\n\n  .audio-tool__audio-title {\n      font-size: 14px;\n      display: block;\n    }\n\n  .audio-tool__caption {\n    font-size: 14px;\n    color: #2d3640;\n    height: 40px;\n    padding: 9px 10px;\n    box-shadow: none;\n    border-radius: 3px;\n    border: 1px solid #d3dde6;\n  }\n\n  .audio-tool__caption[contentEditable="true"][data-placeholder]::before {\n      position: absolute !important;\n      content: attr(data-placeholder);\n      color: #5c6b7a;\n      font-weight: normal;\n      display: none;\n      font-size: 14px;\n    }\n\n  .audio-tool__caption[contentEditable="true"][data-placeholder]:empty::before {\n        display: block;\n      }\n\n  .audio-tool__caption[contentEditable="true"][data-placeholder]:empty:focus::before {\n        display: none;\n      }\n\n  .audio-tool__caption:hover {\n      border-color: #0080ff;\n    }\n\n  .audio-tool--empty .audio-tool__audio {\n      display: none;\n    }\n\n  .audio-tool--empty .audio-tool__caption, .audio-tool--loading .audio-tool__caption {\n      display: none;\n    }\n\n  .audio-tool .cdx-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px dashed #d3dce6;\n    background-color: #f5f7fa;\n    border-radius: 6px;\n    padding: 38px;\n    color: #5c6b7a;\n    font-size: 14px;\n  }\n\n  .audio-tool .cdx-button svg {\n      width: 20px;\n      height: 20px;\n      margin: 0 8px 0 0;\n    }\n\n  .audio-tool .cdx-button svg path {\n        stroke: none;\n      }\n\n  .audio-tool .cdx-button:hover {\n      color: #0080ff;\n    }\n\n  .audio-tool .cdx-button:hover svg {\n        fill: #0080ff;\n      }\n\n  .audio-tool .cdx-button:hover svg path {\n          fill: #0080ff;\n        }\n\n  .audio-tool--filled .cdx-button {\n      display: none;\n    }\n\n  .audio-tool--filled .audio-tool__audio-preloader {\n        display: none;\n      }\n\n  .audio-tool--loading .audio-tool__audio {\n      min-height: 200px;\n      display: flex;\n      border: 1px solid var(--border-color);\n      background-color: #fff;\n    }\n\n  .audio-tool--loading .audio-tool__audio-picture {\n        display: none;\n      }\n\n  .audio-tool--loading .cdx-button {\n      display: none;\n    }\n\n  /**\n   * Tunes\n   * ----------------\n   */\n\n  .audio-tool--withBorder .audio-tool__audio-element {\n      border: 1px solid var(--border-color);\n      border-radius: 100px;\n    }\n\n  .audio-tool--withBorder.audio-tool--withBackground .audio-tool__audio {\n        border: 1px solid var(--border-color);\n      }\n\n  .audio-tool--withBorder.audio-tool--withBackground .audio-tool__audio-element {\n        border: none;\n      }\n\n  .audio-tool--withBackground .audio-tool__audio {\n      padding: 24px;\n      background: var(--bg-color);\n    }\n\n  .audio-tool--withBackground .audio-tool__audio-element,\n      .audio-tool--withBackground .audio-tool__audio-title {\n        max-width: 80%;\n        margin: 0 auto;\n      }\n\n  .audio-tool--stretched .audio-tool__audio {\n      margin-left: -56px;\n      margin-right: -56px;\n    }\n\n  .audio-tool--stretched .audio-tool__audio-caption {\n        margin-left: 56px;\n        margin-right: 56px;\n      }\n\n@keyframes audio-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n',""]),n.exports=t},function(n,t,o){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var o=function(n,t){var o=n[1]||"",e=n[3];if(!e)return o;if(t&&"function"==typeof btoa){var i=(r=e,l=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(d," */")),a=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[o].concat(a).concat([i]).join("\n")}var r,l,d;return[o].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(n,o,e){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(e)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);e&&i[d[0]]||(o&&(d[2]?d[2]="".concat(o," and ").concat(d[2]):d[2]=o),t.push(d))}},t}},function(n,t,o){var e=o(2);n.exports=function(n){if(Array.isArray(n))return e(n)}},function(n,t){n.exports=function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}},function(n,t,o){var e=o(2);n.exports=function(n,t){if(n){if("string"==typeof n)return e(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(n,t):void 0}}},function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(n,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return p}));var e=o(1),i=o.n(e),a=o(0),r=o.n(a),l=(o(5),o(3)),d=o.n(l);function u(n){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(n);Array.isArray(o)?(t=i.classList).add.apply(t,d()(o)):o&&i.classList.add(o);for(var a in e)i[a]=e[a];return i}var s=function(){function n(t){var o=t.api,e=t.config,a=t.onSelectFile,r=t.readOnly;i()(this,n),this.api=o,this.config=e,this.onSelectFile=a,this.readOnly=r,this.nodes={wrapper:u("div",[this.CSS.baseClass,this.CSS.wrapper]),audioContainer:u("div",[this.CSS.audioContainer]),fileButton:this.createFileButton(),audioTitle:u("span",this.CSS.audioTitle),audioElement:void 0,audioPreloader:u("div",this.CSS.audioPreloader),caption:u("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly})},this.nodes.caption.dataset.placeholder=this.config.captionPlaceholder,this.nodes.audioContainer.appendChild(this.nodes.audioPreloader),this.nodes.wrapper.appendChild(this.nodes.audioContainer),this.nodes.wrapper.appendChild(this.nodes.caption),this.nodes.wrapper.appendChild(this.nodes.fileButton)}return r()(n,[{key:"render",value:function(t){return t.file&&0!==Object.keys(t.file).length?this.toggleStatus(n.status.UPLOADING):this.toggleStatus(n.status.EMPTY),this.nodes.wrapper}},{key:"createFileButton",value:function(){var n=this,t=u("div",[this.CSS.button]);return t.innerHTML=this.config.buttonContent||'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.412 1.71V18.21a.715.715 0 0 1-.337.62.69.69 0 0 1-.776-.049l-5.651-4.396a.345.345 0 0 1-.131-.272V5.812c0-.106.05-.206.133-.271l5.652-4.397a.69.69 0 0 1 .862.014c.16.138.252.34.248.552Zm-8.62 4.116H1.38A1.38 1.38 0 0 0 0 7.205v5.517c0 .761.617 1.379 1.38 1.379h2.413c.19 0 .344-.155.344-.345V6.17a.345.345 0 0 0-.344-.345ZM14.72 7.622a.69.69 0 0 0-.062.974 2.069 2.069 0 0 1 0 2.734.69.69 0 1 0 1.034.912 3.448 3.448 0 0 0 0-4.558.69.69 0 0 0-.975-.062h.003Zm3.524-2.256a.69.69 0 1 0-1.027.92 5.517 5.517 0 0 1 0 7.355.69.69 0 1 0 1.027.92 6.896 6.896 0 0 0 0-9.195Z" fill="#5C6B7A" fill-rule="nonzero"/></svg> '.concat(this.api.i18n.t("Click to select an audio file...")),t.addEventListener("click",(function(){n.onSelectFile()})),t}},{key:"showPreloader",value:function(t){this.nodes.audioPreloader.style.backgroundImage="url(".concat(t,")"),this.toggleStatus(n.status.UPLOADING)}},{key:"hidePreloader",value:function(){this.nodes.audioPreloader.style.backgroundImage="",this.toggleStatus(n.status.EMPTY)}},{key:"fillAudio",value:function(t){var o=this,e={controls:!0,src:t.url,autoplay:!1,loop:!1,muted:!1};this.nodes.audioElement=u("AUDIO",this.CSS.audioElement,e),this.nodes.audioTitle.innerHTML=t.title,this.nodes.audioElement.addEventListener("loadeddata",(function(){o.toggleStatus(n.status.FILLED),o.nodes.audioPreloader&&(o.nodes.audioPreloader.style.backgroundImage="")})),this.nodes.audioContainer.appendChild(this.nodes.audioElement),this.nodes.audioContainer.appendChild(this.nodes.audioTitle)}},{key:"fillCaption",value:function(n){this.nodes.caption&&(this.nodes.caption.innerHTML=n)}},{key:"toggleStatus",value:function(t){for(var o in n.status)Object.prototype.hasOwnProperty.call(n.status,o)&&this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper,"--").concat(n.status[o]),t===n.status[o])}},{key:"applyTune",value:function(n,t){this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper,"--").concat(n),t)}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"audio-tool",audioContainer:"audio-tool__audio",audioPreloader:"audio-tool__audio-preloader",audioTitle:"audio-tool__audio-title",audioElement:"audio-tool__audio-element",caption:"audio-tool__caption"}}}],[{key:"status",get:function(){return{EMPTY:"empty",UPLOADING:"loading",FILLED:"filled"}}}]),n}(),c=function(){function n(t){var o=t.config;t.onUpload,t.onError;i()(this,n),this.config=o}return r()(n,[{key:"uploadSelectedFile",value:function(n){var t=n.onPreview;null!=this.config.selectFiles&&"function"==typeof this.config.selectFiles&&(upload=this.config.selectFiles().then((function(){return t(""),{success:1,file:""}})))}}]),n}(),p=function(){function n(t){var o=this,e=t.data,a=t.config,r=t.api,l=t.readOnly;i()(this,n),this.api=r,this.readOnly=l,this.config={endpoints:a.endpoints||"",additionalRequestData:a.additionalRequestData||{},additionalRequestHeaders:a.additionalRequestHeaders||{},field:a.field||"audio",types:a.types||"audio/*",captionPlaceholder:this.api.i18n.t(a.captionPlaceholder||"Caption"),buttonContent:a.buttonContent||"",uploader:a.uploader||void 0,actions:a.actions||[],selectFiles:a.selectFiles||void 0},this.uploader=new c({config:this.config}),this.ui=new s({api:r,config:this.config,onSelectFile:function(){o.uploader.uploadSelectedFile({onPreview:function(n){o.ui.showPreloader(n)}})},readOnly:l}),this._data={},this.data=e}return r()(n,null,[{key:"isReadOnlySupported",get:function(){return!0}},{key:"toolbox",get:function(){return{title:"Audio",icon:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.31 3.532V15.91a.536.536 0 0 1-.254.464.517.517 0 0 1-.581-.037l-4.24-3.297a.259.259 0 0 1-.098-.203V6.609c0-.08.038-.155.1-.204l4.24-3.297a.517.517 0 0 1 .832.424ZM4.843 6.62h-1.81C2.464 6.62 2 7.082 2 7.654v4.137c0 .571.463 1.034 1.034 1.034h1.81a.259.259 0 0 0 .26-.258v-5.69a.259.259 0 0 0-.26-.258Zm8.196 1.348a.517.517 0 0 0-.047.73 1.552 1.552 0 0 1 0 2.05.517.517 0 1 0 .776.685c.86-.977.86-2.442 0-3.419a.517.517 0 0 0-.731-.046h.002Zm2.643-1.692a.517.517 0 1 0-.77.689 4.137 4.137 0 0 1 0 5.517.517.517 0 1 0 .77.69 5.172 5.172 0 0 0 0-6.896Z" fill="#5C6B7A" fill-rule="nonzero"/></svg>'}}},{key:"tunes",get:function(){return[{name:"stretched",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M1 160h640v320H1V160Zm120-80h400v20H121V80Zm0 460h400v20H121v-20Z"/></svg>',title:"Stretch audio",toggle:!0},{name:"withBackground",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 640"><path fill="#5C6B7A" fill-rule="nonzero" d="M181 200h280v240H181V200ZM81 120h480v20H81v-20Zm0 380h480v20H81v-20Z"/></svg>',title:"With background",toggle:!0},{name:"withBorder",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 640"><rect width="512" height="409" x="64" y="115" fill="none" fill-rule="evenodd" stroke="#5C6B7A" stroke-linecap="round" stroke-width="34" rx="40"/></svg>',title:"With border",toggle:!0}]}}]),r()(n,[{key:"render",value:function(){return this.ui.render(this.data)}},{key:"validate",value:function(n){return n.file&&n.file.url}},{key:"save",value:function(){var n=this.ui.nodes.caption;return this._data.caption=n.innerHTML,this.data}},{key:"renderSettings",value:function(){var t=this;return n.tunes.concat(this.config.actions).map((function(n){return{icon:n.icon,label:t.api.i18n.t(n.title),name:n.name,toggle:n.toggle,isActive:t.data[n.name],onActivate:function(){"function"!=typeof n.action?t.tuneToggled(n.name):n.action(n.name)}}}))}},{key:"appendCallback",value:function(){this.ui.nodes.fileButton.click()}},{key:"tuneToggled",value:function(n){this.setTune(n,!this._data[n])}},{key:"setTune",value:function(n,t){var o=this;this._data[n]=t,this.ui.applyTune(n,t),"stretched"===n&&Promise.resolve().then((function(){var n=o.api.blocks.getCurrentBlockIndex();o.api.blocks.stretchBlock(n,t)})).catch((function(n){console.error(n)}))}},{key:"data",set:function(t){var o=this;this.audio=t.file,this._data.caption=t.caption||"",this.ui.fillCaption(this._data.caption),n.tunes.forEach((function(n){var e=n.name,i=void 0!==t[e]&&(!0===t[e]||"true"===t[e]);o.setTune(e,i)}))},get:function(){return this._data}},{key:"audio",set:function(n){this._data.file=n||{},n&&n.url&&this.ui.fillAudio(n)}}]),n}()}]).default}));