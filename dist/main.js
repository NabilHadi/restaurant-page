/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nimg,\niframe {\n  max-width: 100%;\n}\n\nul {\n  list-style: none;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n#content main {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n}\n\nmain #page-content {\n  width: 40%;\n  padding: 2rem;\n  background-color: #e6c497;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 10;\n  position: relative;\n}\n\n#page-content::after {\n  content: \" \";\n  z-index: -1;\n  position: absolute;\n  height: 100%;\n  width: 70px;\n  background-color: #634523;\n  border-radius: 50%;\n  left: -50px;\n  transition: all 0.2s ease-in;\n}\n\n#page-content:hover::after {\n  background-color: #1a1819;\n  width: 65px;\n}\n\nmain #main-img {\n  display: block;\n  width: 60%;\n  object-fit: cover;\n}\n\n.header-nav {\n  position: absolute;\n  right: 0;\n  color: #fff;\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  width: 60%;\n  background-color: #1a1819c1;\n}\n\n.header-nav button {\n  color: inherit;\n  background-color: transparent;\n  letter-spacing: 1px;\n  font-weight: 600;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  border: none;\n  cursor: pointer;\n}\n\n.header-nav button:hover {\n  color: #634523;\n  background-color: rgba(0, 0, 0, 0.089);\n  border-radius: 5px;\n}\n\n.restaurant-title {\n  font-size: 230%;\n  color: #1a1819;\n  margin-bottom: 0.4rem;\n}\n\n.restaurant-desc {\n  font-size: 0.875rem;\n  color: #634523;\n  width: max(70%, 200px);\n  margin-bottom: 1.5rem;\n}\n\n.check-menu-btn {\n  background-color: #fabd2d;\n  border: none;\n  width: max(30%, 200px);\n  padding: 1rem;\n  font-weight: 700;\n  color: #634523;\n  cursor: pointer;\n}\n\n.check-menu-btn:hover {\n  background-color: white;\n}\n\n.menu-title {\n  text-align: center;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n\n.menu-title:hover {\n  color: #634523;\n}\n\nul.menu-item-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nul.menu-item-list .menu-item {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 1rem;\n  padding: 0.5rem;\n  transition: all 0.2s ease-in-out;\n  max-width: 400px;\n}\n\nul.menu-item-list .menu-item:hover {\n  background-color: #1a181911;\n  border-radius: 10px;\n  transform: scale(1.1);\n}\n\nul.menu-item-list .menu-item .menu-item-name {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 0.5rem;\n  align-items: center;\n  justify-content: space-between;\n\n  border-bottom: 3px dotted rgba(0, 0, 0, 0.355);\n  font-size: 1rem;\n  margin-bottom: 8px;\n}\n\nul.menu-item-list .menu-item .menu-item-price {\n  font-size: 0.8rem;\n  color: #634523;\n}\n\nul.menu-item-list .menu-item .menu-item-price::before {\n  content: \"$\";\n}\n\nul.menu-item-list .menu-item .menu-item-desc {\n  font-size: 0.8rem;\n}\n\n.contact-number {\n  margin-top: 1rem;\n}\n\n.contact-email {\n  margin-bottom: 1rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;EACZ;wEACsE;AACxE;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,4BAA4B;AAC9B;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,cAAc;EACd,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,6EAA6E;AAC/E;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,gCAAgC;EAChC,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,8BAA8B;;EAE9B,8CAA8C;EAC9C,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\nimg,\niframe {\n  max-width: 100%;\n}\n\nul {\n  list-style: none;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n#content main {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n}\n\nmain #page-content {\n  width: 40%;\n  padding: 2rem;\n  background-color: #e6c497;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 10;\n  position: relative;\n}\n\n#page-content::after {\n  content: \" \";\n  z-index: -1;\n  position: absolute;\n  height: 100%;\n  width: 70px;\n  background-color: #634523;\n  border-radius: 50%;\n  left: -50px;\n  transition: all 0.2s ease-in;\n}\n\n#page-content:hover::after {\n  background-color: #1a1819;\n  width: 65px;\n}\n\nmain #main-img {\n  display: block;\n  width: 60%;\n  object-fit: cover;\n}\n\n.header-nav {\n  position: absolute;\n  right: 0;\n  color: #fff;\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  width: 60%;\n  background-color: #1a1819c1;\n}\n\n.header-nav button {\n  color: inherit;\n  background-color: transparent;\n  letter-spacing: 1px;\n  font-weight: 600;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  border: none;\n  cursor: pointer;\n}\n\n.header-nav button:hover {\n  color: #634523;\n  background-color: rgba(0, 0, 0, 0.089);\n  border-radius: 5px;\n}\n\n.restaurant-title {\n  font-size: 230%;\n  color: #1a1819;\n  margin-bottom: 0.4rem;\n}\n\n.restaurant-desc {\n  font-size: 0.875rem;\n  color: #634523;\n  width: max(70%, 200px);\n  margin-bottom: 1.5rem;\n}\n\n.check-menu-btn {\n  background-color: #fabd2d;\n  border: none;\n  width: max(30%, 200px);\n  padding: 1rem;\n  font-weight: 700;\n  color: #634523;\n  cursor: pointer;\n}\n\n.check-menu-btn:hover {\n  background-color: white;\n}\n\n.menu-title {\n  text-align: center;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\n\n.menu-title:hover {\n  color: #634523;\n}\n\nul.menu-item-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nul.menu-item-list .menu-item {\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 1rem;\n  padding: 0.5rem;\n  transition: all 0.2s ease-in-out;\n  max-width: 400px;\n}\n\nul.menu-item-list .menu-item:hover {\n  background-color: #1a181911;\n  border-radius: 10px;\n  transform: scale(1.1);\n}\n\nul.menu-item-list .menu-item .menu-item-name {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 0.5rem;\n  align-items: center;\n  justify-content: space-between;\n\n  border-bottom: 3px dotted rgba(0, 0, 0, 0.355);\n  font-size: 1rem;\n  margin-bottom: 8px;\n}\n\nul.menu-item-list .menu-item .menu-item-price {\n  font-size: 0.8rem;\n  color: #634523;\n}\n\nul.menu-item-list .menu-item .menu-item-price::before {\n  content: \"$\";\n}\n\nul.menu-item-list .menu-item .menu-item-desc {\n  font-size: 0.8rem;\n}\n\n.contact-number {\n  margin-top: 1rem;\n}\n\n.contact-email {\n  margin-bottom: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayContactPage": () => (/* binding */ displayContactPage)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


function displayContactPage(pageContent) {
  pageContent.appendChild(
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      tag: "h1",
      classNames: ["contact-header"],
      textContent: "Contact Us If you liked the food!",
    })
  );

  pageContent.appendChild(
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      classNames: ["contact-number"],
      textContent: "Our Number: 555 555 555",
    })
  );

  pageContent.appendChild(
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      classNames: ["contact-email"],
      textContent: "Email: restaurant@greatest-restaurant.com",
    })
  );

  //

  const contactLocation = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tag: "div",
    classNames: ["contact-location"],
  });

  contactLocation.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d829.2246511955803!2d150.69014483175067!3d-33.76328593058059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b128f539428dcf9%3A0x72e1e792958148e8!2sRon%20Stonestreet%20Pavilion!5e0!3m2!1sen!2seg!4v1675162165100!5m2!1sen!2seg" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  pageContent.appendChild(contactLocation);
}




