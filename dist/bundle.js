/*!
 * Image tool
 * 
 * @version 1.0.0
 * 
 * @package https://github.com/editor-js/image
 * @licence MIT
 * @author CodeX <https://codex.so>
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ImageTool"] = factory();
	else
		root["ImageTool"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack://ImageTool/./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack://ImageTool/./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://ImageTool/./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://ImageTool/./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack://ImageTool/./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack://ImageTool/./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack://ImageTool/./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(n);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack://ImageTool/./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./src/index.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".audio-tool {\\n  --bg-color: #ebf0f5;\\n  --front-color: #388ae5;\\n  --border-color: #d3dce6;\\n}\\n\\n  .audio-tool__audio {\\n    border-radius: 3px;\\n    overflow: hidden;\\n    margin-bottom: 8px;\\n  }\\n\\n  .audio-tool__audio-element {\\n      width: 100%;\\n      max-width: 100%;\\n      display: block;\\n    }\\n\\n  .audio-tool__audio-preloader {\\n      width: 50px;\\n      height: 50px;\\n      border-radius: 50%;\\n      background-size: cover;\\n      margin: auto;\\n      position: relative;\\n      background-color: var(--bg-color);\\n      background-position: center center;\\n    }\\n\\n  .audio-tool__audio-preloader::after {\\n        content: \\\"\\\";\\n        position: absolute;\\n        z-index: 3;\\n        width: 60px;\\n        height: 60px;\\n        border-radius: 50%;\\n        border: 2px solid var(--bg-color);\\n        border-top-color: var(--front-color);\\n        left: 50%;\\n        top: 50%;\\n        margin-top: -30px;\\n        margin-left: -30px;\\n        animation: audio-preloader-spin 2s infinite linear;\\n        box-sizing: border-box;\\n      }\\n\\n  .audio-tool__audio-title {\\n      font-size: 14px;\\n    }\\n\\n  .audio-tool__caption {\\n    font-size: 14px;\\n    color: #2d3640;\\n    height: 40px;\\n    padding: 9px 10px;\\n    box-shadow: none;\\n    border-radius: 3px;\\n    border: 1px solid #d3dde6;\\n  }\\n\\n  .audio-tool__caption[contentEditable=\\\"true\\\"][data-placeholder]::before {\\n      position: absolute !important;\\n      content: attr(data-placeholder);\\n      color: #5c6b7a;\\n      font-weight: normal;\\n      display: none;\\n      font-size: 14px;\\n    }\\n\\n  .audio-tool__caption[contentEditable=\\\"true\\\"][data-placeholder]:empty::before {\\n        display: block;\\n      }\\n\\n  .audio-tool__caption[contentEditable=\\\"true\\\"][data-placeholder]:empty:focus::before {\\n        display: none;\\n      }\\n\\n  .audio-tool__caption:hover {\\n      border-color: #0080ff;\\n    }\\n\\n  .audio-tool--empty .audio-tool--empty__audio {\\n      display: none;\\n    }\\n\\n  .audio-tool--empty .audio-tool--empty__caption, .audio-tool--loading .audio-tool--loading__caption {\\n      display: none;\\n    }\\n\\n  .audio-tool .cdx-button {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    border: 1px dashed #d3dce6;\\n    background-color: #f5f7fa;\\n    border-radius: 6px;\\n    padding: 38px;\\n    color: #5c6b7a;\\n    font-size: 14px;\\n  }\\n\\n  .audio-tool .cdx-button svg {\\n      width: 20px;\\n      height: 20px;\\n      margin: 0 8px 0 0;\\n    }\\n\\n  .audio-tool .cdx-button svg path {\\n        stroke: none;\\n      }\\n\\n  .audio-tool .cdx-button:hover {\\n      color: #0080ff;\\n    }\\n\\n  .audio-tool .cdx-button:hover svg {\\n        fill: #0080ff;\\n      }\\n\\n  .audio-tool .cdx-button:hover svg path {\\n          fill: #0080ff;\\n        }\\n\\n  .audio-tool--filled .cdx-button {\\n      display: none;\\n    }\\n\\n  .audio-tool--filled .audio-tool--filled__audio-preloader {\\n        display: none;\\n      }\\n\\n  .audio-tool--loading .audio-tool--loading__audio {\\n      min-height: 200px;\\n      display: flex;\\n      border: 1px solid var(--border-color);\\n      background-color: #fff;\\n    }\\n\\n  .audio-tool--loading .audio-tool--loading__audio-picture {\\n        display: none;\\n      }\\n\\n  .audio-tool--loading .cdx-button {\\n      display: none;\\n    }\\n\\n  /**\\n   * Tunes\\n   * ----------------\\n   */\\n\\n  .audio-tool--withBorder .audio-tool--withBorder__audio-picture {\\n      border: 1px solid var(--border-color);\\n    }\\n\\n  .audio-tool--withBackground .audio-tool--withBackground__audio {\\n      padding: 24px;\\n      background: var(--bg-color);\\n    }\\n\\n  .audio-tool--withBackground .audio-tool--withBackground__audio-picture {\\n        max-width: 80%;\\n        margin: 0 auto;\\n      }\\n\\n  .audio-tool--stretched .audio-tool--stretched__audio {\\n      margin-left: -56px;\\n      margin-right: -56px;\\n    }\\n\\n  .audio-tool--stretched .audio-tool--stretched__audio-caption {\\n        margin-left: 56px;\\n        margin-right: 56px;\\n      }\\n\\n@keyframes audio-preloader-spin {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ImageTool/./src/index.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://ImageTool/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ImageTool/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/src??ref--5-2!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://ImageTool/./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AudioTool; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uploader */ \"./src/uploader.js\");\n\n\n\n/**\n * Audio Tool for the Editor.js\n *\n * @author CodeX <team@codex.so>\n * @license MIT\n * @see {@link https://github.com/editor-js/image}\n *\n * To developers.\n * To simplify Tool structure, we split it to 4 parts:\n *  1) index.js — main Tool's interface, public API and methods for working with data\n *  2) uploader.js — module that has methods for sending files via AJAX: from media gallery component\n *  3) ui.js — module for UI manipulations: render, showing preloader, etc\n *  4) tunes.js — working with Block Tunes: render buttons, handle clicks\n *\n * For debug purposes there is a testing server\n * that can save uploaded files and return a Response {@link UploadResponseFormat}\n *\n *       $ node dev/server.js\n *\n * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:\n *\n * audio: {\n *   class: AudioTool,\n *   config: {\n *     selectFiles: () => { }\n *   },\n * },\n */\n\n/**\n * @typedef {object} AudioToolData\n * @description Audio Tool's input and output data format\n * @property {string} caption — Audio caption\n * @property {object} file — Audio file data returned from backend\n * @property {string} file.url — Audio URL\n */\n\n\n\n/**\n * @typedef {object} AudioConfig\n * @description Config supported by Tool\n * @property {object} endpoints - upload endpoints\n * @property {string} endpoints.byFile - upload by file\n * @property {string} endpoints.byUrl - upload by URL\n * @property {string} field - field name for uploaded audio\n * @property {string} types - available mime-types\n * @property {string} captionPlaceholder - placeholder for Caption field\n * @property {object} additionalRequestData - any data to send with requests\n * @property {object} additionalRequestHeaders - allows to pass custom headers with Request\n * @property {string} buttonContent - overrides for Select File button\n * @property {object} [uploader] - optional custom uploader\n * @property {function(): Promise.<UploadResponseFormat>} selectFiles - method that selects an audio file from a custom file/ asset manager\n */\n\n/**\n * @typedef {object} UploadResponseFormat\n * @description This format expected from backend on file uploading\n * @property {number} success - 1 for successful uploading, 0 for failure\n * @property {object} file - Object with file data.\n *                           'url' is required,\n *                           also can contain any additional data that will be saved and passed back\n * @property {string} file.url - [Required] audio source URL\n */\n\nvar AudioTool = /*#__PURE__*/function () {\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AudioTool, null, [{\n    key: \"isReadOnlySupported\",\n\n    /**\n     * Notify core that read-only mode is supported\n     *\n     * @returns {boolean}\n     */\n    get: function get() {\n      return true;\n    }\n    /**\n     * Get Tool toolbox settings\n     * icon - Tool icon's SVG\n     * title - title to show in toolbox\n     *\n     * @returns {{icon: string, title: string}}\n     */\n\n  }, {\n    key: \"toolbox\",\n    get: function get() {\n      return {\n        title: 'Audio',\n        icon: \"<svg width=\\\"20\\\" height=\\\"20\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M11.31 3.532V15.91a.536.536 0 0 1-.254.464.517.517 0 0 1-.581-.037l-4.24-3.297a.259.259 0 0 1-.098-.203V6.609c0-.08.038-.155.1-.204l4.24-3.297a.517.517 0 0 1 .832.424ZM4.843 6.62h-1.81C2.464 6.62 2 7.082 2 7.654v4.137c0 .571.463 1.034 1.034 1.034h1.81a.259.259 0 0 0 .26-.258v-5.69a.259.259 0 0 0-.26-.258Zm8.196 1.348a.517.517 0 0 0-.047.73 1.552 1.552 0 0 1 0 2.05.517.517 0 1 0 .776.685c.86-.977.86-2.442 0-3.419a.517.517 0 0 0-.731-.046h.002Zm2.643-1.692a.517.517 0 1 0-.77.689 4.137 4.137 0 0 1 0 5.517.517.517 0 1 0 .77.69 5.172 5.172 0 0 0 0-6.896Z\\\" fill=\\\"#5C6B7A\\\" fill-rule=\\\"nonzero\\\"/></svg>\"\n      };\n    }\n    /**\n     * Available audio tools\n     *\n     * @returns {Array}\n     */\n\n  }, {\n    key: \"tunes\",\n    get: function get() {\n      return [{\n        name: 'stretched',\n        icon: \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 641 640\\\"><path fill=\\\"#5C6B7A\\\" fill-rule=\\\"nonzero\\\" d=\\\"M1 160h640v320H1V160Zm120-80h400v20H121V80Zm0 460h400v20H121v-20Z\\\"/></svg>\",\n        title: 'Stretch audio',\n        toggle: true\n      }, {\n        name: 'withBackground',\n        icon: \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 641 640\\\"><path fill=\\\"#5C6B7A\\\" fill-rule=\\\"nonzero\\\" d=\\\"M181 200h280v240H181V200ZM81 120h480v20H81v-20Zm0 380h480v20H81v-20Z\\\"/></svg>\",\n        title: 'With background',\n        toggle: true\n      }, {\n        name: 'withBorder',\n        icon: \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 641 640\\\"><rect width=\\\"512\\\" height=\\\"409\\\" x=\\\"64\\\" y=\\\"115\\\" fill=\\\"none\\\" fill-rule=\\\"evenodd\\\" stroke=\\\"#5C6B7A\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"34\\\" rx=\\\"40\\\"/></svg>\",\n        title: 'With border',\n        toggle: true\n      }];\n    }\n    /**\n     * @param {object} tool - tool properties got from editor.js\n     * @param {AudioToolData} tool.data - previously saved data\n     * @param {AudioConfig} tool.config - user config for Tool\n     * @param {object} tool.api - Editor.js API\n     * @param {boolean} tool.readOnly - read-only mode flag\n     */\n\n  }]);\n\n  function AudioTool(_ref) {\n    var _this = this;\n\n    var data = _ref.data,\n        config = _ref.config,\n        api = _ref.api,\n        readOnly = _ref.readOnly;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AudioTool);\n\n    this.api = api;\n    this.readOnly = readOnly;\n    /**\n     * Tool's initial config\n     */\n\n    this.config = {\n      endpoints: config.endpoints || '',\n      additionalRequestData: config.additionalRequestData || {},\n      additionalRequestHeaders: config.additionalRequestHeaders || {},\n      field: config.field || 'audio',\n      types: config.types || 'audio/*',\n      captionPlaceholder: this.api.i18n.t(config.captionPlaceholder || 'Caption'),\n      buttonContent: config.buttonContent || '',\n      uploader: config.uploader || undefined,\n      actions: config.actions || [],\n      selectFiles: config.selectFiles || undefined\n    };\n    /**\n     * Module for file uploading\n     */\n\n    this.uploader = new _uploader__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      config: this.config\n    });\n    /**\n     * Module for working with UI\n     */\n\n    this.ui = new _ui__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      api: api,\n      config: this.config,\n      onSelectFile: function onSelectFile() {\n        _this.uploader.uploadSelectedFile({\n          onPreview: function onPreview(src) {\n            _this.ui.showPreloader(src);\n          }\n        });\n      },\n      readOnly: readOnly\n    });\n    /**\n     * Set saved state\n     */\n\n    this._data = {};\n    this.data = data;\n  }\n  /**\n   * Renders Block content\n   *\n   * @public\n   *\n   * @returns {HTMLDivElement}\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AudioTool, [{\n    key: \"render\",\n    value: function render() {\n      return this.ui.render(this.data);\n    }\n    /**\n     * Validate data: check if sound file exists\n     *\n     * @param {AudioToolData} savedData — data received after saving\n     * @returns {boolean} false if saved data is not correct, otherwise true\n     * @public\n     */\n\n  }, {\n    key: \"validate\",\n    value: function validate(savedData) {\n      return savedData.file && savedData.file.url;\n    }\n    /**\n     * Return Block data\n     *\n     * @public\n     *\n     * @returns {AudioToolData}\n     */\n\n  }, {\n    key: \"save\",\n    value: function save() {\n      var caption = this.ui.nodes.caption;\n      this._data.caption = caption.innerHTML;\n      return this.data;\n    }\n    /**\n     * Returns configuration for block tunes: add background, stretch audio player\n     *\n     * @public\n     *\n     * @returns {Array}\n     */\n\n  }, {\n    key: \"renderSettings\",\n    value: function renderSettings() {\n      var _this2 = this;\n\n      // Merge default tunes with the ones that might be added by user\n      // @see https://github.com/editor-js/image/pull/49\n      var tunes = AudioTool.tunes.concat(this.config.actions);\n      return tunes.map(function (tune) {\n        return {\n          icon: tune.icon,\n          label: _this2.api.i18n.t(tune.title),\n          name: tune.name,\n          toggle: tune.toggle,\n          isActive: _this2.data[tune.name],\n          onActivate: function onActivate() {\n            /* If it'a user defined tune, execute it's callback stored in action property */\n            if (typeof tune.action === 'function') {\n              tune.action(tune.name);\n              return;\n            }\n\n            _this2.tuneToggled(tune.name);\n          }\n        };\n      });\n    }\n    /**\n     * Fires after clicks on the Toolbox Audio Icon\n     * Initiates click on the Select File button\n     *\n     * @public\n     */\n\n  }, {\n    key: \"appendCallback\",\n    value: function appendCallback() {\n      this.ui.nodes.fileButton.click();\n    }\n    /**\n     * Private methods\n     * ̿̿ ̿̿ ̿̿ ̿'̿'\\̵͇̿̿\\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿\n     */\n\n    /**\n     * Stores all Tool's data\n     *\n     * @private\n     *\n     * @param {AudioToolData} data - data in Audio Tool format\n     */\n\n  }, {\n    key: \"tuneToggled\",\n\n    /**\n     * Callback fired when Block Tune is activated\n     *\n     * @private\n     *\n     * @param {string} tuneName - tune that has been clicked\n     * @returns {void}\n     */\n    value: function tuneToggled(tuneName) {\n      // inverse tune state\n      this.setTune(tuneName, !this._data[tuneName]);\n    }\n    /**\n     * Set one tune\n     *\n     * @param {string} tuneName - {@link Tunes.tunes}\n     * @param {boolean} value - tune state\n     * @returns {void}\n     */\n\n  }, {\n    key: \"setTune\",\n    value: function setTune(tuneName, value) {\n      var _this3 = this;\n\n      this._data[tuneName] = value;\n      this.ui.applyTune(tuneName, value);\n\n      if (tuneName === 'stretched') {\n        /**\n         * Wait until the API is ready\n         */\n        Promise.resolve().then(function () {\n          var blockId = _this3.api.blocks.getCurrentBlockIndex();\n\n          _this3.api.blocks.stretchBlock(blockId, value);\n        })[\"catch\"](function (err) {\n          console.error(err);\n        });\n      }\n    }\n  }, {\n    key: \"data\",\n    set: function set(data) {\n      var _this4 = this;\n\n      this.audio = data.file;\n      this._data.caption = data.caption || '';\n      this.ui.fillCaption(this._data.caption);\n      AudioTool.tunes.forEach(function (_ref2) {\n        var tune = _ref2.name;\n        var value = typeof data[tune] !== 'undefined' ? data[tune] === true || data[tune] === 'true' : false;\n\n        _this4.setTune(tune, value);\n      });\n    }\n    /**\n     * Return Tool data\n     *\n     * @private\n     *\n     * @returns {AudioToolData}\n     */\n    ,\n    get: function get() {\n      return this._data;\n    }\n    /**\n     * Set new audio file\n     *\n     * @private\n     *\n     * @param {object} file - uploaded file data\n     */\n\n  }, {\n    key: \"audio\",\n    set: function set(file) {\n      this._data.file = file || {};\n\n      if (file && file.url) {\n        this.ui.fillAudio(file);\n      }\n    }\n  }]);\n\n  return AudioTool;\n}();\n\n\n\n//# sourceURL=webpack://ImageTool/./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ui; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/dom */ \"./src/utils/dom.js\");\n\n\n\n/**\n * Class for working with UI:\n *  - rendering base structure\n *  - show/hide preview\n *  - apply tune view\n */\n\nvar Ui = /*#__PURE__*/function () {\n  /**\n   * @param {object} ui - audio tool Ui module\n   * @param {object} ui.api - Editor.js API\n   * @param {AudioConfig} ui.config - user config\n   * @param {Function} ui.onSelectFile - callback for clicks on Select file button\n   * @param {boolean} ui.readOnly - read-only mode flag\n   */\n  function Ui(_ref) {\n    var api = _ref.api,\n        config = _ref.config,\n        onSelectFile = _ref.onSelectFile,\n        readOnly = _ref.readOnly;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Ui);\n\n    this.api = api;\n    this.config = config;\n    this.onSelectFile = onSelectFile;\n    this.readOnly = readOnly;\n    this.nodes = {\n      wrapper: Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('div', [this.CSS.baseClass, this.CSS.wrapper]),\n      audioContainer: Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('div', [this.CSS.audioContainer]),\n      fileButton: this.createFileButton(),\n      audioTitle: Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('span', this.CSS.audioTitle),\n      audioElement: undefined,\n      audioPreloader: Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('div', this.CSS.audioPreloader),\n      caption: Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('div', [this.CSS.input, this.CSS.caption], {\n        contentEditable: !this.readOnly\n      })\n    };\n    /**\n     * Create base structure\n     *  <wrapper>\n     *    <audio-container>\n     *      <audio-preloader />\n     *    </audio-container>\n     *    <caption />\n     *    <select-file-button />\n     *  </wrapper>\n     */\n\n    this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;\n    this.nodes.audioContainer.appendChild(this.nodes.audioPreloader);\n    this.nodes.wrapper.appendChild(this.nodes.audioContainer);\n    this.nodes.wrapper.appendChild(this.nodes.caption);\n    this.nodes.wrapper.appendChild(this.nodes.fileButton);\n  }\n  /**\n   * CSS classes\n   *\n   * @returns {object}\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Ui, [{\n    key: \"render\",\n\n    /**\n     * Renders tool UI\n     *\n     * @param {AudioeToolData} toolData - saved tool data\n     * @returns {Element}\n     */\n    value: function render(toolData) {\n      if (!toolData.file || Object.keys(toolData.file).length === 0) {\n        this.toggleStatus(Ui.status.EMPTY);\n      } else {\n        this.toggleStatus(Ui.status.UPLOADING);\n      }\n\n      return this.nodes.wrapper;\n    }\n    /**\n     * Creates upload-file button\n     *\n     * @returns {Element}\n     */\n\n  }, {\n    key: \"createFileButton\",\n    value: function createFileButton() {\n      var _this = this;\n\n      var button = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('div', [this.CSS.button]);\n      button.innerHTML = this.config.buttonContent || \"<svg width=\\\"20\\\" height=\\\"20\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M12.412 1.71V18.21a.715.715 0 0 1-.337.62.69.69 0 0 1-.776-.049l-5.651-4.396a.345.345 0 0 1-.131-.272V5.812c0-.106.05-.206.133-.271l5.652-4.397a.69.69 0 0 1 .862.014c.16.138.252.34.248.552Zm-8.62 4.116H1.38A1.38 1.38 0 0 0 0 7.205v5.517c0 .761.617 1.379 1.38 1.379h2.413c.19 0 .344-.155.344-.345V6.17a.345.345 0 0 0-.344-.345ZM14.72 7.622a.69.69 0 0 0-.062.974 2.069 2.069 0 0 1 0 2.734.69.69 0 1 0 1.034.912 3.448 3.448 0 0 0 0-4.558.69.69 0 0 0-.975-.062h.003Zm3.524-2.256a.69.69 0 1 0-1.027.92 5.517 5.517 0 0 1 0 7.355.69.69 0 1 0 1.027.92 6.896 6.896 0 0 0 0-9.195Z\\\" fill=\\\"#5C6B7A\\\" fill-rule=\\\"nonzero\\\"/></svg> \".concat(this.api.i18n.t('Click to select an audio file...'));\n      button.addEventListener('click', function () {\n        _this.onSelectFile();\n      });\n      return button;\n    }\n    /**\n     * Shows uploading preloader\n     *\n     * @param {string} src - preview source\n     * @returns {void}\n     */\n\n  }, {\n    key: \"showPreloader\",\n    value: function showPreloader(src) {\n      this.nodes.audioPreloader.style.backgroundImage = \"url(\".concat(src, \")\");\n      this.toggleStatus(Ui.status.UPLOADING);\n    }\n    /**\n     * Hide uploading preloader\n     *\n     * @returns {void}\n     */\n\n  }, {\n    key: \"hidePreloader\",\n    value: function hidePreloader() {\n      this.nodes.audioPreloader.style.backgroundImage = '';\n      this.toggleStatus(Ui.status.EMPTY);\n    }\n    /**\n     * Shows audio\n     *\n     * @param {Object} file - audio source\n     * @returns {void}\n     */\n\n  }, {\n    key: \"fillAudio\",\n    value: function fillAudio(file) {\n      var _this2 = this;\n\n      var attributes = {\n        controls: true,\n        src: file.url,\n        autoplay: false,\n        loop: false,\n        muted: false\n      };\n      var eventName = 'loadeddata';\n      /**\n       * Compose tag with defined attributes\n       *\n       * @type {Element}\n       */\n\n      this.nodes.audioElement = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__[\"make\"])('AUDIO', this.CSS.audioElement, attributes);\n      this.nodes.audioTitle.innerHTML = file.title;\n      /**\n       * Add load event listener\n       */\n\n      this.nodes.audioElement.addEventListener(eventName, function () {\n        _this2.toggleStatus(Ui.status.FILLED);\n        /**\n         * Preloader does not exists on first rendering with presaved data\n         */\n\n\n        if (_this2.nodes.audioPreloader) {\n          _this2.nodes.audioPreloader.style.backgroundImage = '';\n        }\n      });\n      this.nodes.audioContainer.appendChild(this.nodes.audioElement);\n      this.nodes.audioContainer.appendChild(this.nodes.audioTitle);\n    }\n    /**\n     * Shows caption input\n     *\n     * @param {string} text - caption text\n     * @returns {void}\n     */\n\n  }, {\n    key: \"fillCaption\",\n    value: function fillCaption(text) {\n      if (this.nodes.caption) {\n        this.nodes.caption.innerHTML = text;\n      }\n    }\n    /**\n     * Changes UI status\n     *\n     * @param {string} status - see {@link Ui.status} constants\n     * @returns {void}\n     */\n\n  }, {\n    key: \"toggleStatus\",\n    value: function toggleStatus(status) {\n      for (var statusType in Ui.status) {\n        if (Object.prototype.hasOwnProperty.call(Ui.status, statusType)) {\n          this.nodes.wrapper.classList.toggle(\"\".concat(this.CSS.wrapper, \"--\").concat(Ui.status[statusType]), status === Ui.status[statusType]);\n        }\n      }\n    }\n    /**\n     * Apply visual representation of activated tune\n     *\n     * @param {string} tuneName - one of available tunes {@link Tunes.tunes}\n     * @param {boolean} status - true for enable, false for disable\n     * @returns {void}\n     */\n\n  }, {\n    key: \"applyTune\",\n    value: function applyTune(tuneName, status) {\n      this.nodes.wrapper.classList.toggle(\"\".concat(this.CSS.wrapper, \"--\").concat(tuneName), status);\n    }\n  }, {\n    key: \"CSS\",\n    get: function get() {\n      return {\n        baseClass: this.api.styles.block,\n        loading: this.api.styles.loader,\n        input: this.api.styles.input,\n        button: this.api.styles.button,\n\n        /**\n         * Tool's classes\n         */\n        wrapper: 'audio-tool',\n        audioContainer: 'audio-tool__audio',\n        audioPreloader: 'audio-tool__audio-preloader',\n        audioTitle: 'audio-tool__audio-title',\n        audioElement: 'audio-tool__audio-element',\n        caption: 'audio-tool__caption'\n      };\n    }\n  }], [{\n    key: \"status\",\n\n    /**\n     * Ui statuses:\n     * - empty\n     * - uploading\n     * - filled\n     *\n     * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}\n     */\n    get: function get() {\n      return {\n        EMPTY: 'empty',\n        UPLOADING: 'loading',\n        FILLED: 'filled'\n      };\n    }\n  }]);\n\n  return Ui;\n}();\n\n\n\n//# sourceURL=webpack://ImageTool/./src/ui.js?");

/***/ }),

