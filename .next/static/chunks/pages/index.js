(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./components/ConsultantaOnline/Form/form.jsx":
/*!****************************************************!*\
  !*** ./components/ConsultantaOnline/Form/form.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/ConsultantaOnline/Form/form.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var Form = function Form() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      comments = _useState3[0],
      setComments = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      phone = _useState4[0],
      setPhone = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      gdpr = _useState5[0],
      setGdpr = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      submitted = _useState6[0],
      setSubmitted = _useState6[1];

  var handleSubmit = function handleSubmit(e) {
    console.log("sending!");
    var data = {
      name: name,
      email: email,
      comments: comments,
      phone: phone,
      gdpr: gdpr,
      submitted: submitted
    };
    console.log("HANDLE SUBMIT MAI JOS E DATA");
    console.log(data);

    if (data.name && data.email && data.comments && data.phone && data.gdpr && data.submitted == false) {
      console.log("AICI SUNT DATELE");
      console.log(data);
      var headers = {
        'Accept': 'application/json, text/plain, */*',
        'content-type': 'application/json'
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/contact', data, headers).then(function (response) {
        alert("Va multumim, va vom contacta curand");
        resetState();
        console.log(response);
      }, function (error) {
        alert("Formularul nu s-a trimis!!!!");
        console.log(error);
      }); // e.preventDefault()
      // e.reset()

      console.log("HANDLE SUBMIT/n===========================================");
      console.log(e);
    } else {
      console.log(data);
      alert("eroare in IF");
    }
  };

  var resetState = function resetState() {
    setName("");
    setEmail("");
    setPhone("");
    setGdpr("");
    setSubmitted(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "form-container",
      id: "contact",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Contact Rapid"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        autoComplete: "off" //  action="/pages/success.html" 
        ,
        method: "post",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "nume",
          children: "Nume"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          required: true,
          type: "text",
          id: "nume",
          name: "nume",
          placeholder: "Nume si Prenume",
          onChange: function onChange(e) {
            setSubmitted(false), setName(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "email",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          required: true,
          type: "email",
          name: "email",
          id: "email",
          placeholder: "Adresa de email",
          onChange: function onChange(e) {
            setSubmitted(false), setEmail(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "phone",
          children: "Telefon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          required: true,
          type: "tel",
          name: "phone",
          id: "phone",
          pattern: "[0-9]{10}",
          placeholder: "Telefon",
          onChange: function onChange(e) {
            setPhone(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          required: true,
          name: "comments",
          id: "comments",
          rows: "10",
          placeholder: "Descrieti Cauza",
          onChange: function onChange(e) {
            setComments(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            id: "gdpr-label",
            htmlFor: "gdpr",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "/pages/gdpr.html",
              children: "Sunt de acord cu politica de prelucrare a datelor"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 51
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            required: true,
            type: "checkbox",
            name: "gdpr",
            onChange: function onChange(e) {
              setGdpr(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "btn from-right",
          type: "submit",
          onClick: function onClick(e) {
            handleSubmit(e);
            document.querySelector("form").reset();
          },
          children: " Trimiteti!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(Form, "Icmc5DvUdZFaAQTmSGyJaQx9+ZI=");

_c = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "Form");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/ConsultantaOnline/consultantaOnline.tsx":
/*!************************************************************!*\
  !*** ./components/ConsultantaOnline/consultantaOnline.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GoogleMaps_GoogleMaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GoogleMaps/GoogleMaps */ "./components/GoogleMaps/GoogleMaps.tsx");
/* harmony import */ var _Form_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form/form */ "./components/ConsultantaOnline/Form/form.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/ConsultantaOnline/consultantaOnline.tsx",
    _this = undefined;





var ConsultantaOnline = function ConsultantaOnline() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1600609607",
      children: "#consultanta-online.jsx-1600609607{max-width:90vw;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}#consultanta-online.jsx-1600609607 .background.jsx-1600609607{height:auto;}#consultanta-online.jsx-1600609607 .form-container.jsx-1600609607,#consultanta-online.jsx-1600609607 .description.jsx-1600609607{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:center;padding-top:2em;}#consultanta-online.jsx-1600609607 .form-container.jsx-1600609607{grid-column:1 / 2;grid-row:1 / 2;}.form-container.jsx-1600609607{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:wheat;}.form-container.jsx-1600609607 h1.jsx-1600609607{text-align:center;justify-self:center;vertical-align:middle;font-family:var(--decorativeFont);color:var(--primary-color);}.form-container.jsx-1600609607 form.jsx-1600609607{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border:white solid 2px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin-bottom:1em;width:100%;height:auto;text-align:center;background-color:wheat;padding-top:2em;}input.jsx-1600609607::-webkit-input-placeholder,textarea.jsx-1600609607::-webkit-input-placeholder{color:#808080;-webkit-transition:all .5s;transition:all .5s;}input.jsx-1600609607:focus.jsx-1600609607::-webkit-input-placeholder,textarea.jsx-1600609607:focus.jsx-1600609607::-webkit-input-placeholder{-webkit-transform:scale(0.00001);-ms-transform:scale(0.00001);transform:scale(0.00001);}form.jsx-1600609607 input.jsx-1600609607,form.jsx-1600609607 textarea.jsx-1600609607{border-bottom:var(--secondary-font-color) 2px solid;}.form-container.jsx-1600609607 input.jsx-1600609607:focus~label.jsx-1600609607,.form-container.jsx-1600609607 textarea.jsx-1600609607:focus~label.jsx-1600609607,.form-container.jsx-1600609607 input.jsx-1600609607:valid~label.jsx-1600609607,.form-container.jsx-1600609607 textarea.jsx-1600609607:valid~label.jsx-1600609607{font-size:1rem;font-weight:bold;}label.jsx-1600609607{display:none;}#gdpr-label.jsx-1600609607{display:inline-block;}textarea.jsx-1600609607,input.jsx-1600609607,label.jsx-1600609607{width:100%;font-size:1.5rem;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;border:var(--inv) solid 2px;font-family:var(--decorativeFont);}textarea.jsx-1600609607{text-align:justify;height:auto;background-color:transparent;}fieldset.jsx-1600609607{display:grid;grid-template-columns:8fr 1fr;}fieldset.jsx-1600609607 label.jsx-1600609607 a.jsx-1600609607{font-size:1rem;color:black;-webkit-transition:color .5s;transition:color .5s;}fieldset.jsx-1600609607 label.jsx-1600609607 a.jsx-1600609607:hover{-webkit-text-decoration:underline solid var(--secondary-font-color);text-decoration:underline solid var(--secondary-font-color);color:blue;}.form-container.jsx-1600609607 form.jsx-1600609607 input.jsx-1600609607,.form-container.jsx-1600609607 button.jsx-1600609607{background-color:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9SZXBvcy9Qcm9qZWN0cy9Eb3J1Qm90ZWFOZXh0SlMvY29tcG9uZW50cy9Db25zdWx0YW50YU9ubGluZS9jb25zdWx0YW50YU9ubGluZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWMsQUFLb0IsQUFVSCxBQUdNLEFBTUQsQUFPSixBQVNLLEFBU0EsQUFnQkosQUFLVyxBQUcyQixBQVNyQyxBQUlGLEFBSVEsQUFJVixBQVNRLEFBT04sQUFJRSxBQVE2QyxBQU0vQixXQWhDWixDQWhGckIsQ0F1RUEsQUF3QmtDLENBN0NYLENBNUROLEFBNkVJLEFBZ0NMLEdBMUZFLEFBZ0JNLENBK0RSLEVBYmhCLE1BeUJ3QixDQTdHVyxBQTBGYixDQWdDdEIsRUF4QmdDLENBckJoQyxDQXpEQSxLQWUwQixLQXNFMUIsU0F0Q0EsTUFsRStCLEVBbUNNLEFBd0JyQyxBQXdDQSxXQXhGd0IsQUErQkcsR0FqQkosR0FzRnZCLFFBOUd1QixFQTZETyxJQWpEVixHQXVCVyxBQVFkLEtBOENLLFFBNUV0QixVQTZFZ0MsSUFyRGhDLE9BNkVjLFdBQ2QsSUExRm1CLEVBa0VtQix1QkEvQ1osVUEzQ08sQ0EyRmpDLHFCQWxFMkIsOENBbUJMLHFEQWpCSyxFQXpCM0IsZ0JBMkNzQixLQWpCdEIsYUFtQmUsV0FDQyxZQUVNLGtCQUNJLHVCQUNOLGdCQUNwQiIsImZpbGUiOiIvbW50L2QvUmVwb3MvUHJvamVjdHMvRG9ydUJvdGVhTmV4dEpTL2NvbXBvbmVudHMvQ29uc3VsdGFudGFPbmxpbmUvY29uc3VsdGFudGFPbmxpbmUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdvb2dsZU1hcHMgZnJvbSAnLi4vR29vZ2xlTWFwcy9Hb29nbGVNYXBzJ1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0vZm9ybSdcclxuXHJcbmNvbnN0IENvbnN1bHRhbnRhT25saW5lID0gKCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gIDxzdHlsZSBqc3g+e2AgICAgXHJcblxyXG5cclxuI2NvbnN1bHRhbnRhLW9ubGluZXtcclxuICAgIG1heC13aWR0aDogOTB2dztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICBcclxufVxyXG5cclxuI2NvbnN1bHRhbnRhLW9ubGluZSAuYmFja2dyb3VuZHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4jY29uc3VsdGFudGEtb25saW5lIC5mb3JtLWNvbnRhaW5lciwgI2NvbnN1bHRhbnRhLW9ubGluZSAuZGVzY3JpcHRpb257XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxufVxyXG4jY29uc3VsdGFudGEtb25saW5lIC5mb3JtLWNvbnRhaW5lcntcclxuICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gICBncmlkLXJvdzogMSAvIDI7XHJcbiBcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVye1xyXG4gICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcclxufVxyXG4uZm9ybS1jb250YWluZXIgaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LWZhbWlseTp2YXIoLS1kZWNvcmF0aXZlRm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBcclxufVxyXG4uZm9ybS1jb250YWluZXIgZm9ybSB7XHJcbiAgICBcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogd2hpdGUgc29saWQgMnB4O1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGVhdDtcclxuICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbn1cclxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgLCB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5pbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIFxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjAwMDAxKVxyXG59XHJcblxyXG5mb3JtIGlucHV0LCBmb3JtIHRleHRhcmVhe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpIDJweCBzb2xpZDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpbnB1dDpmb2N1cyB+IGxhYmVsLFxyXG4uZm9ybS1jb250YWluZXIgdGV4dGFyZWE6Zm9jdXMgfiBsYWJlbCxcclxuLmZvcm0tY29udGFpbmVyIGlucHV0OnZhbGlkIH4gbGFiZWwsXHJcbi5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYTp2YWxpZCB+IGxhYmVsIHtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxubGFiZWx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jZ2Rwci1sYWJlbHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxudGV4dGFyZWEsIGlucHV0LCBsYWJlbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogdmFyKC0taW52KSBzb2xpZCAycHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVjb3JhdGl2ZUZvbnQpO1xyXG59XHJcbnRleHRhcmVhe1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDFmcjtcclxufVxyXG5maWVsZHNldCBsYWJlbCBhe1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICB0cmFuc2l0aW9uOiBjb2xvciAuNXM7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmZpZWxkc2V0IGxhYmVsIGE6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIHNvbGlkIHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKSA7XHJcbiAgICBjb2xvcjpibHVlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dCwgLmZvcm0tY29udGFpbmVyIGJ1dHRvbntcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5gfTwvc3R5bGU+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJjb25zdWx0YW50YS1vbmxpbmVcIj5cclxuXHJcblxyXG48bWFpbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiBjb250ZW50XCI+XHJcbiAgICA8bWFpbj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkXCI+QVZPQ0FUIERPUlUgQk9URUE8L2gyPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRcIj5DT05TVUxUQU5UQSBKVVJJRElDQSBPTkxJTkUhPC9oMz5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkXCI+QVBST0FQRSBERSBEVU1ORUFWT0FTVFJBIE9SSVVOREUgQVRJIEZJITwvaDQ+XHJcbiAgICA8L21haW4+XHJcblxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwicGFyYWdyYXBoc1wiPlxyXG5cclxuICAgICAgICA8cD5DYWJpbmV0IEF2b2NhdCBEb3J1IEJvdGVhIHZpbmUgw65uIMOubnTDom1waW5hcmVhIG5ldm9pbG9yIGNsaWVuxaNpbG9yLCBwcmluIGFzaWd1cmFyZWEgZGUgc2VydmljaWkgZGVcclxuICAgICAgICAgICAgY29uc3VsdGFuxaPEgyBqdXJpZGljxIMgb25saW5lLjwvcD5cclxuXHJcbiAgICAgICAgPHA+IEFjZXN0IHRpcCBkZSBzZXJ2aWNpaSBkZSBjb25zdWx0YW7Fo8SDIGFzaWd1csSDIG8gcmV6b2x2YXJlIGZhY2lsxIMgxZ9pIHJhcGlkxIMgcGVudHJ1IGFudW1pdGUgcHJvYmxlbWVcclxuICAgICAgICAgICAganVyaWRpY2VcclxuICAgICAgICAgICAgxZ9pIG9mZXLEgyBvIHNlcmllIGRlIGF2YW50YWplIGN1bSBhciBmaSBldml0YXJlYSBkZXBsYXPEg3JpaSBjdSByZXp1bHRhdHVsIGZpcmVzYyBhbCBlY29ub21pZWkgZGVcclxuICAgICAgICAgICAgdGltcCxcclxuICAgICAgICAgICAgY29zdHVyaSBtYWkgc2PEg3p1dGUgxZ9pIG51IMOubiB1bHRpbXVsIHLDom5kLCBhdsOibmQgw65uIHZlZGVyZSBjb250ZXh0dWwgc29jaWFsLCBwxINzdHJhcmVhIHVuZWlcclxuICAgICAgICAgICAgZGlzdGFuxaPEg3JpXHJcbiAgICAgICAgICAgIHNvY2lhbGUuPC9wPlxyXG5cclxuICAgICAgICA8cD4gU29jaWV0YXRlYSDDrm4gY2FyZSB0csSDaW0gc2UgYWZsxIMgw65udHItbyBjb250aW51xIMgZXZvbHXFo2llLCBpYXIgw65uIHByZXplbnQgYcWfYSBudW1pdHVsIHByb2NlcyBkZVxyXG4gICAgICAgICAgICBkaWdpdGFsaXphcmUsIGN1cHJpbmRlIHRvdCBtYWkgbXVsdGUgc2VjdG9hcmUgYWxlIHZpZcWjaWkgZWNvbm9taWNvIHNvY2lhbGUgxZ9pIGFzaWd1csSDIG8gcGFsZXTEgyBkaW5cclxuICAgICAgICAgICAgY2Ugw65uIGNlXHJcbiAgICAgICAgICAgIG1haSBsYXJnxIMgZGUgc2VydmljaWkuPC9wPlxyXG5cclxuICAgIDwvbWFpbj5cclxuPC9tYWluPlxyXG5cclxuPEZvcm0vPlxyXG48R29vZ2xlTWFwcyAvPlxyXG48L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnN1bHRhbnRhT25saW5lIl19 */\n/*@ sourceURL=/mnt/d/Repos/Projects/DoruBoteaNextJS/components/ConsultantaOnline/consultantaOnline.tsx */"
    }, void 0, false, void 0, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      id: "consultanta-online",
      className: "jsx-1600609607",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: "jsx-1600609607" + " " + "description content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
          className: "jsx-1600609607",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "jsx-1600609607" + " " + "section-head",
            children: "AVOCAT DORU BOTEA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 9
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "jsx-1600609607" + " " + "section-head",
            children: "CONSULTANTA JURIDICA ONLINE!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 9
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            className: "jsx-1600609607" + " " + "section-head",
            children: "APROAPE DE DUMNEAVOASTRA ORIUNDE ATI FI!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 5
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
          className: "jsx-1600609607" + " " + "paragraphs",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "jsx-1600609607",
            children: "Cabinet Avocat Doru Botea vine \xEEn \xEEnt\xE2mpinarea nevoilor clien\u0163ilor, prin asigurarea de servicii de consultan\u0163\u0103 juridic\u0103 online."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 9
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "jsx-1600609607",
            children: " Acest tip de servicii de consultan\u0163\u0103 asigur\u0103 o rezolvare facil\u0103 \u015Fi rapid\u0103 pentru anumite probleme juridice \u015Fi ofer\u0103 o serie de avantaje cum ar fi evitarea deplas\u0103rii cu rezultatul firesc al economiei de timp, costuri mai sc\u0103zute \u015Fi nu \xEEn ultimul r\xE2nd, av\xE2nd \xEEn vedere contextul social, p\u0103strarea unei distan\u0163\u0103ri sociale."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 9
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "jsx-1600609607",
            children: " Societatea \xEEn care tr\u0103im se afl\u0103 \xEEntr-o continu\u0103 evolu\u0163ie, iar \xEEn prezent a\u015Fa numitul proces de digitalizare, cuprinde tot mai multe sectoare ale vie\u0163ii economico sociale \u015Fi asigur\u0103 o palet\u0103 din ce \xEEn ce mai larg\u0103 de servicii."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 1
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_form__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 1
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoogleMaps_GoogleMaps__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 1
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_c = ConsultantaOnline;
/* harmony default export */ __webpack_exports__["default"] = (ConsultantaOnline);

var _c;

$RefreshReg$(_c, "ConsultantaOnline");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/GoogleMaps/GoogleMaps.tsx":
/*!**********************************************!*\
  !*** ./components/GoogleMaps/GoogleMaps.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GoogleMaps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/GoogleMaps/GoogleMaps.tsx";

function GoogleMaps() {
  function assignGmap() {
    setTimeout(function () {
      gmap = "https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Strada Iuliu Maniu 47 Brașov 500091&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
    }, 1000);
  }

  var gmap = "";
  assignGmap();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3773167242",
      children: ".mapouter.jsx-3773167242{grid-column:1 / 4;grid-row:2 / 3;position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas.jsx-3773167242{overflow:hidden;background:none !important;width:100%;height:400px;}.gmap_iframe.jsx-3773167242{height:400px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9SZXBvcy9Qcm9qZWN0cy9Eb3J1Qm90ZWFOZXh0SlMvY29tcG9uZW50cy9Hb29nbGVNYXBzL0dvb2dsZU1hcHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVPLEFBSTJCLEFBU0YsQUFPUSxnQkFORyxFQVRaLE1BZ0JqQixTQWZvQixVQVNQLFFBUk0sR0FTSixhQUNmLENBVGEsV0FDRSxhQUNmIiwiZmlsZSI6Ii9tbnQvZC9SZXBvcy9Qcm9qZWN0cy9Eb3J1Qm90ZWFOZXh0SlMvY29tcG9uZW50cy9Hb29nbGVNYXBzL0dvb2dsZU1hcHMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHb29nbGVNYXBzKCkge1xyXG5cclxuICBmdW5jdGlvbiBhc3NpZ25HbWFwKCl7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT5cclxuICAgIHsgZ21hcD0gXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzP3dpZHRoPTYwMCZhbXA7aGVpZ2h0PTQwMCZhbXA7aGw9ZW4mYW1wO3E9U3RyYWRhIEl1bGl1IE1hbml1IDQ3IEJyYciZb3YgNTAwMDkxJmFtcDt0PSZhbXA7ej0xNCZhbXA7aWU9VVRGOCZhbXA7aXdsb2M9QiZhbXA7b3V0cHV0PWVtYmVkXCJ9LCAxMDAwKTtcclxuICAgIFxyXG4gIH1cclxuIFxyXG5sZXQgZ21hcCA9XCJcIlxyXG5hc3NpZ25HbWFwKClcclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgXHJcbiAgICAgIC5tYXBvdXRlciB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xyXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmdtYXBfY2FudmFzIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZ21hcF9pZnJhbWUge1xyXG4gICAgICAgIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm1hcG91dGVyXCI+XHJcbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJnbWFwX2NhbnZhc1wiPlxyXG4gICAgICAgICAgICA8aWZyYW1lIGxvYWRpbmc9XCJsYXp5XCIgY2xhc3NOYW1lPVwiZ21hcF9pZnJhbWVcIiB3aWR0aD1cIjEwMCVcIiBmcmFtZUJvcmRlcj1cIjBcIiBzY3JvbGxpbmc9XCJub1wiXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc3JjPXtnbWFwfSA+PC9pZnJhbWU+XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgXHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIl19 */\n/*@ sourceURL=/mnt/d/Repos/Projects/DoruBoteaNextJS/components/GoogleMaps/GoogleMaps.tsx */"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "jsx-3773167242" + " " + "mapouter",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: "jsx-3773167242" + " " + "gmap_canvas",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("iframe", {
          loading: "lazy",
          width: "100%",
          frameBorder: "0",
          scrolling: "no",
          src: gmap,
          className: "jsx-3773167242" + " " + "gmap_iframe"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}
_c = GoogleMaps;

var _c;

$RefreshReg$(_c, "GoogleMaps");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/firstSection/firstSection.tsx":
/*!**************************************************!*\
  !*** ./components/firstSection/firstSection.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/firstSection/firstSection.tsx",
    _s = $RefreshSig$();


var currentText = "";
var index = 0;
var textContent = [" drept penal", " dreptul familiei", " drept civil", " malpraxis medical", " dreptul muncii", " executari silite"];

function FirsSection() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(textContent[0]),
      state = _useState[0],
      setState = _useState[1];

  var changeText = function changeText() {
    index < textContent.length - 1 ? index++ : index = 0;
    currentText = textContent[index];
    setState(currentText);
  };

  setTimeout(changeText, 3000);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "first-section",
    id: "top",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "content",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "mb-4 hero-text",
          children: ["Avocat ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "name",
            children: "Doru Botea"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 28
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
            className: "my-4 d-block line"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "my-4 d-block specializari ",
            children: "Profesionalism si Incredere"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "d-block mt-4 dinamic",
            children: state
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "main-cta btn btn1 from-left",
          href: "#servicii",
          children: "vedeti mai multe"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

_s(FirsSection, "3Q0LkTZt2Vx8qcOl+eNZ2RD0KQQ=");

_c = FirsSection;
/* harmony default export */ __webpack_exports__["default"] = (FirsSection);

var _c;

$RefreshReg$(_c, "FirsSection");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/servicii/date/servicii.js":
/*!**********************************************!*\
  !*** ./components/servicii/date/servicii.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
var servicii = [{
  id: 1,
  name: "Drept Penal",
  icon: "/assets/images/svg/penal.png",
  description: "Asistență și reprezentare juridică în faza de urmărire penală și în fața instanțelor de judecată atât pentru persoane cercetate (suspecți, inculpați) cât și pentru părți civile/vătămate.",
  route: " /drept-penal",
  alt: "icon Drept Penal"
}, {
  id: 2,
  name: "Dreptul Familiei",
  icon: "/assets/images/svg/familie.png",
  description: "Consultanță și asistență juridica în cauzele de divort, stabilirea domiciliului copilului, exercitarea autoritatii parintesti, pensie de intretinere cat si program de vizita. Partaj bunuri comune in fata instantelor de judecata cat si a tuturor autoritatilor/institutiilor publice.",
  route: "/dreptul-familiei",
  alt: "icon Drept Penal"
}, {
  id: 3,
  name: "Drept Civil",
  icon: "/assets/images/svg/civil.png",
  description: "Asistență, consultanță și reprezentare juridică în toate ramurile dreptului civil, litigii între profesioniști, contracte, succesiuni, divorț, partaj, drepturi nepatrimoniale, drept societar.",
  route: "/drept-civil"
}, {
  id: 4,
  name: "Malpraxis Medical",
  icon: "/assets/images/svg/malpraxis.png",
  description: "Asistență juridică în fața Colegiului Medicilor, cât și pe durata unui eventual litigiu în fața instanțelor judecătorești",
  route: "/malpraxis-medical"
}, {
  id: 5,
  name: "Dreptul Muncii",
  icon: "/assets/images/svg/munca.png",
  description: "Consultanță pentru angajatori și angajați, asistență și reprezentare în vederea soluționării litigiilor de muncă.",
  route: "/dreptul-muncii"
}, {
  id: 6,
  name: "Executari Silite",
  icon: "/assets/images/svg/executari.png",
  description: "Asistență, consultanță și reprezentare juridică în toate ramurile dreptului civil, litigii între profesioniști, contracte, succesiuni, divorț, partaj, drepturi nepatrimoniale, drept societar.",
  route: "/executari"
}, {
  id: 7,
  name: "Drept Imobiliar",
  icon: "/assets/images/svg/imobiliar.png",
  description: "Cabinet Avocat Doru Botea Brasov profeseaza si in Drept Imobiliar, tranzactii imobiliare, dreptul constructiilor si asigura consiliere societatilor comerciale si marilor companii de investitii, gestionand tranzactii si litigii complexe de natura imobiliara.",
  route: "/imobiliar"
}, {
  id: 8,
  name: "Drept Contraventional",
  icon: "/assets/images/svg/contraventional.png",
  description: "Asistenta juridica si reprezentare in litigiile care au ca obiect anularea procesului-verbal de contraventie ca urmare a intervenirii prescriptiei raspunderii contraventionale si a caducitatii acestuia; Orice alte activitati din domeniul contraventiilor.",
  route: "/contraventional"
}, {
  id: 9,
  name: "Drept Bancar",
  icon: "/assets/images/svg/bancar.png",
  description: "Cabinetul de avocatura “Doru Botea” oferim partenerilor noștri un serviciu dedicat de consultanță juridică în relația banca",
  route: "/bancar"
}, {
  id: 10,
  name: "Drept Administrativ",
  icon: "/assets/images/svg/administrativ.png",
  description: "Această materie reglementează dreptul persoanei care se consideră vătămată într-un drept al său ori într-un interes legitim, de către o autoritate publică",
  route: "/administrativ"
}];
/* harmony default export */ __webpack_exports__["default"] = (servicii);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/servicii/servicii-container.tsx":
/*!****************************************************!*\
  !*** ./components/servicii/servicii-container.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _servicii_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicii-wrapper */ "./components/servicii/servicii-wrapper.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/servicii/servicii-container.tsx",
    _this = undefined;




var ServiciiContainer = function ServiciiContainer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "servicii-detalii",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: "section-img"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: "section-title"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Servicii"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: "h1-separator",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: "/assets/images/decorative/h1-separator-custom-icon-1.png",
          alt: "image",
          width: 50,
          height: 50,
          objectFit: "contain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_servicii_wrapper__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 1
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: "h1-separator",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: "/assets/images/decorative/h1-separator-custom-icon-1.png",
          alt: "image",
          width: 50,
          height: 50,
          objectFit: "contain"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 1
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 1
    }, _this)
  }, void 0, false);
};

_c = ServiciiContainer;
/* harmony default export */ __webpack_exports__["default"] = (ServiciiContainer);

var _c;

$RefreshReg$(_c, "ServiciiContainer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/servicii/servicii-wrapper.tsx":
/*!**************************************************!*\
  !*** ./components/servicii/servicii-wrapper.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_d_Repos_Projects_DoruBoteaNextJS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _mnt_d_Repos_Projects_DoruBoteaNextJS_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _date_servicii_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date/servicii.js */ "./components/servicii/date/servicii.js");
/* harmony import */ var _serviciiCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviciiCard */ "./components/servicii/serviciiCard.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/servicii/servicii-wrapper.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_mnt_d_Repos_Projects_DoruBoteaNextJS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function ServiciiWrapper() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_date_servicii_js__WEBPACK_IMPORTED_MODULE_4__.default),
      state = _useState[0],
      setState = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row d-flex justify-content-around",
        children: state.map(function (_ref) {
          var id = _ref.id,
              otherSectionProps = (0,_mnt_d_Repos_Projects_DoruBoteaNextJS_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["id"]);

          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_serviciiCard__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread({}, otherSectionProps), id, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

_s(ServiciiWrapper, "pY2ylmGMD1XMuvZJ0j/H45DsQto=");

_c = ServiciiWrapper;
/* harmony default export */ __webpack_exports__["default"] = (ServiciiWrapper);

var _c;

$RefreshReg$(_c, "ServiciiWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/servicii/serviciiCard.tsx":
/*!**********************************************!*\
  !*** ./components/servicii/serviciiCard.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ServiciiCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/servicii/serviciiCard.tsx";

function ServiciiCard(_ref) {
  var icon = _ref.icon,
      name = _ref.name,
      description = _ref.description,
      route = _ref.route;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-lg-3  col-md-6 col-sm-12 mb-3 servicii-container card transparent-card",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "section-head card-header",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: " align-self-center card-img-top",
        src: icon,
        alt: "Icons Of Servici",
        width: 50,
        height: 10,
        layout: "responsive",
        objectFit: "contain",
        quality: 100
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content card-body",
        id: name,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "paragraphs",
          children: [" ", description, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "btn btn1 from-left d-block",
          href: route,
          children: "cititi mai mult"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this)
  }, void 0, false);
}
_c = ServiciiCard;

var _c;

$RefreshReg$(_c, "ServiciiCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "./node_modules/next/dist/next-server/lib/to-base-64.js");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "./node_modules/next/dist/next-server/server/image-config.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (false) {}

var VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
var loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
var VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

var _ref2 = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[],"enableBlurryPlaceholder":false} || _imageConfig.imageConfigDefault,
    configDeviceSizes = _ref2.deviceSizes,
    configImageSizes = _ref2.imageSizes,
    configLoader = _ref2.loader,
    configPath = _ref2.path,
    configDomains = _ref2.domains,
    configEnableBlurryPlaceholder = _ref2.enableBlurryPlaceholder; // sort smallest to largest


var allSizes = [].concat(_toConsumableArray(configDeviceSizes), _toConsumableArray(configImageSizes));
configDeviceSizes.sort(function (a, b) {
  return a - b;
});
allSizes.sort(function (a, b) {
  return a - b;
});

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    var viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    var percentSizes = [];

    for (var match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      var smallestRatio = Math.min.apply(Math, percentSizes) * 0.01;
      return {
        widths: allSizes.filter(function (s) {
          return s >= configDeviceSizes[0] * smallestRatio;
        }),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  var widths = _toConsumableArray(new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(function (w) {
    return allSizes.find(function (p) {
      return p >= w;
    }) || allSizes[allSizes.length - 1];
  })));

  return {
    widths: widths,
    kind: 'x'
  };
}

function generateImgAttrs(_ref3) {
  var src = _ref3.src,
      unoptimized = _ref3.unoptimized,
      layout = _ref3.layout,
      width = _ref3.width,
      quality = _ref3.quality,
      sizes = _ref3.sizes,
      loader = _ref3.loader;

  if (unoptimized) {
    return {
      src: src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  var _getWidths = getWidths(width, layout, sizes),
      widths = _getWidths.widths,
      kind = _getWidths.kind;

  var last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map(function (w, i) {
      return "".concat(loader({
        src: src,
        quality: quality,
        width: w
      }), " ").concat(kind === 'w' ? w : i + 1).concat(kind);
    }).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src: src,
      quality: quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  var load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2["default"])({
      root: configPath
    }, loaderProps));
  }

  throw new Error("Unknown \"loader\" found in \"next.config.js\". Expected: ".concat(_imageConfig.VALID_LOADERS.join(', '), ". Received: ").concat(configLoader));
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(element, placeholder) {
  if (placeholder === 'blur' && element) {
    if (element.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      element.style.backgroundImage = 'none';
    } else {
      element.onload = function () {
        element.style.backgroundImage = 'none';
      };
    }
  }
}

function Image(_ref) {
  var src = _ref.src,
      sizes = _ref.sizes,
      _ref$unoptimized = _ref.unoptimized,
      unoptimized = _ref$unoptimized === void 0 ? false : _ref$unoptimized,
      _ref$priority = _ref.priority,
      priority = _ref$priority === void 0 ? false : _ref$priority,
      loading = _ref.loading,
      className = _ref.className,
      quality = _ref.quality,
      width = _ref.width,
      height = _ref.height,
      objectFit = _ref.objectFit,
      objectPosition = _ref.objectPosition,
      _ref$loader = _ref.loader,
      loader = _ref$loader === void 0 ? defaultImageLoader : _ref$loader,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'empty' : _ref$placeholder,
      blurDataURL = _ref.blurDataURL,
      all = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  var rest = all;
  var layout = sizes ? 'responsive' : 'intrinsic';
  var unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (!configEnableBlurryPlaceholder) {
    placeholder = 'empty';
  }

  if (true) {
    if (!src) {
      throw new Error("Image is missing required \"src\" property. Make sure you pass \"src\" in props to the `next/image` component. Received: ".concat(JSON.stringify({
        width: width,
        height: height,
        quality: quality
      })));
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"layout\" property. Provided \"").concat(layout, "\" should be one of ").concat(VALID_LAYOUT_VALUES.map(String).join(','), "."));
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"loading\" property. Provided \"").concat(loading, "\" should be one of ").concat(VALID_LOADING_VALUES.map(String).join(','), "."));
    }

    if (priority && loading === 'lazy') {
      throw new Error("Image with src \"".concat(src, "\" has both \"priority\" and \"loading='lazy'\" properties. Only one should be used."));
    }

    if (unsized) {
      throw new Error("Image with src \"".concat(src, "\" has deprecated \"unsized\" property, which was removed in favor of the \"layout='fill'\" property"));
    }
  }

  var isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  var _ref4 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  }),
      _ref5 = _slicedToArray(_ref4, 2),
      setRef = _ref5[0],
      isIntersected = _ref5[1];

  var isVisible = !isLazy || isIntersected;
  var widthInt = getInt(width);
  var heightInt = getInt(height);
  var qualityInt = getInt(quality);
  var MIN_IMG_SIZE_FOR_PLACEHOLDER = 5000;
  var tooSmallForBlurryPlaceholder = widthInt && heightInt && widthInt * heightInt < MIN_IMG_SIZE_FOR_PLACEHOLDER;
  var shouldShowBlurryPlaceholder = placeholder === 'blur' && !tooSmallForBlurryPlaceholder;
  var wrapperStyle;
  var sizerStyle;
  var sizerSvg;
  var imgStyle = (0, _extends2["default"])({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit: objectFit,
    objectPosition: objectPosition
  }, shouldShowBlurryPlaceholder ? {
    backgroundSize: 'cover',
    backgroundImage: "url(\"".concat(blurDataURL, "\")")
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    var quotient = heightInt / widthInt;
    var paddingTop = isNaN(quotient) ? '100%' : "".concat(quotient * 100, "%");

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop: paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = "<svg width=\"".concat(widthInt, "\" height=\"").concat(heightInt, "\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"/>");
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error("Image with src \"".concat(src, "\" must use \"width\" and \"height\" properties or \"layout='fill'\" property."));
    }
  }

  var imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src: src,
      unoptimized: unoptimized,
      layout: layout,
      width: widthInt,
      quality: qualityInt,
      sizes: sizes,
      loader: loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react["default"].createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: "data:image/svg+xml;base64,".concat((0, _toBase.toBase64)(sizerSvg))
  }) : null) : null, !isVisible && /*#__PURE__*/_react["default"].createElement("noscript", null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, generateImgAttrs({
    src: src,
    unoptimized: unoptimized,
    layout: layout,
    width: widthInt,
    quality: qualityInt,
    sizes: sizes,
    loader: loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: function ref(element) {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


_c = Image;

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader(_ref6) {
  var root = _ref6.root,
      src = _ref6.src,
      width = _ref6.width,
      quality = _ref6.quality;
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  var params = ['auto=format', 'fit=max', 'w=' + width];
  var paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return "".concat(root).concat(normalizeSrc(src)).concat(paramsString);
}

function akamaiLoader(_ref7) {
  var root = _ref7.root,
      src = _ref7.src,
      width = _ref7.width;
  return "".concat(root).concat(normalizeSrc(src), "?imwidth=").concat(width);
}

function cloudinaryLoader(_ref8) {
  var root = _ref8.root,
      src = _ref8.src,
      width = _ref8.width,
      quality = _ref8.quality;
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  var params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  var paramsString = params.join(',') + '/';
  return "".concat(root).concat(paramsString).concat(normalizeSrc(src));
}

function defaultLoader(_ref9) {
  var root = _ref9.root,
      src = _ref9.src,
      width = _ref9.width,
      quality = _ref9.quality;

  if (true) {
    var missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error("Next Image Optimization requires ".concat(missingValues.join(', '), " to be provided. Make sure you pass them as props to the `next/image` component. Received: ").concat(JSON.stringify({
        src: src,
        width: width,
        quality: quality
      })));
    }

    if (src.startsWith('//')) {
      throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)"));
    }

    if (!src.startsWith('/') && configDomains) {
      var parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, if using relative image it must start with a leading slash \"/\" or be an absolute URL (http:// or https://)"));
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error("Invalid src prop (".concat(src, ") on `next/image`, hostname \"").concat(parsedSrc.hostname, "\" is not configured under images in your `next.config.js`\n") + "See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host");
      }
    }
  }

  return "".concat(root, "?url=").concat(encodeURIComponent(src), "&w=").concat(width, "&q=").concat(quality || 75);
}

var _c;

$RefreshReg$(_c, "Image");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react.useRef)();

  var _ref2 = (0, _react.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      visible = _ref3[0],
      setVisible = _ref3[1];

  var setRef = (0, _react.useCallback)(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = function () {};

var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/to-base-64.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/to-base-64.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.toBase64 = toBase64;
/**
* Isomorphic base64 that works on the server and client
*/

function toBase64(str) {
  if (false) {} else {
    return window.btoa(str);
  }
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var _components_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/firstSection/firstSection */ "./components/firstSection/firstSection.tsx");
/* harmony import */ var _components_servicii_servicii_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/servicii/servicii-container */ "./components/servicii/servicii-container.tsx");
/* harmony import */ var _components_ConsultantaOnline_consultantaOnline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ConsultantaOnline/consultantaOnline */ "./components/ConsultantaOnline/consultantaOnline.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/pages/index.tsx";






function Home() {
  var title = "Avocat Brasov Doru Botea";
  var description = "";
  var imageUrl = 'assets/images/background1.jpg';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preload",
        href: imageUrl,
        as: "image",
        className: "jsx-1630906222"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 1
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_3__.NextSeo, {
      title: title,
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_servicii_servicii_container__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConsultantaOnline_consultantaOnline__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1630906222",
      children: "body{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}header,section,.first-section,.second-section,#consultanta-online{margin:auto;}.content{position:relative;z-index:0;}body,.first-section{background-blend-mode:darken;background-color:var(--transparent);background-image:url(\"/assets/images/background1.jpg\");background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position:center;}.first-section .content:first-child{text-align:center;}.first-section .content{height:100vh;font-family:var(--decorativeFont);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:var(--site-width);-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;justify-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-transform:uppercase;font-size:1.8rem;line-height:1.5;}.dinamic{position:relative;display:block;color:var(--secondary-font-color);}.name{color:var(--secondary-font-color);}.specializari{border-bottom:solid 1px var(--secondary-font-color);}.hero-text{padding-bottom:2rem;}.main-cta{-webkit-letter-spacing:1.1rem;-moz-letter-spacing:1.1rem;-ms-letter-spacing:1.1rem;letter-spacing:1.1rem;}.second-section{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;background-image:url(/assets/images/section2\\ background.jpg);background-position:center;background-size:cover;background-repeat:no-repeat;}.cards{width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;gap:5px;font-family:var(--decorativeFont);}#servicii{padding-bottom:2em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;text-align:center;text-shadow:10px 10px 5px var(--transparent);margin-top:10%;z-index:0;background-color:var(--primary-color-transparent);background-attachment:fixed;overflow-x:hidden;}.servicii-btn{background-color:var(--primary-color-transparent);color:var(--primary-font-color);}.servicii-btn,.servicii-btn:hover{max-width:100%;min-width:250px;}.servicii-btn span{font-size:0.7rem;font-weight:bold;}.servicii-detalii{margin:auto;margin-right:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-self:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;padding-bottom:2em;}.first-section,.servicii-detalii{background-color:var(--transparent);}.section-img{height:40vh;width:100%;text-transform:uppercase;font-size:2rem;background-position:center;background-size:cover;background-repeat:no-repeat;background-image:url(/assets/images/ServiciiBG.jpg);position:relative;}.section-title{margin-top:1.5rem;font-size:1.5rem;text-transform:uppercase;}.section-head,.section-title{overflow-wrap:normal;display:block;text-align:center;color:var( --secondary-font-color);}.mapouter{grid-column:1 / 4;grid-row:2 / 3;}.transparent-card{background-color:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9SZXBvcy9Qcm9qZWN0cy9Eb3J1Qm90ZWFOZXh0SlMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDbUIsQUFXa0IsQUFLRCxBQUtNLEFBUVcsQUFXWCxBQUtMLEFBZUssQUFPckIsQUFFdUQsQUFLaEMsQUFHRSxBQVdULEFBY0YsQUFrQlEsQUFxQitCLEFBTW5DLEFBS0UsQUFRTCxBQVl3QixBQUl4QixBQWNNLEFBS0csQUFVSCxBQVFZLFdBOUdsQixDQXRGZCxBQWdKb0IsQUFnQlAsQ0FuSXNCLEVBc0dqQixFQUtDLENBbElQLEFBa0JaLEFBb0JnQixBQWtJRyxBQWVGLENBckZGLENBOUNmLENBMEhnQixFQTVGRCxBQXlFWSxLQXpKM0IsQ0FLc0MsQUF5THBDLENBckRhLENBYmQsQ0F2Rm1DLENBaUpwQyxDQTVJQSxBQXVGQSxDQXNDMkIsQUFNUCxDQXpCcEIsV0E5SG9CLENBb0lILEVBckNpQixFQXhFbEMsQ0FpSW9DLE9BTnBDLEdBYjZCLEVBcko0QixDQWdDekQsUUFuRHdCLEFBNkVDLFFBdUR6QixNQXlEQSxFQXBCd0IsR0EzRE8sSUFoQlYsT0F5REssQ0FyRjFCLE9Bd0c4QixRQXRKQSxvQkFnQlYsQUF1SWtDLFFBdEo5QixJQXBCeEIsTUFvQ2UsQUF5Q00sUUFpQlUsSUF6RUQsa0JBa0lULElBcUJELE1BdEpTLFlBdUo3QixNQS9EcUIsU0F0RnJCLE9BYTBCLG1CQXlDSyxLQXhDVix5QkFrSEMsSUF6Q0YsSUFoQkEsWUEwRFcsd0JBbEhQLHFCQUNFLFVBd0VMLElBZlAsTUFsQkQsTUFvQkgsS0FuQnNELEdBc0I1QixrQ0FDcEMsVUFtRGEsV0FDUSxJQXpFUSxNQXpDRixJQXdFZCxLQTJDYixNQTFDb0IsTUEvQkksSUF6Q0wsUUF5RTRCLFNBeEU3QixDQXlDWSxlQXhDOUIsYUF5Q0EsT0FnQ2lCLGVBRUwsVUFDd0Msa0RBQ3RCLDRCQUNWLGtCQUdwQiIsImZpbGUiOiIvbW50L2QvUmVwb3MvUHJvamVjdHMvRG9ydUJvdGVhTmV4dEpTL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7TmV4dFNlb30gZnJvbSAnbmV4dC1zZW8nXHJcbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9maXJzdFNlY3Rpb24vZmlyc3RTZWN0aW9uJ1xyXG5pbXBvcnQgU2VydmljaWlDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZXJ2aWNpaS9zZXJ2aWNpaS1jb250YWluZXInXHJcbmltcG9ydCBDb25zdWx0YW50YU9ubGluZSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnN1bHRhbnRhT25saW5lL2NvbnN1bHRhbnRhT25saW5lJ1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbmNvbnN0IHRpdGxlID0gXCJBdm9jYXQgQnJhc292IERvcnUgQm90ZWFcIiBcclxuY29uc3QgZGVzY3JpcHRpb24gPSBcIlwiXHJcbmNvbnN0IGltYWdlVXJsID0gJ2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDEuanBnJ1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG48SGVhZD4gXHJcbiAgPGxpbmtcclxuICAgIHJlbD1cInByZWxvYWRcIlxyXG4gICAgaHJlZj17aW1hZ2VVcmx9XHJcbiAgICBhcz1cImltYWdlXCJcclxuICAvPlxyXG48L0hlYWQ+XHJcbiAgICAgIDxOZXh0U2VvIHRpdGxlID0ge3RpdGxlfSBkZXNjcmlwdGlvbiA9e2Rlc2NyaXB0aW9ufS8+XHJcbiAgICAgIFxyXG4gICAgICA8Rmlyc3RTZWN0aW9uIC8+XHJcbiAgICAgIDxTZXJ2aWNpaUNvbnRhaW5lciAvPlxyXG4gICAgICA8Q29uc3VsdGFudGFPbmxpbmUgLz5cclxuICAgICAgXHJcbiAgICAgIFxyXG5cclxuPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmJvZHl7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIGhlYWRlciwgc2VjdGlvbiwgLmZpcnN0LXNlY3Rpb24sIC5zZWNvbmQtc2VjdGlvbiwgI2NvbnN1bHRhbnRhLW9ubGluZXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gICAgei1pbmRleDogMDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgXHJcbiAgYm9keSwgLmZpcnN0LXNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQxLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmZpcnN0LXNlY3Rpb24gLmNvbnRlbnQ6Zmlyc3QtY2hpbGR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmZpcnN0LXNlY3Rpb24gLmNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZm9udC1mYW1pbHk6dmFyKC0tZGVjb3JhdGl2ZUZvbnQpO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiB2YXIoLS1zaXRlLXdpZHRoKTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXIgO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcbiAgXHJcbiAgLmRpbmFtaWN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYW1le1xyXG4gICAgY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpXHJcbiAgfVxyXG4gIC5zcGVjaWFsaXphcml7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xyXG4gIH1cclxuXHJcblxyXG4gIC5oZXJvLXRleHR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICB9XHJcbiAgLm1haW4tY3Rhe1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMXJlbTtcclxuICB9XHJcbiAgICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICAuc2Vjb25kLXNlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OmNvbHVtbiBub3dyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9zZWN0aW9uMlxcIGJhY2tncm91bmQuanBnKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5jYXJkc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgXHJcbiAgICBnYXA6IDVweDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVjb3JhdGl2ZUZvbnQpO1xyXG4gIH1cclxuXHJcbiAgI3NlcnZpY2lpe1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtc2hhZG93OiAxMHB4IDEwcHggNXB4IHZhcigtLXRyYW5zcGFyZW50KTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgXHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci10cmFuc3BhcmVudCk7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnNlcnZpY2lpLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdHJhbnNwYXJlbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZm9udC1jb2xvcik7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAgLnNlcnZpY2lpLWJ0biwgLnNlcnZpY2lpLWJ0bjpob3ZlcntcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgIH0gXHJcbiAgXHJcbiAgLnNlcnZpY2lpLWJ0biBzcGFue1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcblxyXG4gIFxyXG4gIFxyXG4gIC5zZXJ2aWNpaS1kZXRhbGlpe1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG4gIH1cclxuICBcclxuICAuZmlyc3Qtc2VjdGlvbiwgLnNlcnZpY2lpLWRldGFsaWl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWN0aW9uLWltZ3tcclxuICAgIGhlaWdodDogNDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL1NlcnZpY2lpQkcuanBnKTtcclxuICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcblxyXG4gIC5zZWN0aW9uLXRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAuc2VjdGlvbi1oZWFkLCAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XHJcblxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGNvbG9yOiB2YXIoIC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xyXG4gICBcclxuICB9XHJcblxyXG5cclxuICAubWFwb3V0ZXJ7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XHJcbiAgICBncmlkLXJvdzogMiAvIDM7XHJcbiAgfVxyXG5cclxuICBcclxuICAudHJhbnNwYXJlbnQtY2FyZCB7XHJcbiAgIFxyXG4gICAgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG5gfTwvc3R5bGU+XHJcblxyXG48Lz5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=/mnt/d/Repos/Projects/DoruBoteaNextJS/pages/index.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ (function(module) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ (function(module) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ (function(module) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ (function(module) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ (function(module) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/next-seo/lib/next-seo.module.js":
/*!******************************************************!*\
  !*** ./node_modules/next-seo/lib/next-seo.module.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleJsonLd": function() { return /* binding */ ArticleJsonLd; },
/* harmony export */   "BlogJsonLd": function() { return /* binding */ BlogJsonLd; },
/* harmony export */   "BreadcrumbJsonLd": function() { return /* binding */ BreadCrumbJsonLd; },
/* harmony export */   "CarouselJsonLd": function() { return /* binding */ CarouselJsonLd; },
/* harmony export */   "CollectionPageJsonLd": function() { return /* binding */ CollectionPageJsonLd; },
/* harmony export */   "CorporateContactJsonLd": function() { return /* binding */ CorporateContactJsonLd; },
/* harmony export */   "CourseJsonLd": function() { return /* binding */ CourseJsonLd; },
/* harmony export */   "DatasetJsonLd": function() { return /* binding */ DatasetJsonLd; },
/* harmony export */   "DefaultSeo": function() { return /* binding */ _default; },
/* harmony export */   "EventJsonLd": function() { return /* binding */ EventJsonLd; },
/* harmony export */   "FAQPageJsonLd": function() { return /* binding */ FAQPageJsonLd; },
/* harmony export */   "JobPostingJsonLd": function() { return /* binding */ JobPostingJsonLd; },
/* harmony export */   "LocalBusinessJsonLd": function() { return /* binding */ LocalBusinessJsonLd; },
/* harmony export */   "LogoJsonLd": function() { return /* binding */ LogoJsonLd; },
/* harmony export */   "NewsArticleJsonLd": function() { return /* binding */ NewsArticleJsonLd; },
/* harmony export */   "NextSeo": function() { return /* binding */ _default$1; },
/* harmony export */   "ProductJsonLd": function() { return /* binding */ ProductJsonLd; },
/* harmony export */   "ProfilePageJsonLd": function() { return /* binding */ ProfilePageJsonLd; },
/* harmony export */   "QAPageJsonld": function() { return /* binding */ QAPageJsonLd; },
/* harmony export */   "RecipeJsonLd": function() { return /* binding */ RecipeJsonLd; },
/* harmony export */   "SiteLinksSearchBoxJsonLd": function() { return /* binding */ SiteLinksSearchBoxJsonLd; },
/* harmony export */   "SocialProfileJsonLd": function() { return /* binding */ SocialProfileJsonLd; },
/* harmony export */   "SoftwareAppJsonLd": function() { return /* binding */ SoftwareAppJsonLd; },
/* harmony export */   "VideoJsonLd": function() { return /* binding */ VideoJsonLd; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var defaults = {
  templateTitle: '',
  noindex: false,
  nofollow: false,
  defaultOpenGraphImageWidth: 0,
  defaultOpenGraphImageHeight: 0,
  defaultOpenGraphVideoWidth: 0,
  defaultOpenGraphVideoHeight: 0
};

var buildTags = function buildTags(config) {
  var _config$additionalLin;

  var tagsToRender = [];

  if (config.titleTemplate) {
    defaults.templateTitle = config.titleTemplate;
  }

  var updatedTitle = '';

  if (config.title) {
    updatedTitle = config.title;

    if (defaults.templateTitle) {
      updatedTitle = defaults.templateTitle.replace(/%s/g, function () {
        return updatedTitle;
      });
    }
  } else if (config.defaultTitle) {
    updatedTitle = config.defaultTitle;
  }

  if (updatedTitle) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("title", {
      key: "title"
    }, updatedTitle));
  }

  var noindex = config.noindex || defaults.noindex || config.dangerouslySetAllPagesToNoIndex;
  var nofollow = config.nofollow || defaults.nofollow || config.dangerouslySetAllPagesToNoFollow;
  var robotsParams = '';

  if (config.robotsProps) {
    var _config$robotsProps = config.robotsProps,
        nosnippet = _config$robotsProps.nosnippet,
        maxSnippet = _config$robotsProps.maxSnippet,
        maxImagePreview = _config$robotsProps.maxImagePreview,
        maxVideoPreview = _config$robotsProps.maxVideoPreview,
        noarchive = _config$robotsProps.noarchive,
        noimageindex = _config$robotsProps.noimageindex,
        notranslate = _config$robotsProps.notranslate,
        unavailableAfter = _config$robotsProps.unavailableAfter;
    robotsParams = "" + (nosnippet ? ',nosnippet' : '') + (maxSnippet ? ",max-snippet:" + maxSnippet : '') + (maxImagePreview ? ",max-image-preview:" + maxImagePreview : '') + (noarchive ? ',noarchive' : '') + (unavailableAfter ? ",unavailable_after:" + unavailableAfter : '') + (noimageindex ? ',noimageindex' : '') + (maxVideoPreview ? ",max-video-preview:" + maxVideoPreview : '') + (notranslate ? ',notranslate' : '');
  }

  if (noindex || nofollow) {
    if (config.dangerouslySetAllPagesToNoIndex) {
      defaults.noindex = true;
    }

    if (config.dangerouslySetAllPagesToNoFollow) {
      defaults.nofollow = true;
    }

    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "robots",
      name: "robots",
      content: (noindex ? 'noindex' : 'index') + "," + (nofollow ? 'nofollow' : 'follow') + robotsParams
    }));
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "googlebot",
      name: "googlebot",
      content: (noindex ? 'noindex' : 'index') + "," + (nofollow ? 'nofollow' : 'follow') + robotsParams
    }));
  } else {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "robots",
      name: "robots",
      content: "index,follow" + robotsParams
    }));
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "googlebot",
      name: "googlebot",
      content: "index,follow" + robotsParams
    }));
  }

  if (config.description) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "description",
      name: "description",
      content: config.description
    }));
  }

  if (config.mobileAlternate) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
      rel: "alternate",
      key: "mobileAlternate",
      media: config.mobileAlternate.media,
      href: config.mobileAlternate.href
    }));
  }

  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach(function (languageAlternate) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
        rel: "alternate",
        key: "languageAlternate-" + languageAlternate.hrefLang,
        hrefLang: languageAlternate.hrefLang,
        href: languageAlternate.href
      }));
    });
  }

  if (config.twitter) {
    if (config.twitter.cardType) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "twitter:card",
        name: "twitter:card",
        content: config.twitter.cardType
      }));
    }

    if (config.twitter.site) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "twitter:site",
        name: "twitter:site",
        content: config.twitter.site
      }));
    }

    if (config.twitter.handle) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "twitter:creator",
        name: "twitter:creator",
        content: config.twitter.handle
      }));
    }
  }

  if (config.facebook) {
    if (config.facebook.appId) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "fb:app_id",
        property: "fb:app_id",
        content: config.facebook.appId
      }));
    }
  }

  if (config.openGraph) {
    if (config.openGraph.url || config.canonical) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:url",
        property: "og:url",
        content: config.openGraph.url || config.canonical
      }));
    }

    if (config.openGraph.type) {
      var type = config.openGraph.type.toLowerCase();
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:type",
        property: "og:type",
        content: type
      }));

      if (type === 'profile' && config.openGraph.profile) {
        if (config.openGraph.profile.firstName) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:first_name",
            property: "profile:first_name",
            content: config.openGraph.profile.firstName
          }));
        }

        if (config.openGraph.profile.lastName) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:last_name",
            property: "profile:last_name",
            content: config.openGraph.profile.lastName
          }));
        }

        if (config.openGraph.profile.username) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:username",
            property: "profile:username",
            content: config.openGraph.profile.username
          }));
        }

        if (config.openGraph.profile.gender) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:gender",
            property: "profile:gender",
            content: config.openGraph.profile.gender
          }));
        }
      } else if (type === 'book' && config.openGraph.book) {
        if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
          config.openGraph.book.authors.forEach(function (author, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "book:author:0" + index,
              property: "book:author",
              content: author
            }));
          });
        }

        if (config.openGraph.book.isbn) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "book:isbn",
            property: "book:isbn",
            content: config.openGraph.book.isbn
          }));
        }

        if (config.openGraph.book.releaseDate) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "book:release_date",
            property: "book:release_date",
            content: config.openGraph.book.releaseDate
          }));
        }

        if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
          config.openGraph.book.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "book:tag:0" + index,
              property: "book:tag",
              content: tag
            }));
          });
        }
      } else if (type === 'article' && config.openGraph.article) {
        if (config.openGraph.article.publishedTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:published_time",
            property: "article:published_time",
            content: config.openGraph.article.publishedTime
          }));
        }

        if (config.openGraph.article.modifiedTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:modified_time",
            property: "article:modified_time",
            content: config.openGraph.article.modifiedTime
          }));
        }

        if (config.openGraph.article.expirationTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:expiration_time",
            property: "article:expiration_time",
            content: config.openGraph.article.expirationTime
          }));
        }

        if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
          config.openGraph.article.authors.forEach(function (author, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "article:author:0" + index,
              property: "article:author",
              content: author
            }));
          });
        }

        if (config.openGraph.article.section) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:section",
            property: "article:section",
            content: config.openGraph.article.section
          }));
        }

        if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
          config.openGraph.article.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "article:tag:0" + index,
              property: "article:tag",
              content: tag
            }));
          });
        }
      } else if ((type === 'video.movie' || type === 'video.episode' || type === 'video.tv_show' || type === 'video.other') && config.openGraph.video) {
        if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
          config.openGraph.video.actors.forEach(function (actor, index) {
            if (actor.profile) {
              tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
                key: "video:actor:0" + index,
                property: "video:actor",
                content: actor.profile
              }));
            }

            if (actor.role) {
              tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
                key: "video:actor:role:0" + index,
                property: "video:actor:role",
                content: actor.role
              }));
            }
          });
        }

        if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
          config.openGraph.video.directors.forEach(function (director, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "video:director:0" + index,
              property: "video:director",
              content: director
            }));
          });
        }

        if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
          config.openGraph.video.writers.forEach(function (writer, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "video:writer:0" + index,
              property: "video:writer",
              content: writer
            }));
          });
        }

        if (config.openGraph.video.duration) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "video:duration",
            property: "video:duration",
            content: config.openGraph.video.duration.toString()
          }));
        }

        if (config.openGraph.video.releaseDate) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "video:release_date",
            property: "video:release_date",
            content: config.openGraph.video.releaseDate
          }));
        }

        if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
          config.openGraph.video.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "video:tag:0" + index,
              property: "video:tag",
              content: tag
            }));
          });
        }

        if (config.openGraph.video.series) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "video:series",
            property: "video:series",
            content: config.openGraph.video.series
          }));
        }
      }
    }

    if (config.openGraph.title || config.title) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:title",
        property: "og:title",
        content: config.openGraph.title || updatedTitle
      }));
    }

    if (config.openGraph.description || config.description) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:description",
        property: "og:description",
        content: config.openGraph.description || config.description
      }));
    } // images


    if (config.defaultOpenGraphImageWidth) {
      defaults.defaultOpenGraphImageWidth = config.defaultOpenGraphImageWidth;
    }

    if (config.defaultOpenGraphImageHeight) {
      defaults.defaultOpenGraphImageHeight = config.defaultOpenGraphImageHeight;
    }

    if (config.openGraph.images && config.openGraph.images.length) {
      config.openGraph.images.forEach(function (image, index) {
        tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
          key: "og:image:0" + index,
          property: "og:image",
          content: image.url
        }));

        if (image.alt) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:alt0" + index,
            property: "og:image:alt",
            content: image.alt
          }));
        }

        if (image.width) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:width0" + index,
            property: "og:image:width",
            content: image.width.toString()
          }));
        } else if (defaults.defaultOpenGraphImageWidth) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:width0" + index,
            property: "og:image:width",
            content: defaults.defaultOpenGraphImageWidth.toString()
          }));
        }

        if (image.height) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:height" + index,
            property: "og:image:height",
            content: image.height.toString()
          }));
        } else if (defaults.defaultOpenGraphImageHeight) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:height" + index,
            property: "og:image:height",
            content: defaults.defaultOpenGraphImageHeight.toString()
          }));
        }
      });
    } // videos


    if (config.defaultOpenGraphVideoWidth) {
      defaults.defaultOpenGraphVideoWidth = config.defaultOpenGraphVideoWidth;
    }

    if (config.defaultOpenGraphVideoHeight) {
      defaults.defaultOpenGraphVideoHeight = config.defaultOpenGraphVideoHeight;
    }

    if (config.openGraph.videos && config.openGraph.videos.length) {
      config.openGraph.videos.forEach(function (video, index) {
        tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
          key: "og:video:0" + index,
          property: "og:video",
          content: video.url
        }));

        if (video.alt) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:alt0" + index,
            property: "og:video:alt",
            content: video.alt
          }));
        }

        if (video.width) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:width0" + index,
            property: "og:video:width",
            content: video.width.toString()
          }));
        } else if (defaults.defaultOpenGraphVideoWidth) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:width0" + index,
            property: "og:video:width",
            content: defaults.defaultOpenGraphVideoWidth.toString()
          }));
        }

        if (video.height) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:height" + index,
            property: "og:video:height",
            content: video.height.toString()
          }));
        } else if (defaults.defaultOpenGraphVideoHeight) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:height" + index,
            property: "og:video:height",
            content: defaults.defaultOpenGraphVideoHeight.toString()
          }));
        }

        if (video.secureUrl) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:secure_url" + index,
            property: "og:video:secure_url",
            content: video.secureUrl.toString()
          }));
        }

        if (video.type) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:type" + index,
            property: "og:video:type",
            content: video.type.toString()
          }));
        }
      });
    }

    if (config.openGraph.locale) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:locale",
        property: "og:locale",
        content: config.openGraph.locale
      }));
    }

    if (config.openGraph.site_name) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:site_name",
        property: "og:site_name",
        content: config.openGraph.site_name
      }));
    }
  }

  if (config.canonical) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
      rel: "canonical",
      href: config.canonical,
      key: "canonical"
    }));
  }

  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach(function (tag) {
      var _ref, _ref2, _tag$keyOverride;

      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", Object.assign({
        key: "meta:" + ((_ref = (_ref2 = (_tag$keyOverride = tag.keyOverride) != null ? _tag$keyOverride : tag.name) != null ? _ref2 : tag.property) != null ? _ref : tag.httpEquiv)
      }, tag)));
    });
  }

  if ((_config$additionalLin = config.additionalLinkTags) != null && _config$additionalLin.length) {
    config.additionalLinkTags.forEach(function (tag) {
      var _tag$keyOverride2;

      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", Object.assign({
        key: "link" + ((_tag$keyOverride2 = tag.keyOverride) != null ? _tag$keyOverride2 : tag.href) + tag.rel
      }, tag)));
    });
  }

  return tagsToRender;
};

var _default = /*#__PURE__*/function (_Component) {
  _inheritsLoose(_default, _Component);

  function _default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        titleTemplate = _this$props.titleTemplate,
        defaultTitle = _this$props.defaultTitle,
        _this$props$dangerous = _this$props.dangerouslySetAllPagesToNoIndex,
        dangerouslySetAllPagesToNoIndex = _this$props$dangerous === void 0 ? false : _this$props$dangerous,
        _this$props$dangerous2 = _this$props.dangerouslySetAllPagesToNoFollow,
        dangerouslySetAllPagesToNoFollow = _this$props$dangerous2 === void 0 ? false : _this$props$dangerous2,
        description = _this$props.description,
        canonical = _this$props.canonical,
        facebook = _this$props.facebook,
        openGraph = _this$props.openGraph,
        additionalMetaTags = _this$props.additionalMetaTags,
        twitter = _this$props.twitter,
        defaultOpenGraphImageWidth = _this$props.defaultOpenGraphImageWidth,
        defaultOpenGraphImageHeight = _this$props.defaultOpenGraphImageHeight,
        defaultOpenGraphVideoWidth = _this$props.defaultOpenGraphVideoWidth,
        defaultOpenGraphVideoHeight = _this$props.defaultOpenGraphVideoHeight,
        mobileAlternate = _this$props.mobileAlternate,
        languageAlternates = _this$props.languageAlternates,
        additionalLinkTags = _this$props.additionalLinkTags;
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, buildTags({
      title: title,
      titleTemplate: titleTemplate,
      defaultTitle: defaultTitle,
      dangerouslySetAllPagesToNoIndex: dangerouslySetAllPagesToNoIndex,
      dangerouslySetAllPagesToNoFollow: dangerouslySetAllPagesToNoFollow,
      description: description,
      canonical: canonical,
      facebook: facebook,
      openGraph: openGraph,
      additionalMetaTags: additionalMetaTags,
      twitter: twitter,
      defaultOpenGraphImageWidth: defaultOpenGraphImageWidth,
      defaultOpenGraphImageHeight: defaultOpenGraphImageHeight,
      defaultOpenGraphVideoWidth: defaultOpenGraphVideoWidth,
      defaultOpenGraphVideoHeight: defaultOpenGraphVideoHeight,
      mobileAlternate: mobileAlternate,
      languageAlternates: languageAlternates,
      additionalLinkTags: additionalLinkTags
    }));
  };

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

var _default$1 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(_default, _Component);

  function _default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        _this$props$noindex = _this$props.noindex,
        noindex = _this$props$noindex === void 0 ? false : _this$props$noindex,
        nofollow = _this$props.nofollow,
        robotsProps = _this$props.robotsProps,
        description = _this$props.description,
        canonical = _this$props.canonical,
        openGraph = _this$props.openGraph,
        facebook = _this$props.facebook,
        twitter = _this$props.twitter,
        additionalMetaTags = _this$props.additionalMetaTags,
        titleTemplate = _this$props.titleTemplate,
        mobileAlternate = _this$props.mobileAlternate,
        languageAlternates = _this$props.languageAlternates,
        additionalLinkTags = _this$props.additionalLinkTags;
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, buildTags({
      title: title,
      noindex: noindex,
      nofollow: nofollow,
      robotsProps: robotsProps,
      description: description,
      canonical: canonical,
      facebook: facebook,
      openGraph: openGraph,
      additionalMetaTags: additionalMetaTags,
      twitter: twitter,
      titleTemplate: titleTemplate,
      mobileAlternate: mobileAlternate,
      languageAlternates: languageAlternates,
      additionalLinkTags: additionalLinkTags
    }));
  };

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

var markup = function markup(jsonld) {
  return {
    __html: jsonld
  };
};

var formatAuthorName = function formatAuthorName(authorName) {
  return Array.isArray(authorName) ? "[" + authorName.map(function (name) {
    return "{\"@type\": \"Person\",\"name\": \"" + name + "\"}";
  }) + "]" : "{\"@type\": \"Person\",\"name\": \"" + authorName + "\"}";
};

var ArticleJsonLd = function ArticleJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description,
      publisherName = _ref.publisherName,
      publisherLogo = _ref.publisherLogo;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"datePublished\": \"" + datePublished + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": " + formatAuthorName(authorName) + ",\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + publisherName + "\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"" + publisherLogo + "\"\n      }\n    },\n    \"description\": \"" + description + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-article" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var BreadCrumbJsonLd = function BreadCrumbJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      _ref$itemListElements = _ref.itemListElements,
      itemListElements = _ref$itemListElements === void 0 ? [] : _ref$itemListElements;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      " + itemListElements.map(function (itemListElement) {
    return "{\n        \"@type\": \"ListItem\",\n        \"position\": " + itemListElement.position + ",\n        \"item\": {\n          \"@id\": \"" + itemListElement.item + "\",\n          \"name\": \"" + itemListElement.name + "\"\n        }\n      }";
  }) + "\n     ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-breadcrumb" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildQuestions = function buildQuestions(mainEntity) {
  return "\n  " + mainEntity.map(function (question) {
    return "{\n      \"@type\": \"Question\",\n      \"name\": \"" + question.questionName + "\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"" + question.acceptedAnswerText + "\"\n      }\n  }";
  });
};

var FAQPageJsonLd = function FAQPageJsonLd(_ref) {
  var _ref$mainEntity = _ref.mainEntity,
      mainEntity = _ref$mainEntity === void 0 ? [] : _ref$mainEntity;
  var jslonld = "{\n    \"@context\": \"https://schema.org/\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [" + buildQuestions(mainEntity) + "]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-faq-page"
  }));
};

var buildBaseSalary = function buildBaseSalary(baseSalary) {
  return "\n  \"baseSalary\": {\n    \"@type\": \"MonetaryAmount\",\n    " + (baseSalary.currency ? "\"currency\": \"" + baseSalary.currency + "\"," : '') + "\n    \"value\": {\n      " + (baseSalary.value ? Array.isArray(baseSalary.value) ? "\"minValue\": \"" + baseSalary.value[0] + "\", \"maxValue\": \"" + baseSalary.value[1] + "\"," : "\"value\": \"" + baseSalary.value + "\"," : '') + "\n      " + (baseSalary.unitText ? "\"unitText\": \"" + baseSalary.unitText + "\"," : '') + "\n      \"@type\": \"QuantitativeValue\"\n    }\n  },\n";
};

var JobPostingJsonLd = function JobPostingJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      baseSalary = _ref.baseSalary,
      datePosted = _ref.datePosted,
      description = _ref.description,
      employmentType = _ref.employmentType,
      hiringOrganization = _ref.hiringOrganization,
      jobLocation = _ref.jobLocation,
      applicantLocationRequirements = _ref.applicantLocationRequirements,
      jobLocationType = _ref.jobLocationType,
      title = _ref.title,
      validThrough = _ref.validThrough;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"JobPosting\",\n    " + (baseSalary ? buildBaseSalary(baseSalary) : '') + "\n    \"datePosted\": \"" + datePosted + "\",\n    \"description\": \"" + description + "\",\n    " + (employmentType ? "\"employmentType\": \"" + employmentType + "\"," : '') + "\n    \"hiringOrganization\" : {\n      \"@type\" : \"Organization\",\n      \"name\" : \"" + hiringOrganization.name + "\",\n      \"sameAs\" : \"" + hiringOrganization.sameAs + "\"\n      " + (hiringOrganization.logo ? ",\"logo\": \"" + hiringOrganization.logo + "\"" : '') + "\n    },\n    " + (jobLocation ? "\"jobLocation\": {\n      \"@type\": \"Place\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"addressLocality\": \"" + jobLocation.addressLocality + "\",\n        \"addressRegion\": \"" + jobLocation.addressRegion + "\",\n        \"postalCode\" : \"" + jobLocation.postalCode + "\",\n        \"streetAddress\" : \"" + jobLocation.streetAddress + "\",\n        \"addressCountry\" : \"" + jobLocation.addressCountry + "\"\n          }\n      }," : '') + "\n    " + (applicantLocationRequirements ? " \"applicantLocationRequirements\": {\n        \"@type\": \"Country\",\n        \"name\": \"" + applicantLocationRequirements + "\"\n    }," : '') + "\n    " + (jobLocationType ? "\"jobLocationType\": \"" + jobLocationType + "\"," : '') + "\n    " + (validThrough ? "\"validThrough\": \"" + validThrough + "\"," : '') + "\n    \"title\": \"" + title + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-jobposting" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var BlogJsonLd = function BlogJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Blog\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"datePublished\": \"" + datePublished + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": " + formatAuthorName(authorName) + ",\n    \"description\": \"" + description + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-blog" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var CourseJsonLd = function CourseJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      courseName = _ref.courseName,
      description = _ref.description,
      providerName = _ref.providerName,
      providerUrl = _ref.providerUrl;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Course\",\n    \"name\": \"" + courseName + "\",\n    \"description\": \"" + description + "\",\n    \"provider\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + providerName + "\"" + (providerUrl ? ",\n      \"sameAs\": \"" + providerUrl + "\"" : '') + "\n    }\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-course" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var DatasetJsonLd = function DatasetJsonLd(_ref) {
  var description = _ref.description,
      name = _ref.name,
      license = _ref.license;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Dataset\",\n    \"description\": \"" + description + "\",\n    \"name\": \"" + name + "\"" + (license ? ",\n        \"license\": \"" + license + "\"" : '') + "\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-dataset"
  }));
};

var formatIfArray = function formatIfArray(value) {
  return Array.isArray(value) ? "[" + value.map(function (val) {
    return "\"" + val + "\"";
  }) + "]" : "\"" + value + "\"";
};

var buildAddress = (function (address) {
  return "\n  \"address\": {\n    \"@type\": \"PostalAddress\",\n    \"streetAddress\": \"" + address.streetAddress + "\",\n    \"addressLocality\": \"" + address.addressLocality + "\",\n    " + (address.addressRegion ? "\"addressRegion\": \"" + address.addressRegion + "\"," : '') + "\n    \"postalCode\": \"" + address.postalCode + "\",\n    \"addressCountry\": \"" + address.addressCountry + "\"\n  },\n";
});

var buildAction = function buildAction(action) {
  return "\n  \"" + action.actionName + "\": {\n    \"@type\": \"" + action.actionType + "\",\n    \"target\": \"" + action.target + "\"\n  }\n";
};

var buildAreaServed = function buildAreaServed(areaServed) {
  return "\n  \"areaServed\": [\n    " + areaServed.map(function (area) {
    return buildGeoCircle(area);
  }) + "\n  ]\n";
};

var buildAggregateRating = function buildAggregateRating(aggregateRating) {
  return "\n  \"aggregateRating\": {\n    \"@type\": \"AggregateRating\",\n    \"ratingValue\": \"" + aggregateRating.ratingValue + "\",\n    \"ratingCount\": \"" + aggregateRating.ratingCount + "\"\n  },\n";
};

var buildGeo = function buildGeo(geo) {
  return "\n  \"geo\": {\n    \"@type\": \"GeoCoordinates\",\n    \"latitude\": \"" + geo.latitude + "\",\n    \"longitude\": \"" + geo.longitude + "\"\n  },\n";
};

var buildGeoCircle = function buildGeoCircle(geoCircle) {
  return "\n  {\n    \"@type\": \"GeoCircle\",\n    \"geoMidpoint\": {\n      \"@type\": \"GeoCoordinates\",\n      \"latitude\": \"" + geoCircle.geoMidpoint.latitude + "\",\n      \"longitude\": \"" + geoCircle.geoMidpoint.longitude + "\"\n    },\n    \"geoRadius\": \"" + geoCircle.geoRadius + "\"\n  }\n";
};

var buildMakesOffer = function buildMakesOffer(makesOffer) {
  return "\n  \"makesOffer\":[\n    " + makesOffer.map(function (offer) {
    return buildOffer(offer);
  }) + "\n  ]\n";
};

var buildOffer = function buildOffer(offer) {
  return "\n  {\n    \"@type\": \"Offer\",\n    " + buildPriceSpecification(offer.priceSpecification) + ",\n    " + buildItemOffered(offer.itemOffered) + "\n  }\n";
};

var buildOpeningHours = function buildOpeningHours(openingHours) {
  return "\n  {\n    \"@type\": \"OpeningHoursSpecification\",\n    " + (openingHours.dayOfWeek ? "\"dayOfWeek\": " + formatIfArray(openingHours.dayOfWeek) + "," : '') + "\n    \"opens\": \"" + openingHours.opens + "\",\n    " + (openingHours.validFrom ? "\"validFrom\": \"" + openingHours.validFrom + "\"," : '') + "\n    " + (openingHours.validThrough ? "\"validThrough\": \"" + openingHours.validThrough + "\"," : '') + "\n    \"closes\": \"" + openingHours.closes + "\"\n  }\n";
};

var buildPriceSpecification = function buildPriceSpecification(priceSpecification) {
  return "\n  \"priceSpecification\": {\n    \"@type\": \"" + priceSpecification.type + "\",\n    \"priceCurrency\": \"" + priceSpecification.priceCurrency + "\",\n    \"price\": \"" + priceSpecification.price + "\"\n  }\n";
};

var buildRating = function buildRating(rating) {
  return "\n  {\n    \"@type\": \"Rating\",\n    " + (rating.bestRating ? "\"bestRating\": \"" + rating.bestRating + "\"," : '') + "\n    " + (rating.reviewAspect ? "\"reviewAspect\": \"" + rating.reviewAspect + "\"," : '') + "\n    " + (rating.worstRating ? "\"worstRating\": \"" + rating.worstRating + "\"," : '') + "\n    \"ratingValue\": \"" + rating.ratingValue + "\"\n  }\n";
};

var buildReview = function buildReview(reviews) {
  return "\n  \"review\": [\n    " + reviews.map(function (review) {
    return "\n      {\n        \"@type\": \"Review\",\n        \"author\": \"" + review.author + "\",\n        \"datePublished\": \"" + review.datePublished + "\",\n        " + (review.name ? "\"name\": \"" + review.name + "\"," : '') + "\n        \"reviewBody\": \"" + review.reviewBody + "\",\n        \"reviewRating\": " + buildRating(review.reviewRating) + "\n      }\n    ";
  }) + "\n  ],\n";
};

var buildItemOffered = function buildItemOffered(service) {
  return "\n  \"itemOffered\": {\n    \"@type\": \"Service\",\n    \"name\": \"" + service.name + "\",\n    \"description\": \"" + service.description + "\"\n  }\n";
};

var LocalBusinessJsonLd = function LocalBusinessJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      type = _ref.type,
      id = _ref.id,
      name = _ref.name,
      description = _ref.description,
      url = _ref.url,
      telephone = _ref.telephone,
      address = _ref.address,
      geo = _ref.geo,
      images = _ref.images,
      rating = _ref.rating,
      review = _ref.review,
      priceRange = _ref.priceRange,
      servesCuisine = _ref.servesCuisine,
      sameAs = _ref.sameAs,
      openingHours = _ref.openingHours,
      action = _ref.action,
      areaServed = _ref.areaServed,
      makesOffer = _ref.makesOffer;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"" + type + "\",\n    " + (id ? "\"@id\": \"" + id + "\"," : '') + "\n    " + (description ? "\"description\": \"" + description + "\"," : '') + "\n    " + (url ? "\"url\": \"" + url + "\"," : '') + "\n    " + (telephone ? "\"telephone\": \"" + telephone + "\"," : '') + "\n    " + buildAddress(address) + "\n    " + (geo ? "" + buildGeo(geo) : '') + "\n    " + (rating ? "" + buildAggregateRating(rating) : '') + "\n    " + (review ? "" + buildReview(review) : '') + "\n    " + (action ? buildAction(action) + "," : '') + "\n    " + (areaServed ? buildAreaServed(areaServed) + "," : '') + "\n    " + (makesOffer ? buildMakesOffer(makesOffer) + "," : '') + "\n    " + (priceRange ? "\"priceRange\": \"" + priceRange + "\"," : '') + "\n    " + (servesCuisine ? "\"servesCuisine\":" + formatIfArray(servesCuisine) + "," : '') + "\n    " + (images ? "\"image\":" + formatIfArray(images) + "," : '') + "\n    " + (sameAs ? "\"sameAs\": [" + sameAs.map(function (url) {
    return "\"" + url + "\"";
  }) + "]," : '') + "\n    " + (openingHours ? "\"openingHoursSpecification\": " + (Array.isArray(openingHours) ? "[" + openingHours.map(function (hours) {
    return "" + buildOpeningHours(hours);
  }) + "]" : buildOpeningHours(openingHours)) + "," : '') + "\n    \"name\": \"" + name + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-local-business" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var LogoJsonLd = function LogoJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      logo = _ref.logo;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Organization\",\n    \"url\": \"" + url + "\",\n    \"logo\": \"" + logo + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-logo" + (keyOverride ? "-" + keyOverride : '')
  }));
};

// TODO: Docs for offers itemCondition & availability
// TODO: Seller type, make dynamic
var buildOffers = function buildOffers(offers) {
  return "\n  {\n    \"@type\": \"Offer\",\n    \"priceCurrency\": \"" + offers.priceCurrency + "\",\n    " + (offers.priceValidUntil ? "\"priceValidUntil\": \"" + offers.priceValidUntil + "\"," : '') + "\n    " + (offers.itemCondition ? "\"itemCondition\": \"" + offers.itemCondition + "\"," : '') + "\n    " + (offers.availability ? "\"availability\": \"" + offers.availability + "\"," : '') + "\n    " + (offers.url ? "\"url\": \"" + offers.url + "\"," : '') + "\n    " + (offers.seller ? "\n      \"seller\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + offers.seller.name + "\"\n    },\n    " : '') + "\n    \"price\": \"" + offers.price + "\"\n  }\n";
};

var buildAggregateOffer = function buildAggregateOffer(offer) {
  return "\n  {\n    \"@type\": \"AggregateOffer\",\n    \"priceCurrency\": \"" + offer.priceCurrency + "\",\n    " + (offer.highPrice ? "\"highPrice\": \"" + offer.highPrice + "\"," : '') + "\n    " + (offer.offerCount ? "\"offerCount\": \"" + offer.offerCount + "\"," : '') + "\n    \"lowPrice\": \"" + offer.lowPrice + "\"\n  }\n";
};

var buildBrand = function buildBrand(brand) {
  return "\n  \"brand\": {\n      \"@type\": \"Thing\",\n      \"name\": \"" + brand + "\"\n    },\n";
};

var buildReviewRating = function buildReviewRating(rating) {
  return rating ? "\"reviewRating\": {\n          \"@type\": \"Rating\",\n          " + (rating.bestRating ? "\"bestRating\": \"" + rating.bestRating + "\"," : '') + "\n          " + (rating.worstRating ? "\"worstRating\": \"" + rating.worstRating + "\"," : '') + "\n          \"ratingValue\": \"" + rating.ratingValue + "\"\n        }" : '';
};
var buildAuthor = function buildAuthor(author) {
  return "\n  \"author\": {\n      \"@type\": \"" + author.type + "\",\n      \"name\": \"" + author.name + "\"\n  },\n";
};
var buildPublisher = function buildPublisher(publisher) {
  return "\n  \"publisher\": {\n      \"@type\": \"" + publisher.type + "\",\n      \"name\": \"" + publisher.name + "\"\n  },\n";
};
var buildReviews = function buildReviews(reviews) {
  return "\n\"review\": [\n  " + reviews.map(function (review) {
    return "{\n      \"@type\": \"Review\",\n      " + (review.author ? buildAuthor(review.author) : '') + "\n      " + (review.publisher ? buildPublisher(review.publisher) : '') + "\n      " + (review.datePublished ? "\"datePublished\": \"" + review.datePublished + "\"," : '') + "\n      " + (review.reviewBody ? "\"reviewBody\": \"" + review.reviewBody + "\"," : '') + "\n      " + (review.name ? "\"name\": \"" + review.name + "\"," : '') + "\n      " + buildReviewRating(review.reviewRating) + "\n  }";
  }) + "],";
};
var buildAggregateRating$1 = function buildAggregateRating(aggregateRating) {
  return "\n  \"aggregateRating\": {\n      \"@type\": \"AggregateRating\",\n      " + (aggregateRating.ratingCount ? "\"ratingCount\": \"" + aggregateRating.ratingCount + "\"," : '') + "\n      " + (aggregateRating.reviewCount ? "\"reviewCount\": \"" + aggregateRating.reviewCount + "\"," : '') + "\n      " + (aggregateRating.bestRating ? "\"bestRating\": \"" + aggregateRating.bestRating + "\"," : '') + "\n      \"ratingValue\": \"" + aggregateRating.ratingValue + "\"\n    },\n";
};

var ProductJsonLd = function ProductJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      productName = _ref.productName,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      description = _ref.description,
      sku = _ref.sku,
      gtin8 = _ref.gtin8,
      gtin13 = _ref.gtin13,
      gtin14 = _ref.gtin14,
      mpn = _ref.mpn,
      brand = _ref.brand,
      _ref$reviews = _ref.reviews,
      reviews = _ref$reviews === void 0 ? [] : _ref$reviews,
      aggregateRating = _ref.aggregateRating,
      offers = _ref.offers,
      aggregateOffer = _ref.aggregateOffer,
      color = _ref.color,
      manufacturerName = _ref.manufacturerName,
      manufacturerLogo = _ref.manufacturerLogo,
      material = _ref.material,
      slogan = _ref.slogan,
      disambiguatingDescription = _ref.disambiguatingDescription,
      productionDate = _ref.productionDate,
      releaseDate = _ref.releaseDate,
      purchaseDate = _ref.purchaseDate,
      award = _ref.award;
  var jslonld = "{\n    \"@context\": \"https://schema.org/\",\n    \"@type\": \"Product\",\n    \"image\":" + formatIfArray(images) + ",\n    " + (description ? "\"description\": \"" + description + "\"," : '') + "\n    " + (mpn ? "\"mpn\": \"" + mpn + "\"," : '') + "\n    " + (sku ? "\"sku\": \"" + sku + "\"," : '') + "\n    " + (gtin8 ? "\"gtin8\": \"" + gtin8 + "\"," : '') + "\n    " + (gtin13 ? "\"gtin13\": \"" + gtin13 + "\"," : '') + "\n    " + (gtin14 ? "\"gtin14\": \"" + gtin14 + "\"," : '') + "\n    " + (brand ? buildBrand(brand) : '') + "\n    " + (reviews.length ? buildReviews(reviews) : '') + "\n    " + (aggregateRating ? buildAggregateRating$1(aggregateRating) : '') + "\n    " + (color ? "\"color\": \"" + color + "\"," : '') + "\n    " + (material ? "\"material\": \"" + material + "\"," : '') + "\n    " + (slogan ? "\"slogan\": \"" + slogan + "\"," : '') + "\n    " + (disambiguatingDescription ? "\"disambiguatingDescription\": \"" + disambiguatingDescription + "\"," : '') + "\n    " + (productionDate ? "\"productionDate\": \"" + productionDate + "\"," : '') + "\n    " + (releaseDate ? "\"releaseDate\": \"" + releaseDate + "\"," : '') + "\n    " + (purchaseDate ? "\"purchaseDate\": \"" + purchaseDate + "\"," : '') + "\n    " + (award ? "\"award\": \"" + award + "\"," : '') + "\n    \"manufacturer\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + manufacturerName + "\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"" + manufacturerLogo + "\"\n      }\n    },\n    " + (offers ? "\"offers\": " + (Array.isArray(offers) ? "[" + offers.map(function (offer) {
    return "" + buildOffers(offer);
  }) + "]" : buildOffers(offers)) + "," : '') + "\n    " + (aggregateOffer && !offers ? "\"offers\": " + buildAggregateOffer(aggregateOffer) + "," : '') + "\n    \"name\": \"" + productName + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-product" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var SocialProfileJsonLd = function SocialProfileJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      type = _ref.type,
      name = _ref.name,
      url = _ref.url,
      _ref$sameAs = _ref.sameAs,
      sameAs = _ref$sameAs === void 0 ? [] : _ref$sameAs;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"" + type + "\",\n    \"name\": \"" + name + "\",\n    \"url\": \"" + url + "\",\n    \"sameAs\": [\n      " + sameAs.map(function (socialUrl) {
    return "\"" + socialUrl + "\"";
  }) + "\n     ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-social" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var formatIfArray$1 = function formatIfArray(value) {
  return Array.isArray(value) ? "[" + value.map(function (val) {
    return "\"" + val + "\"";
  }) + "]" : "\"" + value + "\"";
};

var buildContactPoint = function buildContactPoint(contactPoint) {
  return contactPoint.map(function (contact) {
    return "{\n    \"@type\": \"ContactPoint\",\n    \"telephone\": \"" + contact.telephone + "\",\n    \"contactType\": \"" + contact.contactType + "\"" + (contact.areaServed ? ",\n    \"areaServed\": " + formatIfArray$1(contact.areaServed) : '') + (contact.availableLanguage ? ",\n    \"availableLanguage\": " + formatIfArray$1(contact.availableLanguage) : '') + (contact.contactOption ? ",\n    \"contactOption\": \"" + contact.contactOption + "\"" : '') + "\n    }";
  });
};

var CorporateContactJsonLd = function CorporateContactJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      logo = _ref.logo,
      contactPoint = _ref.contactPoint;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Organization\",\n    \"url\": \"" + url + "\",\n    " + (logo ? "\"logo\": \"" + logo + "\"," : '') + "\n    \"contactPoint\": [" + buildContactPoint(contactPoint) + "]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-corporate-contact" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var NewsArticleJsonLd = function NewsArticleJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      section = _ref.section,
      keywords = _ref.keywords,
      datePublished = _ref.datePublished,
      _ref$dateCreated = _ref.dateCreated,
      dateCreated = _ref$dateCreated === void 0 ? null : _ref$dateCreated,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description,
      body = _ref.body,
      publisherName = _ref.publisherName,
      publisherLogo = _ref.publisherLogo;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"NewsArticle\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"articleSection\":\"" + section + "\",\n    \"keywords\": \"" + keywords + "\",\n    \"datePublished\": \"" + datePublished + "\",\n    \"dateCreated\": \"" + (dateCreated || datePublished) + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": " + formatAuthorName(authorName) + ",\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + publisherName + "\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"" + publisherLogo + "\"\n      }\n    },\n    \"description\": \"" + description + "\",\n    \"articleBody\": \"" + body + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-newsarticle" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildLocation = function buildLocation(location) {
  return "\n  \"location\": {\n    \"@type\": \"Place\",\n    " + buildAddress(location.address) + "\n    " + (location.sameAs ? "\"sameAs\": \"" + location.sameAs + "\"," : "") + "\n    \"name\": \"" + location.name + "\"\n  },\n";
};

var buildPerformer = function buildPerformer(performer) {
  return "\n  {\n    \"@type\": \"PerformingGroup\",\n    \"name\": \"" + performer.name + "\"\n  }\n";
};

var EventJsonLd = function EventJsonLd(_ref) {
  var name = _ref.name,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      location = _ref.location,
      url = _ref.url,
      description = _ref.description,
      images = _ref.images,
      offers = _ref.offers,
      aggregateOffer = _ref.aggregateOffer,
      performers = _ref.performers;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Event\",\n    \"startDate\": \"" + startDate + "\",\n    \"endDate\": \"" + endDate + "\",\n    " + buildLocation(location) + "\n    " + (images ? "\"image\":" + formatIfArray(images) + "," : "") + "\n    " + (url ? "\"url\": \"" + url + "\"," : "") + "\n    " + (description ? "\"description\": \"" + description + "\"," : "") + "\n    " + (offers ? "\"offers\": " + (Array.isArray(offers) ? "[" + offers.map(function (offer) {
    return "" + buildOffers(offer);
  }) + "]" : buildOffers(offers)) + "," : '') + "\n    " + (aggregateOffer && !offers ? "\"offers\": " + buildAggregateOffer(aggregateOffer) + "," : '') + "\n    " + (performers ? "\"performer\": " + (Array.isArray(performers) ? "[" + performers.map(function (performer) {
    return "" + buildPerformer(performer);
  }) + "]" : buildPerformer(performers)) + "," : '') + "\n    \"name\": \"" + name + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-event"
  }));
};

var buildVideo = (function (video, context) {
  if (context === void 0) {
    context = false;
  }

  return "{\n      " + (context ? "\"@context\": \"https://schema.org\"," : "") + "\n      \"@type\": \"VideoObject\",\n      \"name\": \"" + video.name + "\",\n      \"description\": \"" + video.description + "\",\n      \"thumbnailUrl\": [\n          " + video.thumbnailUrls.map(function (thumbnailUrl) {
    return "\"" + thumbnailUrl + "\"";
  }).join(',') + "\n        ],\n        " + (video.contentUrl ? "\"contentUrl\": \"" + video.contentUrl + "\"," : "") + "\n        " + (video.duration ? "\"duration\": \"" + video.duration + "\"," : "") + "\n        " + (video.embedUrl ? "\"embedUrl\": \"" + video.embedUrl + "\"," : "") + "\n        " + (video.expires ? "\"expires\": \"" + video.expires + "\"," : "") + "        \n        " + (video.hasPart ? "\"hasPart\": " + (Array.isArray(video.hasPart) ? "[" + video.hasPart.map(function (clip) {
    return "" + buildClip(clip);
  }).join(',') + "]" : buildClip(video.hasPart)) + "," : '') + "\n        " + (video.watchCount ? "" + buildInteractionStatistic(video.watchCount) : "") + "        \n        " + (video.publication ? "\"publication\": " + (Array.isArray(video.publication) ? "[" + video.publication.map(function (broadcastEvent) {
    return "" + buildBroadcastEvent(broadcastEvent);
  }).join(',') + "]" : buildBroadcastEvent(video.publication)) + "," : '') + "\n        " + (video.regionsAllowed ? "\"regionsAllowed\": " + formatIfArray(video.regionsAllowed) + "," : '') + "\n        \"uploadDate\": \"" + video.uploadDate + "\"\n  }";
});

var buildClip = function buildClip(clip) {
  return "\n  \"geo\": {\n    \"@type\": \"Clip\",\n    \"name\": \"" + clip.name + "\",\n    \"startOffset\": " + clip.startOffset + ",\n    \"url\": \"" + clip.url + "\"\n  }\n";
};

var buildInteractionStatistic = function buildInteractionStatistic(watchCount) {
  return "\n  \"interactionStatistic\": {\n    \"@type\": \"InteractionCounter\",\n    \"interactionType\": { \"@type\": \"https://schema.org/WatchAction\" },\n    \"userInteractionCount\": " + watchCount + "\n  },\n";
};

var buildBroadcastEvent = function buildBroadcastEvent(publication) {
  return "\n  \"publication\": {\n    \"@type\": \"BroadcastEvent\",\n    \"name\": \"" + publication.name + "\",\n    \"isLiveBroadcast\": " + publication.isLiveBroadcast + ",\n    \"startDate\": \"" + publication.startDate + "\",\n    \"endDate\": \"" + publication.endDate + "\"\n  }\n";
};

var VideoJsonLd = function VideoJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      name = _ref.name,
      description = _ref.description,
      thumbnailUrls = _ref.thumbnailUrls,
      uploadDate = _ref.uploadDate,
      contentUrl = _ref.contentUrl,
      duration = _ref.duration,
      embedUrl = _ref.embedUrl,
      expires = _ref.expires,
      hasPart = _ref.hasPart,
      watchCount = _ref.watchCount,
      publication = _ref.publication,
      regionsAllowed = _ref.regionsAllowed;
  var jslonld = buildVideo({
    name: name,
    description: description,
    thumbnailUrls: thumbnailUrls,
    uploadDate: uploadDate,
    contentUrl: contentUrl,
    duration: duration,
    embedUrl: embedUrl,
    expires: expires,
    hasPart: hasPart,
    watchCount: watchCount,
    publication: publication,
    regionsAllowed: regionsAllowed
  }, true);
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-video" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildQuestions$1 = function buildQuestions(mainEntity) {
  return "{\n        \"@type\": \"Question\",\n        \"name\": \"" + mainEntity.name + "\",\n        " + (mainEntity.text ? "\"text\": \"" + mainEntity.text + "\"," : '') + "\n        \"answerCount\": " + mainEntity.answerCount + ",\n        " + (mainEntity.upvotedCount ? "\"upvoteCount\": " + mainEntity.upvotedCount + "," : '') + "\n        " + (mainEntity.dateCreated ? "\"dateCreated\": \"" + mainEntity.dateCreated + "\"," : '') + "\n        " + (mainEntity.author ? "\"author\": {\n          \"@type\": \"Person\",\n          \"name\": \"" + mainEntity.author.name + "\"\n        }," : '') + "\n        " + (mainEntity.acceptedAnswer ? "\"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"" + mainEntity.acceptedAnswer.text + "\",\n          " + (mainEntity.acceptedAnswer.dateCreated ? "\"dateCreated\": \"" + mainEntity.acceptedAnswer.dateCreated + "\"," : '') + "\n          " + (mainEntity.acceptedAnswer.upvotedCount ? "\"upvoteCount\": " + mainEntity.acceptedAnswer.upvotedCount + "," : '') + "\n          " + (mainEntity.acceptedAnswer.url ? "\"url\": \"" + mainEntity.acceptedAnswer.url + "\"," : '') + "\n          " + (mainEntity.acceptedAnswer.author ? "\"author\": {\n            \"@type\": \"Person\",\n            \"name\": \"" + mainEntity.acceptedAnswer.author.name + "\"\n          }" : '') + "\n        }," : '') + "\n        " + (mainEntity.suggestedAnswer ? "\"suggestedAnswer\": [" + mainEntity.suggestedAnswer.map(function (suggested) {
    return "{\n            \"@type\": \"Answer\",\n            \"text\": \"" + suggested.text + "\",\n            " + (suggested.dateCreated ? "\"dateCreated\": \"" + suggested.dateCreated + "\"," : '') + "\n            " + (suggested.upvotedCount ? "\"upvoteCount\": " + suggested.upvotedCount + "," : "\"upvoteCount\": " + 0 + ",") + "\n            " + (suggested.url ? "\"url\": \"" + suggested.url + "\"," : '') + "\n              " + (suggested.author ? "\"author\": {\n                        \"@type\": \"Person\",\n                        \"name\": \"" + suggested.author.name + "\"\n                    }" : '') + "\n        }";
  }) + "\n    ]" : '') + "\n}";
};

var QAPageJsonLd = function QAPageJsonLd(_ref) {
  var mainEntity = _ref.mainEntity,
      keyOverride = _ref.keyOverride;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"QAPage\",\n    \"mainEntity\": " + buildQuestions$1(mainEntity) + "\n    }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-qa" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildAggregateRating$2 = function buildAggregateRating(aggregateRating) {
  return "\n  \"aggregateRating\": {\n      \"@type\": \"AggregateRating\",\n      " + (aggregateRating.ratingCount ? "\"ratingCount\": \"" + aggregateRating.ratingCount + "\"," : '') + "\n      " + (aggregateRating.reviewCount ? "\"reviewCount\": \"" + aggregateRating.reviewCount + "\"," : '') + "\n      " + (aggregateRating.bestRating ? "\"bestRating\": \"" + aggregateRating.bestRating + "\"," : '') + "\n      \"ratingValue\": \"" + aggregateRating.ratingValue + "\"\n    },\n";
};
var buildInstruction = function buildInstruction(instruction) {
  return "{\n  \"@type\": \"HowToStep\",\n  \"name\": \"" + instruction.name + "\",\n  \"text\": \"" + instruction.text + "\",\n  \"url\": \"" + instruction.url + "\",\n  \"image\": \"" + instruction.image + "\"\n}";
};

var RecipeJsonLd = function RecipeJsonLd(_ref) {
  var name = _ref.name,
      description = _ref.description,
      authorName = _ref.authorName,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      prepTime = _ref.prepTime,
      cookTime = _ref.cookTime,
      totalTime = _ref.totalTime,
      keywords = _ref.keywords,
      yields = _ref.yields,
      category = _ref.category,
      cuisine = _ref.cuisine,
      calories = _ref.calories,
      ingredients = _ref.ingredients,
      instructions = _ref.instructions,
      aggregateRating = _ref.aggregateRating,
      video = _ref.video;
  var jslonld = "{\n    \"@context\": \"https://schema.org/\",\n    \"@type\": \"Recipe\",\n    \"name\": \"" + name + "\",\n    \"description\": \"" + description + "\",\n    \"datePublished\": \"" + datePublished + "\",\n    \"author\": " + formatAuthorName(authorName) + ",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }).join(',') + "\n    ],\n    " + (prepTime ? "\"prepTime\": \"" + prepTime + "\"," : "") + "\n    " + (cookTime ? "\"cookTime\": \"" + cookTime + "\"," : "") + "\n    " + (totalTime ? "\"totalTime\": \"" + totalTime + "\"," : "") + "\n    " + (keywords ? "\"keywords\": \"" + keywords + "\"," : "") + "\n    " + (yields ? "\"recipeYield\": \"" + yields + "\"," : "") + "\n    " + (category ? "\"recipeCategory\": \"" + category + "\"," : "") + "\n    " + (cuisine ? "\"recipeCuisine\": \"" + cuisine + "\"," : "") + "\n    " + (calories ? "\"nutrition\": { \"@type\": \"NutritionInformation\", \"calories\": \"" + calories + " calories\" }," : "") + "\n    " + (aggregateRating ? buildAggregateRating$2(aggregateRating) : '') + "\n    " + (video ? "\"video\": " + buildVideo(video) + "," : '') + "\n    \"recipeIngredient\": [\n      " + ingredients.map(function (ingredient) {
    return "\"" + ingredient + "\"";
  }).join(',') + "\n    ],\n    \"recipeInstructions\": [\n      " + instructions.map(buildInstruction).join(',') + "\n    ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-recipe"
  }));
};

var CarouselJsonLd = function CarouselJsonLd(_ref) {
  var type = _ref.type,
      data = _ref.data;
  var itemListElement = [];

  switch (type) {
    case 'default':
      itemListElement = data.map(function (item, index) {
        return "{\n        \"@type\": \"ListItem\",\n        \"position\": \"" + (index + 1) + "\",\n        \"url\": \"" + item.url + "\"\n      }";
      });
      break;

    case 'course':
      itemListElement = data.map(function (item, index) {
        return "{\n        \"@type\": \"ListItem\",\n        \"position\": \"" + (index + 1) + "\",\n        \"item\": {\n          \"@context\": \"https://schema.org\",\n          \"@type\": \"Course\",\n          \"url\": \"" + item.url + "\",\n          \"name\": \"" + item.courseName + "\",\n          \"description\": \"" + item.description + "\",\n          \"provider\": {\n            \"@type\": \"Organization\",\n            \"name\": \"" + item.providerName + "\"" + (item.providerUrl ? ",\n                \"sameAs\": \"" + item.providerUrl + "\"" : '') + "\n          }\n      }\n    }";
      });
      break;

    case 'movie':
      itemListElement = data.map(function (item, index) {
        return "{\n        \"@type\": \"ListItem\",\n        \"position\": \"" + (index + 1) + "\",\n        \"item\": {\n          \"@context\": \"https://schema.org\",\n          \"@type\": \"Movie\",\n          \"name\": \"" + item.name + "\",\n          \"url\": \"" + item.url + "\",\n          \"image\": \"" + item.image + "\",\n          " + (item.dateCreated ? "\"dateCreated\": \"" + item.dateCreated + "\"," : "") + "\n          " + (item.director ? "\"director\": " + (Array.isArray(item.director) ? "[" + item.director.map(function (director) {
          return "{\n                          \"@type\": \"Person\",\n                          \"name\": \"" + director.name + "\"\n                        }";
        }).join(',') + "]" : "{\n                      \"@type\": \"Person\",\n                      \"name\": \"" + item.director.name + "\"\n                    }") : '') + "\n          " + (item.review ? ",\n              \"review\": {\n                \"@type\": \"Review\",\n                " + (item.review.author ? buildAuthor(item.review.author) : '') + "\n                " + (item.review.publisher ? buildPublisher(item.review.publisher) : '') + "\n                " + (item.review.datePublished ? "\"datePublished\": \"" + item.review.datePublished + "\"," : '') + "\n                " + (item.review.reviewBody ? "\"reviewBody\": \"" + item.review.reviewBody + "\"," : '') + "\n                " + (item.review.name ? "\"name\": \"" + item.review.name + "\"," : '') + "\n                " + buildReviewRating(item.review.reviewRating) + "\n            }" : '') + "\n        }\n      }";
      });
      break;

    case 'recipe':
      itemListElement = data.map(function (item, index) {
        var _item$images;

        return "{\n        \"@type\": \"ListItem\",\n        \"position\": \"" + (index + 1) + "\",\n        \"item\": {\n          \"@context\": \"https://schema.org/\",\n          \"@type\": \"Recipe\",\n          \"name\": \"" + item.name + "\",\n          \"url\" : \"" + item.url + "\",\n          \"description\": \"" + item.description + "\",\n          \"datePublished\": \"" + item.datePublished + "\",\n          \"author\": {\n            \"@type\": \"Person\",\n            \"name\": \"" + item.authorName + "\"\n          },\n          \"image\": [\n            " + ((_item$images = item.images) == null ? void 0 : _item$images.map(function (image) {
          return "\"" + image + "\"";
        }).join(',')) + "\n          ],\n          " + (item.prepTime ? "\"prepTime\": \"" + item.prepTime + "\"," : "") + "\n          " + (item.cookTime ? "\"cookTime\": \"" + item.cookTime + "\"," : "") + "\n          " + (item.totalTime ? "\"totalTime\": \"" + item.totalTime + "\"," : "") + "\n          " + (item.keywords ? "\"keywords\": \"" + item.keywords + "\"," : "") + "\n          " + (item.yields ? "\"recipeYield\": \"" + item.yields + "\"," : "") + "\n          " + (item.category ? "\"recipeCategory\": \"" + item.category + "\"," : "") + "\n          " + (item.cuisine ? "\"recipeCuisine\": \"" + item.cuisine + "\"," : "") + "\n          " + (item.calories ? "\"nutrition\": { \"@type\": \"NutritionInformation\", \"calories\": \"" + item.calories + " calories\" }," : "") + "\n          " + (item.aggregateRating ? buildAggregateRating$2(item.aggregateRating) : '') + "\n          " + (item.video ? "\"video\": " + buildVideo(item.video) + "," : '') + "\n          \"recipeIngredient\": [\n            " + item.ingredients.map(function (ingredient) {
          return "\"" + ingredient + "\"";
        }).join(',') + "\n          ],\n          \"recipeInstructions\": [\n            " + item.instructions.map(buildInstruction).join(',') + "\n          ]\n      }\n      }";
      });
      break;
  }

  var jsonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"ItemList\",\n    \"itemListElement\": [" + itemListElement.join(',') + "]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jsonld),
    key: "jsonld-course"
  }));
};

var SiteLinksSearchBoxJsonLd = function SiteLinksSearchBoxJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      _ref$potentialActions = _ref.potentialActions,
      potentialActions = _ref$potentialActions === void 0 ? [] : _ref$potentialActions;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"WebSite\",\n    \"url\": \"" + url + "\",\n    \"potentialAction\": [\n      " + potentialActions.map(function (_ref2) {
    var target = _ref2.target,
        queryInput = _ref2.queryInput;
    return "{\n        \"@type\": \"SearchAction\",\n        \"target\": \"" + target + "={" + queryInput + "}\",\n        \"query-input\": \"required name=" + queryInput + "\"\n      }";
  }) + "\n     ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-siteLinksSearchBox" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildReview$1 = function buildReview(review) {
  return "\n    \"review\": {\n        \"@type\": \"Review\",\n        " + (review.author ? buildAuthor(review.author) : '') + "\n        " + (review.publisher ? buildPublisher(review.publisher) : '') + "\n        " + (review.datePublished ? "\"datePublished\": \"" + review.datePublished + "\"," : '') + "\n        " + (review.reviewBody ? "\"reviewBody\": \"" + review.reviewBody + "\"," : '') + "\n        " + (review.name ? "\"name\": \"" + review.name + "\"," : '') + "\n        " + buildReviewRating(review.reviewRating) + "\n      },\n  ";
};

var SoftwareAppJsonLd = function SoftwareAppJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      name = _ref.name,
      applicationCategory = _ref.applicationCategory,
      operatingSystem = _ref.operatingSystem,
      priceCurrency = _ref.priceCurrency,
      price = _ref.price,
      aggregateRating = _ref.aggregateRating,
      review = _ref.review;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"SoftwareApplication\",\n    \"offers\": {\n      \"@type\": \"Offer\",\n      \"priceCurrency\": \"" + priceCurrency + "\",\n      \"price\": \"" + price + "\"\n    },\n    " + (applicationCategory ? "\"applicationCategory\": \"" + applicationCategory + "\"," : '') + "\n    " + (operatingSystem ? "\"operatingSystem\": \"" + operatingSystem + "\"," : '') + "\n    " + (aggregateRating ? buildAggregateRating$2(aggregateRating) : '') + "\n    " + (review ? buildReview$1(review) : '') + "\n    \"name\": \"" + name + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-softwareApp" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var CollectionPageJsonLd = function CollectionPageJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      name = _ref.name,
      _ref$hasPart = _ref.hasPart,
      hasPart = _ref$hasPart === void 0 ? [] : _ref$hasPart;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"CollectionPage\",\n    \"name\": \"" + name + "\",\n    \"hasPart\": [\n      " + hasPart.map(function (creativeWork) {
    return "{\n        \"@type\": \"CreativeWork\",\n        \"author\": \"" + creativeWork.author + "\",\n        \"about\": \"" + creativeWork.about + "\",\n        \"name\": \"" + creativeWork.name + "\",\n        " + (creativeWork.audience ? "\"audience\": \"" + creativeWork.audience + "\"," : '') + "\n        " + (creativeWork.keywords ? "\"keywords\": \"" + creativeWork.keywords + "\"," : '') + "\n        " + (creativeWork.thumbnailUrl ? "\"thumbnailUrl\": \"" + creativeWork.thumbnailUrl + "\"," : '') + "\n        " + (creativeWork.image ? "\"image\": \"" + creativeWork.image + "\"," : '') + "\n        \"datePublished\": \"" + creativeWork.datePublished + "\"\n      }";
  }) + "\n     ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-collection-page" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildBreadcrumb = function buildBreadcrumb(itemListElements) {
  return "{\n  \"@type\": \"BreadcrumbList\",\n  \"itemListElement\": " + buildBreadcrumbList(itemListElements) + "\n}";
};

var buildBreadcrumbList = function buildBreadcrumbList(itemListElements) {
  return "[\n  " + itemListElements.map(function (itemListElement) {
    return "{\n    \"@type\": \"ListItem\",\n    \"position\": " + itemListElement.position + ",\n    \"item\": {\n      \"@id\": \"" + itemListElement.item + "\",\n      \"name\": \"" + itemListElement.name + "\"\n    }\n  }";
  }) + "\n]";
};

var ProfilePageJsonLd = function ProfilePageJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      breadcrumb = _ref.breadcrumb,
      lastReviewed = _ref.lastReviewed;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"ProfilePage\",\n    " + (lastReviewed ? "\"lastReviewed\": \"" + lastReviewed + "\"," : '') + "\n    \"breadcrumb\": " + (typeof breadcrumb === 'string' ? "\"" + breadcrumb + "\"" : buildBreadcrumb(breadcrumb)) + "\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-profile-page" + (keyOverride ? "-" + keyOverride : '')
  }));
};




/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fmnt%2Fd%2FRepos%2FProjects%2FDoruBoteaNextJS%2Fpages%2Findex.tsx!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fmnt%2Fd%2FRepos%2FProjects%2FDoruBoteaNextJS%2Fpages%2Findex.tsx! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/image-config.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/image-config.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.imageConfigDefault=exports.VALID_LOADERS=void 0;const VALID_LOADERS=['default','imgix','cloudinary','akamai'];exports.VALID_LOADERS=VALID_LOADERS;const imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:'/_next/image',loader:'default',domains:[],enableBlurryPlaceholder:false};exports.imageConfigDefault=imageConfigDefault;
//# sourceMappingURL=image-config.js.map

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


exports.__esModule = true;
exports.default = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle = /*#__PURE__*/function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry = /*#__PURE__*/function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fmnt%2Fd%2FRepos%2FProjects%2FDoruBoteaNextJS%2Fpages%2Findex.tsx!"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db25zdWx0YW50YU9ubGluZS9Gb3JtL2Zvcm0uanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnN1bHRhbnRhT25saW5lL2NvbnN1bHRhbnRhT25saW5lLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVNYXBzL0dvb2dsZU1hcHMudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ZpcnN0U2VjdGlvbi9maXJzdFNlY3Rpb24udHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlcnZpY2lpL2RhdGUvc2VydmljaWkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VydmljaWkvc2VydmljaWktY29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZXJ2aWNpaS9zZXJ2aWNpaS13cmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZXJ2aWNpaS9zZXJ2aWNpaUNhcmQudHN4Iiwid2VicGFjazovL19OX0UvLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvYW1wLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvYW1wLnRzIiwid2VicGFjazovL19OX0UvLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LnRzIiwid2VicGFjazovL19OX0UvLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQudHN4Iiwid2VicGFjazovL19OX0UvLi4vbmV4dC1zZXJ2ZXIvbGliL3NpZGUtZWZmZWN0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LnRzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQtc2VvL2xpYi9uZXh0LXNlby5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8iLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHJpbmctaGFzaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9saWIvc3R5bGVzaGVldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9zdHlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9zdHlsZXNoZWV0LXJlZ2lzdHJ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9zdHlsZS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwicGhvbmUiLCJzZXRQaG9uZSIsImdkcHIiLCJzZXRHZHByIiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiaGFuZGxlU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaGVhZGVycyIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwiYWxlcnQiLCJyZXNldFN0YXRlIiwiZXJyb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlc2V0IiwiQ29uc3VsdGFudGFPbmxpbmUiLCJHb29nbGVNYXBzIiwiYXNzaWduR21hcCIsInNldFRpbWVvdXQiLCJnbWFwIiwiY3VycmVudFRleHQiLCJpbmRleCIsInRleHRDb250ZW50IiwiRmlyc1NlY3Rpb24iLCJzdGF0ZSIsInNldFN0YXRlIiwiY2hhbmdlVGV4dCIsImxlbmd0aCIsInNlcnZpY2lpIiwiaWQiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJyb3V0ZSIsImFsdCIsIlNlcnZpY2lpQ29udGFpbmVyIiwiU2VydmljaWlXcmFwcGVyIiwibWFwIiwib3RoZXJTZWN0aW9uUHJvcHMiLCJTZXJ2aWNpaUNhcmQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsImxvYWRlcnMiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwiZW5hYmxlQmx1cnJ5UGxhY2Vob2xkZXIiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0Iiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwid2lkdGhzIiwicyIsImtpbmQiLCJ3aWR0aCIsInciLCJwIiwic3JjIiwic3JjU2V0IiwiZ2V0V2lkdGhzIiwibGFzdCIsInF1YWxpdHkiLCJpIiwibG9hZCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwicGxhY2Vob2xkZXIiLCJlbGVtZW50IiwidW5vcHRpbWl6ZWQiLCJwcmlvcml0eSIsImFsbCIsInJlc3QiLCJ1bnNpemVkIiwiQm9vbGVhbiIsIkpTT04iLCJoZWlnaHQiLCJsb2FkaW5nIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiTUlOX0lNR19TSVpFX0ZPUl9QTEFDRUhPTERFUiIsInRvb1NtYWxsRm9yQmx1cnJ5UGxhY2Vob2xkZXIiLCJzaG91bGRTaG93Qmx1cnJ5UGxhY2Vob2xkZXIiLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImlzTmFOIiwid3JhcHBlclN0eWxlIiwib3ZlcmZsb3ciLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdBdHRyaWJ1dGVzIiwiZ2VuZXJhdGVJbWdBdHRycyIsInNldFJlZiIsInJlbW92ZVBsYWNlaG9sZGVyIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbmZpZ0RvbWFpbnMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJlbCIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwib3B0aW9ucyIsImluc3RhbmNlIiwiZW50cmllcyIsImVudHJ5IiwiY2FsbGJhY2siLCJBbXBTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJpc0luQW1wTW9kZSIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsImluQW1wTW9kZSIsImhlYWQiLCJjaGlsZCIsImxpc3QiLCJmcmFnbWVudExpc3QiLCJNRVRBVFlQRVMiLCJrZXlzIiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwiaGFzS2V5Iiwia2V5IiwibGVuIiwibWV0YXR5cGUiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudENoaWxkcmVuIiwiaGVhZEVsZW1lbnQiLCJkZWZhdWx0SGVhZCIsInByb3BzIiwidW5pcXVlIiwiYyIsImFtcFN0YXRlIiwiaGVhZE1hbmFnZXIiLCJIZWFkIiwiaXNTZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsIl9oYXNIZWFkTWFuYWdlciIsImVtaXRDaGFuZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiQ29tcG9uZW50Iiwid2luZG93IiwiSG9tZSIsInRpdGxlIiwiaW1hZ2VVcmwiXSwibWFwcGluZ3MiOiI7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QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQiwyREFBMkQsU0FBUztBQUNwRSx5QkFBeUIsU0FBUztBQUNsQztBQUNBLGFBQWEsU0FBUztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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O0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9B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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMLG1CQUFtQixpQ0FBaUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRCxlQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQzdSYTs7QUFFYixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLGVBQWtCOztBQUVsQixhQUFhLG1CQUFPLENBQUMsNENBQU87O0FBRTVCLGlEQUFpRCxtQkFBTyxDQUFDLG9GQUF1Qjs7QUFFaEYsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GLCtDQUErQywwREFBMEQsMkNBQTJDLGlDQUFpQzs7QUFFckw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVELGVBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDekVhOztBQUViLGtCQUFrQjtBQUNsQixlQUFrQjs7QUFFbEIseUNBQXlDLG1CQUFPLENBQUMsd0RBQWE7O0FBRTlELHlDQUF5QyxtQkFBTyxDQUFDLDBFQUFrQjs7QUFFbkUsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQzs7O0FBRzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLGtCQUFrQixjQUFjLE9BQU8sR0FBRyxjQUFjLEdBQUc7O0FBRWxHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7O0FBRUE7QUFDQSxDQUFDOztBQUVELGVBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7QUMzUEEsbUdBQXdDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEZvcm0gPSAoKT0+e1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gIHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2dkcHIsIHNldEdkcHJdPXVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmchXCIpXHJcbiAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgY29tbWVudHMsXHJcbiAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgZ2RwcixcclxuICAgICAgICBzdWJtaXR0ZWRcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcIkhBTkRMRSBTVUJNSVQgTUFJIEpPUyBFIERBVEFcIilcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgaWYoZGF0YS5uYW1lICYmIGRhdGEuZW1haWwgJiYgZGF0YS5jb21tZW50cyAmJiBkYXRhLnBob25lICYmIGRhdGEuZ2RwciAmJiBkYXRhLnN1Ym1pdHRlZCA9PWZhbHNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFJQ0kgU1VOVCBEQVRFTEVcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvY29udGFjdCcsZGF0YSwgaGVhZGVycylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KFwiVmEgbXVsdHVtaW0sIHZhIHZvbSBjb250YWN0YSBjdXJhbmRcIik7XHJcbiAgICAgICAgICByZXNldFN0YXRlKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoXCJGb3JtdWxhcnVsIG51IHMtYSB0cmltaXMhISEhXCIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIC8vIGUucmVzZXQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSEFORExFIFNVQk1JVC9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIH0gZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGFsZXJ0KFwiZXJvYXJlIGluIElGXCIpXHJcbiAgICAgIH1cclxuICAgICAgfVxyXG5cclxuIGNvbnN0IHJlc2V0U3RhdGU9KCk9Pntcclxuc2V0TmFtZShcIlwiKVxyXG5zZXRFbWFpbChcIlwiKVxyXG5zZXRQaG9uZShcIlwiKVxyXG5zZXRHZHByKFwiXCIpXHJcbnNldFN1Ym1pdHRlZChmYWxzZSlcclxuIH0gICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCIgaWQ9XCJjb250YWN0XCI+XHJcbiAgICA8aDI+Q29udGFjdCBSYXBpZDwvaDI+XHJcbiAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgLy8gIGFjdGlvbj1cIi9wYWdlcy9zdWNjZXNzLmh0bWxcIiBcclxuICAgICBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJudW1lXCI+TnVtZTwvbGFiZWw+XHJcblxyXG4gICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwibnVtZVwiIG5hbWU9XCJudW1lXCIgcGxhY2Vob2xkZXI9XCJOdW1lIHNpIFByZW51bWVcIiBvbkNoYW5nZT17KGUpPT57c2V0U3VibWl0dGVkKGZhbHNlKSwgc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9fS8+XHJcblxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJBZHJlc2EgZGUgZW1haWxcIiBvbkNoYW5nZT17KGUpPT57c2V0U3VibWl0dGVkKGZhbHNlKSwgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfX0vPlxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+VGVsZWZvbjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZWxcIiBuYW1lPVwicGhvbmVcIiBpZD1cInBob25lXCIgcGF0dGVybj1cIlswLTldezEwfVwiIHBsYWNlaG9sZGVyPVwiVGVsZWZvblwiIG9uQ2hhbmdlPXsoZSk9PntzZXRQaG9uZShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgPHRleHRhcmVhIHJlcXVpcmVkIG5hbWU9XCJjb21tZW50c1wiIGlkPVwiY29tbWVudHNcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaWV0aSBDYXV6YVwiIG9uQ2hhbmdlPXsoZSk9PntzZXRDb21tZW50cyhlLnRhcmdldC52YWx1ZSl9fSAvPlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgPGxhYmVsIGlkPVwiZ2Rwci1sYWJlbFwiIGh0bWxGb3I9XCJnZHByXCI+PGEgaHJlZj1cIi9wYWdlcy9nZHByLmh0bWxcIj5TdW50IGRlIGFjb3JkIGN1IHBvbGl0aWNhIGRlIHByZWx1Y3JhcmVcclxuICAgICAgICAgICAgICAgICAgICBhIGRhdGVsb3I8L2E+PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJnZHByXCIgb25DaGFuZ2U9eyhlKT0+e3NldEdkcHIoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZnJvbS1yaWdodFwiIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICBvbkNsaWNrPXsoZSk9PntoYW5kbGVTdWJtaXQoZSlcclxuICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIikucmVzZXQoKVxyXG4gICAgICAgICB9fSA+IFRyaW1pdGV0aSE8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuPC9tYWluPlxyXG48Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybSIsImltcG9ydCBHb29nbGVNYXBzIGZyb20gJy4uL0dvb2dsZU1hcHMvR29vZ2xlTWFwcydcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9Gb3JtL2Zvcm0nXHJcblxyXG5jb25zdCBDb25zdWx0YW50YU9ubGluZSA9ICgpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICA8c3R5bGUganN4PntgICAgIFxyXG5cclxuXHJcbiNjb25zdWx0YW50YS1vbmxpbmV7XHJcbiAgICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgXHJcbn1cclxuXHJcbiNjb25zdWx0YW50YS1vbmxpbmUgLmJhY2tncm91bmR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuI2NvbnN1bHRhbnRhLW9ubGluZSAuZm9ybS1jb250YWluZXIsICNjb25zdWx0YW50YS1vbmxpbmUgLmRlc2NyaXB0aW9ue1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbn1cclxuI2NvbnN1bHRhbnRhLW9ubGluZSAuZm9ybS1jb250YWluZXJ7XHJcbiAgIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICAgZ3JpZC1yb3c6IDEgLyAyO1xyXG4gXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC1mYW1pbHk6dmFyKC0tZGVjb3JhdGl2ZUZvbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgXHJcbn1cclxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xyXG4gICAgXHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDJweDtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hlYXQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xyXG59XHJcbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICwgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbn1cclxuaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wMDAwMSlcclxufVxyXG5cclxuZm9ybSBpbnB1dCwgZm9ybSB0ZXh0YXJlYXtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKSAycHggc29saWQ7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMgfiBsYWJlbCxcclxuLmZvcm0tY29udGFpbmVyIHRleHRhcmVhOmZvY3VzIH4gbGFiZWwsXHJcbi5mb3JtLWNvbnRhaW5lciBpbnB1dDp2YWxpZCB+IGxhYmVsLFxyXG4uZm9ybS1jb250YWluZXIgdGV4dGFyZWE6dmFsaWQgfiBsYWJlbCB7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmxhYmVse1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2dkcHItbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnRleHRhcmVhLCBpbnB1dCwgbGFiZWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IHZhcigtLWludikgc29saWQgMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlY29yYXRpdmVGb250KTtcclxufVxyXG50ZXh0YXJlYXtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgXHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhmciAxZnI7XHJcbn1cclxuZmllbGRzZXQgbGFiZWwgYXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgdHJhbnNpdGlvbjogY29sb3IgLjVzO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5maWVsZHNldCBsYWJlbCBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBzb2xpZCB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcikgO1xyXG4gICAgY29sb3I6Ymx1ZTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGZvcm0gaW5wdXQsIC5mb3JtLWNvbnRhaW5lciBidXR0b257XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuYH08L3N0eWxlPlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiY29uc3VsdGFudGEtb25saW5lXCI+XHJcblxyXG5cclxuPG1haW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gY29udGVudFwiPlxyXG4gICAgPG1haW4+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZFwiPkFWT0NBVCBET1JVIEJPVEVBPC9oMj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkXCI+Q09OU1VMVEFOVEEgSlVSSURJQ0EgT05MSU5FITwvaDM+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZFwiPkFQUk9BUEUgREUgRFVNTkVBVk9BU1RSQSBPUklVTkRFIEFUSSBGSSE8L2g0PlxyXG4gICAgPC9tYWluPlxyXG5cclxuICAgIDxtYWluIGNsYXNzTmFtZT1cInBhcmFncmFwaHNcIj5cclxuXHJcbiAgICAgICAgPHA+Q2FiaW5ldCBBdm9jYXQgRG9ydSBCb3RlYSB2aW5lIMOubiDDrm50w6JtcGluYXJlYSBuZXZvaWxvciBjbGllbsWjaWxvciwgcHJpbiBhc2lndXJhcmVhIGRlIHNlcnZpY2lpIGRlXHJcbiAgICAgICAgICAgIGNvbnN1bHRhbsWjxIMganVyaWRpY8SDIG9ubGluZS48L3A+XHJcblxyXG4gICAgICAgIDxwPiBBY2VzdCB0aXAgZGUgc2VydmljaWkgZGUgY29uc3VsdGFuxaPEgyBhc2lndXLEgyBvIHJlem9sdmFyZSBmYWNpbMSDIMWfaSByYXBpZMSDIHBlbnRydSBhbnVtaXRlIHByb2JsZW1lXHJcbiAgICAgICAgICAgIGp1cmlkaWNlXHJcbiAgICAgICAgICAgIMWfaSBvZmVyxIMgbyBzZXJpZSBkZSBhdmFudGFqZSBjdW0gYXIgZmkgZXZpdGFyZWEgZGVwbGFzxINyaWkgY3UgcmV6dWx0YXR1bCBmaXJlc2MgYWwgZWNvbm9taWVpIGRlXHJcbiAgICAgICAgICAgIHRpbXAsXHJcbiAgICAgICAgICAgIGNvc3R1cmkgbWFpIHNjxIN6dXRlIMWfaSBudSDDrm4gdWx0aW11bCByw6JuZCwgYXbDom5kIMOubiB2ZWRlcmUgY29udGV4dHVsIHNvY2lhbCwgcMSDc3RyYXJlYSB1bmVpXHJcbiAgICAgICAgICAgIGRpc3RhbsWjxINyaVxyXG4gICAgICAgICAgICBzb2NpYWxlLjwvcD5cclxuXHJcbiAgICAgICAgPHA+IFNvY2lldGF0ZWEgw65uIGNhcmUgdHLEg2ltIHNlIGFmbMSDIMOubnRyLW8gY29udGludcSDIGV2b2x1xaNpZSwgaWFyIMOubiBwcmV6ZW50IGHFn2EgbnVtaXR1bCBwcm9jZXMgZGVcclxuICAgICAgICAgICAgZGlnaXRhbGl6YXJlLCBjdXByaW5kZSB0b3QgbWFpIG11bHRlIHNlY3RvYXJlIGFsZSB2aWXFo2lpIGVjb25vbWljbyBzb2NpYWxlIMWfaSBhc2lndXLEgyBvIHBhbGV0xIMgZGluXHJcbiAgICAgICAgICAgIGNlIMOubiBjZVxyXG4gICAgICAgICAgICBtYWkgbGFyZ8SDIGRlIHNlcnZpY2lpLjwvcD5cclxuXHJcbiAgICA8L21haW4+XHJcbjwvbWFpbj5cclxuXHJcbjxGb3JtLz5cclxuPEdvb2dsZU1hcHMgLz5cclxuPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25zdWx0YW50YU9ubGluZSIsIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR29vZ2xlTWFwcygpIHtcclxuXHJcbiAgZnVuY3Rpb24gYXNzaWduR21hcCgpe1xyXG4gICAgc2V0VGltZW91dCgoKT0+XHJcbiAgICB7IGdtYXA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcz93aWR0aD02MDAmYW1wO2hlaWdodD00MDAmYW1wO2hsPWVuJmFtcDtxPVN0cmFkYSBJdWxpdSBNYW5pdSA0NyBCcmHImW92IDUwMDA5MSZhbXA7dD0mYW1wO3o9MTQmYW1wO2llPVVURjgmYW1wO2l3bG9jPUImYW1wO291dHB1dD1lbWJlZFwifSwgMTAwMCk7XHJcbiAgICBcclxuICB9XHJcbiBcclxubGV0IGdtYXAgPVwiXCJcclxuYXNzaWduR21hcCgpXHJcbiAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgIFxyXG4gICAgICAubWFwb3V0ZXIge1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcclxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5nbWFwX2NhbnZhcyB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmdtYXBfaWZyYW1lIHtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXBvdXRlclwiPlxyXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZ21hcF9jYW52YXNcIj5cclxuICAgICAgICAgICAgPGlmcmFtZSBsb2FkaW5nPVwibGF6eVwiIGNsYXNzTmFtZT1cImdtYXBfaWZyYW1lXCIgd2lkdGg9XCIxMDAlXCIgZnJhbWVCb3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNyYz17Z21hcH0gPjwvaWZyYW1lPlxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gIFxyXG4gICAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICIsIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5sZXQgY3VycmVudFRleHQgPVwiXCJcclxubGV0IGluZGV4ID0gMDtcclxuY29uc3QgdGV4dENvbnRlbnQgPSBbXCIgZHJlcHQgcGVuYWxcIiwgXCIgZHJlcHR1bCBmYW1pbGllaVwiLCBcIiBkcmVwdCBjaXZpbFwiLCAgXCIgbWFscHJheGlzIG1lZGljYWxcIiwgXCIgZHJlcHR1bCBtdW5jaWlcIiwgXCIgZXhlY3V0YXJpIHNpbGl0ZVwiIF07XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEZpcnNTZWN0aW9uKCl7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXT11c2VTdGF0ZSh0ZXh0Q29udGVudFswXSlcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBjaGFuZ2VUZXh0ID0gKCk9PntcclxuICAgICAgICAoaW5kZXggPCB0ZXh0Q29udGVudC5sZW5ndGgtMSkgPyBpbmRleCsrIDogaW5kZXg9MDtcclxuICAgICAgICBjdXJyZW50VGV4dCA9ICB0ZXh0Q29udGVudFtpbmRleF1cclxuICAgICAgICBzZXRTdGF0ZShjdXJyZW50VGV4dClcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoY2hhbmdlVGV4dCwgMzAwMCk7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmlyc3Qtc2VjdGlvblwiIGlkPVwidG9wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItNCBoZXJvLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICBBdm9jYXQgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPkRvcnUgQm90ZWE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIGNsYXNzTmFtZT1cIm15LTQgZC1ibG9jayBsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteS00IGQtYmxvY2sgc3BlY2lhbGl6YXJpIFwiPlByb2Zlc2lvbmFsaXNtIHNpIEluY3JlZGVyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrIG10LTQgZGluYW1pY1wiPntzdGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1haW4tY3RhIGJ0biBidG4xIGZyb20tbGVmdFwiIGhyZWY9XCIjc2VydmljaWlcIj52ZWRldGkgbWFpIG11bHRlPC9hPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9zZWN0aW9uPiAgXHJcbiAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc1NlY3Rpb24iLCJjb25zdCBzZXJ2aWNpaSA9W1xyXG4gICAge1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmFtZTogXCJEcmVwdCBQZW5hbFwiLFxyXG4gICAgICAgIGljb246IFwiL2Fzc2V0cy9pbWFnZXMvc3ZnL3BlbmFsLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFzaXN0ZW7Im8SDIMiZaSByZXByZXplbnRhcmUganVyaWRpY8SDIMOubiBmYXphIGRlIHVybcSDcmlyZSBwZW5hbMSDIMiZaSDDrm4gZmHIm2EgaW5zdGFuyJtlbG9yIGRlIGp1ZGVjYXTEgyBhdMOidCBwZW50cnUgcGVyc29hbmUgY2VyY2V0YXRlIChzdXNwZWPIm2ksIGluY3VscGHIm2kpIGPDonQgyJlpIHBlbnRydSBwxINyyJtpIGNpdmlsZS92xIN0xINtYXRlLlwiLFxyXG4gICAgICAgIHJvdXRlOlwiIC9kcmVwdC1wZW5hbFwiLFxyXG4gICAgICAgIGFsdDpcImljb24gRHJlcHQgUGVuYWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoyLFxyXG4gICAgICAgIG5hbWU6IFwiRHJlcHR1bCBGYW1pbGllaVwiLFxyXG4gICAgICAgIGljb246IFwiL2Fzc2V0cy9pbWFnZXMvc3ZnL2ZhbWlsaWUucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJDb25zdWx0YW7Im8SDIMiZaSBhc2lzdGVuyJvEgyBqdXJpZGljYSDDrm4gY2F1emVsZSBkZSBkaXZvcnQsIHN0YWJpbGlyZWEgZG9taWNpbGl1bHVpIGNvcGlsdWx1aSwgZXhlcmNpdGFyZWEgYXV0b3JpdGF0aWkgcGFyaW50ZXN0aSwgcGVuc2llIGRlIGludHJldGluZXJlIGNhdCBzaSBwcm9ncmFtIGRlIHZpeml0YS4gUGFydGFqIGJ1bnVyaSBjb211bmUgaW4gZmF0YSBpbnN0YW50ZWxvciBkZSBqdWRlY2F0YSBjYXQgc2kgYSB0dXR1cm9yIGF1dG9yaXRhdGlsb3IvaW5zdGl0dXRpaWxvciBwdWJsaWNlLlwiLFxyXG4gICAgICAgIHJvdXRlOiBcIi9kcmVwdHVsLWZhbWlsaWVpXCIsXHJcbiAgICAgICAgYWx0OlwiaWNvbiBEcmVwdCBQZW5hbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjMsXHJcbiAgICAgICAgbmFtZTogXCJEcmVwdCBDaXZpbFwiLFxyXG4gICAgICAgIGljb246IFwiL2Fzc2V0cy9pbWFnZXMvc3ZnL2NpdmlsLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiQXNpc3RlbsibxIMsIGNvbnN1bHRhbsibxIMgyJlpIHJlcHJlemVudGFyZSBqdXJpZGljxIMgw65uIHRvYXRlIHJhbXVyaWxlIGRyZXB0dWx1aSBjaXZpbCwgbGl0aWdpaSDDrm50cmUgcHJvZmVzaW9uaciZdGksIGNvbnRyYWN0ZSwgc3VjY2VzaXVuaSwgZGl2b3LImywgcGFydGFqLCBkcmVwdHVyaSBuZXBhdHJpbW9uaWFsZSwgZHJlcHQgc29jaWV0YXIuXCIsXHJcbiAgICAgICAgcm91dGU6IFwiL2RyZXB0LWNpdmlsXCIsXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjQsXHJcbiAgICAgICAgbmFtZTogXCJNYWxwcmF4aXMgTWVkaWNhbFwiLFxyXG4gICAgICAgIGljb246IFwiL2Fzc2V0cy9pbWFnZXMvc3ZnL21hbHByYXhpcy5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkFzaXN0ZW7Im8SDIGp1cmlkaWPEgyDDrm4gZmHIm2EgQ29sZWdpdWx1aSBNZWRpY2lsb3IsIGPDonQgyJlpIHBlIGR1cmF0YSB1bnVpIGV2ZW50dWFsIGxpdGlnaXUgw65uIGZhyJthIGluc3RhbsibZWxvciBqdWRlY8SDdG9yZciZdGlcIixcclxuICAgICAgICByb3V0ZTogXCIvbWFscHJheGlzLW1lZGljYWxcIixcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6NSxcclxuICAgICAgICBuYW1lOiBcIkRyZXB0dWwgTXVuY2lpXCIsXHJcbiAgICAgICAgaWNvbjogXCIvYXNzZXRzL2ltYWdlcy9zdmcvbXVuY2EucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJDb25zdWx0YW7Im8SDIHBlbnRydSBhbmdhamF0b3JpIMiZaSBhbmdhamHIm2ksIGFzaXN0ZW7Im8SDIMiZaSByZXByZXplbnRhcmUgw65uIHZlZGVyZWEgc29sdcibaW9uxINyaWkgbGl0aWdpaWxvciBkZSBtdW5jxIMuXCIsXHJcbiAgICAgICAgcm91dGU6IFwiL2RyZXB0dWwtbXVuY2lpXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6NixcclxuICAgICAgICBuYW1lOiBcIkV4ZWN1dGFyaSBTaWxpdGVcIixcclxuICAgICAgICBpY29uOiBcIi9hc3NldHMvaW1hZ2VzL3N2Zy9leGVjdXRhcmkucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJBc2lzdGVuyJvEgywgY29uc3VsdGFuyJvEgyDImWkgcmVwcmV6ZW50YXJlIGp1cmlkaWPEgyDDrm4gdG9hdGUgcmFtdXJpbGUgZHJlcHR1bHVpIGNpdmlsLCBsaXRpZ2lpIMOubnRyZSBwcm9mZXNpb25pyJl0aSwgY29udHJhY3RlLCBzdWNjZXNpdW5pLCBkaXZvcsibLCBwYXJ0YWosIGRyZXB0dXJpIG5lcGF0cmltb25pYWxlLCBkcmVwdCBzb2NpZXRhci5cIixcclxuICAgICAgICByb3V0ZTogXCIvZXhlY3V0YXJpXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6NyxcclxuICAgICAgICBuYW1lOiBcIkRyZXB0IEltb2JpbGlhclwiLFxyXG4gICAgICAgIGljb246IFwiL2Fzc2V0cy9pbWFnZXMvc3ZnL2ltb2JpbGlhci5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkNhYmluZXQgQXZvY2F0IERvcnUgQm90ZWEgQnJhc292IHByb2Zlc2VhemEgc2kgaW4gRHJlcHQgSW1vYmlsaWFyLCB0cmFuemFjdGlpIGltb2JpbGlhcmUsIGRyZXB0dWwgY29uc3RydWN0aWlsb3Igc2kgYXNpZ3VyYSBjb25zaWxpZXJlIHNvY2lldGF0aWxvciBjb21lcmNpYWxlIHNpIG1hcmlsb3IgY29tcGFuaWkgZGUgaW52ZXN0aXRpaSwgZ2VzdGlvbmFuZCB0cmFuemFjdGlpIHNpIGxpdGlnaWkgY29tcGxleGUgZGUgbmF0dXJhIGltb2JpbGlhcmEuXCIsXHJcbiAgICAgICAgcm91dGU6IFwiL2ltb2JpbGlhclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjgsXHJcbiAgICAgICAgbmFtZTogXCJEcmVwdCBDb250cmF2ZW50aW9uYWxcIixcclxuICAgICAgICBpY29uOiBcIi9hc3NldHMvaW1hZ2VzL3N2Zy9jb250cmF2ZW50aW9uYWwucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJBc2lzdGVudGEganVyaWRpY2Egc2kgcmVwcmV6ZW50YXJlIGluIGxpdGlnaWlsZSBjYXJlIGF1IGNhIG9iaWVjdCBhbnVsYXJlYSBwcm9jZXN1bHVpLXZlcmJhbCBkZSBjb250cmF2ZW50aWUgY2EgdXJtYXJlIGEgaW50ZXJ2ZW5pcmlpIHByZXNjcmlwdGllaSByYXNwdW5kZXJpaSBjb250cmF2ZW50aW9uYWxlIHNpIGEgY2FkdWNpdGF0aWkgYWNlc3R1aWE7IE9yaWNlIGFsdGUgYWN0aXZpdGF0aSBkaW4gZG9tZW5pdWwgY29udHJhdmVudGlpbG9yLlwiLFxyXG4gICAgICAgIHJvdXRlOiBcIi9jb250cmF2ZW50aW9uYWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDo5LFxyXG4gICAgICAgIG5hbWU6IFwiRHJlcHQgQmFuY2FyXCIsXHJcbiAgICAgICAgaWNvbjogXCIvYXNzZXRzL2ltYWdlcy9zdmcvYmFuY2FyLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiQ2FiaW5ldHVsIGRlIGF2b2NhdHVyYSDigJxEb3J1IEJvdGVh4oCdIG9mZXJpbSBwYXJ0ZW5lcmlsb3Igbm/ImXRyaSB1biBzZXJ2aWNpdSBkZWRpY2F0IGRlIGNvbnN1bHRhbsibxIMganVyaWRpY8SDIMOubiByZWxhyJtpYSBiYW5jYVwiLFxyXG4gICAgICAgIHJvdXRlOiBcIi9iYW5jYXJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoxMCxcclxuICAgICAgICBuYW1lOiBcIkRyZXB0IEFkbWluaXN0cmF0aXZcIixcclxuICAgICAgICBpY29uOiBcIi9hc3NldHMvaW1hZ2VzL3N2Zy9hZG1pbmlzdHJhdGl2LnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiQWNlYXN0xIMgbWF0ZXJpZSByZWdsZW1lbnRlYXrEgyBkcmVwdHVsIHBlcnNvYW5laSBjYXJlIHNlIGNvbnNpZGVyxIMgdsSDdMSDbWF0xIMgw65udHItdW4gZHJlcHQgYWwgc8SDdSBvcmkgw65udHItdW4gaW50ZXJlcyBsZWdpdGltLCBkZSBjxIN0cmUgbyBhdXRvcml0YXRlIHB1YmxpY8SDXCIsXHJcbiAgICAgICAgcm91dGU6IFwiL2FkbWluaXN0cmF0aXZcIlxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VydmljaWkiLCJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFNlcnZpY2lpV3JhcHBlciBmcm9tICcuL3NlcnZpY2lpLXdyYXBwZXInXHJcblxyXG5cclxuY29uc3QgU2VydmljaWlDb250YWluZXIgPSgpID0+IHtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgPD5cclxuXHJcbjxzZWN0aW9uIGNsYXNzTmFtZT1cInNlcnZpY2lpLWRldGFsaWlcIj5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJzZWN0aW9uLWltZ1wiPjwvbWFpbj5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+PC9tYWluPlxyXG4gICAgICAgIDxoMj5TZXJ2aWNpaTwvaDI+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiaDEtc2VwYXJhdG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9pbWFnZXMvZGVjb3JhdGl2ZS9oMS1zZXBhcmF0b3ItY3VzdG9tLWljb24tMS5wbmdcIiBhbHQ9XCJpbWFnZVwid2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBvYmplY3RGaXQ9IFwiY29udGFpblwiLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L21haW4+XHJcbjxTZXJ2aWNpaVdyYXBwZXIgLz5cclxuPG1haW4gY2xhc3NOYW1lPVwiaDEtc2VwYXJhdG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9pbWFnZXMvZGVjb3JhdGl2ZS9oMS1zZXBhcmF0b3ItY3VzdG9tLWljb24tMS5wbmdcIiBhbHQ9XCJpbWFnZVwid2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBvYmplY3RGaXQ9IFwiY29udGFpblwiLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L21haW4+XHJcbjwvc2VjdGlvbj5cclxuPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNpaUNvbnRhaW5lciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzZXJ2aWNpaSBmcm9tICcuL2RhdGUvc2VydmljaWkuanMnO1xyXG5cclxuaW1wb3J0IFNlcnZpY2lpQ2FyZCBmcm9tICcuL3NlcnZpY2lpQ2FyZCdcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIGZ1bmN0aW9uIFNlcnZpY2lpV3JhcHBlcigpIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoc2VydmljaWkpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAge3N0YXRlLm1hcCgoeyBpZCwgLi4ub3RoZXJTZWN0aW9uUHJvcHMgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTZXJ2aWNpaUNhcmQga2V5PXtpZH0gey4uLm90aGVyU2VjdGlvblByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIFNlcnZpY2lpV3JhcHBlcjsiLCJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2lpQ2FyZCAoe2ljb24sIG5hbWUsIGRlc2NyaXB0aW9uLCByb3V0ZX0pIHtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiY29sLWxnLTMgIGNvbC1tZC02IGNvbC1zbS0xMiBtYi0zIHNlcnZpY2lpLWNvbnRhaW5lciBjYXJkIHRyYW5zcGFyZW50LWNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWQgY2FyZC1oZWFkZXJcIj57bmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cIiBhbGlnbi1zZWxmLWNlbnRlciBjYXJkLWltZy10b3BcIiBzcmM9e2ljb259IGFsdD1cIkljb25zIE9mIFNlcnZpY2lcIiB3aWR0aD17NTB9IGhlaWdodD17MTB9IGxheW91dD1cInJlc3BvbnNpdmVcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgcXVhbGl0eT17MTAwfS8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGNhcmQtYm9keVwiIGlkPXtuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFwaHNcIj4ge2Rlc2NyaXB0aW9ufSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4xIGZyb20tbGVmdCBkLWJsb2NrXCIgaHJlZj17cm91dGV9PmNpdGl0aSBtYWkgbXVsdDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgICB9IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgUGxhY2Vob2xkZXJWYWx1ZSA9ICdibHVyJyB8ICdlbXB0eSdcblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKSAmXG4gIChcbiAgICB8IHtcbiAgICAgICAgcGxhY2Vob2xkZXI/OiBFeGNsdWRlPFBsYWNlaG9sZGVyVmFsdWUsICdibHVyJz5cbiAgICAgICAgYmx1ckRhdGFVUkw/OiBuZXZlclxuICAgICAgfVxuICAgIHwgeyBwbGFjZWhvbGRlcjogJ2JsdXInOyBibHVyRGF0YVVSTDogc3RyaW5nIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG4gIGVuYWJsZUJsdXJyeVBsYWNlaG9sZGVyOiBjb25maWdFbmFibGVCbHVycnlQbGFjZWhvbGRlcixcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZSxcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZ1xuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdXG4gICAgZm9yIChsZXQgbWF0Y2g7IChtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKSk7IG1hdGNoKSB7XG4gICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpXG4gICAgfVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoXG4gIGVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQgfCBudWxsLFxuICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXJWYWx1ZVxuKSB7XG4gIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInICYmIGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5jb21wbGV0ZSkge1xuICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSdcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIHBsYWNlaG9sZGVyID0gJ2VtcHR5JyxcbiAgYmx1ckRhdGFVUkwsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKCFjb25maWdFbmFibGVCbHVycnlQbGFjZWhvbGRlcikge1xuICAgIHBsYWNlaG9sZGVyID0gJ2VtcHR5J1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgY29uc3QgTUlOX0lNR19TSVpFX0ZPUl9QTEFDRUhPTERFUiA9IDUwMDBcbiAgY29uc3QgdG9vU21hbGxGb3JCbHVycnlQbGFjZWhvbGRlciA9XG4gICAgd2lkdGhJbnQgJiYgaGVpZ2h0SW50ICYmIHdpZHRoSW50ICogaGVpZ2h0SW50IDwgTUlOX0lNR19TSVpFX0ZPUl9QTEFDRUhPTERFUlxuICBjb25zdCBzaG91bGRTaG93Qmx1cnJ5UGxhY2Vob2xkZXIgPVxuICAgIHBsYWNlaG9sZGVyID09PSAnYmx1cicgJiYgIXRvb1NtYWxsRm9yQmx1cnJ5UGxhY2Vob2xkZXJcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSW1nRWxlbWVudFN0eWxlIHwgdW5kZWZpbmVkID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG5cbiAgICAuLi4oc2hvdWxkU2hvd0JsdXJyeVBsYWNlaG9sZGVyXG4gICAgICA/IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkKSxcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgeyFpc1Zpc2libGUgJiYgKFxuICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB7Li4uZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgICAgbG9hZGVyLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICl9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9eyhlbGVtZW50KSA9PiB7XG4gICAgICAgICAgc2V0UmVmKGVsZW1lbnQpXG4gICAgICAgICAgcmVtb3ZlUGxhY2Vob2xkZXIoZWxlbWVudCwgcGxhY2Vob2xkZXIpXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgIC8+XG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzcmNzZXQ9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0fVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzaXplcz17aW1nQXR0cmlidXRlcy5zaXplc31cbiAgICAgICAgICA+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL0JVSUxUIElOIExPQURFUlNcblxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG4gIGNvbnN0IHBhcmFtcyA9IFsnYXV0bz1mb3JtYXQnLCAnZml0PW1heCcsICd3PScgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3E9JyArIHF1YWxpdHkpXG4gIH1cblxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9ICc/JyArIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWBcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQW1wU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PGFueT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBBbXBTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnQW1wU3RhdGVDb250ZXh0J1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5BbXBNb2RlKHtcbiAgYW1wRmlyc3QgPSBmYWxzZSxcbiAgaHlicmlkID0gZmFsc2UsXG4gIGhhc1F1ZXJ5ID0gZmFsc2UsXG59ID0ge30pOiBib29sZWFuIHtcbiAgcmV0dXJuIGFtcEZpcnN0IHx8IChoeWJyaWQgJiYgaGFzUXVlcnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbXAoKTogYm9vbGVhbiB7XG4gIC8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbiAgcmV0dXJuIGlzSW5BbXBNb2RlKFJlYWN0LnVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KSlcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEhlYWRNYW5hZ2VyQ29udGV4dDogUmVhY3QuQ29udGV4dDx7XG4gIHVwZGF0ZUhlYWQ/OiAoc3RhdGU6IGFueSkgPT4gdm9pZFxuICBtb3VudGVkSW5zdGFuY2VzPzogYW55XG4gIHVwZGF0ZVNjcmlwdHM/OiAoc3RhdGU6IGFueSkgPT4gdm9pZFxuICBzY3JpcHRzPzogYW55XG59PiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEhlYWRNYW5hZ2VyQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdIZWFkTWFuYWdlckNvbnRleHQnXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVmZmVjdCBmcm9tICcuL3NpZGUtZWZmZWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcbmltcG9ydCB7IEhlYWRNYW5hZ2VyQ29udGV4dCB9IGZyb20gJy4vaGVhZC1tYW5hZ2VyLWNvbnRleHQnXG5pbXBvcnQgeyBpc0luQW1wTW9kZSB9IGZyb20gJy4vYW1wJ1xuXG50eXBlIFdpdGhJbkFtcE1vZGUgPSB7XG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRIZWFkKGluQW1wTW9kZSA9IGZhbHNlKTogSlNYLkVsZW1lbnRbXSB7XG4gIGNvbnN0IGhlYWQgPSBbPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5dXG4gIGlmICghaW5BbXBNb2RlKSB7XG4gICAgaGVhZC5wdXNoKDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPilcbiAgfVxuICByZXR1cm4gaGVhZFxufVxuXG5mdW5jdGlvbiBvbmx5UmVhY3RFbGVtZW50KFxuICBsaXN0OiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIGNoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4pOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4ge1xuICAvLyBSZWFjdCBjaGlsZHJlbiBjYW4gYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlbSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuICAvLyBBZGRzIHN1cHBvcnQgZm9yIFJlYWN0LkZyYWdtZW50XG4gIGlmIChjaGlsZC50eXBlID09PSBSZWFjdC5GcmFnbWVudCkge1xuICAgIHJldHVybiBsaXN0LmNvbmNhdChcbiAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pLnJlZHVjZShcbiAgICAgICAgKFxuICAgICAgICAgIGZyYWdtZW50TGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgICAgICAgIGZyYWdtZW50Q2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGRcbiAgICAgICAgKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+ID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnbnVtYmVyJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0LmNvbmNhdChmcmFnbWVudENoaWxkKVxuICAgICAgICB9LFxuICAgICAgICBbXVxuICAgICAgKVxuICAgIClcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpXG59XG5cbmNvbnN0IE1FVEFUWVBFUyA9IFsnbmFtZScsICdodHRwRXF1aXYnLCAnY2hhclNldCcsICdpdGVtUHJvcCddXG5cbi8qXG4gcmV0dXJucyBhIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgaGVhZCBjaGlsZCBlbGVtZW50c1xuIHdoaWNoIHNob3VsZG4ndCBiZSBkdXBsaWNhdGVkLCBsaWtlIDx0aXRsZS8+XG4gQWxzbyBhZGRzIHN1cHBvcnQgZm9yIGRlZHVwbGljYXRlZCBga2V5YCBwcm9wZXJ0aWVzXG4qL1xuZnVuY3Rpb24gdW5pcXVlKCkge1xuICBjb25zdCBrZXlzID0gbmV3IFNldCgpXG4gIGNvbnN0IHRhZ3MgPSBuZXcgU2V0KClcbiAgY29uc3QgbWV0YVR5cGVzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFDYXRlZ29yaWVzOiB7IFttZXRhdHlwZTogc3RyaW5nXTogU2V0PHN0cmluZz4gfSA9IHt9XG5cbiAgcmV0dXJuIChoOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgIGxldCBpc1VuaXF1ZSA9IHRydWVcbiAgICBsZXQgaGFzS2V5ID0gZmFsc2VcblxuICAgIGlmIChoLmtleSAmJiB0eXBlb2YgaC5rZXkgIT09ICdudW1iZXInICYmIGgua2V5LmluZGV4T2YoJyQnKSA+IDApIHtcbiAgICAgIGhhc0tleSA9IHRydWVcbiAgICAgIGNvbnN0IGtleSA9IGgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSArIDEpXG4gICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzLmFkZChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgIHN3aXRjaCAoaC50eXBlKSB7XG4gICAgICBjYXNlICd0aXRsZSc6XG4gICAgICBjYXNlICdiYXNlJzpcbiAgICAgICAgaWYgKHRhZ3MuaGFzKGgudHlwZSkpIHtcbiAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFncy5hZGQoaC50eXBlKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtZXRhJzpcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1FVEFUWVBFUy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNvbnN0IG1ldGF0eXBlID0gTUVUQVRZUEVTW2ldXG4gICAgICAgICAgaWYgKCFoLnByb3BzLmhhc093blByb3BlcnR5KG1ldGF0eXBlKSkgY29udGludWVcblxuICAgICAgICAgIGlmIChtZXRhdHlwZSA9PT0gJ2NoYXJTZXQnKSB7XG4gICAgICAgICAgICBpZiAobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpIHtcbiAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWV0YVR5cGVzLmFkZChtZXRhdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBoLnByb3BzW21ldGF0eXBlXVxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSB8fCBuZXcgU2V0KClcbiAgICAgICAgICAgIGlmICgobWV0YXR5cGUgIT09ICduYW1lJyB8fCAhaGFzS2V5KSAmJiBjYXRlZ29yaWVzLmhhcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpXG4gICAgICAgICAgICAgIG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSA9IGNhdGVnb3JpZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNVbmlxdWVcbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gaGVhZEVsZW1lbnRzIExpc3Qgb2YgbXVsdGlwbGUgPEhlYWQ+IGluc3RhbmNlc1xuICovXG5mdW5jdGlvbiByZWR1Y2VDb21wb25lbnRzKFxuICBoZWFkRWxlbWVudHM6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgcHJvcHM6IFdpdGhJbkFtcE1vZGVcbikge1xuICByZXR1cm4gaGVhZEVsZW1lbnRzXG4gICAgLnJlZHVjZShcbiAgICAgIChsaXN0OiBSZWFjdC5SZWFjdENoaWxkW10sIGhlYWRFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgICAgICBjb25zdCBoZWFkRWxlbWVudENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShcbiAgICAgICAgICBoZWFkRWxlbWVudC5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChoZWFkRWxlbWVudENoaWxkcmVuKVxuICAgICAgfSxcbiAgICAgIFtdXG4gICAgKVxuICAgIC5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCwgW10pXG4gICAgLnJldmVyc2UoKVxuICAgIC5jb25jYXQoZGVmYXVsdEhlYWQocHJvcHMuaW5BbXBNb2RlKSlcbiAgICAuZmlsdGVyKHVuaXF1ZSgpKVxuICAgIC5yZXZlcnNlKClcbiAgICAubWFwKChjOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBjLmtleSB8fCBpXG4gICAgICBpZiAoXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJlxuICAgICAgICAhcHJvcHMuaW5BbXBNb2RlXG4gICAgICApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgYy5wcm9wc1snaHJlZiddICYmXG4gICAgICAgICAgLy8gVE9ETyhwcmF0ZWVrYmhAKTogUmVwbGFjZSB0aGlzIHdpdGggY29uc3QgZnJvbSBgY29uc3RhbnRzYCB3aGVuIHRoZSB0cmVlIHNoYWtpbmcgd29ya3MuXG4gICAgICAgICAgW1xuICAgICAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzJyxcbiAgICAgICAgICAgICdodHRwczovL3VzZS50eXBla2l0Lm5ldC8nLFxuICAgICAgICAgIF0uc29tZSgodXJsKSA9PiBjLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgICBuZXdQcm9wc1snZGF0YS1ocmVmJ10gPSBuZXdQcm9wc1snaHJlZiddXG4gICAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZFxuXG4gICAgICAgICAgLy8gQWRkIHRoaXMgYXR0cmlidXRlIHRvIG1ha2UgaXQgZWFzeSB0byBpZGVudGlmeSBvcHRpbWl6ZWQgdGFnc1xuICAgICAgICAgIG5ld1Byb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddID0gdHJ1ZVxuXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCB7IGtleSB9KVxuICAgIH0pXG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaW5qZWN0cyBlbGVtZW50cyB0byBgPGhlYWQ+YCBvZiB5b3VyIHBhZ2UuXG4gKiBUbyBhdm9pZCBkdXBsaWNhdGVkIGB0YWdzYCBpbiBgPGhlYWQ+YCB5b3UgY2FuIHVzZSB0aGUgYGtleWAgcHJvcGVydHksIHdoaWNoIHdpbGwgbWFrZSBzdXJlIGV2ZXJ5IHRhZyBpcyBvbmx5IHJlbmRlcmVkIG9uY2UuXG4gKi9cbmZ1bmN0aW9uIEhlYWQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBhbXBTdGF0ZSA9IHVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KVxuICBjb25zdCBoZWFkTWFuYWdlciA9IHVzZUNvbnRleHQoSGVhZE1hbmFnZXJDb250ZXh0KVxuICByZXR1cm4gKFxuICAgIDxFZmZlY3RcbiAgICAgIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlPXtyZWR1Y2VDb21wb25lbnRzfVxuICAgICAgaGVhZE1hbmFnZXI9e2hlYWRNYW5hZ2VyfVxuICAgICAgaW5BbXBNb2RlPXtpc0luQW1wTW9kZShhbXBTdGF0ZSl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRWZmZWN0PlxuICApXG59XG5cbi8vIFRPRE86IFJlbW92ZSBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5IZWFkLnJld2luZCA9ICgpID0+IHt9XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG50eXBlIFN0YXRlID0gSlNYLkVsZW1lbnRbXSB8IHVuZGVmaW5lZFxuXG50eXBlIFNpZGVFZmZlY3RQcm9wcyA9IHtcbiAgcmVkdWNlQ29tcG9uZW50c1RvU3RhdGU6IDxUPihcbiAgICBjb21wb25lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gICAgcHJvcHM6IFRcbiAgKSA9PiBTdGF0ZVxuICBoYW5kbGVTdGF0ZUNoYW5nZT86IChzdGF0ZTogU3RhdGUpID0+IHZvaWRcbiAgaGVhZE1hbmFnZXI6IGFueVxuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50PFNpZGVFZmZlY3RQcm9wcz4ge1xuICBwcml2YXRlIF9oYXNIZWFkTWFuYWdlcjogYm9vbGVhblxuXG4gIGVtaXRDaGFuZ2UgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLnVwZGF0ZUhlYWQoXG4gICAgICAgIHRoaXMucHJvcHMucmVkdWNlQ29tcG9uZW50c1RvU3RhdGUoXG4gICAgICAgICAgWy4uLnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc10sXG4gICAgICAgICAgdGhpcy5wcm9wc1xuICAgICAgICApXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuX2hhc0hlYWRNYW5hZ2VyID1cbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIgJiYgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXG5cbiAgICBpZiAoaXNTZXJ2ZXIgJiYgdGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKVxuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmRlbGV0ZSh0aGlzKVxuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsIi8qKlxuICogSXNvbW9ycGhpYyBiYXNlNjQgdGhhdCB3b3JrcyBvbiB0aGUgc2VydmVyIGFuZCBjbGllbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQmFzZTY0KHN0cjogc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShzdHIpLnRvU3RyaW5nKCdiYXNlNjQnKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB3aW5kb3cuYnRvYShzdHIpXG4gIH1cbn1cbiIsIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7TmV4dFNlb30gZnJvbSAnbmV4dC1zZW8nXHJcbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9maXJzdFNlY3Rpb24vZmlyc3RTZWN0aW9uJ1xyXG5pbXBvcnQgU2VydmljaWlDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZXJ2aWNpaS9zZXJ2aWNpaS1jb250YWluZXInXHJcbmltcG9ydCBDb25zdWx0YW50YU9ubGluZSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnN1bHRhbnRhT25saW5lL2NvbnN1bHRhbnRhT25saW5lJ1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbmNvbnN0IHRpdGxlID0gXCJBdm9jYXQgQnJhc292IERvcnUgQm90ZWFcIiBcclxuY29uc3QgZGVzY3JpcHRpb24gPSBcIlwiXHJcbmNvbnN0IGltYWdlVXJsID0gJ2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDEuanBnJ1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG48SGVhZD4gXHJcbiAgPGxpbmtcclxuICAgIHJlbD1cInByZWxvYWRcIlxyXG4gICAgaHJlZj17aW1hZ2VVcmx9XHJcbiAgICBhcz1cImltYWdlXCJcclxuICAvPlxyXG48L0hlYWQ+XHJcbiAgICAgIDxOZXh0U2VvIHRpdGxlID0ge3RpdGxlfSBkZXNjcmlwdGlvbiA9e2Rlc2NyaXB0aW9ufS8+XHJcbiAgICAgIFxyXG4gICAgICA8Rmlyc3RTZWN0aW9uIC8+XHJcbiAgICAgIDxTZXJ2aWNpaUNvbnRhaW5lciAvPlxyXG4gICAgICA8Q29uc3VsdGFudGFPbmxpbmUgLz5cclxuICAgICAgXHJcbiAgICAgIFxyXG5cclxuPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmJvZHl7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIGhlYWRlciwgc2VjdGlvbiwgLmZpcnN0LXNlY3Rpb24sIC5zZWNvbmQtc2VjdGlvbiwgI2NvbnN1bHRhbnRhLW9ubGluZXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gICAgei1pbmRleDogMDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgXHJcbiAgYm9keSwgLmZpcnN0LXNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQxLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmZpcnN0LXNlY3Rpb24gLmNvbnRlbnQ6Zmlyc3QtY2hpbGR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmZpcnN0LXNlY3Rpb24gLmNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZm9udC1mYW1pbHk6dmFyKC0tZGVjb3JhdGl2ZUZvbnQpO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiB2YXIoLS1zaXRlLXdpZHRoKTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXIgO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcbiAgXHJcbiAgLmRpbmFtaWN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYW1le1xyXG4gICAgY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpXHJcbiAgfVxyXG4gIC5zcGVjaWFsaXphcml7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xyXG4gIH1cclxuXHJcblxyXG4gIC5oZXJvLXRleHR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICB9XHJcbiAgLm1haW4tY3Rhe1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMXJlbTtcclxuICB9XHJcbiAgICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICAuc2Vjb25kLXNlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OmNvbHVtbiBub3dyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9zZWN0aW9uMlxcIGJhY2tncm91bmQuanBnKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5jYXJkc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgXHJcbiAgICBnYXA6IDVweDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVjb3JhdGl2ZUZvbnQpO1xyXG4gIH1cclxuXHJcbiAgI3NlcnZpY2lpe1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtc2hhZG93OiAxMHB4IDEwcHggNXB4IHZhcigtLXRyYW5zcGFyZW50KTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgXHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci10cmFuc3BhcmVudCk7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnNlcnZpY2lpLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdHJhbnNwYXJlbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZm9udC1jb2xvcik7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAgLnNlcnZpY2lpLWJ0biwgLnNlcnZpY2lpLWJ0bjpob3ZlcntcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgIH0gXHJcbiAgXHJcbiAgLnNlcnZpY2lpLWJ0biBzcGFue1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcblxyXG4gIFxyXG4gIFxyXG4gIC5zZXJ2aWNpaS1kZXRhbGlpe1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG4gIH1cclxuICBcclxuICAuZmlyc3Qtc2VjdGlvbiwgLnNlcnZpY2lpLWRldGFsaWl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWN0aW9uLWltZ3tcclxuICAgIGhlaWdodDogNDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL1NlcnZpY2lpQkcuanBnKTtcclxuICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcblxyXG4gIC5zZWN0aW9uLXRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICAuc2VjdGlvbi1oZWFkLCAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XHJcblxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGNvbG9yOiB2YXIoIC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xyXG4gICBcclxuICB9XHJcblxyXG5cclxuICAubWFwb3V0ZXJ7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XHJcbiAgICBncmlkLXJvdzogMiAvIDM7XHJcbiAgfVxyXG5cclxuICBcclxuICAudHJhbnNwYXJlbnQtY2FyZCB7XHJcbiAgIFxyXG4gICAgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG5gfTwvc3R5bGU+XHJcblxyXG48Lz5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoY29uZmlnLmF1dGgucGFzc3dvcmQpKSA6ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXF1ZXN0RGF0YSkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzQXhpb3NFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblxuICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICBpZiAoY29uZmlnLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gdGhpcy5kZWZhdWx0cy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogKGNvbmZpZyB8fCB7fSkuZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eScsICdwYXJhbXMnXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAndGltZW91dE1lc3NhZ2UnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLCAnZGVjb21wcmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAnbWF4Qm9keUxlbmd0aCcsICdtYXhSZWRpcmVjdHMnLCAndHJhbnNwb3J0JywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCcsICdyZXNwb25zZUVuY29kaW5nJ1xuICBdO1xuICB2YXIgZGlyZWN0TWVyZ2VLZXlzID0gWyd2YWxpZGF0ZVN0YXR1cyddO1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuXG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRpcmVjdE1lcmdlS2V5cywgZnVuY3Rpb24gbWVyZ2UocHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKVxuICAgIC5jb25jYXQoZGlyZWN0TWVyZ2VLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMSlcbiAgICAuY29uY2F0KE9iamVjdC5rZXlzKGNvbmZpZzIpKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBtZXJnZURlZXBQcm9wZXJ0aWVzKTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvc1xuICpcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0F4aW9zRXJyb3IocGF5bG9hZCkge1xuICByZXR1cm4gKHR5cGVvZiBwYXlsb2FkID09PSAnb2JqZWN0JykgJiYgKHBheWxvYWQuaXNBeGlvc0Vycm9yID09PSB0cnVlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICBpZiAodG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuZnVuY3Rpb24gc3RyaXBCT00oY29udGVudCkge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW0sXG4gIHN0cmlwQk9NOiBzdHJpcEJPTVxufTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgdGVtcGxhdGVUaXRsZTogJycsXG4gIG5vaW5kZXg6IGZhbHNlLFxuICBub2ZvbGxvdzogZmFsc2UsXG4gIGRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoOiAwLFxuICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQ6IDAsXG4gIGRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoOiAwLFxuICBkZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHQ6IDBcbn07XG5cbnZhciBidWlsZFRhZ3MgPSBmdW5jdGlvbiBidWlsZFRhZ3MoY29uZmlnKSB7XG4gIHZhciBfY29uZmlnJGFkZGl0aW9uYWxMaW47XG5cbiAgdmFyIHRhZ3NUb1JlbmRlciA9IFtdO1xuXG4gIGlmIChjb25maWcudGl0bGVUZW1wbGF0ZSkge1xuICAgIGRlZmF1bHRzLnRlbXBsYXRlVGl0bGUgPSBjb25maWcudGl0bGVUZW1wbGF0ZTtcbiAgfVxuXG4gIHZhciB1cGRhdGVkVGl0bGUgPSAnJztcblxuICBpZiAoY29uZmlnLnRpdGxlKSB7XG4gICAgdXBkYXRlZFRpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgaWYgKGRlZmF1bHRzLnRlbXBsYXRlVGl0bGUpIHtcbiAgICAgIHVwZGF0ZWRUaXRsZSA9IGRlZmF1bHRzLnRlbXBsYXRlVGl0bGUucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdXBkYXRlZFRpdGxlO1xuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvbmZpZy5kZWZhdWx0VGl0bGUpIHtcbiAgICB1cGRhdGVkVGl0bGUgPSBjb25maWcuZGVmYXVsdFRpdGxlO1xuICB9XG5cbiAgaWYgKHVwZGF0ZWRUaXRsZSkge1xuICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCB7XG4gICAgICBrZXk6IFwidGl0bGVcIlxuICAgIH0sIHVwZGF0ZWRUaXRsZSkpO1xuICB9XG5cbiAgdmFyIG5vaW5kZXggPSBjb25maWcubm9pbmRleCB8fCBkZWZhdWx0cy5ub2luZGV4IHx8IGNvbmZpZy5kYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0luZGV4O1xuICB2YXIgbm9mb2xsb3cgPSBjb25maWcubm9mb2xsb3cgfHwgZGVmYXVsdHMubm9mb2xsb3cgfHwgY29uZmlnLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vRm9sbG93O1xuICB2YXIgcm9ib3RzUGFyYW1zID0gJyc7XG5cbiAgaWYgKGNvbmZpZy5yb2JvdHNQcm9wcykge1xuICAgIHZhciBfY29uZmlnJHJvYm90c1Byb3BzID0gY29uZmlnLnJvYm90c1Byb3BzLFxuICAgICAgICBub3NuaXBwZXQgPSBfY29uZmlnJHJvYm90c1Byb3BzLm5vc25pcHBldCxcbiAgICAgICAgbWF4U25pcHBldCA9IF9jb25maWckcm9ib3RzUHJvcHMubWF4U25pcHBldCxcbiAgICAgICAgbWF4SW1hZ2VQcmV2aWV3ID0gX2NvbmZpZyRyb2JvdHNQcm9wcy5tYXhJbWFnZVByZXZpZXcsXG4gICAgICAgIG1heFZpZGVvUHJldmlldyA9IF9jb25maWckcm9ib3RzUHJvcHMubWF4VmlkZW9QcmV2aWV3LFxuICAgICAgICBub2FyY2hpdmUgPSBfY29uZmlnJHJvYm90c1Byb3BzLm5vYXJjaGl2ZSxcbiAgICAgICAgbm9pbWFnZWluZGV4ID0gX2NvbmZpZyRyb2JvdHNQcm9wcy5ub2ltYWdlaW5kZXgsXG4gICAgICAgIG5vdHJhbnNsYXRlID0gX2NvbmZpZyRyb2JvdHNQcm9wcy5ub3RyYW5zbGF0ZSxcbiAgICAgICAgdW5hdmFpbGFibGVBZnRlciA9IF9jb25maWckcm9ib3RzUHJvcHMudW5hdmFpbGFibGVBZnRlcjtcbiAgICByb2JvdHNQYXJhbXMgPSBcIlwiICsgKG5vc25pcHBldCA/ICcsbm9zbmlwcGV0JyA6ICcnKSArIChtYXhTbmlwcGV0ID8gXCIsbWF4LXNuaXBwZXQ6XCIgKyBtYXhTbmlwcGV0IDogJycpICsgKG1heEltYWdlUHJldmlldyA/IFwiLG1heC1pbWFnZS1wcmV2aWV3OlwiICsgbWF4SW1hZ2VQcmV2aWV3IDogJycpICsgKG5vYXJjaGl2ZSA/ICcsbm9hcmNoaXZlJyA6ICcnKSArICh1bmF2YWlsYWJsZUFmdGVyID8gXCIsdW5hdmFpbGFibGVfYWZ0ZXI6XCIgKyB1bmF2YWlsYWJsZUFmdGVyIDogJycpICsgKG5vaW1hZ2VpbmRleCA/ICcsbm9pbWFnZWluZGV4JyA6ICcnKSArIChtYXhWaWRlb1ByZXZpZXcgPyBcIixtYXgtdmlkZW8tcHJldmlldzpcIiArIG1heFZpZGVvUHJldmlldyA6ICcnKSArIChub3RyYW5zbGF0ZSA/ICcsbm90cmFuc2xhdGUnIDogJycpO1xuICB9XG5cbiAgaWYgKG5vaW5kZXggfHwgbm9mb2xsb3cpIHtcbiAgICBpZiAoY29uZmlnLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXgpIHtcbiAgICAgIGRlZmF1bHRzLm5vaW5kZXggPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3cpIHtcbiAgICAgIGRlZmF1bHRzLm5vZm9sbG93ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwicm9ib3RzXCIsXG4gICAgICBuYW1lOiBcInJvYm90c1wiLFxuICAgICAgY29udGVudDogKG5vaW5kZXggPyAnbm9pbmRleCcgOiAnaW5kZXgnKSArIFwiLFwiICsgKG5vZm9sbG93ID8gJ25vZm9sbG93JyA6ICdmb2xsb3cnKSArIHJvYm90c1BhcmFtc1xuICAgIH0pKTtcbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwiZ29vZ2xlYm90XCIsXG4gICAgICBuYW1lOiBcImdvb2dsZWJvdFwiLFxuICAgICAgY29udGVudDogKG5vaW5kZXggPyAnbm9pbmRleCcgOiAnaW5kZXgnKSArIFwiLFwiICsgKG5vZm9sbG93ID8gJ25vZm9sbG93JyA6ICdmb2xsb3cnKSArIHJvYm90c1BhcmFtc1xuICAgIH0pKTtcbiAgfSBlbHNlIHtcbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwicm9ib3RzXCIsXG4gICAgICBuYW1lOiBcInJvYm90c1wiLFxuICAgICAgY29udGVudDogXCJpbmRleCxmb2xsb3dcIiArIHJvYm90c1BhcmFtc1xuICAgIH0pKTtcbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwiZ29vZ2xlYm90XCIsXG4gICAgICBuYW1lOiBcImdvb2dsZWJvdFwiLFxuICAgICAgY29udGVudDogXCJpbmRleCxmb2xsb3dcIiArIHJvYm90c1BhcmFtc1xuICAgIH0pKTtcbiAgfVxuXG4gIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgIGNvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pKTtcbiAgfVxuXG4gIGlmIChjb25maWcubW9iaWxlQWx0ZXJuYXRlKSB7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgcmVsOiBcImFsdGVybmF0ZVwiLFxuICAgICAga2V5OiBcIm1vYmlsZUFsdGVybmF0ZVwiLFxuICAgICAgbWVkaWE6IGNvbmZpZy5tb2JpbGVBbHRlcm5hdGUubWVkaWEsXG4gICAgICBocmVmOiBjb25maWcubW9iaWxlQWx0ZXJuYXRlLmhyZWZcbiAgICB9KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmxhbmd1YWdlQWx0ZXJuYXRlcyAmJiBjb25maWcubGFuZ3VhZ2VBbHRlcm5hdGVzLmxlbmd0aCA+IDApIHtcbiAgICBjb25maWcubGFuZ3VhZ2VBbHRlcm5hdGVzLmZvckVhY2goZnVuY3Rpb24gKGxhbmd1YWdlQWx0ZXJuYXRlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIHJlbDogXCJhbHRlcm5hdGVcIixcbiAgICAgICAga2V5OiBcImxhbmd1YWdlQWx0ZXJuYXRlLVwiICsgbGFuZ3VhZ2VBbHRlcm5hdGUuaHJlZkxhbmcsXG4gICAgICAgIGhyZWZMYW5nOiBsYW5ndWFnZUFsdGVybmF0ZS5ocmVmTGFuZyxcbiAgICAgICAgaHJlZjogbGFuZ3VhZ2VBbHRlcm5hdGUuaHJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNvbmZpZy50d2l0dGVyKSB7XG4gICAgaWYgKGNvbmZpZy50d2l0dGVyLmNhcmRUeXBlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJ0d2l0dGVyOmNhcmRcIixcbiAgICAgICAgbmFtZTogXCJ0d2l0dGVyOmNhcmRcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLnR3aXR0ZXIuY2FyZFR5cGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnR3aXR0ZXIuc2l0ZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwidHdpdHRlcjpzaXRlXCIsXG4gICAgICAgIG5hbWU6IFwidHdpdHRlcjpzaXRlXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy50d2l0dGVyLnNpdGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnR3aXR0ZXIuaGFuZGxlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJ0d2l0dGVyOmNyZWF0b3JcIixcbiAgICAgICAgbmFtZTogXCJ0d2l0dGVyOmNyZWF0b3JcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLnR3aXR0ZXIuaGFuZGxlXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmZpZy5mYWNlYm9vaykge1xuICAgIGlmIChjb25maWcuZmFjZWJvb2suYXBwSWQpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcImZiOmFwcF9pZFwiLFxuICAgICAgICBwcm9wZXJ0eTogXCJmYjphcHBfaWRcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLmZhY2Vib29rLmFwcElkXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmZpZy5vcGVuR3JhcGgpIHtcbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC51cmwgfHwgY29uZmlnLmNhbm9uaWNhbCkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6dXJsXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOnVybFwiLFxuICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnVybCB8fCBjb25maWcuY2Fub25pY2FsXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudHlwZSkge1xuICAgICAgdmFyIHR5cGUgPSBjb25maWcub3BlbkdyYXBoLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOnR5cGVcIixcbiAgICAgICAgcHJvcGVydHk6IFwib2c6dHlwZVwiLFxuICAgICAgICBjb250ZW50OiB0eXBlXG4gICAgICB9KSk7XG5cbiAgICAgIGlmICh0eXBlID09PSAncHJvZmlsZScgJiYgY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlKSB7XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnByb2ZpbGUuZmlyc3ROYW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInByb2ZpbGU6Zmlyc3RfbmFtZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwicHJvZmlsZTpmaXJzdF9uYW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnByb2ZpbGUuZmlyc3ROYW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS5sYXN0TmFtZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJwcm9maWxlOmxhc3RfbmFtZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwicHJvZmlsZTpsYXN0X25hbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS5sYXN0TmFtZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnByb2ZpbGUudXNlcm5hbWUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwicHJvZmlsZTp1c2VybmFtZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwicHJvZmlsZTp1c2VybmFtZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLnVzZXJuYW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS5nZW5kZXIpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwicHJvZmlsZTpnZW5kZXJcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInByb2ZpbGU6Z2VuZGVyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnByb2ZpbGUuZ2VuZGVyXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdib29rJyAmJiBjb25maWcub3BlbkdyYXBoLmJvb2spIHtcbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYm9vay5hdXRob3JzICYmIGNvbmZpZy5vcGVuR3JhcGguYm9vay5hdXRob3JzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGguYm9vay5hdXRob3JzLmZvckVhY2goZnVuY3Rpb24gKGF1dGhvciwgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImJvb2s6YXV0aG9yOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJib29rOmF1dGhvclwiLFxuICAgICAgICAgICAgICBjb250ZW50OiBhdXRob3JcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmJvb2suaXNibikge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJib29rOmlzYm5cIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcImJvb2s6aXNiblwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5ib29rLmlzYm5cbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5ib29rLnJlbGVhc2VEYXRlKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImJvb2s6cmVsZWFzZV9kYXRlXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJib29rOnJlbGVhc2VfZGF0ZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5ib29rLnJlbGVhc2VEYXRlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYm9vay50YWdzICYmIGNvbmZpZy5vcGVuR3JhcGguYm9vay50YWdzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGguYm9vay50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImJvb2s6dGFnOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJib29rOnRhZ1wiLFxuICAgICAgICAgICAgICBjb250ZW50OiB0YWdcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYXJ0aWNsZScgJiYgY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlKSB7XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUucHVibGlzaGVkVGltZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOnB1Ymxpc2hlZF90aW1lXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOnB1Ymxpc2hlZF90aW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmFydGljbGUucHVibGlzaGVkVGltZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUubW9kaWZpZWRUaW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImFydGljbGU6bW9kaWZpZWRfdGltZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTptb2RpZmllZF90aW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmFydGljbGUubW9kaWZpZWRUaW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5leHBpcmF0aW9uVGltZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOmV4cGlyYXRpb25fdGltZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTpleHBpcmF0aW9uX3RpbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5leHBpcmF0aW9uVGltZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUuYXV0aG9ycyAmJiBjb25maWcub3BlbkdyYXBoLmFydGljbGUuYXV0aG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLmFydGljbGUuYXV0aG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChhdXRob3IsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOmF1dGhvcjowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTphdXRob3JcIixcbiAgICAgICAgICAgICAgY29udGVudDogYXV0aG9yXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnNlY3Rpb24pIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwiYXJ0aWNsZTpzZWN0aW9uXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOnNlY3Rpb25cIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5zZWN0aW9uXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS50YWdzICYmIGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS50YWdzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImFydGljbGU6dGFnOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOnRhZ1wiLFxuICAgICAgICAgICAgICBjb250ZW50OiB0YWdcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgodHlwZSA9PT0gJ3ZpZGVvLm1vdmllJyB8fCB0eXBlID09PSAndmlkZW8uZXBpc29kZScgfHwgdHlwZSA9PT0gJ3ZpZGVvLnR2X3Nob3cnIHx8IHR5cGUgPT09ICd2aWRlby5vdGhlcicpICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8pIHtcbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uYWN0b3JzICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uYWN0b3JzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uYWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKGFjdG9yLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGFjdG9yLnByb2ZpbGUpIHtcbiAgICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICAgIGtleTogXCJ2aWRlbzphY3RvcjowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzphY3RvclwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFjdG9yLnByb2ZpbGVcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0b3Iucm9sZSkge1xuICAgICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInZpZGVvOmFjdG9yOnJvbGU6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86YWN0b3I6cm9sZVwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFjdG9yLnJvbGVcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZGlyZWN0b3JzICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZGlyZWN0b3JzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZGlyZWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdG9yLCBpbmRleCkge1xuICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwidmlkZW86ZGlyZWN0b3I6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOmRpcmVjdG9yXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGRpcmVjdG9yXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby53cml0ZXJzICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8ud3JpdGVycy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLnZpZGVvLndyaXRlcnMuZm9yRWFjaChmdW5jdGlvbiAod3JpdGVyLCBpbmRleCkge1xuICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwidmlkZW86d3JpdGVyOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzp3cml0ZXJcIixcbiAgICAgICAgICAgICAgY29udGVudDogd3JpdGVyXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby5kdXJhdGlvbikge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJ2aWRlbzpkdXJhdGlvblwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86ZHVyYXRpb25cIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZHVyYXRpb24udG9TdHJpbmcoKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLnJlbGVhc2VEYXRlKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInZpZGVvOnJlbGVhc2VfZGF0ZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86cmVsZWFzZV9kYXRlXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnZpZGVvLnJlbGVhc2VEYXRlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8udGFncyAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29uZmlnLm9wZW5HcmFwaC52aWRlby50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcInZpZGVvOnRhZzowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86dGFnXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHRhZ1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uc2VyaWVzKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInZpZGVvOnNlcmllc1wiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86c2VyaWVzXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnZpZGVvLnNlcmllc1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLnRpdGxlIHx8IGNvbmZpZy50aXRsZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6dGl0bGVcIixcbiAgICAgICAgcHJvcGVydHk6IFwib2c6dGl0bGVcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC50aXRsZSB8fCB1cGRhdGVkVGl0bGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5kZXNjcmlwdGlvbiB8fCBjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOmRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOmRlc2NyaXB0aW9uXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguZGVzY3JpcHRpb24gfHwgY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICB9KSk7XG4gICAgfSAvLyBpbWFnZXNcblxuXG4gICAgaWYgKGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aCkge1xuICAgICAgZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGggPSBjb25maWcuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQpIHtcbiAgICAgIGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodCA9IGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguaW1hZ2VzICYmIGNvbmZpZy5vcGVuR3JhcGguaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgY29uZmlnLm9wZW5HcmFwaC5pbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UsIGluZGV4KSB7XG4gICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICBrZXk6IFwib2c6aW1hZ2U6MFwiICsgaW5kZXgsXG4gICAgICAgICAgcHJvcGVydHk6IFwib2c6aW1hZ2VcIixcbiAgICAgICAgICBjb250ZW50OiBpbWFnZS51cmxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChpbWFnZS5hbHQpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6aW1hZ2U6YWx0MFwiICsgaW5kZXgsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJvZzppbWFnZTphbHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGltYWdlLmFsdFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbWFnZS53aWR0aCkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJvZzppbWFnZTp3aWR0aDBcIiArIGluZGV4LFxuICAgICAgICAgICAgcHJvcGVydHk6IFwib2c6aW1hZ2U6d2lkdGhcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGltYWdlLndpZHRoLnRvU3RyaW5nKClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGgpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6aW1hZ2U6d2lkdGgwXCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOmltYWdlOndpZHRoXCIsXG4gICAgICAgICAgICBjb250ZW50OiBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aC50b1N0cmluZygpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGltYWdlLmhlaWdodCkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJvZzppbWFnZTpoZWlnaHRcIiArIGluZGV4LFxuICAgICAgICAgICAgcHJvcGVydHk6IFwib2c6aW1hZ2U6aGVpZ2h0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBpbWFnZS5oZWlnaHQudG9TdHJpbmcoKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6aW1hZ2U6aGVpZ2h0XCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOmltYWdlOmhlaWdodFwiLFxuICAgICAgICAgICAgY29udGVudDogZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0LnRvU3RyaW5nKClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gdmlkZW9zXG5cblxuICAgIGlmIChjb25maWcuZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGgpIHtcbiAgICAgIGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoID0gY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0KSB7XG4gICAgICBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHQgPSBjb25maWcuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvcyAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvcy5sZW5ndGgpIHtcbiAgICAgIGNvbmZpZy5vcGVuR3JhcGgudmlkZW9zLmZvckVhY2goZnVuY3Rpb24gKHZpZGVvLCBpbmRleCkge1xuICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAga2V5OiBcIm9nOnZpZGVvOjBcIiArIGluZGV4LFxuICAgICAgICAgIHByb3BlcnR5OiBcIm9nOnZpZGVvXCIsXG4gICAgICAgICAgY29udGVudDogdmlkZW8udXJsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAodmlkZW8uYWx0KSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcIm9nOnZpZGVvOmFsdDBcIiArIGluZGV4LFxuICAgICAgICAgICAgcHJvcGVydHk6IFwib2c6dmlkZW86YWx0XCIsXG4gICAgICAgICAgICBjb250ZW50OiB2aWRlby5hbHRcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlkZW8ud2lkdGgpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6dmlkZW86d2lkdGgwXCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOnZpZGVvOndpZHRoXCIsXG4gICAgICAgICAgICBjb250ZW50OiB2aWRlby53aWR0aC50b1N0cmluZygpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcIm9nOnZpZGVvOndpZHRoMFwiICsgaW5kZXgsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJvZzp2aWRlbzp3aWR0aFwiLFxuICAgICAgICAgICAgY29udGVudDogZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGgudG9TdHJpbmcoKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWRlby5oZWlnaHQpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6dmlkZW86aGVpZ2h0XCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOnZpZGVvOmhlaWdodFwiLFxuICAgICAgICAgICAgY29udGVudDogdmlkZW8uaGVpZ2h0LnRvU3RyaW5nKClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0KSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcIm9nOnZpZGVvOmhlaWdodFwiICsgaW5kZXgsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJvZzp2aWRlbzpoZWlnaHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodC50b1N0cmluZygpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZGVvLnNlY3VyZVVybCkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJvZzp2aWRlbzpzZWN1cmVfdXJsXCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOnZpZGVvOnNlY3VyZV91cmxcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IHZpZGVvLnNlY3VyZVVybC50b1N0cmluZygpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZGVvLnR5cGUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6dmlkZW86dHlwZVwiICsgaW5kZXgsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJvZzp2aWRlbzp0eXBlXCIsXG4gICAgICAgICAgICBjb250ZW50OiB2aWRlby50eXBlLnRvU3RyaW5nKClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLmxvY2FsZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6bG9jYWxlXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOmxvY2FsZVwiLFxuICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmxvY2FsZVxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLnNpdGVfbmFtZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6c2l0ZV9uYW1lXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOnNpdGVfbmFtZVwiLFxuICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnNpdGVfbmFtZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb25maWcuY2Fub25pY2FsKSB7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgcmVsOiBcImNhbm9uaWNhbFwiLFxuICAgICAgaHJlZjogY29uZmlnLmNhbm9uaWNhbCxcbiAgICAgIGtleTogXCJjYW5vbmljYWxcIlxuICAgIH0pKTtcbiAgfVxuXG4gIGlmIChjb25maWcuYWRkaXRpb25hbE1ldGFUYWdzICYmIGNvbmZpZy5hZGRpdGlvbmFsTWV0YVRhZ3MubGVuZ3RoID4gMCkge1xuICAgIGNvbmZpZy5hZGRpdGlvbmFsTWV0YVRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICB2YXIgX3JlZiwgX3JlZjIsIF90YWcka2V5T3ZlcnJpZGU7XG5cbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBrZXk6IFwibWV0YTpcIiArICgoX3JlZiA9IChfcmVmMiA9IChfdGFnJGtleU92ZXJyaWRlID0gdGFnLmtleU92ZXJyaWRlKSAhPSBudWxsID8gX3RhZyRrZXlPdmVycmlkZSA6IHRhZy5uYW1lKSAhPSBudWxsID8gX3JlZjIgOiB0YWcucHJvcGVydHkpICE9IG51bGwgPyBfcmVmIDogdGFnLmh0dHBFcXVpdilcbiAgICAgIH0sIHRhZykpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgoX2NvbmZpZyRhZGRpdGlvbmFsTGluID0gY29uZmlnLmFkZGl0aW9uYWxMaW5rVGFncykgIT0gbnVsbCAmJiBfY29uZmlnJGFkZGl0aW9uYWxMaW4ubGVuZ3RoKSB7XG4gICAgY29uZmlnLmFkZGl0aW9uYWxMaW5rVGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHZhciBfdGFnJGtleU92ZXJyaWRlMjtcblxuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmtcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGtleTogXCJsaW5rXCIgKyAoKF90YWcka2V5T3ZlcnJpZGUyID0gdGFnLmtleU92ZXJyaWRlKSAhPSBudWxsID8gX3RhZyRrZXlPdmVycmlkZTIgOiB0YWcuaHJlZikgKyB0YWcucmVsXG4gICAgICB9LCB0YWcpKSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFnc1RvUmVuZGVyO1xufTtcblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKF9kZWZhdWx0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICByZXR1cm4gX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gX2RlZmF1bHQucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgdGl0bGUgPSBfdGhpcyRwcm9wcy50aXRsZSxcbiAgICAgICAgdGl0bGVUZW1wbGF0ZSA9IF90aGlzJHByb3BzLnRpdGxlVGVtcGxhdGUsXG4gICAgICAgIGRlZmF1bHRUaXRsZSA9IF90aGlzJHByb3BzLmRlZmF1bHRUaXRsZSxcbiAgICAgICAgX3RoaXMkcHJvcHMkZGFuZ2Vyb3VzID0gX3RoaXMkcHJvcHMuZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9JbmRleCxcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9JbmRleCA9IF90aGlzJHByb3BzJGRhbmdlcm91cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfdGhpcyRwcm9wcyRkYW5nZXJvdXMsXG4gICAgICAgIF90aGlzJHByb3BzJGRhbmdlcm91czIgPSBfdGhpcyRwcm9wcy5kYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0ZvbGxvdyxcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3cgPSBfdGhpcyRwcm9wcyRkYW5nZXJvdXMyID09PSB2b2lkIDAgPyBmYWxzZSA6IF90aGlzJHByb3BzJGRhbmdlcm91czIsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gX3RoaXMkcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCA9IF90aGlzJHByb3BzLmNhbm9uaWNhbCxcbiAgICAgICAgZmFjZWJvb2sgPSBfdGhpcyRwcm9wcy5mYWNlYm9vayxcbiAgICAgICAgb3BlbkdyYXBoID0gX3RoaXMkcHJvcHMub3BlbkdyYXBoLFxuICAgICAgICBhZGRpdGlvbmFsTWV0YVRhZ3MgPSBfdGhpcyRwcm9wcy5hZGRpdGlvbmFsTWV0YVRhZ3MsXG4gICAgICAgIHR3aXR0ZXIgPSBfdGhpcyRwcm9wcy50d2l0dGVyLFxuICAgICAgICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aCA9IF90aGlzJHByb3BzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoLFxuICAgICAgICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQgPSBfdGhpcyRwcm9wcy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQsXG4gICAgICAgIGRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoID0gX3RoaXMkcHJvcHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGgsXG4gICAgICAgIGRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCA9IF90aGlzJHByb3BzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCxcbiAgICAgICAgbW9iaWxlQWx0ZXJuYXRlID0gX3RoaXMkcHJvcHMubW9iaWxlQWx0ZXJuYXRlLFxuICAgICAgICBsYW5ndWFnZUFsdGVybmF0ZXMgPSBfdGhpcyRwcm9wcy5sYW5ndWFnZUFsdGVybmF0ZXMsXG4gICAgICAgIGFkZGl0aW9uYWxMaW5rVGFncyA9IF90aGlzJHByb3BzLmFkZGl0aW9uYWxMaW5rVGFncztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBidWlsZFRhZ3Moe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGl0bGVUZW1wbGF0ZTogdGl0bGVUZW1wbGF0ZSxcbiAgICAgIGRlZmF1bHRUaXRsZTogZGVmYXVsdFRpdGxlLFxuICAgICAgZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9JbmRleDogZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9JbmRleCxcbiAgICAgIGRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vRm9sbG93OiBkYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0ZvbGxvdyxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIGNhbm9uaWNhbDogY2Fub25pY2FsLFxuICAgICAgZmFjZWJvb2s6IGZhY2Vib29rLFxuICAgICAgb3BlbkdyYXBoOiBvcGVuR3JhcGgsXG4gICAgICBhZGRpdGlvbmFsTWV0YVRhZ3M6IGFkZGl0aW9uYWxNZXRhVGFncyxcbiAgICAgIHR3aXR0ZXI6IHR3aXR0ZXIsXG4gICAgICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aDogZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGgsXG4gICAgICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQ6IGRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodCxcbiAgICAgIGRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoOiBkZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aCxcbiAgICAgIGRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodDogZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0LFxuICAgICAgbW9iaWxlQWx0ZXJuYXRlOiBtb2JpbGVBbHRlcm5hdGUsXG4gICAgICBsYW5ndWFnZUFsdGVybmF0ZXM6IGxhbmd1YWdlQWx0ZXJuYXRlcyxcbiAgICAgIGFkZGl0aW9uYWxMaW5rVGFnczogYWRkaXRpb25hbExpbmtUYWdzXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oQ29tcG9uZW50KTtcblxudmFyIF9kZWZhdWx0JDEgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoX2RlZmF1bHQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIHJldHVybiBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBfZGVmYXVsdC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICB0aXRsZSA9IF90aGlzJHByb3BzLnRpdGxlLFxuICAgICAgICBfdGhpcyRwcm9wcyRub2luZGV4ID0gX3RoaXMkcHJvcHMubm9pbmRleCxcbiAgICAgICAgbm9pbmRleCA9IF90aGlzJHByb3BzJG5vaW5kZXggPT09IHZvaWQgMCA/IGZhbHNlIDogX3RoaXMkcHJvcHMkbm9pbmRleCxcbiAgICAgICAgbm9mb2xsb3cgPSBfdGhpcyRwcm9wcy5ub2ZvbGxvdyxcbiAgICAgICAgcm9ib3RzUHJvcHMgPSBfdGhpcyRwcm9wcy5yb2JvdHNQcm9wcyxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBfdGhpcyRwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgY2Fub25pY2FsID0gX3RoaXMkcHJvcHMuY2Fub25pY2FsLFxuICAgICAgICBvcGVuR3JhcGggPSBfdGhpcyRwcm9wcy5vcGVuR3JhcGgsXG4gICAgICAgIGZhY2Vib29rID0gX3RoaXMkcHJvcHMuZmFjZWJvb2ssXG4gICAgICAgIHR3aXR0ZXIgPSBfdGhpcyRwcm9wcy50d2l0dGVyLFxuICAgICAgICBhZGRpdGlvbmFsTWV0YVRhZ3MgPSBfdGhpcyRwcm9wcy5hZGRpdGlvbmFsTWV0YVRhZ3MsXG4gICAgICAgIHRpdGxlVGVtcGxhdGUgPSBfdGhpcyRwcm9wcy50aXRsZVRlbXBsYXRlLFxuICAgICAgICBtb2JpbGVBbHRlcm5hdGUgPSBfdGhpcyRwcm9wcy5tb2JpbGVBbHRlcm5hdGUsXG4gICAgICAgIGxhbmd1YWdlQWx0ZXJuYXRlcyA9IF90aGlzJHByb3BzLmxhbmd1YWdlQWx0ZXJuYXRlcyxcbiAgICAgICAgYWRkaXRpb25hbExpbmtUYWdzID0gX3RoaXMkcHJvcHMuYWRkaXRpb25hbExpbmtUYWdzO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIGJ1aWxkVGFncyh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBub2luZGV4OiBub2luZGV4LFxuICAgICAgbm9mb2xsb3c6IG5vZm9sbG93LFxuICAgICAgcm9ib3RzUHJvcHM6IHJvYm90c1Byb3BzLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgY2Fub25pY2FsOiBjYW5vbmljYWwsXG4gICAgICBmYWNlYm9vazogZmFjZWJvb2ssXG4gICAgICBvcGVuR3JhcGg6IG9wZW5HcmFwaCxcbiAgICAgIGFkZGl0aW9uYWxNZXRhVGFnczogYWRkaXRpb25hbE1ldGFUYWdzLFxuICAgICAgdHdpdHRlcjogdHdpdHRlcixcbiAgICAgIHRpdGxlVGVtcGxhdGU6IHRpdGxlVGVtcGxhdGUsXG4gICAgICBtb2JpbGVBbHRlcm5hdGU6IG1vYmlsZUFsdGVybmF0ZSxcbiAgICAgIGxhbmd1YWdlQWx0ZXJuYXRlczogbGFuZ3VhZ2VBbHRlcm5hdGVzLFxuICAgICAgYWRkaXRpb25hbExpbmtUYWdzOiBhZGRpdGlvbmFsTGlua1RhZ3NcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShDb21wb25lbnQpO1xuXG52YXIgbWFya3VwID0gZnVuY3Rpb24gbWFya3VwKGpzb25sZCkge1xuICByZXR1cm4ge1xuICAgIF9faHRtbDoganNvbmxkXG4gIH07XG59O1xuXG52YXIgZm9ybWF0QXV0aG9yTmFtZSA9IGZ1bmN0aW9uIGZvcm1hdEF1dGhvck5hbWUoYXV0aG9yTmFtZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhdXRob3JOYW1lKSA/IFwiW1wiICsgYXV0aG9yTmFtZS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gXCJ7XFxcIkB0eXBlXFxcIjogXFxcIlBlcnNvblxcXCIsXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwifVwiO1xuICB9KSArIFwiXVwiIDogXCJ7XFxcIkB0eXBlXFxcIjogXFxcIlBlcnNvblxcXCIsXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBhdXRob3JOYW1lICsgXCJcXFwifVwiO1xufTtcblxudmFyIEFydGljbGVKc29uTGQgPSBmdW5jdGlvbiBBcnRpY2xlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICAgIHVybCA9IF9yZWYudXJsLFxuICAgICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgX3JlZiRpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICAgIGltYWdlcyA9IF9yZWYkaW1hZ2VzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkaW1hZ2VzLFxuICAgICAgZGF0ZVB1Ymxpc2hlZCA9IF9yZWYuZGF0ZVB1Ymxpc2hlZCxcbiAgICAgIF9yZWYkZGF0ZU1vZGlmaWVkID0gX3JlZi5kYXRlTW9kaWZpZWQsXG4gICAgICBkYXRlTW9kaWZpZWQgPSBfcmVmJGRhdGVNb2RpZmllZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkZGF0ZU1vZGlmaWVkLFxuICAgICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIHB1Ymxpc2hlck5hbWUgPSBfcmVmLnB1Ymxpc2hlck5hbWUsXG4gICAgICBwdWJsaXNoZXJMb2dvID0gX3JlZi5wdWJsaXNoZXJMb2dvO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkFydGljbGVcXFwiLFxcbiAgICBcXFwibWFpbkVudGl0eU9mUGFnZVxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiV2ViUGFnZVxcXCIsXFxuICAgICAgXFxcIkBpZFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIlxcbiAgICB9LFxcbiAgICBcXFwiaGVhZGxpbmVcXFwiOiBcXFwiXCIgKyB0aXRsZSArIFwiXFxcIixcXG4gICAgXFxcImltYWdlXFxcIjogW1xcbiAgICAgIFwiICsgaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyBpbWFnZSArIFwiXFxcIlwiO1xuICB9KSArIFwiXFxuICAgICBdLFxcbiAgICBcXFwiZGF0ZVB1Ymxpc2hlZFxcXCI6IFxcXCJcIiArIGRhdGVQdWJsaXNoZWQgKyBcIlxcXCIsXFxuICAgIFxcXCJkYXRlTW9kaWZpZWRcXFwiOiBcXFwiXCIgKyAoZGF0ZU1vZGlmaWVkIHx8IGRhdGVQdWJsaXNoZWQpICsgXCJcXFwiLFxcbiAgICBcXFwiYXV0aG9yXFxcIjogXCIgKyBmb3JtYXRBdXRob3JOYW1lKGF1dGhvck5hbWUpICsgXCIsXFxuICAgIFxcXCJwdWJsaXNoZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9yZ2FuaXphdGlvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBwdWJsaXNoZXJOYW1lICsgXCJcXFwiLFxcbiAgICAgIFxcXCJsb2dvXFxcIjoge1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkltYWdlT2JqZWN0XFxcIixcXG4gICAgICAgIFxcXCJ1cmxcXFwiOiBcXFwiXCIgKyBwdWJsaXNoZXJMb2dvICsgXCJcXFwiXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtYXJ0aWNsZVwiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgQnJlYWRDcnVtYkpzb25MZCA9IGZ1bmN0aW9uIEJyZWFkQ3J1bWJKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgX3JlZiRpdGVtTGlzdEVsZW1lbnRzID0gX3JlZi5pdGVtTGlzdEVsZW1lbnRzLFxuICAgICAgaXRlbUxpc3RFbGVtZW50cyA9IF9yZWYkaXRlbUxpc3RFbGVtZW50cyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJGl0ZW1MaXN0RWxlbWVudHM7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQnJlYWRjcnVtYkxpc3RcXFwiLFxcbiAgICBcXFwiaXRlbUxpc3RFbGVtZW50XFxcIjogW1xcbiAgICAgIFwiICsgaXRlbUxpc3RFbGVtZW50cy5tYXAoZnVuY3Rpb24gKGl0ZW1MaXN0RWxlbWVudCkge1xuICAgIHJldHVybiBcIntcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJMaXN0SXRlbVxcXCIsXFxuICAgICAgICBcXFwicG9zaXRpb25cXFwiOiBcIiArIGl0ZW1MaXN0RWxlbWVudC5wb3NpdGlvbiArIFwiLFxcbiAgICAgICAgXFxcIml0ZW1cXFwiOiB7XFxuICAgICAgICAgIFxcXCJAaWRcXFwiOiBcXFwiXCIgKyBpdGVtTGlzdEVsZW1lbnQuaXRlbSArIFwiXFxcIixcXG4gICAgICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBpdGVtTGlzdEVsZW1lbnQubmFtZSArIFwiXFxcIlxcbiAgICAgICAgfVxcbiAgICAgIH1cIjtcbiAgfSkgKyBcIlxcbiAgICAgXVxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtYnJlYWRjcnVtYlwiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRRdWVzdGlvbnMgPSBmdW5jdGlvbiBidWlsZFF1ZXN0aW9ucyhtYWluRW50aXR5KSB7XG4gIHJldHVybiBcIlxcbiAgXCIgKyBtYWluRW50aXR5Lm1hcChmdW5jdGlvbiAocXVlc3Rpb24pIHtcbiAgICByZXR1cm4gXCJ7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlF1ZXN0aW9uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHF1ZXN0aW9uLnF1ZXN0aW9uTmFtZSArIFwiXFxcIixcXG4gICAgICBcXFwiYWNjZXB0ZWRBbnN3ZXJcXFwiOiB7XFxuICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQW5zd2VyXFxcIixcXG4gICAgICAgIFxcXCJ0ZXh0XFxcIjogXFxcIlwiICsgcXVlc3Rpb24uYWNjZXB0ZWRBbnN3ZXJUZXh0ICsgXCJcXFwiXFxuICAgICAgfVxcbiAgfVwiO1xuICB9KTtcbn07XG5cbnZhciBGQVFQYWdlSnNvbkxkID0gZnVuY3Rpb24gRkFRUGFnZUpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJG1haW5FbnRpdHkgPSBfcmVmLm1haW5FbnRpdHksXG4gICAgICBtYWluRW50aXR5ID0gX3JlZiRtYWluRW50aXR5ID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkbWFpbkVudGl0eTtcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHBzOi8vc2NoZW1hLm9yZy9cXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiRkFRUGFnZVxcXCIsXFxuICAgIFxcXCJtYWluRW50aXR5XFxcIjogW1wiICsgYnVpbGRRdWVzdGlvbnMobWFpbkVudGl0eSkgKyBcIl1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLWZhcS1wYWdlXCJcbiAgfSkpO1xufTtcblxudmFyIGJ1aWxkQmFzZVNhbGFyeSA9IGZ1bmN0aW9uIGJ1aWxkQmFzZVNhbGFyeShiYXNlU2FsYXJ5KSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImJhc2VTYWxhcnlcXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJNb25ldGFyeUFtb3VudFxcXCIsXFxuICAgIFwiICsgKGJhc2VTYWxhcnkuY3VycmVuY3kgPyBcIlxcXCJjdXJyZW5jeVxcXCI6IFxcXCJcIiArIGJhc2VTYWxhcnkuY3VycmVuY3kgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcXFwidmFsdWVcXFwiOiB7XFxuICAgICAgXCIgKyAoYmFzZVNhbGFyeS52YWx1ZSA/IEFycmF5LmlzQXJyYXkoYmFzZVNhbGFyeS52YWx1ZSkgPyBcIlxcXCJtaW5WYWx1ZVxcXCI6IFxcXCJcIiArIGJhc2VTYWxhcnkudmFsdWVbMF0gKyBcIlxcXCIsIFxcXCJtYXhWYWx1ZVxcXCI6IFxcXCJcIiArIGJhc2VTYWxhcnkudmFsdWVbMV0gKyBcIlxcXCIsXCIgOiBcIlxcXCJ2YWx1ZVxcXCI6IFxcXCJcIiArIGJhc2VTYWxhcnkudmFsdWUgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgIFwiICsgKGJhc2VTYWxhcnkudW5pdFRleHQgPyBcIlxcXCJ1bml0VGV4dFxcXCI6IFxcXCJcIiArIGJhc2VTYWxhcnkudW5pdFRleHQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJRdWFudGl0YXRpdmVWYWx1ZVxcXCJcXG4gICAgfVxcbiAgfSxcXG5cIjtcbn07XG5cbnZhciBKb2JQb3N0aW5nSnNvbkxkID0gZnVuY3Rpb24gSm9iUG9zdGluZ0pzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICBiYXNlU2FsYXJ5ID0gX3JlZi5iYXNlU2FsYXJ5LFxuICAgICAgZGF0ZVBvc3RlZCA9IF9yZWYuZGF0ZVBvc3RlZCxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIGVtcGxveW1lbnRUeXBlID0gX3JlZi5lbXBsb3ltZW50VHlwZSxcbiAgICAgIGhpcmluZ09yZ2FuaXphdGlvbiA9IF9yZWYuaGlyaW5nT3JnYW5pemF0aW9uLFxuICAgICAgam9iTG9jYXRpb24gPSBfcmVmLmpvYkxvY2F0aW9uLFxuICAgICAgYXBwbGljYW50TG9jYXRpb25SZXF1aXJlbWVudHMgPSBfcmVmLmFwcGxpY2FudExvY2F0aW9uUmVxdWlyZW1lbnRzLFxuICAgICAgam9iTG9jYXRpb25UeXBlID0gX3JlZi5qb2JMb2NhdGlvblR5cGUsXG4gICAgICB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgICB2YWxpZFRocm91Z2ggPSBfcmVmLnZhbGlkVGhyb3VnaDtcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHBzOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJKb2JQb3N0aW5nXFxcIixcXG4gICAgXCIgKyAoYmFzZVNhbGFyeSA/IGJ1aWxkQmFzZVNhbGFyeShiYXNlU2FsYXJ5KSA6ICcnKSArIFwiXFxuICAgIFxcXCJkYXRlUG9zdGVkXFxcIjogXFxcIlwiICsgZGF0ZVBvc3RlZCArIFwiXFxcIixcXG4gICAgXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXFxuICAgIFwiICsgKGVtcGxveW1lbnRUeXBlID8gXCJcXFwiZW1wbG95bWVudFR5cGVcXFwiOiBcXFwiXCIgKyBlbXBsb3ltZW50VHlwZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJoaXJpbmdPcmdhbml6YXRpb25cXFwiIDoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCIgOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCIgOiBcXFwiXCIgKyBoaXJpbmdPcmdhbml6YXRpb24ubmFtZSArIFwiXFxcIixcXG4gICAgICBcXFwic2FtZUFzXFxcIiA6IFxcXCJcIiArIGhpcmluZ09yZ2FuaXphdGlvbi5zYW1lQXMgKyBcIlxcXCJcXG4gICAgICBcIiArIChoaXJpbmdPcmdhbml6YXRpb24ubG9nbyA/IFwiLFxcXCJsb2dvXFxcIjogXFxcIlwiICsgaGlyaW5nT3JnYW5pemF0aW9uLmxvZ28gKyBcIlxcXCJcIiA6ICcnKSArIFwiXFxuICAgIH0sXFxuICAgIFwiICsgKGpvYkxvY2F0aW9uID8gXCJcXFwiam9iTG9jYXRpb25cXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlBsYWNlXFxcIixcXG4gICAgICBcXFwiYWRkcmVzc1xcXCI6IHtcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQb3N0YWxBZGRyZXNzXFxcIixcXG4gICAgICAgIFxcXCJhZGRyZXNzTG9jYWxpdHlcXFwiOiBcXFwiXCIgKyBqb2JMb2NhdGlvbi5hZGRyZXNzTG9jYWxpdHkgKyBcIlxcXCIsXFxuICAgICAgICBcXFwiYWRkcmVzc1JlZ2lvblxcXCI6IFxcXCJcIiArIGpvYkxvY2F0aW9uLmFkZHJlc3NSZWdpb24gKyBcIlxcXCIsXFxuICAgICAgICBcXFwicG9zdGFsQ29kZVxcXCIgOiBcXFwiXCIgKyBqb2JMb2NhdGlvbi5wb3N0YWxDb2RlICsgXCJcXFwiLFxcbiAgICAgICAgXFxcInN0cmVldEFkZHJlc3NcXFwiIDogXFxcIlwiICsgam9iTG9jYXRpb24uc3RyZWV0QWRkcmVzcyArIFwiXFxcIixcXG4gICAgICAgIFxcXCJhZGRyZXNzQ291bnRyeVxcXCIgOiBcXFwiXCIgKyBqb2JMb2NhdGlvbi5hZGRyZXNzQ291bnRyeSArIFwiXFxcIlxcbiAgICAgICAgICB9XFxuICAgICAgfSxcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGFwcGxpY2FudExvY2F0aW9uUmVxdWlyZW1lbnRzID8gXCIgXFxcImFwcGxpY2FudExvY2F0aW9uUmVxdWlyZW1lbnRzXFxcIjoge1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkNvdW50cnlcXFwiLFxcbiAgICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBhcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50cyArIFwiXFxcIlxcbiAgICB9LFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAoam9iTG9jYXRpb25UeXBlID8gXCJcXFwiam9iTG9jYXRpb25UeXBlXFxcIjogXFxcIlwiICsgam9iTG9jYXRpb25UeXBlICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAodmFsaWRUaHJvdWdoID8gXCJcXFwidmFsaWRUaHJvdWdoXFxcIjogXFxcIlwiICsgdmFsaWRUaHJvdWdoICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcInRpdGxlXFxcIjogXFxcIlwiICsgdGl0bGUgKyBcIlxcXCJcXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLWpvYnBvc3RpbmdcIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxudmFyIEJsb2dKc29uTGQgPSBmdW5jdGlvbiBCbG9nSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICAgIHVybCA9IF9yZWYudXJsLFxuICAgICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgX3JlZiRpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICAgIGltYWdlcyA9IF9yZWYkaW1hZ2VzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkaW1hZ2VzLFxuICAgICAgZGF0ZVB1Ymxpc2hlZCA9IF9yZWYuZGF0ZVB1Ymxpc2hlZCxcbiAgICAgIF9yZWYkZGF0ZU1vZGlmaWVkID0gX3JlZi5kYXRlTW9kaWZpZWQsXG4gICAgICBkYXRlTW9kaWZpZWQgPSBfcmVmJGRhdGVNb2RpZmllZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkZGF0ZU1vZGlmaWVkLFxuICAgICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbjtcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHBzOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJCbG9nXFxcIixcXG4gICAgXFxcIm1haW5FbnRpdHlPZlBhZ2VcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIldlYlBhZ2VcXFwiLFxcbiAgICAgIFxcXCJAaWRcXFwiOiBcXFwiXCIgKyB1cmwgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXFxcImhlYWRsaW5lXFxcIjogXFxcIlwiICsgdGl0bGUgKyBcIlxcXCIsXFxuICAgIFxcXCJpbWFnZVxcXCI6IFtcXG4gICAgICBcIiArIGltYWdlcy5tYXAoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgaW1hZ2UgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIlxcbiAgICAgXSxcXG4gICAgXFxcImRhdGVQdWJsaXNoZWRcXFwiOiBcXFwiXCIgKyBkYXRlUHVibGlzaGVkICsgXCJcXFwiLFxcbiAgICBcXFwiZGF0ZU1vZGlmaWVkXFxcIjogXFxcIlwiICsgKGRhdGVNb2RpZmllZCB8fCBkYXRlUHVibGlzaGVkKSArIFwiXFxcIixcXG4gICAgXFxcImF1dGhvclxcXCI6IFwiICsgZm9ybWF0QXV0aG9yTmFtZShhdXRob3JOYW1lKSArIFwiLFxcbiAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtYmxvZ1wiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgQ291cnNlSnNvbkxkID0gZnVuY3Rpb24gQ291cnNlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICAgIGNvdXJzZU5hbWUgPSBfcmVmLmNvdXJzZU5hbWUsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBwcm92aWRlck5hbWUgPSBfcmVmLnByb3ZpZGVyTmFtZSxcbiAgICAgIHByb3ZpZGVyVXJsID0gX3JlZi5wcm92aWRlclVybDtcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHBzOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJDb3Vyc2VcXFwiLFxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGNvdXJzZU5hbWUgKyBcIlxcXCIsXFxuICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiLFxcbiAgICBcXFwicHJvdmlkZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9yZ2FuaXphdGlvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBwcm92aWRlck5hbWUgKyBcIlxcXCJcIiArIChwcm92aWRlclVybCA/IFwiLFxcbiAgICAgIFxcXCJzYW1lQXNcXFwiOiBcXFwiXCIgKyBwcm92aWRlclVybCArIFwiXFxcIlwiIDogJycpICsgXCJcXG4gICAgfVxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtY291cnNlXCIgKyAoa2V5T3ZlcnJpZGUgPyBcIi1cIiArIGtleU92ZXJyaWRlIDogJycpXG4gIH0pKTtcbn07XG5cbnZhciBEYXRhc2V0SnNvbkxkID0gZnVuY3Rpb24gRGF0YXNldEpzb25MZChfcmVmKSB7XG4gIHZhciBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgbGljZW5zZSA9IF9yZWYubGljZW5zZTtcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHBzOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJEYXRhc2V0XFxcIixcXG4gICAgXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgbmFtZSArIFwiXFxcIlwiICsgKGxpY2Vuc2UgPyBcIixcXG4gICAgICAgIFxcXCJsaWNlbnNlXFxcIjogXFxcIlwiICsgbGljZW5zZSArIFwiXFxcIlwiIDogJycpICsgXCJcXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLWRhdGFzZXRcIlxuICB9KSk7XG59O1xuXG52YXIgZm9ybWF0SWZBcnJheSA9IGZ1bmN0aW9uIGZvcm1hdElmQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gXCJbXCIgKyB2YWx1ZS5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiBcIlxcXCJcIiArIHZhbCArIFwiXFxcIlwiO1xuICB9KSArIFwiXVwiIDogXCJcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiO1xufTtcblxudmFyIGJ1aWxkQWRkcmVzcyA9IChmdW5jdGlvbiAoYWRkcmVzcykge1xuICByZXR1cm4gXCJcXG4gIFxcXCJhZGRyZXNzXFxcIjoge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUG9zdGFsQWRkcmVzc1xcXCIsXFxuICAgIFxcXCJzdHJlZXRBZGRyZXNzXFxcIjogXFxcIlwiICsgYWRkcmVzcy5zdHJlZXRBZGRyZXNzICsgXCJcXFwiLFxcbiAgICBcXFwiYWRkcmVzc0xvY2FsaXR5XFxcIjogXFxcIlwiICsgYWRkcmVzcy5hZGRyZXNzTG9jYWxpdHkgKyBcIlxcXCIsXFxuICAgIFwiICsgKGFkZHJlc3MuYWRkcmVzc1JlZ2lvbiA/IFwiXFxcImFkZHJlc3NSZWdpb25cXFwiOiBcXFwiXCIgKyBhZGRyZXNzLmFkZHJlc3NSZWdpb24gKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcXFwicG9zdGFsQ29kZVxcXCI6IFxcXCJcIiArIGFkZHJlc3MucG9zdGFsQ29kZSArIFwiXFxcIixcXG4gICAgXFxcImFkZHJlc3NDb3VudHJ5XFxcIjogXFxcIlwiICsgYWRkcmVzcy5hZGRyZXNzQ291bnRyeSArIFwiXFxcIlxcbiAgfSxcXG5cIjtcbn0pO1xuXG52YXIgYnVpbGRBY3Rpb24gPSBmdW5jdGlvbiBidWlsZEFjdGlvbihhY3Rpb24pIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiXCIgKyBhY3Rpb24uYWN0aW9uTmFtZSArIFwiXFxcIjoge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiXCIgKyBhY3Rpb24uYWN0aW9uVHlwZSArIFwiXFxcIixcXG4gICAgXFxcInRhcmdldFxcXCI6IFxcXCJcIiArIGFjdGlvbi50YXJnZXQgKyBcIlxcXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBidWlsZEFyZWFTZXJ2ZWQgPSBmdW5jdGlvbiBidWlsZEFyZWFTZXJ2ZWQoYXJlYVNlcnZlZCkge1xuICByZXR1cm4gXCJcXG4gIFxcXCJhcmVhU2VydmVkXFxcIjogW1xcbiAgICBcIiArIGFyZWFTZXJ2ZWQubWFwKGZ1bmN0aW9uIChhcmVhKSB7XG4gICAgcmV0dXJuIGJ1aWxkR2VvQ2lyY2xlKGFyZWEpO1xuICB9KSArIFwiXFxuICBdXFxuXCI7XG59O1xuXG52YXIgYnVpbGRBZ2dyZWdhdGVSYXRpbmcgPSBmdW5jdGlvbiBidWlsZEFnZ3JlZ2F0ZVJhdGluZyhhZ2dyZWdhdGVSYXRpbmcpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiYWdncmVnYXRlUmF0aW5nXFxcIjoge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQWdncmVnYXRlUmF0aW5nXFxcIixcXG4gICAgXFxcInJhdGluZ1ZhbHVlXFxcIjogXFxcIlwiICsgYWdncmVnYXRlUmF0aW5nLnJhdGluZ1ZhbHVlICsgXCJcXFwiLFxcbiAgICBcXFwicmF0aW5nQ291bnRcXFwiOiBcXFwiXCIgKyBhZ2dyZWdhdGVSYXRpbmcucmF0aW5nQ291bnQgKyBcIlxcXCJcXG4gIH0sXFxuXCI7XG59O1xuXG52YXIgYnVpbGRHZW8gPSBmdW5jdGlvbiBidWlsZEdlbyhnZW8pIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiZ2VvXFxcIjoge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiR2VvQ29vcmRpbmF0ZXNcXFwiLFxcbiAgICBcXFwibGF0aXR1ZGVcXFwiOiBcXFwiXCIgKyBnZW8ubGF0aXR1ZGUgKyBcIlxcXCIsXFxuICAgIFxcXCJsb25naXR1ZGVcXFwiOiBcXFwiXCIgKyBnZW8ubG9uZ2l0dWRlICsgXCJcXFwiXFxuICB9LFxcblwiO1xufTtcblxudmFyIGJ1aWxkR2VvQ2lyY2xlID0gZnVuY3Rpb24gYnVpbGRHZW9DaXJjbGUoZ2VvQ2lyY2xlKSB7XG4gIHJldHVybiBcIlxcbiAge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiR2VvQ2lyY2xlXFxcIixcXG4gICAgXFxcImdlb01pZHBvaW50XFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJHZW9Db29yZGluYXRlc1xcXCIsXFxuICAgICAgXFxcImxhdGl0dWRlXFxcIjogXFxcIlwiICsgZ2VvQ2lyY2xlLmdlb01pZHBvaW50LmxhdGl0dWRlICsgXCJcXFwiLFxcbiAgICAgIFxcXCJsb25naXR1ZGVcXFwiOiBcXFwiXCIgKyBnZW9DaXJjbGUuZ2VvTWlkcG9pbnQubG9uZ2l0dWRlICsgXCJcXFwiXFxuICAgIH0sXFxuICAgIFxcXCJnZW9SYWRpdXNcXFwiOiBcXFwiXCIgKyBnZW9DaXJjbGUuZ2VvUmFkaXVzICsgXCJcXFwiXFxuICB9XFxuXCI7XG59O1xuXG52YXIgYnVpbGRNYWtlc09mZmVyID0gZnVuY3Rpb24gYnVpbGRNYWtlc09mZmVyKG1ha2VzT2ZmZXIpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwibWFrZXNPZmZlclxcXCI6W1xcbiAgICBcIiArIG1ha2VzT2ZmZXIubWFwKGZ1bmN0aW9uIChvZmZlcikge1xuICAgIHJldHVybiBidWlsZE9mZmVyKG9mZmVyKTtcbiAgfSkgKyBcIlxcbiAgXVxcblwiO1xufTtcblxudmFyIGJ1aWxkT2ZmZXIgPSBmdW5jdGlvbiBidWlsZE9mZmVyKG9mZmVyKSB7XG4gIHJldHVybiBcIlxcbiAge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT2ZmZXJcXFwiLFxcbiAgICBcIiArIGJ1aWxkUHJpY2VTcGVjaWZpY2F0aW9uKG9mZmVyLnByaWNlU3BlY2lmaWNhdGlvbikgKyBcIixcXG4gICAgXCIgKyBidWlsZEl0ZW1PZmZlcmVkKG9mZmVyLml0ZW1PZmZlcmVkKSArIFwiXFxuICB9XFxuXCI7XG59O1xuXG52YXIgYnVpbGRPcGVuaW5nSG91cnMgPSBmdW5jdGlvbiBidWlsZE9wZW5pbmdIb3VycyhvcGVuaW5nSG91cnMpIHtcbiAgcmV0dXJuIFwiXFxuICB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJPcGVuaW5nSG91cnNTcGVjaWZpY2F0aW9uXFxcIixcXG4gICAgXCIgKyAob3BlbmluZ0hvdXJzLmRheU9mV2VlayA/IFwiXFxcImRheU9mV2Vla1xcXCI6IFwiICsgZm9ybWF0SWZBcnJheShvcGVuaW5nSG91cnMuZGF5T2ZXZWVrKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcIm9wZW5zXFxcIjogXFxcIlwiICsgb3BlbmluZ0hvdXJzLm9wZW5zICsgXCJcXFwiLFxcbiAgICBcIiArIChvcGVuaW5nSG91cnMudmFsaWRGcm9tID8gXCJcXFwidmFsaWRGcm9tXFxcIjogXFxcIlwiICsgb3BlbmluZ0hvdXJzLnZhbGlkRnJvbSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG9wZW5pbmdIb3Vycy52YWxpZFRocm91Z2ggPyBcIlxcXCJ2YWxpZFRocm91Z2hcXFwiOiBcXFwiXCIgKyBvcGVuaW5nSG91cnMudmFsaWRUaHJvdWdoICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcImNsb3Nlc1xcXCI6IFxcXCJcIiArIG9wZW5pbmdIb3Vycy5jbG9zZXMgKyBcIlxcXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBidWlsZFByaWNlU3BlY2lmaWNhdGlvbiA9IGZ1bmN0aW9uIGJ1aWxkUHJpY2VTcGVjaWZpY2F0aW9uKHByaWNlU3BlY2lmaWNhdGlvbikge1xuICByZXR1cm4gXCJcXG4gIFxcXCJwcmljZVNwZWNpZmljYXRpb25cXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJcIiArIHByaWNlU3BlY2lmaWNhdGlvbi50eXBlICsgXCJcXFwiLFxcbiAgICBcXFwicHJpY2VDdXJyZW5jeVxcXCI6IFxcXCJcIiArIHByaWNlU3BlY2lmaWNhdGlvbi5wcmljZUN1cnJlbmN5ICsgXCJcXFwiLFxcbiAgICBcXFwicHJpY2VcXFwiOiBcXFwiXCIgKyBwcmljZVNwZWNpZmljYXRpb24ucHJpY2UgKyBcIlxcXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBidWlsZFJhdGluZyA9IGZ1bmN0aW9uIGJ1aWxkUmF0aW5nKHJhdGluZykge1xuICByZXR1cm4gXCJcXG4gIHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlJhdGluZ1xcXCIsXFxuICAgIFwiICsgKHJhdGluZy5iZXN0UmF0aW5nID8gXCJcXFwiYmVzdFJhdGluZ1xcXCI6IFxcXCJcIiArIHJhdGluZy5iZXN0UmF0aW5nICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAocmF0aW5nLnJldmlld0FzcGVjdCA/IFwiXFxcInJldmlld0FzcGVjdFxcXCI6IFxcXCJcIiArIHJhdGluZy5yZXZpZXdBc3BlY3QgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChyYXRpbmcud29yc3RSYXRpbmcgPyBcIlxcXCJ3b3JzdFJhdGluZ1xcXCI6IFxcXCJcIiArIHJhdGluZy53b3JzdFJhdGluZyArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJyYXRpbmdWYWx1ZVxcXCI6IFxcXCJcIiArIHJhdGluZy5yYXRpbmdWYWx1ZSArIFwiXFxcIlxcbiAgfVxcblwiO1xufTtcblxudmFyIGJ1aWxkUmV2aWV3ID0gZnVuY3Rpb24gYnVpbGRSZXZpZXcocmV2aWV3cykge1xuICByZXR1cm4gXCJcXG4gIFxcXCJyZXZpZXdcXFwiOiBbXFxuICAgIFwiICsgcmV2aWV3cy5tYXAoZnVuY3Rpb24gKHJldmlldykge1xuICAgIHJldHVybiBcIlxcbiAgICAgIHtcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJSZXZpZXdcXFwiLFxcbiAgICAgICAgXFxcImF1dGhvclxcXCI6IFxcXCJcIiArIHJldmlldy5hdXRob3IgKyBcIlxcXCIsXFxuICAgICAgICBcXFwiZGF0ZVB1Ymxpc2hlZFxcXCI6IFxcXCJcIiArIHJldmlldy5kYXRlUHVibGlzaGVkICsgXCJcXFwiLFxcbiAgICAgICAgXCIgKyAocmV2aWV3Lm5hbWUgPyBcIlxcXCJuYW1lXFxcIjogXFxcIlwiICsgcmV2aWV3Lm5hbWUgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXFxcInJldmlld0JvZHlcXFwiOiBcXFwiXCIgKyByZXZpZXcucmV2aWV3Qm9keSArIFwiXFxcIixcXG4gICAgICAgIFxcXCJyZXZpZXdSYXRpbmdcXFwiOiBcIiArIGJ1aWxkUmF0aW5nKHJldmlldy5yZXZpZXdSYXRpbmcpICsgXCJcXG4gICAgICB9XFxuICAgIFwiO1xuICB9KSArIFwiXFxuICBdLFxcblwiO1xufTtcblxudmFyIGJ1aWxkSXRlbU9mZmVyZWQgPSBmdW5jdGlvbiBidWlsZEl0ZW1PZmZlcmVkKHNlcnZpY2UpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiaXRlbU9mZmVyZWRcXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJTZXJ2aWNlXFxcIixcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBzZXJ2aWNlLm5hbWUgKyBcIlxcXCIsXFxuICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIHNlcnZpY2UuZGVzY3JpcHRpb24gKyBcIlxcXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBMb2NhbEJ1c2luZXNzSnNvbkxkID0gZnVuY3Rpb24gTG9jYWxCdXNpbmVzc0pzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIHVybCA9IF9yZWYudXJsLFxuICAgICAgdGVsZXBob25lID0gX3JlZi50ZWxlcGhvbmUsXG4gICAgICBhZGRyZXNzID0gX3JlZi5hZGRyZXNzLFxuICAgICAgZ2VvID0gX3JlZi5nZW8sXG4gICAgICBpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICAgIHJhdGluZyA9IF9yZWYucmF0aW5nLFxuICAgICAgcmV2aWV3ID0gX3JlZi5yZXZpZXcsXG4gICAgICBwcmljZVJhbmdlID0gX3JlZi5wcmljZVJhbmdlLFxuICAgICAgc2VydmVzQ3Vpc2luZSA9IF9yZWYuc2VydmVzQ3Vpc2luZSxcbiAgICAgIHNhbWVBcyA9IF9yZWYuc2FtZUFzLFxuICAgICAgb3BlbmluZ0hvdXJzID0gX3JlZi5vcGVuaW5nSG91cnMsXG4gICAgICBhY3Rpb24gPSBfcmVmLmFjdGlvbixcbiAgICAgIGFyZWFTZXJ2ZWQgPSBfcmVmLmFyZWFTZXJ2ZWQsXG4gICAgICBtYWtlc09mZmVyID0gX3JlZi5tYWtlc09mZmVyO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlwiICsgdHlwZSArIFwiXFxcIixcXG4gICAgXCIgKyAoaWQgPyBcIlxcXCJAaWRcXFwiOiBcXFwiXCIgKyBpZCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGRlc2NyaXB0aW9uID8gXCJcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHVybCA/IFwiXFxcInVybFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHRlbGVwaG9uZSA/IFwiXFxcInRlbGVwaG9uZVxcXCI6IFxcXCJcIiArIHRlbGVwaG9uZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgYnVpbGRBZGRyZXNzKGFkZHJlc3MpICsgXCJcXG4gICAgXCIgKyAoZ2VvID8gXCJcIiArIGJ1aWxkR2VvKGdlbykgOiAnJykgKyBcIlxcbiAgICBcIiArIChyYXRpbmcgPyBcIlwiICsgYnVpbGRBZ2dyZWdhdGVSYXRpbmcocmF0aW5nKSA6ICcnKSArIFwiXFxuICAgIFwiICsgKHJldmlldyA/IFwiXCIgKyBidWlsZFJldmlldyhyZXZpZXcpIDogJycpICsgXCJcXG4gICAgXCIgKyAoYWN0aW9uID8gYnVpbGRBY3Rpb24oYWN0aW9uKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAoYXJlYVNlcnZlZCA/IGJ1aWxkQXJlYVNlcnZlZChhcmVhU2VydmVkKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAobWFrZXNPZmZlciA/IGJ1aWxkTWFrZXNPZmZlcihtYWtlc09mZmVyKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAocHJpY2VSYW5nZSA/IFwiXFxcInByaWNlUmFuZ2VcXFwiOiBcXFwiXCIgKyBwcmljZVJhbmdlICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAoc2VydmVzQ3Vpc2luZSA/IFwiXFxcInNlcnZlc0N1aXNpbmVcXFwiOlwiICsgZm9ybWF0SWZBcnJheShzZXJ2ZXNDdWlzaW5lKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAoaW1hZ2VzID8gXCJcXFwiaW1hZ2VcXFwiOlwiICsgZm9ybWF0SWZBcnJheShpbWFnZXMpICsgXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChzYW1lQXMgPyBcIlxcXCJzYW1lQXNcXFwiOiBbXCIgKyBzYW1lQXMubWFwKGZ1bmN0aW9uICh1cmwpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyB1cmwgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIl0sXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvcGVuaW5nSG91cnMgPyBcIlxcXCJvcGVuaW5nSG91cnNTcGVjaWZpY2F0aW9uXFxcIjogXCIgKyAoQXJyYXkuaXNBcnJheShvcGVuaW5nSG91cnMpID8gXCJbXCIgKyBvcGVuaW5nSG91cnMubWFwKGZ1bmN0aW9uIChob3Vycykge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRPcGVuaW5nSG91cnMoaG91cnMpO1xuICB9KSArIFwiXVwiIDogYnVpbGRPcGVuaW5nSG91cnMob3BlbmluZ0hvdXJzKSkgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgbmFtZSArIFwiXFxcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtbG9jYWwtYnVzaW5lc3NcIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxudmFyIExvZ29Kc29uTGQgPSBmdW5jdGlvbiBMb2dvSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICAgIHVybCA9IF9yZWYudXJsLFxuICAgICAgbG9nbyA9IF9yZWYubG9nbztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHBzOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJPcmdhbml6YXRpb25cXFwiLFxcbiAgICBcXFwidXJsXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiLFxcbiAgICBcXFwibG9nb1xcXCI6IFxcXCJcIiArIGxvZ28gKyBcIlxcXCJcXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLWxvZ29cIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxuLy8gVE9ETzogRG9jcyBmb3Igb2ZmZXJzIGl0ZW1Db25kaXRpb24gJiBhdmFpbGFiaWxpdHlcbi8vIFRPRE86IFNlbGxlciB0eXBlLCBtYWtlIGR5bmFtaWNcbnZhciBidWlsZE9mZmVycyA9IGZ1bmN0aW9uIGJ1aWxkT2ZmZXJzKG9mZmVycykge1xuICByZXR1cm4gXCJcXG4gIHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIk9mZmVyXFxcIixcXG4gICAgXFxcInByaWNlQ3VycmVuY3lcXFwiOiBcXFwiXCIgKyBvZmZlcnMucHJpY2VDdXJyZW5jeSArIFwiXFxcIixcXG4gICAgXCIgKyAob2ZmZXJzLnByaWNlVmFsaWRVbnRpbCA/IFwiXFxcInByaWNlVmFsaWRVbnRpbFxcXCI6IFxcXCJcIiArIG9mZmVycy5wcmljZVZhbGlkVW50aWwgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvZmZlcnMuaXRlbUNvbmRpdGlvbiA/IFwiXFxcIml0ZW1Db25kaXRpb25cXFwiOiBcXFwiXCIgKyBvZmZlcnMuaXRlbUNvbmRpdGlvbiArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG9mZmVycy5hdmFpbGFiaWxpdHkgPyBcIlxcXCJhdmFpbGFiaWxpdHlcXFwiOiBcXFwiXCIgKyBvZmZlcnMuYXZhaWxhYmlsaXR5ICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAob2ZmZXJzLnVybCA/IFwiXFxcInVybFxcXCI6IFxcXCJcIiArIG9mZmVycy51cmwgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvZmZlcnMuc2VsbGVyID8gXCJcXG4gICAgICBcXFwic2VsbGVyXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJPcmdhbml6YXRpb25cXFwiLFxcbiAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgb2ZmZXJzLnNlbGxlci5uYW1lICsgXCJcXFwiXFxuICAgIH0sXFxuICAgIFwiIDogJycpICsgXCJcXG4gICAgXFxcInByaWNlXFxcIjogXFxcIlwiICsgb2ZmZXJzLnByaWNlICsgXCJcXFwiXFxuICB9XFxuXCI7XG59O1xuXG52YXIgYnVpbGRBZ2dyZWdhdGVPZmZlciA9IGZ1bmN0aW9uIGJ1aWxkQWdncmVnYXRlT2ZmZXIob2ZmZXIpIHtcbiAgcmV0dXJuIFwiXFxuICB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJBZ2dyZWdhdGVPZmZlclxcXCIsXFxuICAgIFxcXCJwcmljZUN1cnJlbmN5XFxcIjogXFxcIlwiICsgb2ZmZXIucHJpY2VDdXJyZW5jeSArIFwiXFxcIixcXG4gICAgXCIgKyAob2ZmZXIuaGlnaFByaWNlID8gXCJcXFwiaGlnaFByaWNlXFxcIjogXFxcIlwiICsgb2ZmZXIuaGlnaFByaWNlICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAob2ZmZXIub2ZmZXJDb3VudCA/IFwiXFxcIm9mZmVyQ291bnRcXFwiOiBcXFwiXCIgKyBvZmZlci5vZmZlckNvdW50ICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcImxvd1ByaWNlXFxcIjogXFxcIlwiICsgb2ZmZXIubG93UHJpY2UgKyBcIlxcXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBidWlsZEJyYW5kID0gZnVuY3Rpb24gYnVpbGRCcmFuZChicmFuZCkge1xuICByZXR1cm4gXCJcXG4gIFxcXCJicmFuZFxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiVGhpbmdcXFwiLFxcbiAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgYnJhbmQgKyBcIlxcXCJcXG4gICAgfSxcXG5cIjtcbn07XG5cbnZhciBidWlsZFJldmlld1JhdGluZyA9IGZ1bmN0aW9uIGJ1aWxkUmV2aWV3UmF0aW5nKHJhdGluZykge1xuICByZXR1cm4gcmF0aW5nID8gXCJcXFwicmV2aWV3UmF0aW5nXFxcIjoge1xcbiAgICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUmF0aW5nXFxcIixcXG4gICAgICAgICAgXCIgKyAocmF0aW5nLmJlc3RSYXRpbmcgPyBcIlxcXCJiZXN0UmF0aW5nXFxcIjogXFxcIlwiICsgcmF0aW5nLmJlc3RSYXRpbmcgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgICBcIiArIChyYXRpbmcud29yc3RSYXRpbmcgPyBcIlxcXCJ3b3JzdFJhdGluZ1xcXCI6IFxcXCJcIiArIHJhdGluZy53b3JzdFJhdGluZyArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICAgIFxcXCJyYXRpbmdWYWx1ZVxcXCI6IFxcXCJcIiArIHJhdGluZy5yYXRpbmdWYWx1ZSArIFwiXFxcIlxcbiAgICAgICAgfVwiIDogJyc7XG59O1xudmFyIGJ1aWxkQXV0aG9yID0gZnVuY3Rpb24gYnVpbGRBdXRob3IoYXV0aG9yKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImF1dGhvclxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiXCIgKyBhdXRob3IudHlwZSArIFwiXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGF1dGhvci5uYW1lICsgXCJcXFwiXFxuICB9LFxcblwiO1xufTtcbnZhciBidWlsZFB1Ymxpc2hlciA9IGZ1bmN0aW9uIGJ1aWxkUHVibGlzaGVyKHB1Ymxpc2hlcikge1xuICByZXR1cm4gXCJcXG4gIFxcXCJwdWJsaXNoZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlwiICsgcHVibGlzaGVyLnR5cGUgKyBcIlxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBwdWJsaXNoZXIubmFtZSArIFwiXFxcIlxcbiAgfSxcXG5cIjtcbn07XG52YXIgYnVpbGRSZXZpZXdzID0gZnVuY3Rpb24gYnVpbGRSZXZpZXdzKHJldmlld3MpIHtcbiAgcmV0dXJuIFwiXFxuXFxcInJldmlld1xcXCI6IFtcXG4gIFwiICsgcmV2aWV3cy5tYXAoZnVuY3Rpb24gKHJldmlldykge1xuICAgIHJldHVybiBcIntcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUmV2aWV3XFxcIixcXG4gICAgICBcIiArIChyZXZpZXcuYXV0aG9yID8gYnVpbGRBdXRob3IocmV2aWV3LmF1dGhvcikgOiAnJykgKyBcIlxcbiAgICAgIFwiICsgKHJldmlldy5wdWJsaXNoZXIgPyBidWlsZFB1Ymxpc2hlcihyZXZpZXcucHVibGlzaGVyKSA6ICcnKSArIFwiXFxuICAgICAgXCIgKyAocmV2aWV3LmRhdGVQdWJsaXNoZWQgPyBcIlxcXCJkYXRlUHVibGlzaGVkXFxcIjogXFxcIlwiICsgcmV2aWV3LmRhdGVQdWJsaXNoZWQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgIFwiICsgKHJldmlldy5yZXZpZXdCb2R5ID8gXCJcXFwicmV2aWV3Qm9keVxcXCI6IFxcXCJcIiArIHJldmlldy5yZXZpZXdCb2R5ICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICBcIiArIChyZXZpZXcubmFtZSA/IFwiXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyByZXZpZXcubmFtZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgXCIgKyBidWlsZFJldmlld1JhdGluZyhyZXZpZXcucmV2aWV3UmF0aW5nKSArIFwiXFxuICB9XCI7XG4gIH0pICsgXCJdLFwiO1xufTtcbnZhciBidWlsZEFnZ3JlZ2F0ZVJhdGluZyQxID0gZnVuY3Rpb24gYnVpbGRBZ2dyZWdhdGVSYXRpbmcoYWdncmVnYXRlUmF0aW5nKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImFnZ3JlZ2F0ZVJhdGluZ1xcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQWdncmVnYXRlUmF0aW5nXFxcIixcXG4gICAgICBcIiArIChhZ2dyZWdhdGVSYXRpbmcucmF0aW5nQ291bnQgPyBcIlxcXCJyYXRpbmdDb3VudFxcXCI6IFxcXCJcIiArIGFnZ3JlZ2F0ZVJhdGluZy5yYXRpbmdDb3VudCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgXCIgKyAoYWdncmVnYXRlUmF0aW5nLnJldmlld0NvdW50ID8gXCJcXFwicmV2aWV3Q291bnRcXFwiOiBcXFwiXCIgKyBhZ2dyZWdhdGVSYXRpbmcucmV2aWV3Q291bnQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgIFwiICsgKGFnZ3JlZ2F0ZVJhdGluZy5iZXN0UmF0aW5nID8gXCJcXFwiYmVzdFJhdGluZ1xcXCI6IFxcXCJcIiArIGFnZ3JlZ2F0ZVJhdGluZy5iZXN0UmF0aW5nICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICBcXFwicmF0aW5nVmFsdWVcXFwiOiBcXFwiXCIgKyBhZ2dyZWdhdGVSYXRpbmcucmF0aW5nVmFsdWUgKyBcIlxcXCJcXG4gICAgfSxcXG5cIjtcbn07XG5cbnZhciBQcm9kdWN0SnNvbkxkID0gZnVuY3Rpb24gUHJvZHVjdEpzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICBwcm9kdWN0TmFtZSA9IF9yZWYucHJvZHVjdE5hbWUsXG4gICAgICBfcmVmJGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgICAgaW1hZ2VzID0gX3JlZiRpbWFnZXMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRpbWFnZXMsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBza3UgPSBfcmVmLnNrdSxcbiAgICAgIGd0aW44ID0gX3JlZi5ndGluOCxcbiAgICAgIGd0aW4xMyA9IF9yZWYuZ3RpbjEzLFxuICAgICAgZ3RpbjE0ID0gX3JlZi5ndGluMTQsXG4gICAgICBtcG4gPSBfcmVmLm1wbixcbiAgICAgIGJyYW5kID0gX3JlZi5icmFuZCxcbiAgICAgIF9yZWYkcmV2aWV3cyA9IF9yZWYucmV2aWV3cyxcbiAgICAgIHJldmlld3MgPSBfcmVmJHJldmlld3MgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRyZXZpZXdzLFxuICAgICAgYWdncmVnYXRlUmF0aW5nID0gX3JlZi5hZ2dyZWdhdGVSYXRpbmcsXG4gICAgICBvZmZlcnMgPSBfcmVmLm9mZmVycyxcbiAgICAgIGFnZ3JlZ2F0ZU9mZmVyID0gX3JlZi5hZ2dyZWdhdGVPZmZlcixcbiAgICAgIGNvbG9yID0gX3JlZi5jb2xvcixcbiAgICAgIG1hbnVmYWN0dXJlck5hbWUgPSBfcmVmLm1hbnVmYWN0dXJlck5hbWUsXG4gICAgICBtYW51ZmFjdHVyZXJMb2dvID0gX3JlZi5tYW51ZmFjdHVyZXJMb2dvLFxuICAgICAgbWF0ZXJpYWwgPSBfcmVmLm1hdGVyaWFsLFxuICAgICAgc2xvZ2FuID0gX3JlZi5zbG9nYW4sXG4gICAgICBkaXNhbWJpZ3VhdGluZ0Rlc2NyaXB0aW9uID0gX3JlZi5kaXNhbWJpZ3VhdGluZ0Rlc2NyaXB0aW9uLFxuICAgICAgcHJvZHVjdGlvbkRhdGUgPSBfcmVmLnByb2R1Y3Rpb25EYXRlLFxuICAgICAgcmVsZWFzZURhdGUgPSBfcmVmLnJlbGVhc2VEYXRlLFxuICAgICAgcHVyY2hhc2VEYXRlID0gX3JlZi5wdXJjaGFzZURhdGUsXG4gICAgICBhd2FyZCA9IF9yZWYuYXdhcmQ7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmcvXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlByb2R1Y3RcXFwiLFxcbiAgICBcXFwiaW1hZ2VcXFwiOlwiICsgZm9ybWF0SWZBcnJheShpbWFnZXMpICsgXCIsXFxuICAgIFwiICsgKGRlc2NyaXB0aW9uID8gXCJcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG1wbiA/IFwiXFxcIm1wblxcXCI6IFxcXCJcIiArIG1wbiArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHNrdSA/IFwiXFxcInNrdVxcXCI6IFxcXCJcIiArIHNrdSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGd0aW44ID8gXCJcXFwiZ3RpbjhcXFwiOiBcXFwiXCIgKyBndGluOCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGd0aW4xMyA/IFwiXFxcImd0aW4xM1xcXCI6IFxcXCJcIiArIGd0aW4xMyArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGd0aW4xNCA/IFwiXFxcImd0aW4xNFxcXCI6IFxcXCJcIiArIGd0aW4xNCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGJyYW5kID8gYnVpbGRCcmFuZChicmFuZCkgOiAnJykgKyBcIlxcbiAgICBcIiArIChyZXZpZXdzLmxlbmd0aCA/IGJ1aWxkUmV2aWV3cyhyZXZpZXdzKSA6ICcnKSArIFwiXFxuICAgIFwiICsgKGFnZ3JlZ2F0ZVJhdGluZyA/IGJ1aWxkQWdncmVnYXRlUmF0aW5nJDEoYWdncmVnYXRlUmF0aW5nKSA6ICcnKSArIFwiXFxuICAgIFwiICsgKGNvbG9yID8gXCJcXFwiY29sb3JcXFwiOiBcXFwiXCIgKyBjb2xvciArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG1hdGVyaWFsID8gXCJcXFwibWF0ZXJpYWxcXFwiOiBcXFwiXCIgKyBtYXRlcmlhbCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHNsb2dhbiA/IFwiXFxcInNsb2dhblxcXCI6IFxcXCJcIiArIHNsb2dhbiArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGRpc2FtYmlndWF0aW5nRGVzY3JpcHRpb24gPyBcIlxcXCJkaXNhbWJpZ3VhdGluZ0Rlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGlzYW1iaWd1YXRpbmdEZXNjcmlwdGlvbiArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHByb2R1Y3Rpb25EYXRlID8gXCJcXFwicHJvZHVjdGlvbkRhdGVcXFwiOiBcXFwiXCIgKyBwcm9kdWN0aW9uRGF0ZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHJlbGVhc2VEYXRlID8gXCJcXFwicmVsZWFzZURhdGVcXFwiOiBcXFwiXCIgKyByZWxlYXNlRGF0ZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHB1cmNoYXNlRGF0ZSA/IFwiXFxcInB1cmNoYXNlRGF0ZVxcXCI6IFxcXCJcIiArIHB1cmNoYXNlRGF0ZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGF3YXJkID8gXCJcXFwiYXdhcmRcXFwiOiBcXFwiXCIgKyBhd2FyZCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJtYW51ZmFjdHVyZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9yZ2FuaXphdGlvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBtYW51ZmFjdHVyZXJOYW1lICsgXCJcXFwiLFxcbiAgICAgIFxcXCJsb2dvXFxcIjoge1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkltYWdlT2JqZWN0XFxcIixcXG4gICAgICAgIFxcXCJ1cmxcXFwiOiBcXFwiXCIgKyBtYW51ZmFjdHVyZXJMb2dvICsgXCJcXFwiXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBcIiArIChvZmZlcnMgPyBcIlxcXCJvZmZlcnNcXFwiOiBcIiArIChBcnJheS5pc0FycmF5KG9mZmVycykgPyBcIltcIiArIG9mZmVycy5tYXAoZnVuY3Rpb24gKG9mZmVyKSB7XG4gICAgcmV0dXJuIFwiXCIgKyBidWlsZE9mZmVycyhvZmZlcik7XG4gIH0pICsgXCJdXCIgOiBidWlsZE9mZmVycyhvZmZlcnMpKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAoYWdncmVnYXRlT2ZmZXIgJiYgIW9mZmVycyA/IFwiXFxcIm9mZmVyc1xcXCI6IFwiICsgYnVpbGRBZ2dyZWdhdGVPZmZlcihhZ2dyZWdhdGVPZmZlcikgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgcHJvZHVjdE5hbWUgKyBcIlxcXCJcXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLXByb2R1Y3RcIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxudmFyIFNvY2lhbFByb2ZpbGVKc29uTGQgPSBmdW5jdGlvbiBTb2NpYWxQcm9maWxlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgdXJsID0gX3JlZi51cmwsXG4gICAgICBfcmVmJHNhbWVBcyA9IF9yZWYuc2FtZUFzLFxuICAgICAgc2FtZUFzID0gX3JlZiRzYW1lQXMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRzYW1lQXM7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiXCIgKyB0eXBlICsgXCJcXFwiLFxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIG5hbWUgKyBcIlxcXCIsXFxuICAgIFxcXCJ1cmxcXFwiOiBcXFwiXCIgKyB1cmwgKyBcIlxcXCIsXFxuICAgIFxcXCJzYW1lQXNcXFwiOiBbXFxuICAgICAgXCIgKyBzYW1lQXMubWFwKGZ1bmN0aW9uIChzb2NpYWxVcmwpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyBzb2NpYWxVcmwgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIlxcbiAgICAgXVxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtc29jaWFsXCIgKyAoa2V5T3ZlcnJpZGUgPyBcIi1cIiArIGtleU92ZXJyaWRlIDogJycpXG4gIH0pKTtcbn07XG5cbnZhciBmb3JtYXRJZkFycmF5JDEgPSBmdW5jdGlvbiBmb3JtYXRJZkFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IFwiW1wiICsgdmFsdWUubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyB2YWwgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIl1cIiA6IFwiXFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIjtcbn07XG5cbnZhciBidWlsZENvbnRhY3RQb2ludCA9IGZ1bmN0aW9uIGJ1aWxkQ29udGFjdFBvaW50KGNvbnRhY3RQb2ludCkge1xuICByZXR1cm4gY29udGFjdFBvaW50Lm1hcChmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIHJldHVybiBcIntcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkNvbnRhY3RQb2ludFxcXCIsXFxuICAgIFxcXCJ0ZWxlcGhvbmVcXFwiOiBcXFwiXCIgKyBjb250YWN0LnRlbGVwaG9uZSArIFwiXFxcIixcXG4gICAgXFxcImNvbnRhY3RUeXBlXFxcIjogXFxcIlwiICsgY29udGFjdC5jb250YWN0VHlwZSArIFwiXFxcIlwiICsgKGNvbnRhY3QuYXJlYVNlcnZlZCA/IFwiLFxcbiAgICBcXFwiYXJlYVNlcnZlZFxcXCI6IFwiICsgZm9ybWF0SWZBcnJheSQxKGNvbnRhY3QuYXJlYVNlcnZlZCkgOiAnJykgKyAoY29udGFjdC5hdmFpbGFibGVMYW5ndWFnZSA/IFwiLFxcbiAgICBcXFwiYXZhaWxhYmxlTGFuZ3VhZ2VcXFwiOiBcIiArIGZvcm1hdElmQXJyYXkkMShjb250YWN0LmF2YWlsYWJsZUxhbmd1YWdlKSA6ICcnKSArIChjb250YWN0LmNvbnRhY3RPcHRpb24gPyBcIixcXG4gICAgXFxcImNvbnRhY3RPcHRpb25cXFwiOiBcXFwiXCIgKyBjb250YWN0LmNvbnRhY3RPcHRpb24gKyBcIlxcXCJcIiA6ICcnKSArIFwiXFxuICAgIH1cIjtcbiAgfSk7XG59O1xuXG52YXIgQ29ycG9yYXRlQ29udGFjdEpzb25MZCA9IGZ1bmN0aW9uIENvcnBvcmF0ZUNvbnRhY3RKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgdXJsID0gX3JlZi51cmwsXG4gICAgICBsb2dvID0gX3JlZi5sb2dvLFxuICAgICAgY29udGFjdFBvaW50ID0gX3JlZi5jb250YWN0UG9pbnQ7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgXFxcInVybFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIixcXG4gICAgXCIgKyAobG9nbyA/IFwiXFxcImxvZ29cXFwiOiBcXFwiXCIgKyBsb2dvICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcImNvbnRhY3RQb2ludFxcXCI6IFtcIiArIGJ1aWxkQ29udGFjdFBvaW50KGNvbnRhY3RQb2ludCkgKyBcIl1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLWNvcnBvcmF0ZS1jb250YWN0XCIgKyAoa2V5T3ZlcnJpZGUgPyBcIi1cIiArIGtleU92ZXJyaWRlIDogJycpXG4gIH0pKTtcbn07XG5cbnZhciBOZXdzQXJ0aWNsZUpzb25MZCA9IGZ1bmN0aW9uIE5ld3NBcnRpY2xlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICAgIHVybCA9IF9yZWYudXJsLFxuICAgICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgX3JlZiRpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICAgIGltYWdlcyA9IF9yZWYkaW1hZ2VzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkaW1hZ2VzLFxuICAgICAgc2VjdGlvbiA9IF9yZWYuc2VjdGlvbixcbiAgICAgIGtleXdvcmRzID0gX3JlZi5rZXl3b3JkcyxcbiAgICAgIGRhdGVQdWJsaXNoZWQgPSBfcmVmLmRhdGVQdWJsaXNoZWQsXG4gICAgICBfcmVmJGRhdGVDcmVhdGVkID0gX3JlZi5kYXRlQ3JlYXRlZCxcbiAgICAgIGRhdGVDcmVhdGVkID0gX3JlZiRkYXRlQ3JlYXRlZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkZGF0ZUNyZWF0ZWQsXG4gICAgICBfcmVmJGRhdGVNb2RpZmllZCA9IF9yZWYuZGF0ZU1vZGlmaWVkLFxuICAgICAgZGF0ZU1vZGlmaWVkID0gX3JlZiRkYXRlTW9kaWZpZWQgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJGRhdGVNb2RpZmllZCxcbiAgICAgIGF1dGhvck5hbWUgPSBfcmVmLmF1dGhvck5hbWUsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBib2R5ID0gX3JlZi5ib2R5LFxuICAgICAgcHVibGlzaGVyTmFtZSA9IF9yZWYucHVibGlzaGVyTmFtZSxcbiAgICAgIHB1Ymxpc2hlckxvZ28gPSBfcmVmLnB1Ymxpc2hlckxvZ287XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiTmV3c0FydGljbGVcXFwiLFxcbiAgICBcXFwibWFpbkVudGl0eU9mUGFnZVxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiV2ViUGFnZVxcXCIsXFxuICAgICAgXFxcIkBpZFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIlxcbiAgICB9LFxcbiAgICBcXFwiaGVhZGxpbmVcXFwiOiBcXFwiXCIgKyB0aXRsZSArIFwiXFxcIixcXG4gICAgXFxcImltYWdlXFxcIjogW1xcbiAgICAgIFwiICsgaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyBpbWFnZSArIFwiXFxcIlwiO1xuICB9KSArIFwiXFxuICAgICBdLFxcbiAgICBcXFwiYXJ0aWNsZVNlY3Rpb25cXFwiOlxcXCJcIiArIHNlY3Rpb24gKyBcIlxcXCIsXFxuICAgIFxcXCJrZXl3b3Jkc1xcXCI6IFxcXCJcIiArIGtleXdvcmRzICsgXCJcXFwiLFxcbiAgICBcXFwiZGF0ZVB1Ymxpc2hlZFxcXCI6IFxcXCJcIiArIGRhdGVQdWJsaXNoZWQgKyBcIlxcXCIsXFxuICAgIFxcXCJkYXRlQ3JlYXRlZFxcXCI6IFxcXCJcIiArIChkYXRlQ3JlYXRlZCB8fCBkYXRlUHVibGlzaGVkKSArIFwiXFxcIixcXG4gICAgXFxcImRhdGVNb2RpZmllZFxcXCI6IFxcXCJcIiArIChkYXRlTW9kaWZpZWQgfHwgZGF0ZVB1Ymxpc2hlZCkgKyBcIlxcXCIsXFxuICAgIFxcXCJhdXRob3JcXFwiOiBcIiArIGZvcm1hdEF1dGhvck5hbWUoYXV0aG9yTmFtZSkgKyBcIixcXG4gICAgXFxcInB1Ymxpc2hlclxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHB1Ymxpc2hlck5hbWUgKyBcIlxcXCIsXFxuICAgICAgXFxcImxvZ29cXFwiOiB7XFxuICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiSW1hZ2VPYmplY3RcXFwiLFxcbiAgICAgICAgXFxcInVybFxcXCI6IFxcXCJcIiArIHB1Ymxpc2hlckxvZ28gKyBcIlxcXCJcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiLFxcbiAgICBcXFwiYXJ0aWNsZUJvZHlcXFwiOiBcXFwiXCIgKyBib2R5ICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1uZXdzYXJ0aWNsZVwiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRMb2NhdGlvbiA9IGZ1bmN0aW9uIGJ1aWxkTG9jYXRpb24obG9jYXRpb24pIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwibG9jYXRpb25cXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQbGFjZVxcXCIsXFxuICAgIFwiICsgYnVpbGRBZGRyZXNzKGxvY2F0aW9uLmFkZHJlc3MpICsgXCJcXG4gICAgXCIgKyAobG9jYXRpb24uc2FtZUFzID8gXCJcXFwic2FtZUFzXFxcIjogXFxcIlwiICsgbG9jYXRpb24uc2FtZUFzICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGxvY2F0aW9uLm5hbWUgKyBcIlxcXCJcXG4gIH0sXFxuXCI7XG59O1xuXG52YXIgYnVpbGRQZXJmb3JtZXIgPSBmdW5jdGlvbiBidWlsZFBlcmZvcm1lcihwZXJmb3JtZXIpIHtcbiAgcmV0dXJuIFwiXFxuICB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQZXJmb3JtaW5nR3JvdXBcXFwiLFxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHBlcmZvcm1lci5uYW1lICsgXCJcXFwiXFxuICB9XFxuXCI7XG59O1xuXG52YXIgRXZlbnRKc29uTGQgPSBmdW5jdGlvbiBFdmVudEpzb25MZChfcmVmKSB7XG4gIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgc3RhcnREYXRlID0gX3JlZi5zdGFydERhdGUsXG4gICAgICBlbmREYXRlID0gX3JlZi5lbmREYXRlLFxuICAgICAgbG9jYXRpb24gPSBfcmVmLmxvY2F0aW9uLFxuICAgICAgdXJsID0gX3JlZi51cmwsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICAgIG9mZmVycyA9IF9yZWYub2ZmZXJzLFxuICAgICAgYWdncmVnYXRlT2ZmZXIgPSBfcmVmLmFnZ3JlZ2F0ZU9mZmVyLFxuICAgICAgcGVyZm9ybWVycyA9IF9yZWYucGVyZm9ybWVycztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHBzOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJFdmVudFxcXCIsXFxuICAgIFxcXCJzdGFydERhdGVcXFwiOiBcXFwiXCIgKyBzdGFydERhdGUgKyBcIlxcXCIsXFxuICAgIFxcXCJlbmREYXRlXFxcIjogXFxcIlwiICsgZW5kRGF0ZSArIFwiXFxcIixcXG4gICAgXCIgKyBidWlsZExvY2F0aW9uKGxvY2F0aW9uKSArIFwiXFxuICAgIFwiICsgKGltYWdlcyA/IFwiXFxcImltYWdlXFxcIjpcIiArIGZvcm1hdElmQXJyYXkoaW1hZ2VzKSArIFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArICh1cmwgPyBcIlxcXCJ1cmxcXFwiOiBcXFwiXCIgKyB1cmwgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKGRlc2NyaXB0aW9uID8gXCJcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAob2ZmZXJzID8gXCJcXFwib2ZmZXJzXFxcIjogXCIgKyAoQXJyYXkuaXNBcnJheShvZmZlcnMpID8gXCJbXCIgKyBvZmZlcnMubWFwKGZ1bmN0aW9uIChvZmZlcikge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRPZmZlcnMob2ZmZXIpO1xuICB9KSArIFwiXVwiIDogYnVpbGRPZmZlcnMob2ZmZXJzKSkgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGFnZ3JlZ2F0ZU9mZmVyICYmICFvZmZlcnMgPyBcIlxcXCJvZmZlcnNcXFwiOiBcIiArIGJ1aWxkQWdncmVnYXRlT2ZmZXIoYWdncmVnYXRlT2ZmZXIpICsgXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChwZXJmb3JtZXJzID8gXCJcXFwicGVyZm9ybWVyXFxcIjogXCIgKyAoQXJyYXkuaXNBcnJheShwZXJmb3JtZXJzKSA/IFwiW1wiICsgcGVyZm9ybWVycy5tYXAoZnVuY3Rpb24gKHBlcmZvcm1lcikge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRQZXJmb3JtZXIocGVyZm9ybWVyKTtcbiAgfSkgKyBcIl1cIiA6IGJ1aWxkUGVyZm9ybWVyKHBlcmZvcm1lcnMpKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1ldmVudFwiXG4gIH0pKTtcbn07XG5cbnZhciBidWlsZFZpZGVvID0gKGZ1bmN0aW9uICh2aWRlbywgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgY29udGV4dCA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIFwie1xcbiAgICAgIFwiICsgKGNvbnRleHQgPyBcIlxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJWaWRlb09iamVjdFxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyB2aWRlby5uYW1lICsgXCJcXFwiLFxcbiAgICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIHZpZGVvLmRlc2NyaXB0aW9uICsgXCJcXFwiLFxcbiAgICAgIFxcXCJ0aHVtYm5haWxVcmxcXFwiOiBbXFxuICAgICAgICAgIFwiICsgdmlkZW8udGh1bWJuYWlsVXJscy5tYXAoZnVuY3Rpb24gKHRodW1ibmFpbFVybCkge1xuICAgIHJldHVybiBcIlxcXCJcIiArIHRodW1ibmFpbFVybCArIFwiXFxcIlwiO1xuICB9KS5qb2luKCcsJykgKyBcIlxcbiAgICAgICAgXSxcXG4gICAgICAgIFwiICsgKHZpZGVvLmNvbnRlbnRVcmwgPyBcIlxcXCJjb250ZW50VXJsXFxcIjogXFxcIlwiICsgdmlkZW8uY29udGVudFVybCArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICAgIFwiICsgKHZpZGVvLmR1cmF0aW9uID8gXCJcXFwiZHVyYXRpb25cXFwiOiBcXFwiXCIgKyB2aWRlby5kdXJhdGlvbiArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICAgIFwiICsgKHZpZGVvLmVtYmVkVXJsID8gXCJcXFwiZW1iZWRVcmxcXFwiOiBcXFwiXCIgKyB2aWRlby5lbWJlZFVybCArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICAgIFwiICsgKHZpZGVvLmV4cGlyZXMgPyBcIlxcXCJleHBpcmVzXFxcIjogXFxcIlwiICsgdmlkZW8uZXhwaXJlcyArIFwiXFxcIixcIiA6IFwiXCIpICsgXCIgICAgICAgIFxcbiAgICAgICAgXCIgKyAodmlkZW8uaGFzUGFydCA/IFwiXFxcImhhc1BhcnRcXFwiOiBcIiArIChBcnJheS5pc0FycmF5KHZpZGVvLmhhc1BhcnQpID8gXCJbXCIgKyB2aWRlby5oYXNQYXJ0Lm1hcChmdW5jdGlvbiAoY2xpcCkge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRDbGlwKGNsaXApO1xuICB9KS5qb2luKCcsJykgKyBcIl1cIiA6IGJ1aWxkQ2xpcCh2aWRlby5oYXNQYXJ0KSkgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICBcIiArICh2aWRlby53YXRjaENvdW50ID8gXCJcIiArIGJ1aWxkSW50ZXJhY3Rpb25TdGF0aXN0aWModmlkZW8ud2F0Y2hDb3VudCkgOiBcIlwiKSArIFwiICAgICAgICBcXG4gICAgICAgIFwiICsgKHZpZGVvLnB1YmxpY2F0aW9uID8gXCJcXFwicHVibGljYXRpb25cXFwiOiBcIiArIChBcnJheS5pc0FycmF5KHZpZGVvLnB1YmxpY2F0aW9uKSA/IFwiW1wiICsgdmlkZW8ucHVibGljYXRpb24ubWFwKGZ1bmN0aW9uIChicm9hZGNhc3RFdmVudCkge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRCcm9hZGNhc3RFdmVudChicm9hZGNhc3RFdmVudCk7XG4gIH0pLmpvaW4oJywnKSArIFwiXVwiIDogYnVpbGRCcm9hZGNhc3RFdmVudCh2aWRlby5wdWJsaWNhdGlvbikpICsgXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAodmlkZW8ucmVnaW9uc0FsbG93ZWQgPyBcIlxcXCJyZWdpb25zQWxsb3dlZFxcXCI6IFwiICsgZm9ybWF0SWZBcnJheSh2aWRlby5yZWdpb25zQWxsb3dlZCkgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICBcXFwidXBsb2FkRGF0ZVxcXCI6IFxcXCJcIiArIHZpZGVvLnVwbG9hZERhdGUgKyBcIlxcXCJcXG4gIH1cIjtcbn0pO1xuXG52YXIgYnVpbGRDbGlwID0gZnVuY3Rpb24gYnVpbGRDbGlwKGNsaXApIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiZ2VvXFxcIjoge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQ2xpcFxcXCIsXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgY2xpcC5uYW1lICsgXCJcXFwiLFxcbiAgICBcXFwic3RhcnRPZmZzZXRcXFwiOiBcIiArIGNsaXAuc3RhcnRPZmZzZXQgKyBcIixcXG4gICAgXFxcInVybFxcXCI6IFxcXCJcIiArIGNsaXAudXJsICsgXCJcXFwiXFxuICB9XFxuXCI7XG59O1xuXG52YXIgYnVpbGRJbnRlcmFjdGlvblN0YXRpc3RpYyA9IGZ1bmN0aW9uIGJ1aWxkSW50ZXJhY3Rpb25TdGF0aXN0aWMod2F0Y2hDb3VudCkge1xuICByZXR1cm4gXCJcXG4gIFxcXCJpbnRlcmFjdGlvblN0YXRpc3RpY1xcXCI6IHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkludGVyYWN0aW9uQ291bnRlclxcXCIsXFxuICAgIFxcXCJpbnRlcmFjdGlvblR5cGVcXFwiOiB7IFxcXCJAdHlwZVxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmcvV2F0Y2hBY3Rpb25cXFwiIH0sXFxuICAgIFxcXCJ1c2VySW50ZXJhY3Rpb25Db3VudFxcXCI6IFwiICsgd2F0Y2hDb3VudCArIFwiXFxuICB9LFxcblwiO1xufTtcblxudmFyIGJ1aWxkQnJvYWRjYXN0RXZlbnQgPSBmdW5jdGlvbiBidWlsZEJyb2FkY2FzdEV2ZW50KHB1YmxpY2F0aW9uKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcInB1YmxpY2F0aW9uXFxcIjoge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQnJvYWRjYXN0RXZlbnRcXFwiLFxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHB1YmxpY2F0aW9uLm5hbWUgKyBcIlxcXCIsXFxuICAgIFxcXCJpc0xpdmVCcm9hZGNhc3RcXFwiOiBcIiArIHB1YmxpY2F0aW9uLmlzTGl2ZUJyb2FkY2FzdCArIFwiLFxcbiAgICBcXFwic3RhcnREYXRlXFxcIjogXFxcIlwiICsgcHVibGljYXRpb24uc3RhcnREYXRlICsgXCJcXFwiLFxcbiAgICBcXFwiZW5kRGF0ZVxcXCI6IFxcXCJcIiArIHB1YmxpY2F0aW9uLmVuZERhdGUgKyBcIlxcXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBWaWRlb0pzb25MZCA9IGZ1bmN0aW9uIFZpZGVvSnNvbkxkKF9yZWYpIHtcbiAgdmFyIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICB0aHVtYm5haWxVcmxzID0gX3JlZi50aHVtYm5haWxVcmxzLFxuICAgICAgdXBsb2FkRGF0ZSA9IF9yZWYudXBsb2FkRGF0ZSxcbiAgICAgIGNvbnRlbnRVcmwgPSBfcmVmLmNvbnRlbnRVcmwsXG4gICAgICBkdXJhdGlvbiA9IF9yZWYuZHVyYXRpb24sXG4gICAgICBlbWJlZFVybCA9IF9yZWYuZW1iZWRVcmwsXG4gICAgICBleHBpcmVzID0gX3JlZi5leHBpcmVzLFxuICAgICAgaGFzUGFydCA9IF9yZWYuaGFzUGFydCxcbiAgICAgIHdhdGNoQ291bnQgPSBfcmVmLndhdGNoQ291bnQsXG4gICAgICBwdWJsaWNhdGlvbiA9IF9yZWYucHVibGljYXRpb24sXG4gICAgICByZWdpb25zQWxsb3dlZCA9IF9yZWYucmVnaW9uc0FsbG93ZWQ7XG4gIHZhciBqc2xvbmxkID0gYnVpbGRWaWRlbyh7XG4gICAgbmFtZTogbmFtZSxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgdGh1bWJuYWlsVXJsczogdGh1bWJuYWlsVXJscyxcbiAgICB1cGxvYWREYXRlOiB1cGxvYWREYXRlLFxuICAgIGNvbnRlbnRVcmw6IGNvbnRlbnRVcmwsXG4gICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgIGVtYmVkVXJsOiBlbWJlZFVybCxcbiAgICBleHBpcmVzOiBleHBpcmVzLFxuICAgIGhhc1BhcnQ6IGhhc1BhcnQsXG4gICAgd2F0Y2hDb3VudDogd2F0Y2hDb3VudCxcbiAgICBwdWJsaWNhdGlvbjogcHVibGljYXRpb24sXG4gICAgcmVnaW9uc0FsbG93ZWQ6IHJlZ2lvbnNBbGxvd2VkXG4gIH0sIHRydWUpO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtdmlkZW9cIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxudmFyIGJ1aWxkUXVlc3Rpb25zJDEgPSBmdW5jdGlvbiBidWlsZFF1ZXN0aW9ucyhtYWluRW50aXR5KSB7XG4gIHJldHVybiBcIntcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJRdWVzdGlvblxcXCIsXFxuICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIG1haW5FbnRpdHkubmFtZSArIFwiXFxcIixcXG4gICAgICAgIFwiICsgKG1haW5FbnRpdHkudGV4dCA/IFwiXFxcInRleHRcXFwiOiBcXFwiXCIgKyBtYWluRW50aXR5LnRleHQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXFxcImFuc3dlckNvdW50XFxcIjogXCIgKyBtYWluRW50aXR5LmFuc3dlckNvdW50ICsgXCIsXFxuICAgICAgICBcIiArIChtYWluRW50aXR5LnVwdm90ZWRDb3VudCA/IFwiXFxcInVwdm90ZUNvdW50XFxcIjogXCIgKyBtYWluRW50aXR5LnVwdm90ZWRDb3VudCArIFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgIFwiICsgKG1haW5FbnRpdHkuZGF0ZUNyZWF0ZWQgPyBcIlxcXCJkYXRlQ3JlYXRlZFxcXCI6IFxcXCJcIiArIG1haW5FbnRpdHkuZGF0ZUNyZWF0ZWQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAobWFpbkVudGl0eS5hdXRob3IgPyBcIlxcXCJhdXRob3JcXFwiOiB7XFxuICAgICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQZXJzb25cXFwiLFxcbiAgICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIG1haW5FbnRpdHkuYXV0aG9yLm5hbWUgKyBcIlxcXCJcXG4gICAgICAgIH0sXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAobWFpbkVudGl0eS5hY2NlcHRlZEFuc3dlciA/IFwiXFxcImFjY2VwdGVkQW5zd2VyXFxcIjoge1xcbiAgICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQW5zd2VyXFxcIixcXG4gICAgICAgICAgXFxcInRleHRcXFwiOiBcXFwiXCIgKyBtYWluRW50aXR5LmFjY2VwdGVkQW5zd2VyLnRleHQgKyBcIlxcXCIsXFxuICAgICAgICAgIFwiICsgKG1haW5FbnRpdHkuYWNjZXB0ZWRBbnN3ZXIuZGF0ZUNyZWF0ZWQgPyBcIlxcXCJkYXRlQ3JlYXRlZFxcXCI6IFxcXCJcIiArIG1haW5FbnRpdHkuYWNjZXB0ZWRBbnN3ZXIuZGF0ZUNyZWF0ZWQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgICBcIiArIChtYWluRW50aXR5LmFjY2VwdGVkQW5zd2VyLnVwdm90ZWRDb3VudCA/IFwiXFxcInVwdm90ZUNvdW50XFxcIjogXCIgKyBtYWluRW50aXR5LmFjY2VwdGVkQW5zd2VyLnVwdm90ZWRDb3VudCArIFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgICAgXCIgKyAobWFpbkVudGl0eS5hY2NlcHRlZEFuc3dlci51cmwgPyBcIlxcXCJ1cmxcXFwiOiBcXFwiXCIgKyBtYWluRW50aXR5LmFjY2VwdGVkQW5zd2VyLnVybCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICAgIFwiICsgKG1haW5FbnRpdHkuYWNjZXB0ZWRBbnN3ZXIuYXV0aG9yID8gXCJcXFwiYXV0aG9yXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQZXJzb25cXFwiLFxcbiAgICAgICAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgbWFpbkVudGl0eS5hY2NlcHRlZEFuc3dlci5hdXRob3IubmFtZSArIFwiXFxcIlxcbiAgICAgICAgICB9XCIgOiAnJykgKyBcIlxcbiAgICAgICAgfSxcIiA6ICcnKSArIFwiXFxuICAgICAgICBcIiArIChtYWluRW50aXR5LnN1Z2dlc3RlZEFuc3dlciA/IFwiXFxcInN1Z2dlc3RlZEFuc3dlclxcXCI6IFtcIiArIG1haW5FbnRpdHkuc3VnZ2VzdGVkQW5zd2VyLm1hcChmdW5jdGlvbiAoc3VnZ2VzdGVkKSB7XG4gICAgcmV0dXJuIFwie1xcbiAgICAgICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJBbnN3ZXJcXFwiLFxcbiAgICAgICAgICAgIFxcXCJ0ZXh0XFxcIjogXFxcIlwiICsgc3VnZ2VzdGVkLnRleHQgKyBcIlxcXCIsXFxuICAgICAgICAgICAgXCIgKyAoc3VnZ2VzdGVkLmRhdGVDcmVhdGVkID8gXCJcXFwiZGF0ZUNyZWF0ZWRcXFwiOiBcXFwiXCIgKyBzdWdnZXN0ZWQuZGF0ZUNyZWF0ZWQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgICAgIFwiICsgKHN1Z2dlc3RlZC51cHZvdGVkQ291bnQgPyBcIlxcXCJ1cHZvdGVDb3VudFxcXCI6IFwiICsgc3VnZ2VzdGVkLnVwdm90ZWRDb3VudCArIFwiLFwiIDogXCJcXFwidXB2b3RlQ291bnRcXFwiOiBcIiArIDAgKyBcIixcIikgKyBcIlxcbiAgICAgICAgICAgIFwiICsgKHN1Z2dlc3RlZC51cmwgPyBcIlxcXCJ1cmxcXFwiOiBcXFwiXCIgKyBzdWdnZXN0ZWQudXJsICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgICAgICAgIFwiICsgKHN1Z2dlc3RlZC5hdXRob3IgPyBcIlxcXCJhdXRob3JcXFwiOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlBlcnNvblxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBzdWdnZXN0ZWQuYXV0aG9yLm5hbWUgKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgIH1cIiA6ICcnKSArIFwiXFxuICAgICAgICB9XCI7XG4gIH0pICsgXCJcXG4gICAgXVwiIDogJycpICsgXCJcXG59XCI7XG59O1xuXG52YXIgUUFQYWdlSnNvbkxkID0gZnVuY3Rpb24gUUFQYWdlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIG1haW5FbnRpdHkgPSBfcmVmLm1haW5FbnRpdHksXG4gICAgICBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGU7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUUFQYWdlXFxcIixcXG4gICAgXFxcIm1haW5FbnRpdHlcXFwiOiBcIiArIGJ1aWxkUXVlc3Rpb25zJDEobWFpbkVudGl0eSkgKyBcIlxcbiAgICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1xYVwiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRBZ2dyZWdhdGVSYXRpbmckMiA9IGZ1bmN0aW9uIGJ1aWxkQWdncmVnYXRlUmF0aW5nKGFnZ3JlZ2F0ZVJhdGluZykge1xuICByZXR1cm4gXCJcXG4gIFxcXCJhZ2dyZWdhdGVSYXRpbmdcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkFnZ3JlZ2F0ZVJhdGluZ1xcXCIsXFxuICAgICAgXCIgKyAoYWdncmVnYXRlUmF0aW5nLnJhdGluZ0NvdW50ID8gXCJcXFwicmF0aW5nQ291bnRcXFwiOiBcXFwiXCIgKyBhZ2dyZWdhdGVSYXRpbmcucmF0aW5nQ291bnQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgIFwiICsgKGFnZ3JlZ2F0ZVJhdGluZy5yZXZpZXdDb3VudCA/IFwiXFxcInJldmlld0NvdW50XFxcIjogXFxcIlwiICsgYWdncmVnYXRlUmF0aW5nLnJldmlld0NvdW50ICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICBcIiArIChhZ2dyZWdhdGVSYXRpbmcuYmVzdFJhdGluZyA/IFwiXFxcImJlc3RSYXRpbmdcXFwiOiBcXFwiXCIgKyBhZ2dyZWdhdGVSYXRpbmcuYmVzdFJhdGluZyArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgXFxcInJhdGluZ1ZhbHVlXFxcIjogXFxcIlwiICsgYWdncmVnYXRlUmF0aW5nLnJhdGluZ1ZhbHVlICsgXCJcXFwiXFxuICAgIH0sXFxuXCI7XG59O1xudmFyIGJ1aWxkSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiBidWlsZEluc3RydWN0aW9uKGluc3RydWN0aW9uKSB7XG4gIHJldHVybiBcIntcXG4gIFxcXCJAdHlwZVxcXCI6IFxcXCJIb3dUb1N0ZXBcXFwiLFxcbiAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBpbnN0cnVjdGlvbi5uYW1lICsgXCJcXFwiLFxcbiAgXFxcInRleHRcXFwiOiBcXFwiXCIgKyBpbnN0cnVjdGlvbi50ZXh0ICsgXCJcXFwiLFxcbiAgXFxcInVybFxcXCI6IFxcXCJcIiArIGluc3RydWN0aW9uLnVybCArIFwiXFxcIixcXG4gIFxcXCJpbWFnZVxcXCI6IFxcXCJcIiArIGluc3RydWN0aW9uLmltYWdlICsgXCJcXFwiXFxufVwiO1xufTtcblxudmFyIFJlY2lwZUpzb25MZCA9IGZ1bmN0aW9uIFJlY2lwZUpzb25MZChfcmVmKSB7XG4gIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgZGVzY3JpcHRpb24gPSBfcmVmLmRlc2NyaXB0aW9uLFxuICAgICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICAgIF9yZWYkaW1hZ2VzID0gX3JlZi5pbWFnZXMsXG4gICAgICBpbWFnZXMgPSBfcmVmJGltYWdlcyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJGltYWdlcyxcbiAgICAgIGRhdGVQdWJsaXNoZWQgPSBfcmVmLmRhdGVQdWJsaXNoZWQsXG4gICAgICBwcmVwVGltZSA9IF9yZWYucHJlcFRpbWUsXG4gICAgICBjb29rVGltZSA9IF9yZWYuY29va1RpbWUsXG4gICAgICB0b3RhbFRpbWUgPSBfcmVmLnRvdGFsVGltZSxcbiAgICAgIGtleXdvcmRzID0gX3JlZi5rZXl3b3JkcyxcbiAgICAgIHlpZWxkcyA9IF9yZWYueWllbGRzLFxuICAgICAgY2F0ZWdvcnkgPSBfcmVmLmNhdGVnb3J5LFxuICAgICAgY3Vpc2luZSA9IF9yZWYuY3Vpc2luZSxcbiAgICAgIGNhbG9yaWVzID0gX3JlZi5jYWxvcmllcyxcbiAgICAgIGluZ3JlZGllbnRzID0gX3JlZi5pbmdyZWRpZW50cyxcbiAgICAgIGluc3RydWN0aW9ucyA9IF9yZWYuaW5zdHJ1Y3Rpb25zLFxuICAgICAgYWdncmVnYXRlUmF0aW5nID0gX3JlZi5hZ2dyZWdhdGVSYXRpbmcsXG4gICAgICB2aWRlbyA9IF9yZWYudmlkZW87XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmcvXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlJlY2lwZVxcXCIsXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgbmFtZSArIFwiXFxcIixcXG4gICAgXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXFxuICAgIFxcXCJkYXRlUHVibGlzaGVkXFxcIjogXFxcIlwiICsgZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcXG4gICAgXFxcImF1dGhvclxcXCI6IFwiICsgZm9ybWF0QXV0aG9yTmFtZShhdXRob3JOYW1lKSArIFwiLFxcbiAgICBcXFwiaW1hZ2VcXFwiOiBbXFxuICAgICAgXCIgKyBpbWFnZXMubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgIHJldHVybiBcIlxcXCJcIiArIGltYWdlICsgXCJcXFwiXCI7XG4gIH0pLmpvaW4oJywnKSArIFwiXFxuICAgIF0sXFxuICAgIFwiICsgKHByZXBUaW1lID8gXCJcXFwicHJlcFRpbWVcXFwiOiBcXFwiXCIgKyBwcmVwVGltZSArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAoY29va1RpbWUgPyBcIlxcXCJjb29rVGltZVxcXCI6IFxcXCJcIiArIGNvb2tUaW1lICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArICh0b3RhbFRpbWUgPyBcIlxcXCJ0b3RhbFRpbWVcXFwiOiBcXFwiXCIgKyB0b3RhbFRpbWUgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKGtleXdvcmRzID8gXCJcXFwia2V5d29yZHNcXFwiOiBcXFwiXCIgKyBrZXl3b3JkcyArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAoeWllbGRzID8gXCJcXFwicmVjaXBlWWllbGRcXFwiOiBcXFwiXCIgKyB5aWVsZHMgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKGNhdGVnb3J5ID8gXCJcXFwicmVjaXBlQ2F0ZWdvcnlcXFwiOiBcXFwiXCIgKyBjYXRlZ29yeSArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAoY3Vpc2luZSA/IFwiXFxcInJlY2lwZUN1aXNpbmVcXFwiOiBcXFwiXCIgKyBjdWlzaW5lICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArIChjYWxvcmllcyA/IFwiXFxcIm51dHJpdGlvblxcXCI6IHsgXFxcIkB0eXBlXFxcIjogXFxcIk51dHJpdGlvbkluZm9ybWF0aW9uXFxcIiwgXFxcImNhbG9yaWVzXFxcIjogXFxcIlwiICsgY2Fsb3JpZXMgKyBcIiBjYWxvcmllc1xcXCIgfSxcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAoYWdncmVnYXRlUmF0aW5nID8gYnVpbGRBZ2dyZWdhdGVSYXRpbmckMihhZ2dyZWdhdGVSYXRpbmcpIDogJycpICsgXCJcXG4gICAgXCIgKyAodmlkZW8gPyBcIlxcXCJ2aWRlb1xcXCI6IFwiICsgYnVpbGRWaWRlbyh2aWRlbykgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJyZWNpcGVJbmdyZWRpZW50XFxcIjogW1xcbiAgICAgIFwiICsgaW5ncmVkaWVudHMubWFwKGZ1bmN0aW9uIChpbmdyZWRpZW50KSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgaW5ncmVkaWVudCArIFwiXFxcIlwiO1xuICB9KS5qb2luKCcsJykgKyBcIlxcbiAgICBdLFxcbiAgICBcXFwicmVjaXBlSW5zdHJ1Y3Rpb25zXFxcIjogW1xcbiAgICAgIFwiICsgaW5zdHJ1Y3Rpb25zLm1hcChidWlsZEluc3RydWN0aW9uKS5qb2luKCcsJykgKyBcIlxcbiAgICBdXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1yZWNpcGVcIlxuICB9KSk7XG59O1xuXG52YXIgQ2Fyb3VzZWxKc29uTGQgPSBmdW5jdGlvbiBDYXJvdXNlbEpzb25MZChfcmVmKSB7XG4gIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgZGF0YSA9IF9yZWYuZGF0YTtcbiAgdmFyIGl0ZW1MaXN0RWxlbWVudCA9IFtdO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgaXRlbUxpc3RFbGVtZW50ID0gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBcIntcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJMaXN0SXRlbVxcXCIsXFxuICAgICAgICBcXFwicG9zaXRpb25cXFwiOiBcXFwiXCIgKyAoaW5kZXggKyAxKSArIFwiXFxcIixcXG4gICAgICAgIFxcXCJ1cmxcXFwiOiBcXFwiXCIgKyBpdGVtLnVybCArIFwiXFxcIlxcbiAgICAgIH1cIjtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdjb3Vyc2UnOlxuICAgICAgaXRlbUxpc3RFbGVtZW50ID0gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBcIntcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJMaXN0SXRlbVxcXCIsXFxuICAgICAgICBcXFwicG9zaXRpb25cXFwiOiBcXFwiXCIgKyAoaW5kZXggKyAxKSArIFwiXFxcIixcXG4gICAgICAgIFxcXCJpdGVtXFxcIjoge1xcbiAgICAgICAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkNvdXJzZVxcXCIsXFxuICAgICAgICAgIFxcXCJ1cmxcXFwiOiBcXFwiXCIgKyBpdGVtLnVybCArIFwiXFxcIixcXG4gICAgICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBpdGVtLmNvdXJzZU5hbWUgKyBcIlxcXCIsXFxuICAgICAgICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGl0ZW0uZGVzY3JpcHRpb24gKyBcIlxcXCIsXFxuICAgICAgICAgIFxcXCJwcm92aWRlclxcXCI6IHtcXG4gICAgICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGl0ZW0ucHJvdmlkZXJOYW1lICsgXCJcXFwiXCIgKyAoaXRlbS5wcm92aWRlclVybCA/IFwiLFxcbiAgICAgICAgICAgICAgICBcXFwic2FtZUFzXFxcIjogXFxcIlwiICsgaXRlbS5wcm92aWRlclVybCArIFwiXFxcIlwiIDogJycpICsgXCJcXG4gICAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVwiO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21vdmllJzpcbiAgICAgIGl0ZW1MaXN0RWxlbWVudCA9IGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gXCJ7XFxuICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiTGlzdEl0ZW1cXFwiLFxcbiAgICAgICAgXFxcInBvc2l0aW9uXFxcIjogXFxcIlwiICsgKGluZGV4ICsgMSkgKyBcIlxcXCIsXFxuICAgICAgICBcXFwiaXRlbVxcXCI6IHtcXG4gICAgICAgICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHBzOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJNb3ZpZVxcXCIsXFxuICAgICAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgaXRlbS5uYW1lICsgXCJcXFwiLFxcbiAgICAgICAgICBcXFwidXJsXFxcIjogXFxcIlwiICsgaXRlbS51cmwgKyBcIlxcXCIsXFxuICAgICAgICAgIFxcXCJpbWFnZVxcXCI6IFxcXCJcIiArIGl0ZW0uaW1hZ2UgKyBcIlxcXCIsXFxuICAgICAgICAgIFwiICsgKGl0ZW0uZGF0ZUNyZWF0ZWQgPyBcIlxcXCJkYXRlQ3JlYXRlZFxcXCI6IFxcXCJcIiArIGl0ZW0uZGF0ZUNyZWF0ZWQgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgICAgICAgIFwiICsgKGl0ZW0uZGlyZWN0b3IgPyBcIlxcXCJkaXJlY3RvclxcXCI6IFwiICsgKEFycmF5LmlzQXJyYXkoaXRlbS5kaXJlY3RvcikgPyBcIltcIiArIGl0ZW0uZGlyZWN0b3IubWFwKGZ1bmN0aW9uIChkaXJlY3Rvcikge1xuICAgICAgICAgIHJldHVybiBcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQZXJzb25cXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBkaXJlY3Rvci5uYW1lICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiO1xuICAgICAgICB9KS5qb2luKCcsJykgKyBcIl1cIiA6IFwie1xcbiAgICAgICAgICAgICAgICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUGVyc29uXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBpdGVtLmRpcmVjdG9yLm5hbWUgKyBcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgIH1cIikgOiAnJykgKyBcIlxcbiAgICAgICAgICBcIiArIChpdGVtLnJldmlldyA/IFwiLFxcbiAgICAgICAgICAgICAgXFxcInJldmlld1xcXCI6IHtcXG4gICAgICAgICAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlJldmlld1xcXCIsXFxuICAgICAgICAgICAgICAgIFwiICsgKGl0ZW0ucmV2aWV3LmF1dGhvciA/IGJ1aWxkQXV0aG9yKGl0ZW0ucmV2aWV3LmF1dGhvcikgOiAnJykgKyBcIlxcbiAgICAgICAgICAgICAgICBcIiArIChpdGVtLnJldmlldy5wdWJsaXNoZXIgPyBidWlsZFB1Ymxpc2hlcihpdGVtLnJldmlldy5wdWJsaXNoZXIpIDogJycpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyAoaXRlbS5yZXZpZXcuZGF0ZVB1Ymxpc2hlZCA/IFwiXFxcImRhdGVQdWJsaXNoZWRcXFwiOiBcXFwiXCIgKyBpdGVtLnJldmlldy5kYXRlUHVibGlzaGVkICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyAoaXRlbS5yZXZpZXcucmV2aWV3Qm9keSA/IFwiXFxcInJldmlld0JvZHlcXFwiOiBcXFwiXCIgKyBpdGVtLnJldmlldy5yZXZpZXdCb2R5ICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyAoaXRlbS5yZXZpZXcubmFtZSA/IFwiXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBpdGVtLnJldmlldy5uYW1lICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBidWlsZFJldmlld1JhdGluZyhpdGVtLnJldmlldy5yZXZpZXdSYXRpbmcpICsgXCJcXG4gICAgICAgICAgICB9XCIgOiAnJykgKyBcIlxcbiAgICAgICAgfVxcbiAgICAgIH1cIjtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdyZWNpcGUnOlxuICAgICAgaXRlbUxpc3RFbGVtZW50ID0gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHZhciBfaXRlbSRpbWFnZXM7XG5cbiAgICAgICAgcmV0dXJuIFwie1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkxpc3RJdGVtXFxcIixcXG4gICAgICAgIFxcXCJwb3NpdGlvblxcXCI6IFxcXCJcIiArIChpbmRleCArIDEpICsgXCJcXFwiLFxcbiAgICAgICAgXFxcIml0ZW1cXFwiOiB7XFxuICAgICAgICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmcvXFxcIixcXG4gICAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlJlY2lwZVxcXCIsXFxuICAgICAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgaXRlbS5uYW1lICsgXCJcXFwiLFxcbiAgICAgICAgICBcXFwidXJsXFxcIiA6IFxcXCJcIiArIGl0ZW0udXJsICsgXCJcXFwiLFxcbiAgICAgICAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBpdGVtLmRlc2NyaXB0aW9uICsgXCJcXFwiLFxcbiAgICAgICAgICBcXFwiZGF0ZVB1Ymxpc2hlZFxcXCI6IFxcXCJcIiArIGl0ZW0uZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcXG4gICAgICAgICAgXFxcImF1dGhvclxcXCI6IHtcXG4gICAgICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUGVyc29uXFxcIixcXG4gICAgICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGl0ZW0uYXV0aG9yTmFtZSArIFwiXFxcIlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiaW1hZ2VcXFwiOiBbXFxuICAgICAgICAgICAgXCIgKyAoKF9pdGVtJGltYWdlcyA9IGl0ZW0uaW1hZ2VzKSA9PSBudWxsID8gdm9pZCAwIDogX2l0ZW0kaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgICByZXR1cm4gXCJcXFwiXCIgKyBpbWFnZSArIFwiXFxcIlwiO1xuICAgICAgICB9KS5qb2luKCcsJykpICsgXCJcXG4gICAgICAgICAgXSxcXG4gICAgICAgICAgXCIgKyAoaXRlbS5wcmVwVGltZSA/IFwiXFxcInByZXBUaW1lXFxcIjogXFxcIlwiICsgaXRlbS5wcmVwVGltZSArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICAgICAgXCIgKyAoaXRlbS5jb29rVGltZSA/IFwiXFxcImNvb2tUaW1lXFxcIjogXFxcIlwiICsgaXRlbS5jb29rVGltZSArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICAgICAgXCIgKyAoaXRlbS50b3RhbFRpbWUgPyBcIlxcXCJ0b3RhbFRpbWVcXFwiOiBcXFwiXCIgKyBpdGVtLnRvdGFsVGltZSArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICAgICAgXCIgKyAoaXRlbS5rZXl3b3JkcyA/IFwiXFxcImtleXdvcmRzXFxcIjogXFxcIlwiICsgaXRlbS5rZXl3b3JkcyArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICAgICAgXCIgKyAoaXRlbS55aWVsZHMgPyBcIlxcXCJyZWNpcGVZaWVsZFxcXCI6IFxcXCJcIiArIGl0ZW0ueWllbGRzICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICAgICAgICBcIiArIChpdGVtLmNhdGVnb3J5ID8gXCJcXFwicmVjaXBlQ2F0ZWdvcnlcXFwiOiBcXFwiXCIgKyBpdGVtLmNhdGVnb3J5ICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICAgICAgICBcIiArIChpdGVtLmN1aXNpbmUgPyBcIlxcXCJyZWNpcGVDdWlzaW5lXFxcIjogXFxcIlwiICsgaXRlbS5jdWlzaW5lICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICAgICAgICBcIiArIChpdGVtLmNhbG9yaWVzID8gXCJcXFwibnV0cml0aW9uXFxcIjogeyBcXFwiQHR5cGVcXFwiOiBcXFwiTnV0cml0aW9uSW5mb3JtYXRpb25cXFwiLCBcXFwiY2Fsb3JpZXNcXFwiOiBcXFwiXCIgKyBpdGVtLmNhbG9yaWVzICsgXCIgY2Fsb3JpZXNcXFwiIH0sXCIgOiBcIlwiKSArIFwiXFxuICAgICAgICAgIFwiICsgKGl0ZW0uYWdncmVnYXRlUmF0aW5nID8gYnVpbGRBZ2dyZWdhdGVSYXRpbmckMihpdGVtLmFnZ3JlZ2F0ZVJhdGluZykgOiAnJykgKyBcIlxcbiAgICAgICAgICBcIiArIChpdGVtLnZpZGVvID8gXCJcXFwidmlkZW9cXFwiOiBcIiArIGJ1aWxkVmlkZW8oaXRlbS52aWRlbykgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICAgIFxcXCJyZWNpcGVJbmdyZWRpZW50XFxcIjogW1xcbiAgICAgICAgICAgIFwiICsgaXRlbS5pbmdyZWRpZW50cy5tYXAoZnVuY3Rpb24gKGluZ3JlZGllbnQpIHtcbiAgICAgICAgICByZXR1cm4gXCJcXFwiXCIgKyBpbmdyZWRpZW50ICsgXCJcXFwiXCI7XG4gICAgICAgIH0pLmpvaW4oJywnKSArIFwiXFxuICAgICAgICAgIF0sXFxuICAgICAgICAgIFxcXCJyZWNpcGVJbnN0cnVjdGlvbnNcXFwiOiBbXFxuICAgICAgICAgICAgXCIgKyBpdGVtLmluc3RydWN0aW9ucy5tYXAoYnVpbGRJbnN0cnVjdGlvbikuam9pbignLCcpICsgXCJcXG4gICAgICAgICAgXVxcbiAgICAgIH1cXG4gICAgICB9XCI7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIGpzb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkl0ZW1MaXN0XFxcIixcXG4gICAgXFxcIml0ZW1MaXN0RWxlbWVudFxcXCI6IFtcIiArIGl0ZW1MaXN0RWxlbWVudC5qb2luKCcsJykgKyBcIl1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc29ubGQpLFxuICAgIGtleTogXCJqc29ubGQtY291cnNlXCJcbiAgfSkpO1xufTtcblxudmFyIFNpdGVMaW5rc1NlYXJjaEJveEpzb25MZCA9IGZ1bmN0aW9uIFNpdGVMaW5rc1NlYXJjaEJveEpzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICB1cmwgPSBfcmVmLnVybCxcbiAgICAgIF9yZWYkcG90ZW50aWFsQWN0aW9ucyA9IF9yZWYucG90ZW50aWFsQWN0aW9ucyxcbiAgICAgIHBvdGVudGlhbEFjdGlvbnMgPSBfcmVmJHBvdGVudGlhbEFjdGlvbnMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRwb3RlbnRpYWxBY3Rpb25zO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIldlYlNpdGVcXFwiLFxcbiAgICBcXFwidXJsXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiLFxcbiAgICBcXFwicG90ZW50aWFsQWN0aW9uXFxcIjogW1xcbiAgICAgIFwiICsgcG90ZW50aWFsQWN0aW9ucy5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIHRhcmdldCA9IF9yZWYyLnRhcmdldCxcbiAgICAgICAgcXVlcnlJbnB1dCA9IF9yZWYyLnF1ZXJ5SW5wdXQ7XG4gICAgcmV0dXJuIFwie1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlNlYXJjaEFjdGlvblxcXCIsXFxuICAgICAgICBcXFwidGFyZ2V0XFxcIjogXFxcIlwiICsgdGFyZ2V0ICsgXCI9e1wiICsgcXVlcnlJbnB1dCArIFwifVxcXCIsXFxuICAgICAgICBcXFwicXVlcnktaW5wdXRcXFwiOiBcXFwicmVxdWlyZWQgbmFtZT1cIiArIHF1ZXJ5SW5wdXQgKyBcIlxcXCJcXG4gICAgICB9XCI7XG4gIH0pICsgXCJcXG4gICAgIF1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLXNpdGVMaW5rc1NlYXJjaEJveFwiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRSZXZpZXckMSA9IGZ1bmN0aW9uIGJ1aWxkUmV2aWV3KHJldmlldykge1xuICByZXR1cm4gXCJcXG4gICAgXFxcInJldmlld1xcXCI6IHtcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJSZXZpZXdcXFwiLFxcbiAgICAgICAgXCIgKyAocmV2aWV3LmF1dGhvciA/IGJ1aWxkQXV0aG9yKHJldmlldy5hdXRob3IpIDogJycpICsgXCJcXG4gICAgICAgIFwiICsgKHJldmlldy5wdWJsaXNoZXIgPyBidWlsZFB1Ymxpc2hlcihyZXZpZXcucHVibGlzaGVyKSA6ICcnKSArIFwiXFxuICAgICAgICBcIiArIChyZXZpZXcuZGF0ZVB1Ymxpc2hlZCA/IFwiXFxcImRhdGVQdWJsaXNoZWRcXFwiOiBcXFwiXCIgKyByZXZpZXcuZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICBcIiArIChyZXZpZXcucmV2aWV3Qm9keSA/IFwiXFxcInJldmlld0JvZHlcXFwiOiBcXFwiXCIgKyByZXZpZXcucmV2aWV3Qm9keSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICBcIiArIChyZXZpZXcubmFtZSA/IFwiXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyByZXZpZXcubmFtZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICBcIiArIGJ1aWxkUmV2aWV3UmF0aW5nKHJldmlldy5yZXZpZXdSYXRpbmcpICsgXCJcXG4gICAgICB9LFxcbiAgXCI7XG59O1xuXG52YXIgU29mdHdhcmVBcHBKc29uTGQgPSBmdW5jdGlvbiBTb2Z0d2FyZUFwcEpzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgYXBwbGljYXRpb25DYXRlZ29yeSA9IF9yZWYuYXBwbGljYXRpb25DYXRlZ29yeSxcbiAgICAgIG9wZXJhdGluZ1N5c3RlbSA9IF9yZWYub3BlcmF0aW5nU3lzdGVtLFxuICAgICAgcHJpY2VDdXJyZW5jeSA9IF9yZWYucHJpY2VDdXJyZW5jeSxcbiAgICAgIHByaWNlID0gX3JlZi5wcmljZSxcbiAgICAgIGFnZ3JlZ2F0ZVJhdGluZyA9IF9yZWYuYWdncmVnYXRlUmF0aW5nLFxuICAgICAgcmV2aWV3ID0gX3JlZi5yZXZpZXc7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiU29mdHdhcmVBcHBsaWNhdGlvblxcXCIsXFxuICAgIFxcXCJvZmZlcnNcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9mZmVyXFxcIixcXG4gICAgICBcXFwicHJpY2VDdXJyZW5jeVxcXCI6IFxcXCJcIiArIHByaWNlQ3VycmVuY3kgKyBcIlxcXCIsXFxuICAgICAgXFxcInByaWNlXFxcIjogXFxcIlwiICsgcHJpY2UgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXCIgKyAoYXBwbGljYXRpb25DYXRlZ29yeSA/IFwiXFxcImFwcGxpY2F0aW9uQ2F0ZWdvcnlcXFwiOiBcXFwiXCIgKyBhcHBsaWNhdGlvbkNhdGVnb3J5ICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAob3BlcmF0aW5nU3lzdGVtID8gXCJcXFwib3BlcmF0aW5nU3lzdGVtXFxcIjogXFxcIlwiICsgb3BlcmF0aW5nU3lzdGVtICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAoYWdncmVnYXRlUmF0aW5nID8gYnVpbGRBZ2dyZWdhdGVSYXRpbmckMihhZ2dyZWdhdGVSYXRpbmcpIDogJycpICsgXCJcXG4gICAgXCIgKyAocmV2aWV3ID8gYnVpbGRSZXZpZXckMShyZXZpZXcpIDogJycpICsgXCJcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1zb2Z0d2FyZUFwcFwiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgQ29sbGVjdGlvblBhZ2VKc29uTGQgPSBmdW5jdGlvbiBDb2xsZWN0aW9uUGFnZUpzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgX3JlZiRoYXNQYXJ0ID0gX3JlZi5oYXNQYXJ0LFxuICAgICAgaGFzUGFydCA9IF9yZWYkaGFzUGFydCA9PT0gdm9pZCAwID8gW10gOiBfcmVmJGhhc1BhcnQ7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQ29sbGVjdGlvblBhZ2VcXFwiLFxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIG5hbWUgKyBcIlxcXCIsXFxuICAgIFxcXCJoYXNQYXJ0XFxcIjogW1xcbiAgICAgIFwiICsgaGFzUGFydC5tYXAoZnVuY3Rpb24gKGNyZWF0aXZlV29yaykge1xuICAgIHJldHVybiBcIntcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJDcmVhdGl2ZVdvcmtcXFwiLFxcbiAgICAgICAgXFxcImF1dGhvclxcXCI6IFxcXCJcIiArIGNyZWF0aXZlV29yay5hdXRob3IgKyBcIlxcXCIsXFxuICAgICAgICBcXFwiYWJvdXRcXFwiOiBcXFwiXCIgKyBjcmVhdGl2ZVdvcmsuYWJvdXQgKyBcIlxcXCIsXFxuICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGNyZWF0aXZlV29yay5uYW1lICsgXCJcXFwiLFxcbiAgICAgICAgXCIgKyAoY3JlYXRpdmVXb3JrLmF1ZGllbmNlID8gXCJcXFwiYXVkaWVuY2VcXFwiOiBcXFwiXCIgKyBjcmVhdGl2ZVdvcmsuYXVkaWVuY2UgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAoY3JlYXRpdmVXb3JrLmtleXdvcmRzID8gXCJcXFwia2V5d29yZHNcXFwiOiBcXFwiXCIgKyBjcmVhdGl2ZVdvcmsua2V5d29yZHMgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAoY3JlYXRpdmVXb3JrLnRodW1ibmFpbFVybCA/IFwiXFxcInRodW1ibmFpbFVybFxcXCI6IFxcXCJcIiArIGNyZWF0aXZlV29yay50aHVtYm5haWxVcmwgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXCIgKyAoY3JlYXRpdmVXb3JrLmltYWdlID8gXCJcXFwiaW1hZ2VcXFwiOiBcXFwiXCIgKyBjcmVhdGl2ZVdvcmsuaW1hZ2UgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgICAgXFxcImRhdGVQdWJsaXNoZWRcXFwiOiBcXFwiXCIgKyBjcmVhdGl2ZVdvcmsuZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIlxcbiAgICAgIH1cIjtcbiAgfSkgKyBcIlxcbiAgICAgXVxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtY29sbGVjdGlvbi1wYWdlXCIgKyAoa2V5T3ZlcnJpZGUgPyBcIi1cIiArIGtleU92ZXJyaWRlIDogJycpXG4gIH0pKTtcbn07XG5cbnZhciBidWlsZEJyZWFkY3J1bWIgPSBmdW5jdGlvbiBidWlsZEJyZWFkY3J1bWIoaXRlbUxpc3RFbGVtZW50cykge1xuICByZXR1cm4gXCJ7XFxuICBcXFwiQHR5cGVcXFwiOiBcXFwiQnJlYWRjcnVtYkxpc3RcXFwiLFxcbiAgXFxcIml0ZW1MaXN0RWxlbWVudFxcXCI6IFwiICsgYnVpbGRCcmVhZGNydW1iTGlzdChpdGVtTGlzdEVsZW1lbnRzKSArIFwiXFxufVwiO1xufTtcblxudmFyIGJ1aWxkQnJlYWRjcnVtYkxpc3QgPSBmdW5jdGlvbiBidWlsZEJyZWFkY3J1bWJMaXN0KGl0ZW1MaXN0RWxlbWVudHMpIHtcbiAgcmV0dXJuIFwiW1xcbiAgXCIgKyBpdGVtTGlzdEVsZW1lbnRzLm1hcChmdW5jdGlvbiAoaXRlbUxpc3RFbGVtZW50KSB7XG4gICAgcmV0dXJuIFwie1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiTGlzdEl0ZW1cXFwiLFxcbiAgICBcXFwicG9zaXRpb25cXFwiOiBcIiArIGl0ZW1MaXN0RWxlbWVudC5wb3NpdGlvbiArIFwiLFxcbiAgICBcXFwiaXRlbVxcXCI6IHtcXG4gICAgICBcXFwiQGlkXFxcIjogXFxcIlwiICsgaXRlbUxpc3RFbGVtZW50Lml0ZW0gKyBcIlxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBpdGVtTGlzdEVsZW1lbnQubmFtZSArIFwiXFxcIlxcbiAgICB9XFxuICB9XCI7XG4gIH0pICsgXCJcXG5dXCI7XG59O1xuXG52YXIgUHJvZmlsZVBhZ2VKc29uTGQgPSBmdW5jdGlvbiBQcm9maWxlUGFnZUpzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICBicmVhZGNydW1iID0gX3JlZi5icmVhZGNydW1iLFxuICAgICAgbGFzdFJldmlld2VkID0gX3JlZi5sYXN0UmV2aWV3ZWQ7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUHJvZmlsZVBhZ2VcXFwiLFxcbiAgICBcIiArIChsYXN0UmV2aWV3ZWQgPyBcIlxcXCJsYXN0UmV2aWV3ZWRcXFwiOiBcXFwiXCIgKyBsYXN0UmV2aWV3ZWQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcXFwiYnJlYWRjcnVtYlxcXCI6IFwiICsgKHR5cGVvZiBicmVhZGNydW1iID09PSAnc3RyaW5nJyA/IFwiXFxcIlwiICsgYnJlYWRjcnVtYiArIFwiXFxcIlwiIDogYnVpbGRCcmVhZGNydW1iKGJyZWFkY3J1bWIpKSArIFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1wcm9maWxlLXBhZ2VcIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxuZXhwb3J0IHsgQXJ0aWNsZUpzb25MZCwgQmxvZ0pzb25MZCwgQnJlYWRDcnVtYkpzb25MZCBhcyBCcmVhZGNydW1iSnNvbkxkLCBDYXJvdXNlbEpzb25MZCwgQ29sbGVjdGlvblBhZ2VKc29uTGQsIENvcnBvcmF0ZUNvbnRhY3RKc29uTGQsIENvdXJzZUpzb25MZCwgRGF0YXNldEpzb25MZCwgX2RlZmF1bHQgYXMgRGVmYXVsdFNlbywgRXZlbnRKc29uTGQsIEZBUVBhZ2VKc29uTGQsIEpvYlBvc3RpbmdKc29uTGQsIExvY2FsQnVzaW5lc3NKc29uTGQsIExvZ29Kc29uTGQsIE5ld3NBcnRpY2xlSnNvbkxkLCBfZGVmYXVsdCQxIGFzIE5leHRTZW8sIFByb2R1Y3RKc29uTGQsIFByb2ZpbGVQYWdlSnNvbkxkLCBRQVBhZ2VKc29uTGQgYXMgUUFQYWdlSnNvbmxkLCBSZWNpcGVKc29uTGQsIFNpdGVMaW5rc1NlYXJjaEJveEpzb25MZCwgU29jaWFsUHJvZmlsZUpzb25MZCwgU29mdHdhcmVBcHBKc29uTGQsIFZpZGVvSnNvbkxkIH07XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgYXNzaWduPU9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO21vZHVsZS5leHBvcnRzPWFzc2lnbjttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LWFzc2lnbi5qcy5tYXAiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi9tbnQvZC9SZXBvcy9Qcm9qZWN0cy9Eb3J1Qm90ZWFOZXh0SlMvcGFnZXMvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmltYWdlQ29uZmlnRGVmYXVsdD1leHBvcnRzLlZBTElEX0xPQURFUlM9dm9pZCAwO2NvbnN0IFZBTElEX0xPQURFUlM9WydkZWZhdWx0JywnaW1naXgnLCdjbG91ZGluYXJ5JywnYWthbWFpJ107ZXhwb3J0cy5WQUxJRF9MT0FERVJTPVZBTElEX0xPQURFUlM7Y29uc3QgaW1hZ2VDb25maWdEZWZhdWx0PXtkZXZpY2VTaXplczpbNjQwLDc1MCw4MjgsMTA4MCwxMjAwLDE5MjAsMjA0OCwzODQwXSxpbWFnZVNpemVzOlsxNiwzMiw0OCw2NCw5NiwxMjgsMjU2LDM4NF0scGF0aDonL19uZXh0L2ltYWdlJyxsb2FkZXI6J2RlZmF1bHQnLGRvbWFpbnM6W10sZW5hYmxlQmx1cnJ5UGxhY2Vob2xkZXI6ZmFsc2V9O2V4cG9ydHMuaW1hZ2VDb25maWdEZWZhdWx0PWltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLWNvbmZpZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTcuMC4yJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG5leHBvcnRzLlN0cmljdE1vZGUgPSAweGVhY2M7XG5leHBvcnRzLlByb2ZpbGVyID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG5leHBvcnRzLlN1c3BlbnNlID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgZXhwb3J0cy5TdHJpY3RNb2RlID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBleHBvcnRzLlByb2ZpbGVyID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgZXhwb3J0cy5TdXNwZW5zZSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogMFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYWN0KCkgdG8gdHJhY2sgd2hldGhlciB5b3UncmUgaW5zaWRlIGFuIGFjdCgpIHNjb3BlLlxuICovXG52YXIgSXNTb21lUmVuZGVyZXJBY3RpbmcgPSB7XG4gIGN1cnJlbnQ6IGZhbHNlXG59O1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICBJc1NvbWVSZW5kZXJlckFjdGluZzogSXNTb21lUmVuZGVyZXJBY3RpbmcsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAoISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIGV4cG9ydHMuUHJvZmlsZXI6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdHJpY3RNb2RlOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCIgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSBudWxsICYmIHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlcnJvcignY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG4gICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIHZhciBkZWZhdWx0RXhwb3J0ID0gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG5cbiAgICAgICAge1xuICAgICAgICAgIGlmIChkZWZhdWx0RXhwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gZGVmYXVsdEV4cG9ydDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHJldHVybiBwYXlsb2FkLl9yZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAocmVuZGVyLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IGV4cG9ydHMuUHJvZmlsZXIgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdHJpY3RNb2RlIHx8IHR5cGUgPT09IGV4cG9ydHMuU3VzcGVuc2UgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGUuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3J1bGVzLW9mLWhvb2tzJyA6ICcnKTtcbiAgICB9IC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cblxuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxue1xuXG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuXG4gICAgbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldyAqL1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuICB2YXIgaGFzaCA9IDUzODEsXG4gICAgICBpICAgID0gc3RyLmxlbmd0aDtcblxuICB3aGlsZShpKSB7XG4gICAgaGFzaCA9IChoYXNoICogMzMpIF4gc3RyLmNoYXJDb2RlQXQoLS1pKTtcbiAgfVxuXG4gIC8qIEphdmFTY3JpcHQgZG9lcyBiaXR3aXNlIG9wZXJhdGlvbnMgKGxpa2UgWE9SLCBhYm92ZSkgb24gMzItYml0IHNpZ25lZFxuICAgKiBpbnRlZ2Vycy4gU2luY2Ugd2Ugd2FudCB0aGUgcmVzdWx0cyB0byBiZSBhbHdheXMgcG9zaXRpdmUsIGNvbnZlcnQgdGhlXG4gICAqIHNpZ25lZCBpbnQgdG8gYW4gdW5zaWduZWQgYnkgZG9pbmcgYW4gdW5zaWduZWQgYml0c2hpZnQuICovXG4gIHJldHVybiBoYXNoID4+PiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2g7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qXG5CYXNlZCBvbiBHbGFtb3IncyBzaGVldFxuaHR0cHM6Ly9naXRodWIuY29tL3RocmVlcG9pbnRvbmUvZ2xhbW9yL2Jsb2IvNjY3YjQ4MGQzMWIzNzIxYTkwNTAyMWIyNmUxMjkwY2U5MmNhMjg3OS9zcmMvc2hlZXQuanNcbiovXG52YXIgaXNQcm9kID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbnZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59O1xuXG52YXIgU3R5bGVTaGVldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBfcmVmJG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgIG5hbWUgPSBfcmVmJG5hbWUgPT09IHZvaWQgMCA/ICdzdHlsZXNoZWV0JyA6IF9yZWYkbmFtZSxcbiAgICAgICAgX3JlZiRvcHRpbWl6ZUZvclNwZWVkID0gX3JlZi5vcHRpbWl6ZUZvclNwZWVkLFxuICAgICAgICBvcHRpbWl6ZUZvclNwZWVkID0gX3JlZiRvcHRpbWl6ZUZvclNwZWVkID09PSB2b2lkIDAgPyBpc1Byb2QgOiBfcmVmJG9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIF9yZWYkaXNCcm93c2VyID0gX3JlZi5pc0Jyb3dzZXIsXG4gICAgICAgIGlzQnJvd3NlciA9IF9yZWYkaXNCcm93c2VyID09PSB2b2lkIDAgPyB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA6IF9yZWYkaXNCcm93c2VyO1xuXG4gICAgaW52YXJpYW50KGlzU3RyaW5nKG5hbWUpLCAnYG5hbWVgIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyID0gXCIjXCIgKyBuYW1lICsgXCItZGVsZXRlZC1ydWxlX19fX3t9XCI7XG4gICAgaW52YXJpYW50KHR5cGVvZiBvcHRpbWl6ZUZvclNwZWVkID09PSAnYm9vbGVhbicsICdgb3B0aW1pemVGb3JTcGVlZGAgbXVzdCBiZSBhIGJvb2xlYW4nKTtcbiAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gb3B0aW1pemVGb3JTcGVlZDtcbiAgICB0aGlzLl9pc0Jyb3dzZXIgPSBpc0Jyb3dzZXI7XG4gICAgdGhpcy5fc2VydmVyU2hlZXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fdGFncyA9IFtdO1xuICAgIHRoaXMuX2luamVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcnVsZXNDb3VudCA9IDA7XG4gICAgdmFyIG5vZGUgPSB0aGlzLl9pc0Jyb3dzZXIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cImNzcC1ub25jZVwiXScpO1xuICAgIHRoaXMuX25vbmNlID0gbm9kZSA/IG5vZGUuZ2V0QXR0cmlidXRlKCdjb250ZW50JykgOiBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5zZXRPcHRpbWl6ZUZvclNwZWVkID0gZnVuY3Rpb24gc2V0T3B0aW1pemVGb3JTcGVlZChib29sKSB7XG4gICAgaW52YXJpYW50KHR5cGVvZiBib29sID09PSAnYm9vbGVhbicsICdgc2V0T3B0aW1pemVGb3JTcGVlZGAgYWNjZXB0cyBhIGJvb2xlYW4nKTtcbiAgICBpbnZhcmlhbnQodGhpcy5fcnVsZXNDb3VudCA9PT0gMCwgJ29wdGltaXplRm9yU3BlZWQgY2Fubm90IGJlIHdoZW4gcnVsZXMgaGF2ZSBhbHJlYWR5IGJlZW4gaW5zZXJ0ZWQnKTtcbiAgICB0aGlzLmZsdXNoKCk7XG4gICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IGJvb2w7XG4gICAgdGhpcy5pbmplY3QoKTtcbiAgfTtcblxuICBfcHJvdG8uaXNPcHRpbWl6ZUZvclNwZWVkID0gZnVuY3Rpb24gaXNPcHRpbWl6ZUZvclNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkO1xuICB9O1xuXG4gIF9wcm90by5pbmplY3QgPSBmdW5jdGlvbiBpbmplY3QoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGludmFyaWFudCghdGhpcy5faW5qZWN0ZWQsICdzaGVldCBhbHJlYWR5IGluamVjdGVkJyk7XG4gICAgdGhpcy5faW5qZWN0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuX2lzQnJvd3NlciAmJiB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICB0aGlzLl90YWdzWzBdID0gdGhpcy5tYWtlU3R5bGVUYWcodGhpcy5fbmFtZSk7XG4gICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gJ2luc2VydFJ1bGUnIGluIHRoaXMuZ2V0U2hlZXQoKTtcblxuICAgICAgaWYgKCF0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICAgIGlmICghaXNQcm9kKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdTdHlsZVNoZWV0OiBvcHRpbWl6ZUZvclNwZWVkIG1vZGUgbm90IHN1cHBvcnRlZCBmYWxsaW5nIGJhY2sgdG8gc3RhbmRhcmQgbW9kZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmx1c2goKTtcbiAgICAgICAgdGhpcy5faW5qZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2VydmVyU2hlZXQgPSB7XG4gICAgICBjc3NSdWxlczogW10sXG4gICAgICBpbnNlcnRSdWxlOiBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUsIGluZGV4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgX3RoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzW2luZGV4XSA9IHtcbiAgICAgICAgICAgIGNzc1RleHQ6IHJ1bGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcy5wdXNoKHtcbiAgICAgICAgICAgIGNzc1RleHQ6IHJ1bGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH0sXG4gICAgICBkZWxldGVSdWxlOiBmdW5jdGlvbiBkZWxldGVSdWxlKGluZGV4KSB7XG4gICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlc1tpbmRleF0gPSBudWxsO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmdldFNoZWV0Rm9yVGFnID0gZnVuY3Rpb24gZ2V0U2hlZXRGb3JUYWcodGFnKSB7XG4gICAgaWYgKHRhZy5zaGVldCkge1xuICAgICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldFNoZWV0ID0gZnVuY3Rpb24gZ2V0U2hlZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2hlZXRGb3JUYWcodGhpcy5fdGFnc1t0aGlzLl90YWdzLmxlbmd0aCAtIDFdKTtcbiAgfTtcblxuICBfcHJvdG8uaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUocnVsZSwgaW5kZXgpIHtcbiAgICBpbnZhcmlhbnQoaXNTdHJpbmcocnVsZSksICdgaW5zZXJ0UnVsZWAgYWNjZXB0cyBvbmx5IHN0cmluZ3MnKTtcblxuICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBpbmRleCA9IHRoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2VydmVyU2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50Kys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMuZ2V0U2hlZXQoKTtcblxuICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgaW5kZXggPSBzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICB9IC8vIHRoaXMgd2VpcmRuZXNzIGZvciBwZXJmLCBhbmQgY2hyb21lJ3Mgd2VpcmQgYnVnXG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDAwNzk5Mi9jaHJvbWUtc3VkZGVubHktc3RvcHBlZC1hY2NlcHRpbmctaW5zZXJ0cnVsZVxuXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKCFpc1Byb2QpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJTdHlsZVNoZWV0OiBpbGxlZ2FsIHJ1bGU6IFxcblxcblwiICsgcnVsZSArIFwiXFxuXFxuU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8yMDAwNzk5MiBmb3IgbW9yZSBpbmZvXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaW5zZXJ0aW9uUG9pbnQgPSB0aGlzLl90YWdzW2luZGV4XTtcblxuICAgICAgdGhpcy5fdGFncy5wdXNoKHRoaXMubWFrZVN0eWxlVGFnKHRoaXMuX25hbWUsIHJ1bGUsIGluc2VydGlvblBvaW50KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3J1bGVzQ291bnQrKztcbiAgfTtcblxuICBfcHJvdG8ucmVwbGFjZVJ1bGUgPSBmdW5jdGlvbiByZXBsYWNlUnVsZShpbmRleCwgcnVsZSkge1xuICAgIGlmICh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkIHx8ICF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMuX2lzQnJvd3NlciA/IHRoaXMuZ2V0U2hlZXQoKSA6IHRoaXMuX3NlcnZlclNoZWV0O1xuXG4gICAgICBpZiAoIXJ1bGUudHJpbSgpKSB7XG4gICAgICAgIHJ1bGUgPSB0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNoZWV0LmNzc1J1bGVzW2luZGV4XSkge1xuICAgICAgICAvLyBAVEJEIFNob3VsZCB3ZSB0aHJvdyBhbiBlcnJvcj9cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuXG4gICAgICBzaGVldC5kZWxldGVSdWxlKGluZGV4KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoIWlzUHJvZCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlN0eWxlU2hlZXQ6IGlsbGVnYWwgcnVsZTogXFxuXFxuXCIgKyBydWxlICsgXCJcXG5cXG5TZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzIwMDA3OTkyIGZvciBtb3JlIGluZm9cIik7XG4gICAgICAgIH0gLy8gSW4gb3JkZXIgdG8gcHJlc2VydmUgdGhlIGluZGljZXMgd2UgaW5zZXJ0IGEgZGVsZXRlUnVsZVBsYWNlaG9sZGVyXG5cblxuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHRoaXMuX2RlbGV0ZWRSdWxlUGxhY2Vob2xkZXIsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRhZyA9IHRoaXMuX3RhZ3NbaW5kZXhdO1xuICAgICAgaW52YXJpYW50KHRhZywgXCJvbGQgcnVsZSBhdCBpbmRleCBgXCIgKyBpbmRleCArIFwiYCBub3QgZm91bmRcIik7XG4gICAgICB0YWcudGV4dENvbnRlbnQgPSBydWxlO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfTtcblxuICBfcHJvdG8uZGVsZXRlUnVsZSA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fc2VydmVyU2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgdGhpcy5yZXBsYWNlUnVsZShpbmRleCwgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGFnID0gdGhpcy5fdGFnc1tpbmRleF07XG4gICAgICBpbnZhcmlhbnQodGFnLCBcInJ1bGUgYXQgaW5kZXggYFwiICsgaW5kZXggKyBcImAgbm90IGZvdW5kXCIpO1xuICAgICAgdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgIHRoaXMuX3RhZ3NbaW5kZXhdID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdGhpcy5faW5qZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9ydWxlc0NvdW50ID0gMDtcblxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3RhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIHJldHVybiB0YWcgJiYgdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl90YWdzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNpbXBsZXIgb24gc2VydmVyXG4gICAgICB0aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcyA9IFtdO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY3NzUnVsZXMgPSBmdW5jdGlvbiBjc3NSdWxlcygpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3RhZ3MucmVkdWNlKGZ1bmN0aW9uIChydWxlcywgdGFnKSB7XG4gICAgICBpZiAodGFnKSB7XG4gICAgICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChfdGhpczIuZ2V0U2hlZXRGb3JUYWcodGFnKS5jc3NSdWxlcywgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICByZXR1cm4gcnVsZS5jc3NUZXh0ID09PSBfdGhpczIuX2RlbGV0ZWRSdWxlUGxhY2Vob2xkZXIgPyBudWxsIDogcnVsZTtcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcnVsZXMucHVzaChudWxsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgIH0sIFtdKTtcbiAgfTtcblxuICBfcHJvdG8ubWFrZVN0eWxlVGFnID0gZnVuY3Rpb24gbWFrZVN0eWxlVGFnKG5hbWUsIGNzc1N0cmluZywgcmVsYXRpdmVUb1RhZykge1xuICAgIGlmIChjc3NTdHJpbmcpIHtcbiAgICAgIGludmFyaWFudChpc1N0cmluZyhjc3NTdHJpbmcpLCAnbWFrZVN0eWxlVGFnIGFjY2VwcyBvbmx5IHN0cmluZ3MgYXMgc2Vjb25kIHBhcmFtZXRlcicpO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGlmICh0aGlzLl9ub25jZSkgdGFnLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCB0aGlzLl9ub25jZSk7XG4gICAgdGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsgbmFtZSwgJycpO1xuXG4gICAgaWYgKGNzc1N0cmluZykge1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzc1N0cmluZykpO1xuICAgIH1cblxuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuXG4gICAgaWYgKHJlbGF0aXZlVG9UYWcpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHRhZywgcmVsYXRpdmVUb1RhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQodGFnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFnO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTdHlsZVNoZWV0LCBbe1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFN0eWxlU2hlZXQ7XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHlsZVNoZWV0OiBcIiArIG1lc3NhZ2UgKyBcIi5cIik7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZmx1c2ggPSBmbHVzaDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3N0eWxlc2hlZXRSZWdpc3RyeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3R5bGVzaGVldC1yZWdpc3RyeVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHN0eWxlU2hlZXRSZWdpc3RyeSA9IG5ldyBfc3R5bGVzaGVldFJlZ2lzdHJ5W1wiZGVmYXVsdFwiXSgpO1xuXG52YXIgSlNYU3R5bGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSlNYU3R5bGUsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEpTWFN0eWxlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMucHJldlByb3BzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgSlNYU3R5bGUuZHluYW1pYyA9IGZ1bmN0aW9uIGR5bmFtaWMoaW5mbykge1xuICAgIHJldHVybiBpbmZvLm1hcChmdW5jdGlvbiAodGFnSW5mbykge1xuICAgICAgdmFyIGJhc2VJZCA9IHRhZ0luZm9bMF07XG4gICAgICB2YXIgcHJvcHMgPSB0YWdJbmZvWzFdO1xuICAgICAgcmV0dXJuIHN0eWxlU2hlZXRSZWdpc3RyeS5jb21wdXRlSWQoYmFzZUlkLCBwcm9wcyk7XG4gICAgfSkuam9pbignICcpO1xuICB9IC8vIHByb2JhYmx5IGZhc3RlciB0aGFuIFB1cmVDb21wb25lbnQgKHNoYWxsb3dFcXVhbClcbiAgO1xuXG4gIHZhciBfcHJvdG8gPSBKU1hTdHlsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShvdGhlclByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaWQgIT09IG90aGVyUHJvcHMuaWQgfHwgLy8gV2UgZG8gdGhpcyBjaGVjayBiZWNhdXNlIGBkeW5hbWljYCBpcyBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIHVuZGVmaW5lZC5cbiAgICAvLyBUaGVzZSBhcmUgdGhlIGNvbXB1dGVkIHZhbHVlcyBmb3IgZHluYW1pYyBzdHlsZXMuXG4gICAgU3RyaW5nKHRoaXMucHJvcHMuZHluYW1pYykgIT09IFN0cmluZyhvdGhlclByb3BzLmR5bmFtaWMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHN0eWxlU2hlZXRSZWdpc3RyeS5yZW1vdmUodGhpcy5wcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCB0byBtYWtlIHRoZSBzaWRlIGVmZmVjdCBhc3luYyBzYWZlIGluIHRoZSBcInJlbmRlclwiIHBoYXNlLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vemVpdC9zdHlsZWQtanN4L3B1bGwvNDg0XG4gICAgaWYgKHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKHRoaXMucHJldlByb3BzKSkge1xuICAgICAgLy8gVXBkYXRlc1xuICAgICAgaWYgKHRoaXMucHJldlByb3BzLmlkKSB7XG4gICAgICAgIHN0eWxlU2hlZXRSZWdpc3RyeS5yZW1vdmUodGhpcy5wcmV2UHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZVNoZWV0UmVnaXN0cnkuYWRkKHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5wcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBKU1hTdHlsZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSlNYU3R5bGU7XG5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICB2YXIgY3NzUnVsZXMgPSBzdHlsZVNoZWV0UmVnaXN0cnkuY3NzUnVsZXMoKTtcbiAgc3R5bGVTaGVldFJlZ2lzdHJ5LmZsdXNoKCk7XG4gIHJldHVybiBjc3NSdWxlcztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3N0cmluZ0hhc2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHJpbmctaGFzaFwiKSk7XG5cbnZhciBfc3R5bGVzaGVldCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3N0eWxlc2hlZXRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIHNhbml0aXplID0gZnVuY3Rpb24gc2FuaXRpemUocnVsZSkge1xuICByZXR1cm4gcnVsZS5yZXBsYWNlKC9cXC9zdHlsZS9naSwgJ1xcXFwvc3R5bGUnKTtcbn07XG5cbnZhciBTdHlsZVNoZWV0UmVnaXN0cnkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0UmVnaXN0cnkoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBfcmVmJHN0eWxlU2hlZXQgPSBfcmVmLnN0eWxlU2hlZXQsXG4gICAgICAgIHN0eWxlU2hlZXQgPSBfcmVmJHN0eWxlU2hlZXQgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJHN0eWxlU2hlZXQsXG4gICAgICAgIF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYub3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJG9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIF9yZWYkaXNCcm93c2VyID0gX3JlZi5pc0Jyb3dzZXIsXG4gICAgICAgIGlzQnJvd3NlciA9IF9yZWYkaXNCcm93c2VyID09PSB2b2lkIDAgPyB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA6IF9yZWYkaXNCcm93c2VyO1xuXG4gICAgdGhpcy5fc2hlZXQgPSBzdHlsZVNoZWV0IHx8IG5ldyBfc3R5bGVzaGVldFtcImRlZmF1bHRcIl0oe1xuICAgICAgbmFtZTogJ3N0eWxlZC1qc3gnLFxuICAgICAgb3B0aW1pemVGb3JTcGVlZDogb3B0aW1pemVGb3JTcGVlZFxuICAgIH0pO1xuXG4gICAgdGhpcy5fc2hlZXQuaW5qZWN0KCk7XG5cbiAgICBpZiAoc3R5bGVTaGVldCAmJiB0eXBlb2Ygb3B0aW1pemVGb3JTcGVlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLl9zaGVldC5zZXRPcHRpbWl6ZUZvclNwZWVkKG9wdGltaXplRm9yU3BlZWQpO1xuXG4gICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gdGhpcy5fc2hlZXQuaXNPcHRpbWl6ZUZvclNwZWVkKCk7XG4gICAgfVxuXG4gICAgdGhpcy5faXNCcm93c2VyID0gaXNCcm93c2VyO1xuICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5faW5kaWNlcyA9IHt9O1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50cyA9IHt9O1xuICAgIHRoaXMuY29tcHV0ZUlkID0gdGhpcy5jcmVhdGVDb21wdXRlSWQoKTtcbiAgICB0aGlzLmNvbXB1dGVTZWxlY3RvciA9IHRoaXMuY3JlYXRlQ29tcHV0ZVNlbGVjdG9yKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldFJlZ2lzdHJ5LnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHByb3BzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSBBcnJheS5pc0FycmF5KHByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgdGhpcy5fc2hlZXQuc2V0T3B0aW1pemVGb3JTcGVlZCh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKTtcblxuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IHRoaXMuX3NoZWV0LmlzT3B0aW1pemVGb3JTcGVlZCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIgJiYgIXRoaXMuX2Zyb21TZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB0aGlzLnNlbGVjdEZyb21TZXJ2ZXIoKTtcbiAgICAgIHRoaXMuX2luc3RhbmNlc0NvdW50cyA9IE9iamVjdC5rZXlzKHRoaXMuX2Zyb21TZXJ2ZXIpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB0YWdOYW1lKSB7XG4gICAgICAgIGFjY1t0YWdOYW1lXSA9IDA7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJGdldElkQW5kUnVsZXMgPSB0aGlzLmdldElkQW5kUnVsZXMocHJvcHMpLFxuICAgICAgICBzdHlsZUlkID0gX3RoaXMkZ2V0SWRBbmRSdWxlcy5zdHlsZUlkLFxuICAgICAgICBydWxlcyA9IF90aGlzJGdldElkQW5kUnVsZXMucnVsZXM7IC8vIERlZHVwaW5nOiBqdXN0IGluY3JlYXNlIHRoZSBpbnN0YW5jZXMgY291bnQuXG5cblxuICAgIGlmIChzdHlsZUlkIGluIHRoaXMuX2luc3RhbmNlc0NvdW50cykge1xuICAgICAgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdICs9IDE7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGluZGljZXMgPSBydWxlcy5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fc2hlZXQuaW5zZXJ0UnVsZShydWxlKTtcbiAgICB9KSAvLyBGaWx0ZXIgb3V0IGludmFsaWQgcnVsZXNcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICE9PSAtMTtcbiAgICB9KTtcbiAgICB0aGlzLl9pbmRpY2VzW3N0eWxlSWRdID0gaW5kaWNlcztcbiAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gPSAxO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRnZXRJZEFuZFJ1bGVzMiA9IHRoaXMuZ2V0SWRBbmRSdWxlcyhwcm9wcyksXG4gICAgICAgIHN0eWxlSWQgPSBfdGhpcyRnZXRJZEFuZFJ1bGVzMi5zdHlsZUlkO1xuXG4gICAgaW52YXJpYW50KHN0eWxlSWQgaW4gdGhpcy5faW5zdGFuY2VzQ291bnRzLCBcInN0eWxlSWQ6IGBcIiArIHN0eWxlSWQgKyBcImAgbm90IGZvdW5kXCIpO1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSAtPSAxO1xuXG4gICAgaWYgKHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSA8IDEpIHtcbiAgICAgIHZhciB0YWdGcm9tU2VydmVyID0gdGhpcy5fZnJvbVNlcnZlciAmJiB0aGlzLl9mcm9tU2VydmVyW3N0eWxlSWRdO1xuXG4gICAgICBpZiAodGFnRnJvbVNlcnZlcikge1xuICAgICAgICB0YWdGcm9tU2VydmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnRnJvbVNlcnZlcik7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9mcm9tU2VydmVyW3N0eWxlSWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5kaWNlc1tzdHlsZUlkXS5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuX3NoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGUgdGhpcy5faW5kaWNlc1tzdHlsZUlkXTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShwcm9wcywgbmV4dFByb3BzKSB7XG4gICAgdGhpcy5hZGQobmV4dFByb3BzKTtcbiAgICB0aGlzLnJlbW92ZShwcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdGhpcy5fc2hlZXQuZmx1c2goKTtcblxuICAgIHRoaXMuX3NoZWV0LmluamVjdCgpO1xuXG4gICAgdGhpcy5fZnJvbVNlcnZlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9pbmRpY2VzID0ge307XG4gICAgdGhpcy5faW5zdGFuY2VzQ291bnRzID0ge307XG4gICAgdGhpcy5jb21wdXRlSWQgPSB0aGlzLmNyZWF0ZUNvbXB1dGVJZCgpO1xuICAgIHRoaXMuY29tcHV0ZVNlbGVjdG9yID0gdGhpcy5jcmVhdGVDb21wdXRlU2VsZWN0b3IoKTtcbiAgfTtcblxuICBfcHJvdG8uY3NzUnVsZXMgPSBmdW5jdGlvbiBjc3NSdWxlcygpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBmcm9tU2VydmVyID0gdGhpcy5fZnJvbVNlcnZlciA/IE9iamVjdC5rZXlzKHRoaXMuX2Zyb21TZXJ2ZXIpLm1hcChmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgcmV0dXJuIFtzdHlsZUlkLCBfdGhpczMuX2Zyb21TZXJ2ZXJbc3R5bGVJZF1dO1xuICAgIH0pIDogW107XG5cbiAgICB2YXIgY3NzUnVsZXMgPSB0aGlzLl9zaGVldC5jc3NSdWxlcygpO1xuXG4gICAgcmV0dXJuIGZyb21TZXJ2ZXIuY29uY2F0KE9iamVjdC5rZXlzKHRoaXMuX2luZGljZXMpLm1hcChmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgcmV0dXJuIFtzdHlsZUlkLCBfdGhpczMuX2luZGljZXNbc3R5bGVJZF0ubWFwKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gY3NzUnVsZXNbaW5kZXhdLmNzc1RleHQ7XG4gICAgICB9KS5qb2luKF90aGlzMy5fb3B0aW1pemVGb3JTcGVlZCA/ICcnIDogJ1xcbicpXTtcbiAgICB9KSAvLyBmaWx0ZXIgb3V0IGVtcHR5IHJ1bGVzXG4gICAgLmZpbHRlcihmdW5jdGlvbiAocnVsZSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4ocnVsZVsxXSk7XG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBjcmVhdGVDb21wdXRlSWRcbiAgICpcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgYW5kIG1lbW9pemUgYSBqc3ggaWQgZnJvbSBhIGJhc2VkSWQgYW5kIG9wdGlvbmFsbHkgcHJvcHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmNyZWF0ZUNvbXB1dGVJZCA9IGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVJZCgpIHtcbiAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJhc2VJZCwgcHJvcHMpIHtcbiAgICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIFwianN4LVwiICsgYmFzZUlkO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcHNUb1N0cmluZyA9IFN0cmluZyhwcm9wcyk7XG4gICAgICB2YXIga2V5ID0gYmFzZUlkICsgcHJvcHNUb1N0cmluZzsgLy8gcmV0dXJuIGBqc3gtJHtoYXNoU3RyaW5nKGAke2Jhc2VJZH0tJHtwcm9wc1RvU3RyaW5nfWApfWBcblxuICAgICAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSBcImpzeC1cIiArICgwLCBfc3RyaW5nSGFzaFtcImRlZmF1bHRcIl0pKGJhc2VJZCArIFwiLVwiICsgcHJvcHNUb1N0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWNoZVtrZXldO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIGNyZWF0ZUNvbXB1dGVTZWxlY3RvclxuICAgKlxuICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdG8gY29tcHV0ZSBhbmQgbWVtb2l6ZSBkeW5hbWljIHNlbGVjdG9ycy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY3JlYXRlQ29tcHV0ZVNlbGVjdG9yID0gZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZVNlbGVjdG9yKHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCkge1xuICAgIGlmIChzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHAgPT09IHZvaWQgMCkge1xuICAgICAgc2VsZWN0b1BsYWNlaG9sZGVyUmVnZXhwID0gL19fanN4LXN0eWxlLWR5bmFtaWMtc2VsZWN0b3IvZztcbiAgICB9XG5cbiAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlkLCBjc3MpIHtcbiAgICAgIC8vIFNhbml0aXplIFNTUi1lZCBDU1MuXG4gICAgICAvLyBDbGllbnQgc2lkZSBjb2RlIGRvZXNuJ3QgbmVlZCB0byBiZSBzYW5pdGl6ZWQgc2luY2Ugd2UgdXNlXG4gICAgICAvLyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSAoZGV2KSBhbmQgdGhlIENTU09NIGFwaSBzaGVldC5pbnNlcnRSdWxlIChwcm9kKS5cbiAgICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICAgIGNzcyA9IHNhbml0aXplKGNzcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpZGNzcyA9IGlkICsgY3NzO1xuXG4gICAgICBpZiAoIWNhY2hlW2lkY3NzXSkge1xuICAgICAgICBjYWNoZVtpZGNzc10gPSBjc3MucmVwbGFjZShzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHAsIGlkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhY2hlW2lkY3NzXTtcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXRJZEFuZFJ1bGVzID0gZnVuY3Rpb24gZ2V0SWRBbmRSdWxlcyhwcm9wcykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGNzcyA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBkeW5hbWljID0gcHJvcHMuZHluYW1pYyxcbiAgICAgICAgaWQgPSBwcm9wcy5pZDtcblxuICAgIGlmIChkeW5hbWljKSB7XG4gICAgICB2YXIgc3R5bGVJZCA9IHRoaXMuY29tcHV0ZUlkKGlkLCBkeW5hbWljKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0eWxlSWQ6IHN0eWxlSWQsXG4gICAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KGNzcykgPyBjc3MubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5jb21wdXRlU2VsZWN0b3Ioc3R5bGVJZCwgcnVsZSk7XG4gICAgICAgIH0pIDogW3RoaXMuY29tcHV0ZVNlbGVjdG9yKHN0eWxlSWQsIGNzcyldXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdHlsZUlkOiB0aGlzLmNvbXB1dGVJZChpZCksXG4gICAgICBydWxlczogQXJyYXkuaXNBcnJheShjc3MpID8gY3NzIDogW2Nzc11cbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBzZWxlY3RGcm9tU2VydmVyXG4gICAqXG4gICAqIENvbGxlY3RzIHN0eWxlIHRhZ3MgZnJvbSB0aGUgZG9jdW1lbnQgd2l0aCBpZCBfX2pzeC1YWFhcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2VsZWN0RnJvbVNlcnZlciA9IGZ1bmN0aW9uIHNlbGVjdEZyb21TZXJ2ZXIoKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cIl9fanN4LVwiXScpKTtcbiAgICByZXR1cm4gZWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGVsZW1lbnQpIHtcbiAgICAgIHZhciBpZCA9IGVsZW1lbnQuaWQuc2xpY2UoMik7XG4gICAgICBhY2NbaWRdID0gZWxlbWVudDtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0UmVnaXN0cnk7XG59KCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU3R5bGVTaGVldFJlZ2lzdHJ5O1xuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3R5bGVTaGVldFJlZ2lzdHJ5OiBcIiArIG1lc3NhZ2UgKyBcIi5cIik7XG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zdHlsZScpXG4iXSwic291cmNlUm9vdCI6IiJ9