/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTabBtnListener": () => (/* binding */ addTabBtnListener),
/* harmony export */   "loadContent": () => (/* binding */ loadContent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _images_pablo_merchan_montes_Orz90t6o0e4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg */ "./src/images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg");



const content = document.querySelector("#content");
const headerNav = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "nav",
  classNames: ["header-nav"],
});
const homeBtn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "button",
  classNames: ["tab-btn"],
  textContent: "Home",
  attributes: {
    id: "home-btn",
  },
  dataset: {
    page: "home",
  },
});
const menuBtn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "button",
  classNames: ["tab-btn"],
  textContent: "Menu",
  attributes: {
    id: "menu-btn",
  },
  dataset: {
    page: "menu",
  },
});
const contactBtn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "button",
  classNames: ["tab-btn"],
  textContent: "Contact",
  attributes: {
    id: "contact-btn",
  },
  dataset: {
    page: "contact",
  },
});
const mainContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "main",
  classNames: ["main-container"],
});
const pageContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "section",
  attributes: {
    id: "page-content",
  },
});
const mainImage = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "img",
  attributes: {
    id: "main-img",
    src: _images_pablo_merchan_montes_Orz90t6o0e4_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__,
  },
});

const tabBtnsListeners = [];

function handleTabBtnClick(event) {
  tabBtnsListeners.forEach((lis) => {
    lis(event);
  });
}

function loadContent() {
  headerNav.append(homeBtn, menuBtn, contactBtn);
  mainContainer.append(headerNav);
  mainContainer.append(pageContent);
  mainContainer.append(mainImage);
  content.append(mainContainer);

  homeBtn.addEventListener("click", handleTabBtnClick);
  menuBtn.addEventListener("click", handleTabBtnClick);
  contactBtn.addEventListener("click", handleTabBtnClick);

  return pageContent;
}