/***/ "./src/uploader.js":
/*!*************************!*\
  !*** ./src/uploader.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Uploader; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// import isPromise from './utils/isPromise';\n\n/**\n * Module for file uploading from audio gallery component.\n */\nvar Uploader = /*#__PURE__*/function () {\n  /**\n   * @param {object} params - uploader module params\n   * @param {AudioConfig} params.config - image tool config\n   */\n  function Uploader(_ref) {\n    var config = _ref.config,\n        onUpload = _ref.onUpload,\n        onError = _ref.onError;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Uploader);\n\n    this.config = config;\n  }\n  /**\n   * Handle clicks on the upload file button\n   * Fires ajax.transport()\n   *\n   * @param {Function} onPreview - callback fired when preview is ready\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Uploader, [{\n    key: \"uploadSelectedFile\",\n    value: function uploadSelectedFile(_ref2) {\n      var onPreview = _ref2.onPreview;\n\n      if (this.config.selectFiles != undefined && typeof this.config.selectFiles === 'function') {\n        upload = this.config.selectFiles().then(function () {\n          onPreview('');\n          return {\n            success: 1,\n            file: ''\n          };\n        });\n      }\n    }\n  }]);\n\n  return Uploader;\n}();\n\n\n\n//# sourceURL=webpack://ImageTool/./src/uploader.js?");

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! exports provided: make */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"make\", function() { return make; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\n * Helper for making Elements with attributes\n *\n * @param  {string} tagName           - new Element tag name\n * @param  {Array|string} classNames  - list or name of CSS class\n * @param  {object} attributes        - any attributes\n * @returns {Element}\n */\nfunction make(tagName) {\n  var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var el = document.createElement(tagName);\n\n  if (Array.isArray(classNames)) {\n    var _el$classList;\n\n    (_el$classList = el.classList).add.apply(_el$classList, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(classNames));\n  } else if (classNames) {\n    el.classList.add(classNames);\n  }\n\n  for (var attrName in attributes) {\n    el[attrName] = attributes[attrName];\n  }\n\n  return el;\n}\n;\n\n//# sourceURL=webpack://ImageTool/./src/utils/dom.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://ImageTool/multi_./src/index.js?");

/***/ })

/******/ })["default"];
});