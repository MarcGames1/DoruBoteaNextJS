self["webpackHotUpdate_N_E"]("pages/index",{

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
          className: "main-cta btn btn1 ",
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9maXJzdFNlY3Rpb24vZmlyc3RTZWN0aW9uLnRzeCJdLCJuYW1lcyI6WyJjdXJyZW50VGV4dCIsImluZGV4IiwidGV4dENvbnRlbnQiLCJGaXJzU2VjdGlvbiIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNoYW5nZVRleHQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUEsSUFBSUEsV0FBVyxHQUFFLEVBQWpCO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxJQUFNQyxXQUFXLEdBQUcsQ0FBQyxjQUFELEVBQWlCLG1CQUFqQixFQUFzQyxjQUF0QyxFQUF1RCxvQkFBdkQsRUFBNkUsaUJBQTdFLEVBQWdHLG1CQUFoRyxDQUFwQjs7QUFJQSxTQUFTQyxXQUFULEdBQXNCO0FBQUE7O0FBQUEsa0JBQ01DLCtDQUFRLENBQUNGLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FEZDtBQUFBLE1BQ1hHLEtBRFc7QUFBQSxNQUNKQyxRQURJOztBQUlsQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFJO0FBQ2xCTixTQUFLLEdBQUdDLFdBQVcsQ0FBQ00sTUFBWixHQUFtQixDQUE1QixHQUFpQ1AsS0FBSyxFQUF0QyxHQUEyQ0EsS0FBSyxHQUFDLENBQWpEO0FBQ0FELGVBQVcsR0FBSUUsV0FBVyxDQUFDRCxLQUFELENBQTFCO0FBQ0FLLFlBQVEsQ0FBQ04sV0FBRCxDQUFSO0FBQ0gsR0FKRDs7QUFLQVMsWUFBVSxDQUFDRixVQUFELEVBQWEsSUFBYixDQUFWO0FBRUEsc0JBQ0k7QUFBUyxhQUFTLEVBQUMsZUFBbkI7QUFBbUMsTUFBRSxFQUFDLEtBQXRDO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDZCQUNJO0FBQUEsZ0NBR0k7QUFBSSxtQkFBUyxFQUFDLGdCQUFkO0FBQUEsNkNBQ1c7QUFBTSxxQkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURYLGVBRUk7QUFBSSxxQkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQU0scUJBQVMsRUFBQyw0QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFJSTtBQUFNLHFCQUFTLEVBQUMsc0JBQWhCO0FBQUEsc0JBQXdDRjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQVVJO0FBQUcsbUJBQVMsRUFBQyxvQkFBYjtBQUFrQyxjQUFJLEVBQUMsV0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CSDs7R0EvQlFGLFc7O0tBQUFBLFc7QUFpQ1QsK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZThlMzY3YmZhNzMyYWY0NzFmODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5sZXQgY3VycmVudFRleHQgPVwiXCJcclxubGV0IGluZGV4ID0gMDtcclxuY29uc3QgdGV4dENvbnRlbnQgPSBbXCIgZHJlcHQgcGVuYWxcIiwgXCIgZHJlcHR1bCBmYW1pbGllaVwiLCBcIiBkcmVwdCBjaXZpbFwiLCAgXCIgbWFscHJheGlzIG1lZGljYWxcIiwgXCIgZHJlcHR1bCBtdW5jaWlcIiwgXCIgZXhlY3V0YXJpIHNpbGl0ZVwiIF07XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEZpcnNTZWN0aW9uKCl7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXT11c2VTdGF0ZSh0ZXh0Q29udGVudFswXSlcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBjaGFuZ2VUZXh0ID0gKCk9PntcclxuICAgICAgICAoaW5kZXggPCB0ZXh0Q29udGVudC5sZW5ndGgtMSkgPyBpbmRleCsrIDogaW5kZXg9MDtcclxuICAgICAgICBjdXJyZW50VGV4dCA9ICB0ZXh0Q29udGVudFtpbmRleF1cclxuICAgICAgICBzZXRTdGF0ZShjdXJyZW50VGV4dClcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoY2hhbmdlVGV4dCwgMzAwMCk7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmlyc3Qtc2VjdGlvblwiIGlkPVwidG9wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItNCBoZXJvLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICBBdm9jYXQgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPkRvcnUgQm90ZWE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIGNsYXNzTmFtZT1cIm15LTQgZC1ibG9jayBsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteS00IGQtYmxvY2sgc3BlY2lhbGl6YXJpIFwiPlByb2Zlc2lvbmFsaXNtIHNpIEluY3JlZGVyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrIG10LTQgZGluYW1pY1wiPntzdGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1haW4tY3RhIGJ0biBidG4xIFwiIGhyZWY9XCIjc2VydmljaWlcIj52ZWRldGkgbWFpIG11bHRlPC9hPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9zZWN0aW9uPiAgXHJcbiAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc1NlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9