function addTabBtnListener(func) {
  tabBtnsListeners.push(func);
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayHomePage": () => (/* binding */ displayHomePage)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


function displayHomePage(pageContent, menuBtnClickListener) {
  const titleDiv = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tag: "h1",
    textContent: "Cafe Lattétude",
    classNames: ["restaurant-title"],
  });
  const descriptionDiv = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tag: "p",
    textContent:
      "If you have been looking to experience a cafe with a sincere commitment to quality – you have found it in Cafe Lattétude.",
    classNames: ["restaurant-desc"],
  });

  const menuBtn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tag: "button",
    textContent: "Check Menu",
    classNames: ["check-menu-btn"],
    eventHandlers: {
      click: menuBtnClickListener,
    },
  });

  pageContent.append(titleDiv, descriptionDiv, menuBtn);
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayMenuPage": () => (/* binding */ displayMenuPage)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _images_late_coffee_removebg_preview_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/late_coffee-removebg-preview.png */ "./src/images/late_coffee-removebg-preview.png");
/* harmony import */ var _images_black_coffee_benefits_removebg_preview_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/black-coffee-benefits-removebg-preview.png */ "./src/images/black-coffee-benefits-removebg-preview.png");
/* harmony import */ var _images_turkish_coffee_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/turkish_coffee.png */ "./src/images/turkish_coffee.png");
/* harmony import */ var _images_espresso_removebg_preview_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/espresso-removebg-preview.png */ "./src/images/espresso-removebg-preview.png");






function createMenuItem(itemName, price, imgSrc, desc) {
  // Menu Item
  const menuItem = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tag: "li",
    classNames: ["menu-item"],
  });

  // Item Image
  menuItem.appendChild(
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      tag: "img",
      classNames: ["menu-item-img"],
      attributes: {
        src: imgSrc,
      },
    })
  );

  // Item text content container
  const menuItemContent = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tag: "div",
    classNames: ["menu-item-content"],
  });
  // Item name header
  const menuItemHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tag: "h5",
    classNames: ["menu-item-name"],
    textContent: itemName,
  });
  // Item price
  menuItemHeader.appendChild(
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      tag: "span",
      classNames: ["menu-item-price"],
      textContent: price,
    })
  );
  menuItemContent.appendChild(menuItemHeader);

  // Item desc
  menuItemContent.appendChild(
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      tag: "p",
      textContent: desc,
      classNames: ["menu-item-desc"],
    })
  );

  menuItem.appendChild(menuItemContent);
  return menuItem;
}

function displayMenuPage(pageContent) {
  const titleDiv = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tag: "h1",
    textContent: "Menu",
    classNames: ["menu-title"],
  });

  const menuItemList = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)({
    tag: "ul",
    classNames: ["menu-item-list"],
  });

  menuItemList.append(createMenuItem("Late Coffee", "5.99", _images_late_coffee_removebg_preview_png__WEBPACK_IMPORTED_MODULE_1__));
  menuItemList.append(createMenuItem("Black Coffee", "2.50", _images_black_coffee_benefits_removebg_preview_png__WEBPACK_IMPORTED_MODULE_2__));
  menuItemList.append(createMenuItem("Turkish Coffee", "3.00", _images_turkish_coffee_png__WEBPACK_IMPORTED_MODULE_3__));
  menuItemList.append(
    createMenuItem("Espresso Coffee", "4.20", _images_espresso_removebg_preview_png__WEBPACK_IMPORTED_MODULE_4__)
  );

  pageContent.append(titleDiv, menuItemList);
}




/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
function createElement({
  tag = "div",
  classNames = [],
  textContent,
  dataset = {},
  attributes = {},
  eventHandlers = {},
} = {}) {
  // Create elm with tag
  const elm = document.createElement(tag);

  // Add classes
  classNames.forEach((className) => {
    elm.classList.add(className);
  });

  // Set textContent
  if (textContent) {
    elm.textContent = textContent;
  }

  // Set dataset
  for (const key in dataset) {
    elm.dataset[key] = dataset[key];
  }

  // Set Attribuites
  for (const key in attributes) {
    elm.setAttribute(key, attributes[key]);
  }

  // Set Handlers
  for (const key in eventHandlers) {
    elm.addEventListener(key, eventHandlers[key]);
  }

  return elm;
}




/***/ }),

/***/ "./src/images/black-coffee-benefits-removebg-preview.png":
/*!***************************************************************!*\
  !*** ./src/images/black-coffee-benefits-removebg-preview.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d301a2fcfcd1409e3378.png";

/***/ }),

/***/ "./src/images/espresso-removebg-preview.png":
/*!**************************************************!*\
  !*** ./src/images/espresso-removebg-preview.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40a70b5d6746d755b532.png";

/***/ }),

/***/ "./src/images/late_coffee-removebg-preview.png":
/*!*****************************************************!*\
  !*** ./src/images/late_coffee-removebg-preview.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c66244ce6ce53256946.png";

/***/ }),

/***/ "./src/images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg":
/*!******************************************************************!*\
  !*** ./src/images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33c58b4a0395a58e0241.jpg";

/***/ }),

