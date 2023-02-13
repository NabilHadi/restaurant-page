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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ loadContent, addTabBtnListener });


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
    dataset: {
      page: "menu",
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






const pageContetContainer = _displayController__WEBPACK_IMPORTED_MODULE_1__["default"].loadContent();
(0,_home__WEBPACK_IMPORTED_MODULE_2__.displayHomePage)(pageContetContainer, handleTabChange);

let currentPage = "home";

function handleTabChange(event) {
  const pageName = event.target.dataset.page;
  if (!pageName) return;
  if (currentPage === pageName) return;

  pageContetContainer.innerHTML = "";
  if (pageName === "home") {
    (0,_home__WEBPACK_IMPORTED_MODULE_2__.displayHomePage)(pageContetContainer, handleTabChange);
  } else if (pageName === "menu") {
    (0,_menu__WEBPACK_IMPORTED_MODULE_3__.displayMenuPage)(pageContetContainer);
  } else {
    (0,_contact__WEBPACK_IMPORTED_MODULE_4__.displayContactPage)(pageContetContainer);
  }
  currentPage = pageName;
}

_displayController__WEBPACK_IMPORTED_MODULE_1__["default"].addTabBtnListener(handleTabChange);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZDekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDK0I7QUFDWDtBQUNBO0FBQ007O0FBRS9DLDRCQUE0QixzRUFBNkI7QUFDekQsc0RBQWU7O0FBRWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksc0RBQWU7QUFDbkIsSUFBSTtBQUNKLElBQUksc0RBQWU7QUFDbkIsSUFBSTtBQUNKLElBQUksNERBQWtCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQSw0RUFBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaW1nLFxcbmlmcmFtZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQgbWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbm1haW4gI3BhZ2UtY29udGVudCB7XFxuICB3aWR0aDogNDAlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmM0OTc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogMTA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNwYWdlLWNvbnRlbnQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHotaW5kZXg6IC0xO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM0NTIzO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbGVmdDogLTUwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcbn1cXG5cXG4jcGFnZS1jb250ZW50OmhvdmVyOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExODE5O1xcbiAgd2lkdGg6IDY1cHg7XFxufVxcblxcbm1haW4gI21haW4taW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDYwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uaGVhZGVyLW5hdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogNjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMTgxOWMxO1xcbn1cXG5cXG4uaGVhZGVyLW5hdiBidXR0b24ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItbmF2IGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzYzNDUyMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wODkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucmVzdGF1cmFudC10aXRsZSB7XFxuICBmb250LXNpemU6IDIzMCU7XFxuICBjb2xvcjogIzFhMTgxOTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtZGVzYyB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgY29sb3I6ICM2MzQ1MjM7XFxuICB3aWR0aDogbWF4KDcwJSwgMjAwcHgpO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4uY2hlY2stbWVudS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYmQyZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiBtYXgoMzAlLCAyMDBweCk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjNjM0NTIzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2stbWVudS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51LXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tZW51LXRpdGxlOmhvdmVyIHtcXG4gIGNvbG9yOiAjNjM0NTIzO1xcbn1cXG5cXG51bC5tZW51LWl0ZW0tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudWwubWVudS1pdGVtLWxpc3QgLm1lbnUtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbnVsLm1lbnUtaXRlbS1saXN0IC5tZW51LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMTgxOTExO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxudWwubWVudS1pdGVtLWxpc3QgLm1lbnUtaXRlbSAubWVudS1pdGVtLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBib3JkZXItYm90dG9tOiAzcHggZG90dGVkIHJnYmEoMCwgMCwgMCwgMC4zNTUpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG51bC5tZW51LWl0ZW0tbGlzdCAubWVudS1pdGVtIC5tZW51LWl0ZW0tcHJpY2Uge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogIzYzNDUyMztcXG59XFxuXFxudWwubWVudS1pdGVtLWxpc3QgLm1lbnUtaXRlbSAubWVudS1pdGVtLXByaWNlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiRcXFwiO1xcbn1cXG5cXG51bC5tZW51LWl0ZW0tbGlzdCAubWVudS1pdGVtIC5tZW51LWl0ZW0tZGVzYyB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmNvbnRhY3QtbnVtYmVyIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5jb250YWN0LWVtYWlsIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1o7d0VBQ3NFO0FBQ3hFOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHNDQUFzQztFQUN0QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qiw2RUFBNkU7QUFDL0U7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsOEJBQThCOztFQUU5Qiw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmltZyxcXG5pZnJhbWUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb250ZW50IG1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG5tYWluICNwYWdlLWNvbnRlbnQge1xcbiAgd2lkdGg6IDQwJTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZjNDk3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jcGFnZS1jb250ZW50OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICB6LWluZGV4OiAtMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNDUyMztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGxlZnQ6IC01MHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG59XFxuXFxuI3BhZ2UtY29udGVudDpob3Zlcjo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMTgxOTtcXG4gIHdpZHRoOiA2NXB4O1xcbn1cXG5cXG5tYWluICNtYWluLWltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA2MCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmhlYWRlci1uYXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTE4MTljMTtcXG59XFxuXFxuLmhlYWRlci1uYXYgYnV0dG9uIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyLW5hdiBidXR0b246aG92ZXIge1xcbiAgY29sb3I6ICM2MzQ1MjM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDg5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJlc3RhdXJhbnQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyMzAlO1xcbiAgY29sb3I6ICMxYTE4MTk7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxufVxcblxcbi5yZXN0YXVyYW50LWRlc2Mge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGNvbG9yOiAjNjM0NTIzO1xcbiAgd2lkdGg6IG1heCg3MCUsIDIwMHB4KTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuLmNoZWNrLW1lbnUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWJkMmQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogbWF4KDMwJSwgMjAwcHgpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzYzNDUyMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrLW1lbnUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubWVudS10aXRsZTpob3ZlciB7XFxuICBjb2xvcjogIzYzNDUyMztcXG59XFxuXFxudWwubWVudS1pdGVtLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnVsLm1lbnUtaXRlbS1saXN0IC5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG51bC5tZW51LWl0ZW0tbGlzdCAubWVudS1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTE4MTkxMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbnVsLm1lbnUtaXRlbS1saXN0IC5tZW51LWl0ZW0gLm1lbnUtaXRlbS1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBjb2x1bW4tZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IGRvdHRlZCByZ2JhKDAsIDAsIDAsIDAuMzU1KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxudWwubWVudS1pdGVtLWxpc3QgLm1lbnUtaXRlbSAubWVudS1pdGVtLXByaWNlIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6ICM2MzQ1MjM7XFxufVxcblxcbnVsLm1lbnUtaXRlbS1saXN0IC5tZW51LWl0ZW0gLm1lbnUtaXRlbS1wcmljZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIkXFxcIjtcXG59XFxuXFxudWwubWVudS1pdGVtLWxpc3QgLm1lbnUtaXRlbSAubWVudS1pdGVtLWRlc2Mge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5jb250YWN0LW51bWJlciB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdC1lbWFpbCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZnVuY3Rpb24gZGlzcGxheUNvbnRhY3RQYWdlKHBhZ2VDb250ZW50KSB7XG4gIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgdGFnOiBcImgxXCIsXG4gICAgICBjbGFzc05hbWVzOiBbXCJjb250YWN0LWhlYWRlclwiXSxcbiAgICAgIHRleHRDb250ZW50OiBcIkNvbnRhY3QgVXMgSWYgeW91IGxpa2VkIHRoZSBmb29kIVwiLFxuICAgIH0pXG4gICk7XG5cbiAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICBjbGFzc05hbWVzOiBbXCJjb250YWN0LW51bWJlclwiXSxcbiAgICAgIHRleHRDb250ZW50OiBcIk91ciBOdW1iZXI6IDU1NSA1NTUgNTU1XCIsXG4gICAgfSlcbiAgKTtcblxuICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgIGNsYXNzTmFtZXM6IFtcImNvbnRhY3QtZW1haWxcIl0sXG4gICAgICB0ZXh0Q29udGVudDogXCJFbWFpbDogcmVzdGF1cmFudEBncmVhdGVzdC1yZXN0YXVyYW50LmNvbVwiLFxuICAgIH0pXG4gICk7XG5cbiAgLy9cblxuICBjb25zdCBjb250YWN0TG9jYXRpb24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWc6IFwiZGl2XCIsXG4gICAgY2xhc3NOYW1lczogW1wiY29udGFjdC1sb2NhdGlvblwiXSxcbiAgfSk7XG5cbiAgY29udGFjdExvY2F0aW9uLmlubmVySFRNTCA9IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTghMW0zITFkODI5LjIyNDY1MTE5NTU4MDMhMmQxNTAuNjkwMTQ0ODMxNzUwNjchM2QtMzMuNzYzMjg1OTMwNTgwNTkhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NmIxMjhmNTM5NDI4ZGNmOSUzQTB4NzJlMWU3OTI5NTgxNDhlOCEyc1JvbiUyMFN0b25lc3RyZWV0JTIwUGF2aWxpb24hNWUwITNtMiExc2VuITJzZWchNHYxNjc1MTYyMTY1MTAwITVtMiExc2VuITJzZWdcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPmA7XG5cbiAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdExvY2F0aW9uKTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheUNvbnRhY3RQYWdlIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCBtYWluSW1hZ2VTcmMgZnJvbSBcIi4vaW1hZ2VzL3BhYmxvLW1lcmNoYW4tbW9udGVzLU9yejkwdDZvMGU0LXVuc3BsYXNoLmpwZ1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29uc3QgaGVhZGVyTmF2ID0gY3JlYXRlRWxlbWVudCh7XG4gIHRhZzogXCJuYXZcIixcbiAgY2xhc3NOYW1lczogW1wiaGVhZGVyLW5hdlwiXSxcbn0pO1xuY29uc3QgaG9tZUJ0biA9IGNyZWF0ZUVsZW1lbnQoe1xuICB0YWc6IFwiYnV0dG9uXCIsXG4gIGNsYXNzTmFtZXM6IFtcInRhYi1idG5cIl0sXG4gIHRleHRDb250ZW50OiBcIkhvbWVcIixcbiAgYXR0cmlidXRlczoge1xuICAgIGlkOiBcImhvbWUtYnRuXCIsXG4gIH0sXG4gIGRhdGFzZXQ6IHtcbiAgICBwYWdlOiBcImhvbWVcIixcbiAgfSxcbn0pO1xuY29uc3QgbWVudUJ0biA9IGNyZWF0ZUVsZW1lbnQoe1xuICB0YWc6IFwiYnV0dG9uXCIsXG4gIGNsYXNzTmFtZXM6IFtcInRhYi1idG5cIl0sXG4gIHRleHRDb250ZW50OiBcIk1lbnVcIixcbiAgYXR0cmlidXRlczoge1xuICAgIGlkOiBcIm1lbnUtYnRuXCIsXG4gIH0sXG4gIGRhdGFzZXQ6IHtcbiAgICBwYWdlOiBcIm1lbnVcIixcbiAgfSxcbn0pO1xuY29uc3QgY29udGFjdEJ0biA9IGNyZWF0ZUVsZW1lbnQoe1xuICB0YWc6IFwiYnV0dG9uXCIsXG4gIGNsYXNzTmFtZXM6IFtcInRhYi1idG5cIl0sXG4gIHRleHRDb250ZW50OiBcIkNvbnRhY3RcIixcbiAgYXR0cmlidXRlczoge1xuICAgIGlkOiBcImNvbnRhY3QtYnRuXCIsXG4gIH0sXG4gIGRhdGFzZXQ6IHtcbiAgICBwYWdlOiBcImNvbnRhY3RcIixcbiAgfSxcbn0pO1xuY29uc3QgbWFpbkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xuICB0YWc6IFwibWFpblwiLFxuICBjbGFzc05hbWVzOiBbXCJtYWluLWNvbnRhaW5lclwiXSxcbn0pO1xuY29uc3QgcGFnZUNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KHtcbiAgdGFnOiBcInNlY3Rpb25cIixcbiAgYXR0cmlidXRlczoge1xuICAgIGlkOiBcInBhZ2UtY29udGVudFwiLFxuICB9LFxufSk7XG5jb25zdCBtYWluSW1hZ2UgPSBjcmVhdGVFbGVtZW50KHtcbiAgdGFnOiBcImltZ1wiLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgaWQ6IFwibWFpbi1pbWdcIixcbiAgICBzcmM6IG1haW5JbWFnZVNyYyxcbiAgfSxcbn0pO1xuXG5jb25zdCB0YWJCdG5zTGlzdGVuZXJzID0gW107XG5cbmZ1bmN0aW9uIGhhbmRsZVRhYkJ0bkNsaWNrKGV2ZW50KSB7XG4gIHRhYkJ0bnNMaXN0ZW5lcnMuZm9yRWFjaCgobGlzKSA9PiB7XG4gICAgbGlzKGV2ZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250ZW50KCkge1xuICBoZWFkZXJOYXYuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZChoZWFkZXJOYXYpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZChwYWdlQ29udGVudCk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kKG1haW5JbWFnZSk7XG4gIGNvbnRlbnQuYXBwZW5kKG1haW5Db250YWluZXIpO1xuXG4gIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhYkJ0bkNsaWNrKTtcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFiQnRuQ2xpY2spO1xuICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVUYWJCdG5DbGljayk7XG5cbiAgcmV0dXJuIHBhZ2VDb250ZW50O1xufVxuXG5mdW5jdGlvbiBhZGRUYWJCdG5MaXN0ZW5lcihmdW5jKSB7XG4gIHRhYkJ0bnNMaXN0ZW5lcnMucHVzaChmdW5jKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBsb2FkQ29udGVudCwgYWRkVGFiQnRuTGlzdGVuZXIgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5mdW5jdGlvbiBkaXNwbGF5SG9tZVBhZ2UocGFnZUNvbnRlbnQsIG1lbnVCdG5DbGlja0xpc3RlbmVyKSB7XG4gIGNvbnN0IHRpdGxlRGl2ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnOiBcImgxXCIsXG4gICAgdGV4dENvbnRlbnQ6IFwiQ2FmZSBMYXR0w6l0dWRlXCIsXG4gICAgY2xhc3NOYW1lczogW1wicmVzdGF1cmFudC10aXRsZVwiXSxcbiAgfSk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnOiBcInBcIixcbiAgICB0ZXh0Q29udGVudDpcbiAgICAgIFwiSWYgeW91IGhhdmUgYmVlbiBsb29raW5nIHRvIGV4cGVyaWVuY2UgYSBjYWZlIHdpdGggYSBzaW5jZXJlIGNvbW1pdG1lbnQgdG8gcXVhbGl0eSDigJMgeW91IGhhdmUgZm91bmQgaXQgaW4gQ2FmZSBMYXR0w6l0dWRlLlwiLFxuICAgIGNsYXNzTmFtZXM6IFtcInJlc3RhdXJhbnQtZGVzY1wiXSxcbiAgfSk7XG5cbiAgY29uc3QgbWVudUJ0biA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZzogXCJidXR0b25cIixcbiAgICB0ZXh0Q29udGVudDogXCJDaGVjayBNZW51XCIsXG4gICAgY2xhc3NOYW1lczogW1wiY2hlY2stbWVudS1idG5cIl0sXG4gICAgZXZlbnRIYW5kbGVyczoge1xuICAgICAgY2xpY2s6IG1lbnVCdG5DbGlja0xpc3RlbmVyLFxuICAgIH0sXG4gICAgZGF0YXNldDoge1xuICAgICAgcGFnZTogXCJtZW51XCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgcGFnZUNvbnRlbnQuYXBwZW5kKHRpdGxlRGl2LCBkZXNjcmlwdGlvbkRpdiwgbWVudUJ0bik7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlIb21lUGFnZSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgY29mZmVlX2xhdGUgZnJvbSBcIi4vaW1hZ2VzL2xhdGVfY29mZmVlLXJlbW92ZWJnLXByZXZpZXcucG5nXCI7XG5pbXBvcnQgY29mZmVlX2JsYWNrIGZyb20gXCIuL2ltYWdlcy9ibGFjay1jb2ZmZWUtYmVuZWZpdHMtcmVtb3ZlYmctcHJldmlldy5wbmdcIjtcbmltcG9ydCBjb2ZmZWVfdHVya2lzaCBmcm9tIFwiLi9pbWFnZXMvdHVya2lzaF9jb2ZmZWUucG5nXCI7XG5pbXBvcnQgY29mZmVlX2VzcHJlc3NvIGZyb20gXCIuL2ltYWdlcy9lc3ByZXNzby1yZW1vdmViZy1wcmV2aWV3LnBuZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShpdGVtTmFtZSwgcHJpY2UsIGltZ1NyYywgZGVzYykge1xuICAvLyBNZW51IEl0ZW1cbiAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWc6IFwibGlcIixcbiAgICBjbGFzc05hbWVzOiBbXCJtZW51LWl0ZW1cIl0sXG4gIH0pO1xuXG4gIC8vIEl0ZW0gSW1hZ2VcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICB0YWc6IFwiaW1nXCIsXG4gICAgICBjbGFzc05hbWVzOiBbXCJtZW51LWl0ZW0taW1nXCJdLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBzcmM6IGltZ1NyYyxcbiAgICAgIH0sXG4gICAgfSlcbiAgKTtcblxuICAvLyBJdGVtIHRleHQgY29udGVudCBjb250YWluZXJcbiAgY29uc3QgbWVudUl0ZW1Db250ZW50ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnOiBcImRpdlwiLFxuICAgIGNsYXNzTmFtZXM6IFtcIm1lbnUtaXRlbS1jb250ZW50XCJdLFxuICB9KTtcbiAgLy8gSXRlbSBuYW1lIGhlYWRlclxuICBjb25zdCBtZW51SXRlbUhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZzogXCJoNVwiLFxuICAgIGNsYXNzTmFtZXM6IFtcIm1lbnUtaXRlbS1uYW1lXCJdLFxuICAgIHRleHRDb250ZW50OiBpdGVtTmFtZSxcbiAgfSk7XG4gIC8vIEl0ZW0gcHJpY2VcbiAgbWVudUl0ZW1IZWFkZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICB0YWc6IFwic3BhblwiLFxuICAgICAgY2xhc3NOYW1lczogW1wibWVudS1pdGVtLXByaWNlXCJdLFxuICAgICAgdGV4dENvbnRlbnQ6IHByaWNlLFxuICAgIH0pXG4gICk7XG4gIG1lbnVJdGVtQ29udGVudC5hcHBlbmRDaGlsZChtZW51SXRlbUhlYWRlcik7XG5cbiAgLy8gSXRlbSBkZXNjXG4gIG1lbnVJdGVtQ29udGVudC5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgIHRhZzogXCJwXCIsXG4gICAgICB0ZXh0Q29udGVudDogZGVzYyxcbiAgICAgIGNsYXNzTmFtZXM6IFtcIm1lbnUtaXRlbS1kZXNjXCJdLFxuICAgIH0pXG4gICk7XG5cbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1Db250ZW50KTtcbiAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWVudVBhZ2UocGFnZUNvbnRlbnQpIHtcbiAgY29uc3QgdGl0bGVEaXYgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWc6IFwiaDFcIixcbiAgICB0ZXh0Q29udGVudDogXCJNZW51XCIsXG4gICAgY2xhc3NOYW1lczogW1wibWVudS10aXRsZVwiXSxcbiAgfSk7XG5cbiAgY29uc3QgbWVudUl0ZW1MaXN0ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnOiBcInVsXCIsXG4gICAgY2xhc3NOYW1lczogW1wibWVudS1pdGVtLWxpc3RcIl0sXG4gIH0pO1xuXG4gIG1lbnVJdGVtTGlzdC5hcHBlbmQoY3JlYXRlTWVudUl0ZW0oXCJMYXRlIENvZmZlZVwiLCBcIjUuOTlcIiwgY29mZmVlX2xhdGUpKTtcbiAgbWVudUl0ZW1MaXN0LmFwcGVuZChjcmVhdGVNZW51SXRlbShcIkJsYWNrIENvZmZlZVwiLCBcIjIuNTBcIiwgY29mZmVlX2JsYWNrKSk7XG4gIG1lbnVJdGVtTGlzdC5hcHBlbmQoY3JlYXRlTWVudUl0ZW0oXCJUdXJraXNoIENvZmZlZVwiLCBcIjMuMDBcIiwgY29mZmVlX3R1cmtpc2gpKTtcbiAgbWVudUl0ZW1MaXN0LmFwcGVuZChcbiAgICBjcmVhdGVNZW51SXRlbShcIkVzcHJlc3NvIENvZmZlZVwiLCBcIjQuMjBcIiwgY29mZmVlX2VzcHJlc3NvKVxuICApO1xuXG4gIHBhZ2VDb250ZW50LmFwcGVuZCh0aXRsZURpdiwgbWVudUl0ZW1MaXN0KTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheU1lbnVQYWdlIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHtcbiAgdGFnID0gXCJkaXZcIixcbiAgY2xhc3NOYW1lcyA9IFtdLFxuICB0ZXh0Q29udGVudCxcbiAgZGF0YXNldCA9IHt9LFxuICBhdHRyaWJ1dGVzID0ge30sXG4gIGV2ZW50SGFuZGxlcnMgPSB7fSxcbn0gPSB7fSkge1xuICAvLyBDcmVhdGUgZWxtIHdpdGggdGFnXG4gIGNvbnN0IGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAvLyBBZGQgY2xhc3Nlc1xuICBjbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgIGVsbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0pO1xuXG4gIC8vIFNldCB0ZXh0Q29udGVudFxuICBpZiAodGV4dENvbnRlbnQpIHtcbiAgICBlbG0udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgfVxuXG4gIC8vIFNldCBkYXRhc2V0XG4gIGZvciAoY29uc3Qga2V5IGluIGRhdGFzZXQpIHtcbiAgICBlbG0uZGF0YXNldFtrZXldID0gZGF0YXNldFtrZXldO1xuICB9XG5cbiAgLy8gU2V0IEF0dHJpYnVpdGVzXG4gIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICBlbG0uc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfVxuXG4gIC8vIFNldCBIYW5kbGVyc1xuICBmb3IgKGNvbnN0IGtleSBpbiBldmVudEhhbmRsZXJzKSB7XG4gICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBldmVudEhhbmRsZXJzW2tleV0pO1xuICB9XG5cbiAgcmV0dXJuIGVsbTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgRGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGRpc3BsYXlIb21lUGFnZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGRpc3BsYXlNZW51UGFnZSB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGRpc3BsYXlDb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc3QgcGFnZUNvbnRldENvbnRhaW5lciA9IERpc3BsYXlDb250cm9sbGVyLmxvYWRDb250ZW50KCk7XG5kaXNwbGF5SG9tZVBhZ2UocGFnZUNvbnRldENvbnRhaW5lciwgaGFuZGxlVGFiQ2hhbmdlKTtcblxubGV0IGN1cnJlbnRQYWdlID0gXCJob21lXCI7XG5cbmZ1bmN0aW9uIGhhbmRsZVRhYkNoYW5nZShldmVudCkge1xuICBjb25zdCBwYWdlTmFtZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnBhZ2U7XG4gIGlmICghcGFnZU5hbWUpIHJldHVybjtcbiAgaWYgKGN1cnJlbnRQYWdlID09PSBwYWdlTmFtZSkgcmV0dXJuO1xuXG4gIHBhZ2VDb250ZXRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgaWYgKHBhZ2VOYW1lID09PSBcImhvbWVcIikge1xuICAgIGRpc3BsYXlIb21lUGFnZShwYWdlQ29udGV0Q29udGFpbmVyLCBoYW5kbGVUYWJDaGFuZ2UpO1xuICB9IGVsc2UgaWYgKHBhZ2VOYW1lID09PSBcIm1lbnVcIikge1xuICAgIGRpc3BsYXlNZW51UGFnZShwYWdlQ29udGV0Q29udGFpbmVyKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5Q29udGFjdFBhZ2UocGFnZUNvbnRldENvbnRhaW5lcik7XG4gIH1cbiAgY3VycmVudFBhZ2UgPSBwYWdlTmFtZTtcbn1cblxuRGlzcGxheUNvbnRyb2xsZXIuYWRkVGFiQnRuTGlzdGVuZXIoaGFuZGxlVGFiQ2hhbmdlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==