/***/ "./src/images/turkish_coffee.png":
/*!***************************************!*\
  !*** ./src/images/turkish_coffee.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e5f6845a4c23c8cd1c5.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






function checkMenuBtnHandler(event) {
  console.log(event);
  handleTabBtnClick({ target: { dataset: { page: "menu" } } });
}

const pageContetContainer = (0,_displayController__WEBPACK_IMPORTED_MODULE_1__.loadContent)();
(0,_home__WEBPACK_IMPORTED_MODULE_2__.displayHomePage)(pageContetContainer, checkMenuBtnHandler);

let currentPage = "home";

function handleTabBtnClick(event) {
  const pageName = event.target.dataset.page;
  if (!pageName) return;
  if (currentPage === pageName) return;

  pageContetContainer.innerHTML = "";
  if (pageName === "home") {
    (0,_home__WEBPACK_IMPORTED_MODULE_2__.displayHomePage)(pageContetContainer, checkMenuBtnHandler);
  } else if (pageName === "menu") {
    (0,_menu__WEBPACK_IMPORTED_MODULE_3__.displayMenuPage)(pageContetContainer);
  } else {
    (0,_contact__WEBPACK_IMPORTED_MODULE_4__.displayContactPage)(pageContetContainer);
  }
  currentPage = pageName;
}

(0,_displayController__WEBPACK_IMPORTED_MODULE_1__.addTabBtnListener)(handleTabBtnClick);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7O0FBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2Q3pCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dEO0FBQzVCO0FBQ0E7QUFDTTs7QUFFL0M7QUFDQTtBQUNBLHNCQUFzQixVQUFVLFdBQVcsa0JBQWtCO0FBQzdEOztBQUVBLDRCQUE0QiwrREFBVztBQUN2QyxzREFBZTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxzREFBZTtBQUNuQixJQUFJO0FBQ0osSUFBSSxzREFBZTtBQUNuQixJQUFJO0FBQ0osSUFBSSw0REFBa0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBLHFFQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5pbWcsXFxuaWZyYW1lIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29udGVudCBtYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxubWFpbiAjcGFnZS1jb250ZW50IHtcXG4gIHdpZHRoOiA0MCU7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2YzQ5NztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3BhZ2UtY29udGVudDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgei1pbmRleDogLTE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzQ1MjM7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBsZWZ0OiAtNTBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxufVxcblxcbiNwYWdlLWNvbnRlbnQ6aG92ZXI6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTE4MTk7XFxuICB3aWR0aDogNjVweDtcXG59XFxuXFxubWFpbiAjbWFpbi1pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNjAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5oZWFkZXItbmF2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiA2MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExODE5YzE7XFxufVxcblxcbi5oZWFkZXItbmF2IGJ1dHRvbiB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlci1uYXYgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjNjM0NTIzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA4OSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5yZXN0YXVyYW50LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjMwJTtcXG4gIGNvbG9yOiAjMWExODE5O1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4ucmVzdGF1cmFudC1kZXNjIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBjb2xvcjogIzYzNDUyMztcXG4gIHdpZHRoOiBtYXgoNzAlLCAyMDBweCk7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5jaGVjay1tZW51LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFiZDJkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IG1heCgzMCUsIDIwMHB4KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICM2MzQ1MjM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVjay1tZW51LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LWZhbWlseTogXFxcIkdpbGwgU2Fuc1xcXCIsIFxcXCJHaWxsIFNhbnMgTVRcXFwiLCBDYWxpYnJpLCBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1lbnUtdGl0bGU6aG92ZXIge1xcbiAgY29sb3I6ICM2MzQ1MjM7XFxufVxcblxcbnVsLm1lbnUtaXRlbS1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG51bC5tZW51LWl0ZW0tbGlzdCAubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgY29sdW1uLWdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG59XFxuXFxudWwubWVudS1pdGVtLWxpc3QgLm1lbnUtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExODE5MTE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG51bC5tZW51LWl0ZW0tbGlzdCAubWVudS1pdGVtIC5tZW51LWl0ZW0tbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgY29sdW1uLWdhcDogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIGJvcmRlci1ib3R0b206IDNweCBkb3R0ZWQgcmdiYSgwLCAwLCAwLCAwLjM1NSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbnVsLm1lbnUtaXRlbS1saXN0IC5tZW51LWl0ZW0gLm1lbnUtaXRlbS1wcmljZSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiAjNjM0NTIzO1xcbn1cXG5cXG51bC5tZW51LWl0ZW0tbGlzdCAubWVudS1pdGVtIC5tZW51LWl0ZW0tcHJpY2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiJFxcXCI7XFxufVxcblxcbnVsLm1lbnUtaXRlbS1saXN0IC5tZW51LWl0ZW0gLm1lbnUtaXRlbS1kZXNjIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uY29udGFjdC1udW1iZXIge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtZW1haWwge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLFlBQVk7RUFDWjt3RUFDc0U7QUFDeEU7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0NBQXNDO0VBQ3RDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDZFQUE2RTtBQUMvRTs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw4QkFBOEI7O0VBRTlCLDhDQUE4QztFQUM5QyxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaW1nLFxcbmlmcmFtZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQgbWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbm1haW4gI3BhZ2UtY29udGVudCB7XFxuICB3aWR0aDogNDAlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmM0OTc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogMTA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNwYWdlLWNvbnRlbnQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHotaW5kZXg6IC0xO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM0NTIzO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbGVmdDogLTUwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcbn1cXG5cXG4jcGFnZS1jb250ZW50OmhvdmVyOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExODE5O1xcbiAgd2lkdGg6IDY1cHg7XFxufVxcblxcbm1haW4gI21haW4taW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDYwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uaGVhZGVyLW5hdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogNjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMTgxOWMxO1xcbn1cXG5cXG4uaGVhZGVyLW5hdiBidXR0b24ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItbmF2IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzYzNDUyMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wODkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucmVzdGF1cmFudC10aXRsZSB7XFxuICBmb250LXNpemU6IDIzMCU7XFxuICBjb2xvcjogIzFhMTgxOTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtZGVzYyB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgY29sb3I6ICM2MzQ1MjM7XFxuICB3aWR0aDogbWF4KDcwJSwgMjAwcHgpO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4uY2hlY2stbWVudS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYmQyZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiBtYXgoMzAlLCAyMDBweCk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjNjM0NTIzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2stbWVudS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51LXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tZW51LXRpdGxlOmhvdmVyIHtcXG4gIGNvbG9yOiAjNjM0NTIzO1xcbn1cXG5cXG51bC5tZW51LWl0ZW0tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudWwubWVudS1pdGVtLWxpc3QgLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbnVsLm1lbnUtaXRlbS1saXN0IC5tZW51LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMTgxOTExO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxudWwubWVudS1pdGVtLWxpc3QgLm1lbnUtaXRlbSAubWVudS1pdGVtLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBib3JkZXItYm90dG9tOiAzcHggZG90dGVkIHJnYmEoMCwgMCwgMCwgMC4zNTUpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG51bC5tZW51LWl0ZW0tbGlzdCAubWVudS1pdGVtIC5tZW51LWl0ZW0tcHJpY2Uge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogIzYzNDUyMztcXG59XFxuXFxudWwubWVudS1pdGVtLWxpc3QgLm1lbnUtaXRlbSAubWVudS1pdGVtLXByaWNlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiRcXFwiO1xcbn1cXG5cXG51bC5tZW51LWl0ZW0tbGlzdCAubWVudS1pdGVtIC5tZW51LWl0ZW0tZGVzYyB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmNvbnRhY3QtbnVtYmVyIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5jb250YWN0LWVtYWlsIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5mdW5jdGlvbiBkaXNwbGF5Q29udGFjdFBhZ2UocGFnZUNvbnRlbnQpIHtcbiAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICB0YWc6IFwiaDFcIixcbiAgICAgIGNsYXNzTmFtZXM6IFtcImNvbnRhY3QtaGVhZGVyXCJdLFxuICAgICAgdGV4dENvbnRlbnQ6IFwiQ29udGFjdCBVcyBJZiB5b3UgbGlrZWQgdGhlIGZvb2QhXCIsXG4gICAgfSlcbiAgKTtcblxuICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgIGNsYXNzTmFtZXM6IFtcImNvbnRhY3QtbnVtYmVyXCJdLFxuICAgICAgdGV4dENvbnRlbnQ6IFwiT3VyIE51bWJlcjogNTU1IDU1NSA1NTVcIixcbiAgICB9KVxuICApO1xuXG4gIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgY2xhc3NOYW1lczogW1wiY29udGFjdC1lbWFpbFwiXSxcbiAgICAgIHRleHRDb250ZW50OiBcIkVtYWlsOiByZXN0YXVyYW50QGdyZWF0ZXN0LXJlc3RhdXJhbnQuY29tXCIsXG4gICAgfSlcbiAgKTtcblxuICAvL1xuXG4gIGNvbnN0IGNvbnRhY3RMb2NhdGlvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZzogXCJkaXZcIixcbiAgICBjbGFzc05hbWVzOiBbXCJjb250YWN0LWxvY2F0aW9uXCJdLFxuICB9KTtcblxuICBjb250YWN0TG9jYXRpb24uaW5uZXJIVE1MID0gYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE0ITFtOCExbTMhMWQ4MjkuMjI0NjUxMTk1NTgwMyEyZDE1MC42OTAxNDQ4MzE3NTA2NyEzZC0zMy43NjMyODU5MzA1ODA1OSEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg2YjEyOGY1Mzk0MjhkY2Y5JTNBMHg3MmUxZTc5Mjk1ODE0OGU4ITJzUm9uJTIwU3RvbmVzdHJlZXQlMjBQYXZpbGlvbiE1ZTAhM20yITFzZW4hMnNlZyE0djE2NzUxNjIxNjUxMDAhNW0yITFzZW4hMnNlZ1wiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+YDtcblxuICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChjb250YWN0TG9jYXRpb24pO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5Q29udGFjdFBhZ2UgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IG1haW5JbWFnZVNyYyBmcm9tIFwiLi9pbWFnZXMvcGFibG8tbWVyY2hhbi1tb250ZXMtT3J6OTB0Nm8wZTQtdW5zcGxhc2guanBnXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBoZWFkZXJOYXYgPSBjcmVhdGVFbGVtZW50KHtcbiAgdGFnOiBcIm5hdlwiLFxuICBjbGFzc05hbWVzOiBbXCJoZWFkZXItbmF2XCJdLFxufSk7XG5jb25zdCBob21lQnRuID0gY3JlYXRlRWxlbWVudCh7XG4gIHRhZzogXCJidXR0b25cIixcbiAgY2xhc3NOYW1lczogW1widGFiLWJ0blwiXSxcbiAgdGV4dENvbnRlbnQ6IFwiSG9tZVwiLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgaWQ6IFwiaG9tZS1idG5cIixcbiAgfSxcbiAgZGF0YXNldDoge1xuICAgIHBhZ2U6IFwiaG9tZVwiLFxuICB9LFxufSk7XG5jb25zdCBtZW51QnRuID0gY3JlYXRlRWxlbWVudCh7XG4gIHRhZzogXCJidXR0b25cIixcbiAgY2xhc3NOYW1lczogW1widGFiLWJ0blwiXSxcbiAgdGV4dENvbnRlbnQ6IFwiTWVudVwiLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgaWQ6IFwibWVudS1idG5cIixcbiAgfSxcbiAgZGF0YXNldDoge1xuICAgIHBhZ2U6IFwibWVudVwiLFxuICB9LFxufSk7XG5jb25zdCBjb250YWN0QnRuID0gY3JlYXRlRWxlbWVudCh7XG4gIHRhZzogXCJidXR0b25cIixcbiAgY2xhc3NOYW1lczogW1widGFiLWJ0blwiXSxcbiAgdGV4dENvbnRlbnQ6IFwiQ29udGFjdFwiLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgaWQ6IFwiY29udGFjdC1idG5cIixcbiAgfSxcbiAgZGF0YXNldDoge1xuICAgIHBhZ2U6IFwiY29udGFjdFwiLFxuICB9LFxufSk7XG5jb25zdCBtYWluQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XG4gIHRhZzogXCJtYWluXCIsXG4gIGNsYXNzTmFtZXM6IFtcIm1haW4tY29udGFpbmVyXCJdLFxufSk7XG5jb25zdCBwYWdlQ29udGVudCA9IGNyZWF0ZUVsZW1lbnQoe1xuICB0YWc6IFwic2VjdGlvblwiLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgaWQ6IFwicGFnZS1jb250ZW50XCIsXG4gIH0sXG59KTtcbmNvbnN0IG1haW5JbWFnZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICB0YWc6IFwiaW1nXCIsXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBpZDogXCJtYWluLWltZ1wiLFxuICAgIHNyYzogbWFpbkltYWdlU3JjLFxuICB9LFxufSk7XG5cbmNvbnN0IHRhYkJ0bnNMaXN0ZW5lcnMgPSBbXTtcblxuZnVuY3Rpb24gaGFuZGxlVGFiQnRuQ2xpY2soZXZlbnQpIHtcbiAgdGFiQnRuc0xpc3RlbmVycy5mb3JFYWNoKChsaXMpID0+IHtcbiAgICBsaXMoZXZlbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRlbnQoKSB7XG4gIGhlYWRlck5hdi5hcHBlbmQoaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0bik7XG4gIG1haW5Db250YWluZXIuYXBwZW5kKGhlYWRlck5hdik7XG4gIG1haW5Db250YWluZXIuYXBwZW5kKHBhZ2VDb250ZW50KTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmQobWFpbkltYWdlKTtcbiAgY29udGVudC5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG5cbiAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFiQnRuQ2xpY2spO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVUYWJCdG5DbGljayk7XG4gIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhYkJ0bkNsaWNrKTtcblxuICByZXR1cm4gcGFnZUNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFRhYkJ0bkxpc3RlbmVyKGZ1bmMpIHtcbiAgdGFiQnRuc0xpc3RlbmVycy5wdXNoKGZ1bmMpO1xufVxuXG5leHBvcnQgeyBsb2FkQ29udGVudCwgYWRkVGFiQnRuTGlzdGVuZXIgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5mdW5jdGlvbiBkaXNwbGF5SG9tZVBhZ2UocGFnZUNvbnRlbnQsIG1lbnVCdG5DbGlja0xpc3RlbmVyKSB7XG4gIGNvbnN0IHRpdGxlRGl2ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnOiBcImgxXCIsXG4gICAgdGV4dENvbnRlbnQ6IFwiQ2FmZSBMYXR0w6l0dWRlXCIsXG4gICAgY2xhc3NOYW1lczogW1wicmVzdGF1cmFudC10aXRsZVwiXSxcbiAgfSk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnOiBcInBcIixcbiAgICB0ZXh0Q29udGVudDpcbiAgICAgIFwiSWYgeW91IGhhdmUgYmVlbiBsb29raW5nIHRvIGV4cGVyaWVuY2UgYSBjYWZlIHdpdGggYSBzaW5jZXJlIGNvbW1pdG1lbnQgdG8gcXVhbGl0eSDigJMgeW91IGhhdmUgZm91bmQgaXQgaW4gQ2FmZSBMYXR0w6l0dWRlLlwiLFxuICAgIGNsYXNzTmFtZXM6IFtcInJlc3RhdXJhbnQtZGVzY1wiXSxcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ0biA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZzogXCJidXR0b25cIixcbiAgICB0ZXh0Q29udGVudDogXCJDaGVjayBNZW51XCIsXG4gICAgY2xhc3NOYW1lczogW1wiY2hlY2stbWVudS1idG5cIl0sXG4gICAgZXZlbnRIYW5kbGVyczoge1xuICAgICAgY2xpY2s6IG1lbnVCdG5DbGlja0xpc3RlbmVyLFxuICAgIH0sXG4gIH0pO1xuXG4gIHBhZ2VDb250ZW50LmFwcGVuZCh0aXRsZURpdiwgZGVzY3JpcHRpb25EaXYsIG1lbnVCdG4pO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5SG9tZVBhZ2UgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IGNvZmZlZV9sYXRlIGZyb20gXCIuL2ltYWdlcy9sYXRlX2NvZmZlZS1yZW1vdmViZy1wcmV2aWV3LnBuZ1wiO1xuaW1wb3J0IGNvZmZlZV9ibGFjayBmcm9tIFwiLi9pbWFnZXMvYmxhY2stY29mZmVlLWJlbmVmaXRzLXJlbW92ZWJnLXByZXZpZXcucG5nXCI7XG5pbXBvcnQgY29mZmVlX3R1cmtpc2ggZnJvbSBcIi4vaW1hZ2VzL3R1cmtpc2hfY29mZmVlLnBuZ1wiO1xuaW1wb3J0IGNvZmZlZV9lc3ByZXNzbyBmcm9tIFwiLi9pbWFnZXMvZXNwcmVzc28tcmVtb3ZlYmctcHJldmlldy5wbmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaXRlbU5hbWUsIHByaWNlLCBpbWdTcmMsIGRlc2MpIHtcbiAgLy8gTWVudSBJdGVtXG4gIGNvbnN0IG1lbnVJdGVtID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnOiBcImxpXCIsXG4gICAgY2xhc3NOYW1lczogW1wibWVudS1pdGVtXCJdLFxuICB9KTtcblxuICAvLyBJdGVtIEltYWdlXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgdGFnOiBcImltZ1wiLFxuICAgICAgY2xhc3NOYW1lczogW1wibWVudS1pdGVtLWltZ1wiXSxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgc3JjOiBpbWdTcmMsXG4gICAgICB9LFxuICAgIH0pXG4gICk7XG5cbiAgLy8gSXRlbSB0ZXh0IGNvbnRlbnQgY29udGFpbmVyXG4gIGNvbnN0IG1lbnVJdGVtQ29udGVudCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZzogXCJkaXZcIixcbiAgICBjbGFzc05hbWVzOiBbXCJtZW51LWl0ZW0tY29udGVudFwiXSxcbiAgfSk7XG4gIC8vIEl0ZW0gbmFtZSBoZWFkZXJcbiAgY29uc3QgbWVudUl0ZW1IZWFkZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWc6IFwiaDVcIixcbiAgICBjbGFzc05hbWVzOiBbXCJtZW51LWl0ZW0tbmFtZVwiXSxcbiAgICB0ZXh0Q29udGVudDogaXRlbU5hbWUsXG4gIH0pO1xuICAvLyBJdGVtIHByaWNlXG4gIG1lbnVJdGVtSGVhZGVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgdGFnOiBcInNwYW5cIixcbiAgICAgIGNsYXNzTmFtZXM6IFtcIm1lbnUtaXRlbS1wcmljZVwiXSxcbiAgICAgIHRleHRDb250ZW50OiBwcmljZSxcbiAgICB9KVxuICApO1xuICBtZW51SXRlbUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1IZWFkZXIpO1xuXG4gIC8vIEl0ZW0gZGVzY1xuICBtZW51SXRlbUNvbnRlbnQuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICB0YWc6IFwicFwiLFxuICAgICAgdGV4dENvbnRlbnQ6IGRlc2MsXG4gICAgICBjbGFzc05hbWVzOiBbXCJtZW51LWl0ZW0tZGVzY1wiXSxcbiAgICB9KVxuICApO1xuXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtQ29udGVudCk7XG4gIHJldHVybiBtZW51SXRlbTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU1lbnVQYWdlKHBhZ2VDb250ZW50KSB7XG4gIGNvbnN0IHRpdGxlRGl2ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnOiBcImgxXCIsXG4gICAgdGV4dENvbnRlbnQ6IFwiTWVudVwiLFxuICAgIGNsYXNzTmFtZXM6IFtcIm1lbnUtdGl0bGVcIl0sXG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVJdGVtTGlzdCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZzogXCJ1bFwiLFxuICAgIGNsYXNzTmFtZXM6IFtcIm1lbnUtaXRlbS1saXN0XCJdLFxuICB9KTtcblxuICBtZW51SXRlbUxpc3QuYXBwZW5kKGNyZWF0ZU1lbnVJdGVtKFwiTGF0ZSBDb2ZmZWVcIiwgXCI1Ljk5XCIsIGNvZmZlZV9sYXRlKSk7XG4gIG1lbnVJdGVtTGlzdC5hcHBlbmQoY3JlYXRlTWVudUl0ZW0oXCJCbGFjayBDb2ZmZWVcIiwgXCIyLjUwXCIsIGNvZmZlZV9ibGFjaykpO1xuICBtZW51SXRlbUxpc3QuYXBwZW5kKGNyZWF0ZU1lbnVJdGVtKFwiVHVya2lzaCBDb2ZmZWVcIiwgXCIzLjAwXCIsIGNvZmZlZV90dXJraXNoKSk7XG4gIG1lbnVJdGVtTGlzdC5hcHBlbmQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJFc3ByZXNzbyBDb2ZmZWVcIiwgXCI0LjIwXCIsIGNvZmZlZV9lc3ByZXNzbylcbiAgKTtcblxuICBwYWdlQ29udGVudC5hcHBlbmQodGl0bGVEaXYsIG1lbnVJdGVtTGlzdCk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlNZW51UGFnZSB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh7XG4gIHRhZyA9IFwiZGl2XCIsXG4gIGNsYXNzTmFtZXMgPSBbXSxcbiAgdGV4dENvbnRlbnQsXG4gIGRhdGFzZXQgPSB7fSxcbiAgYXR0cmlidXRlcyA9IHt9LFxuICBldmVudEhhbmRsZXJzID0ge30sXG59ID0ge30pIHtcbiAgLy8gQ3JlYXRlIGVsbSB3aXRoIHRhZ1xuICBjb25zdCBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgLy8gQWRkIGNsYXNzZXNcbiAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICBlbG0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9KTtcblxuICAvLyBTZXQgdGV4dENvbnRlbnRcbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgZWxtLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cblxuICAvLyBTZXQgZGF0YXNldFxuICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhc2V0KSB7XG4gICAgZWxtLmRhdGFzZXRba2V5XSA9IGRhdGFzZXRba2V5XTtcbiAgfVxuXG4gIC8vIFNldCBBdHRyaWJ1aXRlc1xuICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgZWxtLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH1cblxuICAvLyBTZXQgSGFuZGxlcnNcbiAgZm9yIChjb25zdCBrZXkgaW4gZXZlbnRIYW5kbGVycykge1xuICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKGtleSwgZXZlbnRIYW5kbGVyc1trZXldKTtcbiAgfVxuXG4gIHJldHVybiBlbG07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbG9hZENvbnRlbnQsIGFkZFRhYkJ0bkxpc3RlbmVyIH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGRpc3BsYXlIb21lUGFnZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGRpc3BsYXlNZW51UGFnZSB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGRpc3BsYXlDb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZnVuY3Rpb24gY2hlY2tNZW51QnRuSGFuZGxlcihldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudCk7XG4gIGhhbmRsZVRhYkJ0bkNsaWNrKHsgdGFyZ2V0OiB7IGRhdGFzZXQ6IHsgcGFnZTogXCJtZW51XCIgfSB9IH0pO1xufVxuXG5jb25zdCBwYWdlQ29udGV0Q29udGFpbmVyID0gbG9hZENvbnRlbnQoKTtcbmRpc3BsYXlIb21lUGFnZShwYWdlQ29udGV0Q29udGFpbmVyLCBjaGVja01lbnVCdG5IYW5kbGVyKTtcblxubGV0IGN1cnJlbnRQYWdlID0gXCJob21lXCI7XG5cbmZ1bmN0aW9uIGhhbmRsZVRhYkJ0bkNsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IHBhZ2VOYW1lID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQucGFnZTtcbiAgaWYgKCFwYWdlTmFtZSkgcmV0dXJuO1xuICBpZiAoY3VycmVudFBhZ2UgPT09IHBhZ2VOYW1lKSByZXR1cm47XG5cbiAgcGFnZUNvbnRldENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBpZiAocGFnZU5hbWUgPT09IFwiaG9tZVwiKSB7XG4gICAgZGlzcGxheUhvbWVQYWdlKHBhZ2VDb250ZXRDb250YWluZXIsIGNoZWNrTWVudUJ0bkhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKHBhZ2VOYW1lID09PSBcIm1lbnVcIikge1xuICAgIGRpc3BsYXlNZW51UGFnZShwYWdlQ29udGV0Q29udGFpbmVyKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5Q29udGFjdFBhZ2UocGFnZUNvbnRldENvbnRhaW5lcik7XG4gIH1cbiAgY3VycmVudFBhZ2UgPSBwYWdlTmFtZTtcbn1cblxuYWRkVGFiQnRuTGlzdGVuZXIoaGFuZGxlVGFiQnRuQ2xpY2spO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9