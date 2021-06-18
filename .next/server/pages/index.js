(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/ConsultantaOnline/Form/form.jsx":
/*!****************************************************!*\
  !*** ./components/ConsultantaOnline/Form/form.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/ConsultantaOnline/Form/form.jsx";



const Form = () => {
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: comments,
    1: setComments
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: phone,
    1: setPhone
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: gdpr,
    1: setGdpr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: submitted,
    1: setSubmitted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handleSubmit = e => {
    console.log("sending!");
    let data = {
      name,
      email,
      comments,
      phone,
      gdpr,
      submitted
    };
    console.log("HANDLE SUBMIT MAI JOS E DATA");
    console.log(data);

    if (data.name && data.email && data.comments && data.phone && data.gdpr && data.submitted == false) {
      console.log("AICI SUNT DATELE");
      console.log(data);
      const headers = {
        'Accept': 'application/json, text/plain, */*',
        'content-type': 'application/json'
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/contact', data, headers).then(response => {
        alert("Va multumim, va vom contacta curand");
        resetState();
        console.log(response);
      }, error => {
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

  const resetState = () => {
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          required: true,
          type: "text",
          id: "nume",
          name: "nume",
          placeholder: "Nume si Prenume",
          onChange: e => {
            setSubmitted(false), setName(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "email",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          required: true,
          type: "email",
          name: "email",
          id: "email",
          placeholder: "Adresa de email",
          onChange: e => {
            setSubmitted(false), setEmail(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "phone",
          children: "Telefon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          required: true,
          type: "tel",
          name: "phone",
          id: "phone",
          pattern: "[0-9]{10}",
          placeholder: "Telefon",
          onChange: e => {
            setPhone(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          required: true,
          name: "comments",
          id: "comments",
          rows: "10",
          placeholder: "Descrieti Cauza",
          onChange: e => {
            setComments(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
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
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            required: true,
            type: "checkbox",
            name: "gdpr",
            onChange: e => {
              setGdpr(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "btn from-right",
          type: "submit",
          onClick: e => {
            handleSubmit(e);
            document.querySelector("form").reset();
          },
          children: " Trimiteti!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/ConsultantaOnline/consultantaOnline.tsx":
/*!************************************************************!*\
  !*** ./components/ConsultantaOnline/consultantaOnline.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GoogleMaps_GoogleMaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GoogleMaps/GoogleMaps */ "./components/GoogleMaps/GoogleMaps.tsx");
/* harmony import */ var _Form_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form/form */ "./components/ConsultantaOnline/Form/form.jsx");


var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/ConsultantaOnline/consultantaOnline.tsx";




const ConsultantaOnline = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1600609607",
      children: "#consultanta-online.jsx-1600609607{max-width:90vw;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}#consultanta-online.jsx-1600609607 .background.jsx-1600609607{height:auto;}#consultanta-online.jsx-1600609607 .form-container.jsx-1600609607,#consultanta-online.jsx-1600609607 .description.jsx-1600609607{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;justify-self:center;padding-top:2em;}#consultanta-online.jsx-1600609607 .form-container.jsx-1600609607{grid-column:1 / 2;grid-row:1 / 2;}.form-container.jsx-1600609607{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:wheat;}.form-container.jsx-1600609607 h1.jsx-1600609607{text-align:center;justify-self:center;vertical-align:middle;font-family:var(--decorativeFont);color:var(--primary-color);}.form-container.jsx-1600609607 form.jsx-1600609607{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border:white solid 2px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin-bottom:1em;width:100%;height:auto;text-align:center;background-color:wheat;padding-top:2em;}input.jsx-1600609607::-webkit-input-placeholder,textarea.jsx-1600609607::-webkit-input-placeholder{color:#808080;-webkit-transition:all .5s;transition:all .5s;}input.jsx-1600609607:focus.jsx-1600609607::-webkit-input-placeholder,textarea.jsx-1600609607:focus.jsx-1600609607::-webkit-input-placeholder{-webkit-transform:scale(0.00001);-ms-transform:scale(0.00001);transform:scale(0.00001);}form.jsx-1600609607 input.jsx-1600609607,form.jsx-1600609607 textarea.jsx-1600609607{border-bottom:var(--secondary-font-color) 2px solid;}.form-container.jsx-1600609607 input.jsx-1600609607:focus~label.jsx-1600609607,.form-container.jsx-1600609607 textarea.jsx-1600609607:focus~label.jsx-1600609607,.form-container.jsx-1600609607 input.jsx-1600609607:valid~label.jsx-1600609607,.form-container.jsx-1600609607 textarea.jsx-1600609607:valid~label.jsx-1600609607{font-size:1rem;font-weight:bold;}label.jsx-1600609607{display:none;}#gdpr-label.jsx-1600609607{display:inline-block;}textarea.jsx-1600609607,input.jsx-1600609607,label.jsx-1600609607{width:100%;font-size:1.5rem;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;border:var(--inv) solid 2px;font-family:var(--decorativeFont);}textarea.jsx-1600609607{text-align:justify;height:auto;background-color:transparent;}fieldset.jsx-1600609607{display:grid;grid-template-columns:8fr 1fr;}fieldset.jsx-1600609607 label.jsx-1600609607 a.jsx-1600609607{font-size:1rem;color:black;-webkit-transition:color .5s;transition:color .5s;}fieldset.jsx-1600609607 label.jsx-1600609607 a.jsx-1600609607:hover{-webkit-text-decoration:underline solid var(--secondary-font-color);text-decoration:underline solid var(--secondary-font-color);color:blue;}.form-container.jsx-1600609607 form.jsx-1600609607 input.jsx-1600609607,.form-container.jsx-1600609607 button.jsx-1600609607{background-color:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9SZXBvcy9Qcm9qZWN0cy9Eb3J1Qm90ZWFOZXh0SlMvY29tcG9uZW50cy9Db25zdWx0YW50YU9ubGluZS9jb25zdWx0YW50YU9ubGluZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWMsQUFLb0IsQUFVSCxBQUdNLEFBTUQsQUFPSixBQVNLLEFBU0EsQUFnQkosQUFLVyxBQUcyQixBQVNyQyxBQUlGLEFBSVEsQUFJVixBQVNRLEFBT04sQUFJRSxBQVE2QyxBQU0vQixXQWhDWixDQWhGckIsQ0F1RUEsQUF3QmtDLENBN0NYLENBNUROLEFBNkVJLEFBZ0NMLEdBMUZFLEFBZ0JNLENBK0RSLEVBYmhCLE1BeUJ3QixDQTdHVyxBQTBGYixDQWdDdEIsRUF4QmdDLENBckJoQyxDQXpEQSxLQWUwQixLQXNFMUIsU0F0Q0EsTUFsRStCLEVBbUNNLEFBd0JyQyxBQXdDQSxXQXhGd0IsQUErQkcsR0FqQkosR0FzRnZCLFFBOUd1QixFQTZETyxJQWpEVixHQXVCVyxBQVFkLEtBOENLLFFBNUV0QixVQTZFZ0MsSUFyRGhDLE9BNkVjLFdBQ2QsSUExRm1CLEVBa0VtQix1QkEvQ1osVUEzQ08sQ0EyRmpDLHFCQWxFMkIsOENBbUJMLHFEQWpCSyxFQXpCM0IsZ0JBMkNzQixLQWpCdEIsYUFtQmUsV0FDQyxZQUVNLGtCQUNJLHVCQUNOLGdCQUNwQiIsImZpbGUiOiIvbW50L2QvUmVwb3MvUHJvamVjdHMvRG9ydUJvdGVhTmV4dEpTL2NvbXBvbmVudHMvQ29uc3VsdGFudGFPbmxpbmUvY29uc3VsdGFudGFPbmxpbmUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdvb2dsZU1hcHMgZnJvbSAnLi4vR29vZ2xlTWFwcy9Hb29nbGVNYXBzJ1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0vZm9ybSdcclxuXHJcbmNvbnN0IENvbnN1bHRhbnRhT25saW5lID0gKCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gIDxzdHlsZSBqc3g+e2AgICAgXHJcblxyXG5cclxuI2NvbnN1bHRhbnRhLW9ubGluZXtcclxuICAgIG1heC13aWR0aDogOTB2dztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICBcclxufVxyXG5cclxuI2NvbnN1bHRhbnRhLW9ubGluZSAuYmFja2dyb3VuZHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4jY29uc3VsdGFudGEtb25saW5lIC5mb3JtLWNvbnRhaW5lciwgI2NvbnN1bHRhbnRhLW9ubGluZSAuZGVzY3JpcHRpb257XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxufVxyXG4jY29uc3VsdGFudGEtb25saW5lIC5mb3JtLWNvbnRhaW5lcntcclxuICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gICBncmlkLXJvdzogMSAvIDI7XHJcbiBcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVye1xyXG4gICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcclxufVxyXG4uZm9ybS1jb250YWluZXIgaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LWZhbWlseTp2YXIoLS1kZWNvcmF0aXZlRm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBcclxufVxyXG4uZm9ybS1jb250YWluZXIgZm9ybSB7XHJcbiAgICBcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogd2hpdGUgc29saWQgMnB4O1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGVhdDtcclxuICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbn1cclxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgLCB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5pbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIFxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjAwMDAxKVxyXG59XHJcblxyXG5mb3JtIGlucHV0LCBmb3JtIHRleHRhcmVhe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpIDJweCBzb2xpZDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpbnB1dDpmb2N1cyB+IGxhYmVsLFxyXG4uZm9ybS1jb250YWluZXIgdGV4dGFyZWE6Zm9jdXMgfiBsYWJlbCxcclxuLmZvcm0tY29udGFpbmVyIGlucHV0OnZhbGlkIH4gbGFiZWwsXHJcbi5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYTp2YWxpZCB+IGxhYmVsIHtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxubGFiZWx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jZ2Rwci1sYWJlbHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxudGV4dGFyZWEsIGlucHV0LCBsYWJlbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogdmFyKC0taW52KSBzb2xpZCAycHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVjb3JhdGl2ZUZvbnQpO1xyXG59XHJcbnRleHRhcmVhe1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDFmcjtcclxufVxyXG5maWVsZHNldCBsYWJlbCBhe1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICB0cmFuc2l0aW9uOiBjb2xvciAuNXM7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmZpZWxkc2V0IGxhYmVsIGE6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIHNvbGlkIHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKSA7XHJcbiAgICBjb2xvcjpibHVlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dCwgLmZvcm0tY29udGFpbmVyIGJ1dHRvbntcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5gfTwvc3R5bGU+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJjb25zdWx0YW50YS1vbmxpbmVcIj5cclxuXHJcblxyXG48bWFpbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiBjb250ZW50XCI+XHJcbiAgICA8bWFpbj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkXCI+QVZPQ0FUIERPUlUgQk9URUE8L2gyPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRcIj5DT05TVUxUQU5UQSBKVVJJRElDQSBPTkxJTkUhPC9oMz5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkXCI+QVBST0FQRSBERSBEVU1ORUFWT0FTVFJBIE9SSVVOREUgQVRJIEZJITwvaDQ+XHJcbiAgICA8L21haW4+XHJcblxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwicGFyYWdyYXBoc1wiPlxyXG5cclxuICAgICAgICA8cD5DYWJpbmV0IEF2b2NhdCBEb3J1IEJvdGVhIHZpbmUgw65uIMOubnTDom1waW5hcmVhIG5ldm9pbG9yIGNsaWVuxaNpbG9yLCBwcmluIGFzaWd1cmFyZWEgZGUgc2VydmljaWkgZGVcclxuICAgICAgICAgICAgY29uc3VsdGFuxaPEgyBqdXJpZGljxIMgb25saW5lLjwvcD5cclxuXHJcbiAgICAgICAgPHA+IEFjZXN0IHRpcCBkZSBzZXJ2aWNpaSBkZSBjb25zdWx0YW7Fo8SDIGFzaWd1csSDIG8gcmV6b2x2YXJlIGZhY2lsxIMgxZ9pIHJhcGlkxIMgcGVudHJ1IGFudW1pdGUgcHJvYmxlbWVcclxuICAgICAgICAgICAganVyaWRpY2VcclxuICAgICAgICAgICAgxZ9pIG9mZXLEgyBvIHNlcmllIGRlIGF2YW50YWplIGN1bSBhciBmaSBldml0YXJlYSBkZXBsYXPEg3JpaSBjdSByZXp1bHRhdHVsIGZpcmVzYyBhbCBlY29ub21pZWkgZGVcclxuICAgICAgICAgICAgdGltcCxcclxuICAgICAgICAgICAgY29zdHVyaSBtYWkgc2PEg3p1dGUgxZ9pIG51IMOubiB1bHRpbXVsIHLDom5kLCBhdsOibmQgw65uIHZlZGVyZSBjb250ZXh0dWwgc29jaWFsLCBwxINzdHJhcmVhIHVuZWlcclxuICAgICAgICAgICAgZGlzdGFuxaPEg3JpXHJcbiAgICAgICAgICAgIHNvY2lhbGUuPC9wPlxyXG5cclxuICAgICAgICA8cD4gU29jaWV0YXRlYSDDrm4gY2FyZSB0csSDaW0gc2UgYWZsxIMgw65udHItbyBjb250aW51xIMgZXZvbHXFo2llLCBpYXIgw65uIHByZXplbnQgYcWfYSBudW1pdHVsIHByb2NlcyBkZVxyXG4gICAgICAgICAgICBkaWdpdGFsaXphcmUsIGN1cHJpbmRlIHRvdCBtYWkgbXVsdGUgc2VjdG9hcmUgYWxlIHZpZcWjaWkgZWNvbm9taWNvIHNvY2lhbGUgxZ9pIGFzaWd1csSDIG8gcGFsZXTEgyBkaW5cclxuICAgICAgICAgICAgY2Ugw65uIGNlXHJcbiAgICAgICAgICAgIG1haSBsYXJnxIMgZGUgc2VydmljaWkuPC9wPlxyXG5cclxuICAgIDwvbWFpbj5cclxuPC9tYWluPlxyXG5cclxuPEZvcm0vPlxyXG48R29vZ2xlTWFwcyAvPlxyXG48L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnN1bHRhbnRhT25saW5lIl19 */\n/*@ sourceURL=/mnt/d/Repos/Projects/DoruBoteaNextJS/components/ConsultantaOnline/consultantaOnline.tsx */"
    }, void 0, false, void 0, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
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
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "jsx-1600609607" + " " + "section-head",
            children: "CONSULTANTA JURIDICA ONLINE!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 9
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            className: "jsx-1600609607" + " " + "section-head",
            children: "APROAPE DE DUMNEAVOASTRA ORIUNDE ATI FI!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 9
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 5
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
          className: "jsx-1600609607" + " " + "paragraphs",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "jsx-1600609607",
            children: "Cabinet Avocat Doru Botea vine \xEEn \xEEnt\xE2mpinarea nevoilor clien\u0163ilor, prin asigurarea de servicii de consultan\u0163\u0103 juridic\u0103 online."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 9
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "jsx-1600609607",
            children: " Acest tip de servicii de consultan\u0163\u0103 asigur\u0103 o rezolvare facil\u0103 \u015Fi rapid\u0103 pentru anumite probleme juridice \u015Fi ofer\u0103 o serie de avantaje cum ar fi evitarea deplas\u0103rii cu rezultatul firesc al economiei de timp, costuri mai sc\u0103zute \u015Fi nu \xEEn ultimul r\xE2nd, av\xE2nd \xEEn vedere contextul social, p\u0103strarea unei distan\u0163\u0103ri sociale."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 9
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "jsx-1600609607",
            children: " Societatea \xEEn care tr\u0103im se afl\u0103 \xEEntr-o continu\u0103 evolu\u0163ie, iar \xEEn prezent a\u015Fa numitul proces de digitalizare, cuprinde tot mai multe sectoare ale vie\u0163ii economico sociale \u015Fi asigur\u0103 o palet\u0103 din ce \xEEn ce mai larg\u0103 de servicii."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 9
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 5
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_form__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoogleMaps_GoogleMaps__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 1
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (ConsultantaOnline);

/***/ }),

/***/ "./components/GoogleMaps/GoogleMaps.tsx":
/*!**********************************************!*\
  !*** ./components/GoogleMaps/GoogleMaps.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/GoogleMaps/GoogleMaps.tsx";


const GoogleMaps = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3264573804",
      children: ".mapouter.jsx-3264573804{grid-column:1 / 4;grid-row:2 / 3;position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas.jsx-3264573804{overflow:hidden;background:none !important;width:100%;height:400px;}.gmap_iframe.jsx-3264573804{height:400px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9SZXBvcy9Qcm9qZWN0cy9Eb3J1Qm90ZWFOZXh0SlMvY29tcG9uZW50cy9Hb29nbGVNYXBzL0dvb2dsZU1hcHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1TLEFBSXFCLEFBU0YsQUFPUSxnQkFORyxFQVRaLE1BZ0JqQixTQWZvQixVQVNQLFFBUk0sR0FTSixhQUNmLENBVGEsV0FDRSxhQUNmIiwiZmlsZSI6Ii9tbnQvZC9SZXBvcy9Qcm9qZWN0cy9Eb3J1Qm90ZWFOZXh0SlMvY29tcG9uZW50cy9Hb29nbGVNYXBzL0dvb2dsZU1hcHMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCBHb29nbGVNYXBzID0gKCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgPD5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgIFxyXG4ubWFwb3V0ZXIge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcclxuICBncmlkLXJvdzogMiAvIDM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5nbWFwX2NhbnZhcyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLmdtYXBfaWZyYW1lIHtcclxuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXBvdXRlclwiPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJnbWFwX2NhbnZhc1wiPjxpZnJhbWUgY2xhc3NOYW1lPVwiZ21hcF9pZnJhbWVcIiB3aWR0aD1cIjEwMCVcIiBmcmFtZUJvcmRlcj1cIjBcIiBzY3JvbGxpbmc9XCJub1wiXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcz93aWR0aD02MDAmYW1wO2hlaWdodD00MDAmYW1wO2hsPWVuJmFtcDtxPVN0cmFkYSBJdWxpdSBNYW5pdSA0NyBCcmHImW92IDUwMDA5MSZhbXA7dD0mYW1wO3o9MTQmYW1wO2llPVVURjgmYW1wO2l3bG9jPUImYW1wO291dHB1dD1lbWJlZFwiPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvb2dsZU1hcHMiXX0= */\n/*@ sourceURL=/mnt/d/Repos/Projects/DoruBoteaNextJS/components/GoogleMaps/GoogleMaps.tsx */"
    }, void 0, false, void 0, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "jsx-3264573804" + " " + "mapouter",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: "jsx-3264573804" + " " + "gmap_canvas",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("iframe", {
          width: "100%",
          frameBorder: "0",
          scrolling: "no",
          src: "https://maps.google.com/maps?width=600&height=400&hl=en&q=Strada Iuliu Maniu 47 Bra\u0219ov 500091&t=&z=14&ie=UTF8&iwloc=B&output=embed",
          className: "jsx-3264573804" + " " + "gmap_iframe"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 43
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (GoogleMaps);

/***/ }),

/***/ "./components/firstSection/firstSection.tsx":
/*!**************************************************!*\
  !*** ./components/firstSection/firstSection.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/firstSection/firstSection.tsx";

let currentText = "";
let index = 0;
const textContent = [" drept penal", " dreptul familiei", " drept civil", " malpraxis medical", " dreptul muncii", " executari silite"];

function FirsSection() {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(textContent[0]);

  const changeText = () => {
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
        className: "appearFirstL",
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

/* harmony default export */ __webpack_exports__["default"] = (FirsSection);

/***/ }),

/***/ "./components/servicii/date/servicii.js":
/*!**********************************************!*\
  !*** ./components/servicii/date/servicii.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const servicii = [{
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

/***/ }),

/***/ "./components/servicii/servicii-container.tsx":
/*!****************************************************!*\
  !*** ./components/servicii/servicii-container.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _servicii_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicii-wrapper */ "./components/servicii/servicii-wrapper.tsx");


var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/servicii/servicii-container.tsx";



const ServiciiContainer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "servicii-detalii",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: "section-img"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: "section-title"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Servicii"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_servicii_wrapper__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 1
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 1
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 1
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (ServiciiContainer);

/***/ }),

/***/ "./components/servicii/servicii-wrapper.tsx":
/*!**************************************************!*\
  !*** ./components/servicii/servicii-wrapper.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _date_servicii_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date/servicii.js */ "./components/servicii/date/servicii.js");
/* harmony import */ var _serviciiCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviciiCard */ "./components/servicii/serviciiCard.tsx");


var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/servicii/servicii-wrapper.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function ServiciiWrapper() {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_date_servicii_js__WEBPACK_IMPORTED_MODULE_2__.default);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row d-flex justify-content-around",
        children: state.map((_ref) => {
          let {
            id
          } = _ref,
              otherSectionProps = _objectWithoutProperties(_ref, ["id"]);

          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_serviciiCard__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, otherSectionProps), id, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, this);
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

/* harmony default export */ __webpack_exports__["default"] = (ServiciiWrapper);

/***/ }),

/***/ "./components/servicii/serviciiCard.tsx":
/*!**********************************************!*\
  !*** ./components/servicii/serviciiCard.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ServiciiCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/servicii/serviciiCard.tsx";

function ServiciiCard({
  icon,
  name,
  description,
  route
}) {
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

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/firstSection/firstSection */ "./components/firstSection/firstSection.tsx");
/* harmony import */ var _components_ConsultantaOnline_consultantaOnline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ConsultantaOnline/consultantaOnline */ "./components/ConsultantaOnline/consultantaOnline.tsx");
/* harmony import */ var _components_servicii_servicii_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/servicii/servicii-container */ "./components/servicii/servicii-container.tsx");


var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/pages/index.tsx";





function Home() {
  const title = "Avocat Brasov Doru";
  const description = "";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
      title: title,
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_servicii_servicii_container__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConsultantaOnline_consultantaOnline__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1630906222",
      children: "body{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}header,section,.first-section,.second-section,#consultanta-online{margin:auto;}.content{position:relative;z-index:0;}body,.first-section{background-blend-mode:darken;background-color:var(--transparent);background-image:url(\"/assets/images/background1.jpg\");background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position:center;}.first-section .content:first-child{text-align:center;}.first-section .content{height:100vh;font-family:var(--decorativeFont);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:var(--site-width);-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;justify-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-transform:uppercase;font-size:1.8rem;line-height:1.5;}.dinamic{position:relative;display:block;color:var(--secondary-font-color);}.name{color:var(--secondary-font-color);}.specializari{border-bottom:solid 1px var(--secondary-font-color);}.hero-text{padding-bottom:2rem;}.main-cta{-webkit-letter-spacing:1.1rem;-moz-letter-spacing:1.1rem;-ms-letter-spacing:1.1rem;letter-spacing:1.1rem;}.second-section{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;background-image:url(/assets/images/section2\\ background.jpg);background-position:center;background-size:cover;background-repeat:no-repeat;}.cards{width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;gap:5px;font-family:var(--decorativeFont);}#servicii{padding-bottom:2em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;text-align:center;text-shadow:10px 10px 5px var(--transparent);margin-top:10%;z-index:0;background-color:var(--primary-color-transparent);background-attachment:fixed;overflow-x:hidden;}.servicii-btn{background-color:var(--primary-color-transparent);color:var(--primary-font-color);}.servicii-btn,.servicii-btn:hover{max-width:100%;min-width:250px;}.servicii-btn span{font-size:0.7rem;font-weight:bold;}.servicii-detalii{margin:auto;margin-right:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-self:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;padding-bottom:2em;}.first-section,.servicii-detalii{background-color:var(--transparent);}.section-img{height:40vh;width:100%;text-transform:uppercase;font-size:2rem;background-position:center;background-size:cover;background-repeat:no-repeat;background-image:url(/assets/images/ServiciiBG.jpg);position:relative;}.section-title{margin-top:1.5rem;font-size:1.5rem;text-transform:uppercase;}.section-head,.section-title{overflow-wrap:normal;display:block;text-align:center;color:var( --secondary-font-color);}.mapouter{grid-column:1 / 4;grid-row:2 / 3;}.transparent-card{background-color:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9SZXBvcy9Qcm9qZWN0cy9Eb3J1Qm90ZWFOZXh0SlMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCbUIsQUFXa0IsQUFLRCxBQUtNLEFBUVcsQUFXWCxBQUtMLEFBZUssQUFPckIsQUFFdUQsQUFLaEMsQUFHRSxBQVdULEFBY0YsQUFrQlEsQUFxQitCLEFBTW5DLEFBS0UsQUFRTCxBQVl3QixBQUl4QixBQWNNLEFBS0csQUFVSCxBQVFZLFdBOUdsQixDQXRGZCxBQWdKb0IsQUFnQlAsQ0FuSXNCLEVBc0dqQixFQUtDLENBbElQLEFBa0JaLEFBb0JnQixBQWtJRyxBQWVGLENBckZGLENBOUNmLENBMEhnQixFQTVGRCxBQXlFWSxLQXpKM0IsQ0FLc0MsQUF5THBDLENBckRhLENBYmQsQ0F2Rm1DLENBaUpwQyxDQTVJQSxBQXVGQSxDQXNDMkIsQUFNUCxDQXpCcEIsV0E5SG9CLENBb0lILEVBckNpQixFQXhFbEMsQ0FpSW9DLE9BTnBDLEdBYjZCLEVBcko0QixDQWdDekQsUUFuRHdCLEFBNkVDLFFBdUR6QixNQXlEQSxFQXBCd0IsR0EzRE8sSUFoQlYsT0F5REssQ0FyRjFCLE9Bd0c4QixRQXRKQSxvQkFnQlYsQUF1SWtDLFFBdEo5QixJQXBCeEIsTUFvQ2UsQUF5Q00sUUFpQlUsSUF6RUQsa0JBa0lULElBcUJELE1BdEpTLFlBdUo3QixNQS9EcUIsU0F0RnJCLE9BYTBCLG1CQXlDSyxLQXhDVix5QkFrSEMsSUF6Q0YsSUFoQkEsWUEwRFcsd0JBbEhQLHFCQUNFLFVBd0VMLElBZlAsTUFsQkQsTUFvQkgsS0FuQnNELEdBc0I1QixrQ0FDcEMsVUFtRGEsV0FDUSxJQXpFUSxNQXpDRixJQXdFZCxLQTJDYixNQTFDb0IsTUEvQkksSUF6Q0wsUUF5RTRCLFNBeEU3QixDQXlDWSxlQXhDOUIsYUF5Q0EsT0FnQ2lCLGVBRUwsVUFDd0Msa0RBQ3RCLDRCQUNWLGtCQUdwQiIsImZpbGUiOiIvbW50L2QvUmVwb3MvUHJvamVjdHMvRG9ydUJvdGVhTmV4dEpTL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHtOZXh0U2VvfSBmcm9tICduZXh0LXNlbydcclxuXHJcbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9maXJzdFNlY3Rpb24vZmlyc3RTZWN0aW9uJ1xyXG5cclxuaW1wb3J0IENvbnN1bHRhbnRhT25saW5lIGZyb20gJy4uL2NvbXBvbmVudHMvQ29uc3VsdGFudGFPbmxpbmUvY29uc3VsdGFudGFPbmxpbmUnXHJcbmltcG9ydCBTZXJ2aWNpaUNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL3NlcnZpY2lpL3NlcnZpY2lpLWNvbnRhaW5lcidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuY29uc3QgdGl0bGUgPSBcIkF2b2NhdCBCcmFzb3YgRG9ydVwiIFxyXG5jb25zdCBkZXNjcmlwdGlvbiA9IFwiXCJcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG4gICAgICA8TmV4dFNlbyB0aXRsZSA9IHt0aXRsZX0gZGVzY3JpcHRpb24gPXtkZXNjcmlwdGlvbn0vPlxyXG4gICAgICBcclxuICAgICAgPEZpcnN0U2VjdGlvbiAvPlxyXG4gICAgICA8U2VydmljaWlDb250YWluZXIgLz5cclxuICAgICAgPENvbnN1bHRhbnRhT25saW5lIC8+XHJcbiAgICAgIFxyXG4gICAgICBcclxuXHJcbjxzdHlsZSBnbG9iYWwganN4PntgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5ib2R5e1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICBoZWFkZXIsIHNlY3Rpb24sIC5maXJzdC1zZWN0aW9uLCAuc2Vjb25kLXNlY3Rpb24sICNjb25zdWx0YW50YS1vbmxpbmV7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIFxyXG4gIGJvZHksIC5maXJzdC1zZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kMS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5maXJzdC1zZWN0aW9uIC5jb250ZW50OmZpcnN0LWNoaWxke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcblxyXG4gIC5maXJzdC1zZWN0aW9uIC5jb250ZW50e1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGZvbnQtZmFtaWx5OnZhcigtLWRlY29yYXRpdmVGb250KTtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogdmFyKC0tc2l0ZS13aWR0aCk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyIDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyIDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaW5hbWlje1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAubmFtZXtcclxuICAgIGNvbG9yOnZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKVxyXG4gIH1cclxuICAuc3BlY2lhbGl6YXJpe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcclxuICB9XHJcblxyXG5cclxuICAuaGVyby10ZXh0e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIC5tYWluLWN0YXtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjFyZW07XHJcbiAgfVxyXG4gICAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLnNlY29uZC1zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvc2VjdGlvbjJcXCBiYWNrZ3JvdW5kLmpwZyk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG5cclxuICBcclxuICAuY2FyZHN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIFxyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlY29yYXRpdmVGb250KTtcclxuICB9XHJcblxyXG4gICNzZXJ2aWNpaXtcclxuICAgIFxyXG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDVweCB2YXIoLS10cmFuc3BhcmVudCk7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIFxyXG4gICAgei1pbmRleDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdHJhbnNwYXJlbnQpO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5zZXJ2aWNpaS1idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLXRyYW5zcGFyZW50KTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWZvbnQtY29sb3IpO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgIC5zZXJ2aWNpaS1idG4sIC5zZXJ2aWNpaS1idG46aG92ZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICB9IFxyXG4gIFxyXG4gIC5zZXJ2aWNpaS1idG4gc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBcclxuICBcclxuICAuc2VydmljaWktZGV0YWxpaXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZpcnN0LXNlY3Rpb24sIC5zZXJ2aWNpaS1kZXRhbGlpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG4gIH1cclxuICBcclxuICAuc2VjdGlvbi1pbWd7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9TZXJ2aWNpaUJHLmpwZyk7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG5cclxuICAuc2VjdGlvbi10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLnNlY3Rpb24taGVhZCwgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBjb2xvcjogdmFyKCAtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcclxuICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgLm1hcG91dGVye1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xyXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLnRyYW5zcGFyZW50LWNhcmQge1xyXG4gICBcclxuICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuYH08L3N0eWxlPlxyXG5cclxuPC8+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=/mnt/d/Repos/Projects/DoruBoteaNextJS/pages/index.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-seo");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js"], function() { return __webpack_exec__("./pages/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb3J1Ym90ZWEvLi9jb21wb25lbnRzL0NvbnN1bHRhbnRhT25saW5lL0Zvcm0vZm9ybS5qc3giLCJ3ZWJwYWNrOi8vZG9ydWJvdGVhLy4vY29tcG9uZW50cy9Db25zdWx0YW50YU9ubGluZS9jb25zdWx0YW50YU9ubGluZS50c3giLCJ3ZWJwYWNrOi8vZG9ydWJvdGVhLy4vY29tcG9uZW50cy9Hb29nbGVNYXBzL0dvb2dsZU1hcHMudHN4Iiwid2VicGFjazovL2RvcnVib3RlYS8uL2NvbXBvbmVudHMvZmlyc3RTZWN0aW9uL2ZpcnN0U2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vZG9ydWJvdGVhLy4vY29tcG9uZW50cy9zZXJ2aWNpaS9kYXRlL3NlcnZpY2lpLmpzIiwid2VicGFjazovL2RvcnVib3RlYS8uL2NvbXBvbmVudHMvc2VydmljaWkvc2VydmljaWktY29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9kb3J1Ym90ZWEvLi9jb21wb25lbnRzL3NlcnZpY2lpL3NlcnZpY2lpLXdyYXBwZXIudHN4Iiwid2VicGFjazovL2RvcnVib3RlYS8uL2NvbXBvbmVudHMvc2VydmljaWkvc2VydmljaWlDYXJkLnRzeCIsIndlYnBhY2s6Ly9kb3J1Ym90ZWEvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZG9ydWJvdGVhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9kb3J1Ym90ZWEvZXh0ZXJuYWwgXCJuZXh0LXNlb1wiIiwid2VicGFjazovL2RvcnVib3RlYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL2RvcnVib3RlYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2RvcnVib3RlYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vZG9ydWJvdGVhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9kb3J1Ym90ZWEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9kb3J1Ym90ZWEvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiRm9ybSIsIm5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsInBob25lIiwic2V0UGhvbmUiLCJnZHByIiwic2V0R2RwciIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImhlYWRlcnMiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImFsZXJ0IiwicmVzZXRTdGF0ZSIsImVycm9yIiwidGFyZ2V0IiwidmFsdWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXNldCIsIkNvbnN1bHRhbnRhT25saW5lIiwiR29vZ2xlTWFwcyIsImN1cnJlbnRUZXh0IiwiaW5kZXgiLCJ0ZXh0Q29udGVudCIsIkZpcnNTZWN0aW9uIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNoYW5nZVRleHQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0Iiwic2VydmljaWkiLCJpZCIsImljb24iLCJkZXNjcmlwdGlvbiIsInJvdXRlIiwiYWx0IiwiU2VydmljaWlDb250YWluZXIiLCJTZXJ2aWNpaVdyYXBwZXIiLCJtYXAiLCJvdGhlclNlY3Rpb25Qcm9wcyIsIlNlcnZpY2lpQ2FyZCIsIkhvbWUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUtBLE1BQU1BLElBQUksR0FBRyxNQUFJO0FBQ2IsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkosK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQXFCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbkM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBZ0JSLCtDQUFRLENBQUMsS0FBRCxDQUE5QjtBQUNBLFFBQU07QUFBQSxPQUFDUyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlYsK0NBQVEsQ0FBQyxLQUFELENBQTFDOztBQUVBLFFBQU1XLFlBQVksR0FBSUMsQ0FBRCxJQUFPO0FBRTFCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsUUFBSUMsSUFBSSxHQUFHO0FBQ1RqQixVQURTO0FBRVRHLFdBRlM7QUFHVEUsY0FIUztBQUlURSxXQUpTO0FBS1RFLFVBTFM7QUFNVEU7QUFOUyxLQUFYO0FBUUFJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaO0FBQ0FELFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaOztBQUNBLFFBQUdBLElBQUksQ0FBQ2pCLElBQUwsSUFBYWlCLElBQUksQ0FBQ2QsS0FBbEIsSUFBMkJjLElBQUksQ0FBQ1osUUFBaEMsSUFBNENZLElBQUksQ0FBQ1YsS0FBakQsSUFBMERVLElBQUksQ0FBQ1IsSUFBL0QsSUFBdUVRLElBQUksQ0FBQ04sU0FBTCxJQUFpQixLQUEzRixFQUFpRztBQUMvRkksYUFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVlDLElBQVo7QUFDQSxZQUFNQyxPQUFPLEdBQUc7QUFDZCxrQkFBVSxtQ0FESTtBQUVkLHdCQUFnQjtBQUZGLE9BQWhCO0FBT0FDLHVEQUFBLENBQVcsY0FBWCxFQUEwQkYsSUFBMUIsRUFBZ0NDLE9BQWhDLEVBQ0NFLElBREQsQ0FDT0MsUUFBRCxJQUFjO0FBQ2xCQyxhQUFLLENBQUMscUNBQUQsQ0FBTDtBQUNBQyxrQkFBVTtBQUNWUixlQUFPLENBQUNDLEdBQVIsQ0FBWUssUUFBWjtBQUNELE9BTEQsRUFLSUcsS0FBRCxJQUFXO0FBQ1pGLGFBQUssQ0FBQyw4QkFBRCxDQUFMO0FBQ0FQLGVBQU8sQ0FBQ0MsR0FBUixDQUFZUSxLQUFaO0FBQ0QsT0FSRCxFQVYrRixDQW9CL0Y7QUFDQTs7QUFDQVQsYUFBTyxDQUFDQyxHQUFSLENBQVksNERBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFHRCxLQTFCRCxNQTBCTTtBQUNKQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWjtBQUNBSyxXQUFLLENBQUMsY0FBRCxDQUFMO0FBQ0Q7QUFDQSxHQTNDSDs7QUE2Q0gsUUFBTUMsVUFBVSxHQUFDLE1BQUk7QUFDdEJ0QixXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FHLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUksWUFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBRSxXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FFLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0UsR0FORDs7QUFPRyxzQkFDSTtBQUFBLDJCQUNBO0FBQU0sZUFBUyxFQUFDLGdCQUFoQjtBQUFpQyxRQUFFLEVBQUMsU0FBcEM7QUFBQSw4QkFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESSxlQUVKO0FBQU0sb0JBQVksRUFBQyxLQUFuQixDQUNBO0FBREE7QUFFQyxjQUFNLEVBQUMsTUFGUjtBQUFBLGdDQUdJO0FBQU8saUJBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLGVBS0k7QUFBTyxrQkFBUSxNQUFmO0FBQWdCLGNBQUksRUFBQyxNQUFyQjtBQUE0QixZQUFFLEVBQUMsTUFBL0I7QUFBc0MsY0FBSSxFQUFDLE1BQTNDO0FBQWtELHFCQUFXLEVBQUMsaUJBQTlEO0FBQWdGLGtCQUFRLEVBQUdFLENBQUQsSUFBSztBQUFDRix3QkFBWSxDQUFDLEtBQUQsQ0FBWixFQUFxQlgsT0FBTyxDQUFDYSxDQUFDLENBQUNXLE1BQUYsQ0FBU0MsS0FBVixDQUE1QjtBQUE2QztBQUE3STtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLGVBUUk7QUFBTyxpQkFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkosZUFTSTtBQUFPLGtCQUFRLE1BQWY7QUFBZ0IsY0FBSSxFQUFDLE9BQXJCO0FBQTZCLGNBQUksRUFBQyxPQUFsQztBQUEwQyxZQUFFLEVBQUMsT0FBN0M7QUFBcUQscUJBQVcsRUFBQyxpQkFBakU7QUFBbUYsa0JBQVEsRUFBR1osQ0FBRCxJQUFLO0FBQUNGLHdCQUFZLENBQUMsS0FBRCxDQUFaLEVBQXFCUixRQUFRLENBQUNVLENBQUMsQ0FBQ1csTUFBRixDQUFTQyxLQUFWLENBQTdCO0FBQThDO0FBQWpKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEosZUFXSTtBQUFPLGlCQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFYSixlQVlJO0FBQU8sa0JBQVEsTUFBZjtBQUFnQixjQUFJLEVBQUMsS0FBckI7QUFBMkIsY0FBSSxFQUFDLE9BQWhDO0FBQXdDLFlBQUUsRUFBQyxPQUEzQztBQUFtRCxpQkFBTyxFQUFDLFdBQTNEO0FBQXVFLHFCQUFXLEVBQUMsU0FBbkY7QUFBNkYsa0JBQVEsRUFBR1osQ0FBRCxJQUFLO0FBQUNOLG9CQUFRLENBQUNNLENBQUMsQ0FBQ1csTUFBRixDQUFTQyxLQUFWLENBQVI7QUFBeUI7QUFBdEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaSixlQWFJO0FBQVUsa0JBQVEsTUFBbEI7QUFBbUIsY0FBSSxFQUFDLFVBQXhCO0FBQW1DLFlBQUUsRUFBQyxVQUF0QztBQUFpRCxjQUFJLEVBQUMsSUFBdEQ7QUFBMkQscUJBQVcsRUFBQyxpQkFBdkU7QUFBeUYsa0JBQVEsRUFBR1osQ0FBRCxJQUFLO0FBQUNSLHVCQUFXLENBQUNRLENBQUMsQ0FBQ1csTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBNEI7QUFBckk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiSixlQW9CSTtBQUFBLGtDQUNJO0FBQU8sY0FBRSxFQUFDLFlBQVY7QUFBdUIsbUJBQU8sRUFBQyxNQUEvQjtBQUFBLG1DQUFzQztBQUFHLGtCQUFJLEVBQUMsa0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUdJO0FBQU8sb0JBQVEsTUFBZjtBQUFnQixnQkFBSSxFQUFDLFVBQXJCO0FBQWdDLGdCQUFJLEVBQUMsTUFBckM7QUFBNEMsb0JBQVEsRUFBR1osQ0FBRCxJQUFLO0FBQUNKLHFCQUFPLENBQUNJLENBQUMsQ0FBQ1csTUFBRixDQUFTQyxLQUFWLENBQVA7QUFBd0I7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcEJKLGVBeUJJO0FBQVEsbUJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsY0FBSSxFQUFDLFFBQXhDO0FBQ0MsaUJBQU8sRUFBR1osQ0FBRCxJQUFLO0FBQUNELHdCQUFZLENBQUNDLENBQUQsQ0FBWjtBQUNmYSxvQkFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxLQUEvQjtBQUNDLFdBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQXFDSCxDQWpHRDs7QUFtR0EsK0RBQWU5QixJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R0E7QUFDQTs7QUFFQSxNQUFNK0IsaUJBQWlCLEdBQUcsTUFBSTtBQUMxQixzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQW9JQTtBQUFTLFFBQUUsRUFBQyxvQkFBWjtBQUFBO0FBQUEsOEJBR1I7QUFBQSw0Q0FBZ0IscUJBQWhCO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBLGtDQUNJO0FBQUEsZ0RBQWMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUEsZ0RBQWMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQUdJO0FBQUEsZ0RBQWMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFPSTtBQUFBLDhDQUFnQixZQUFoQjtBQUFBLGtDQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxKLGVBYUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhRLGVBK0JSLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBL0JRLGVBZ0NSLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaENRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwSUE7QUFBQSxrQkFESjtBQXlLSCxDQTFLRDs7QUE0S0EsK0RBQWVBLGlCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdLQSxNQUFNQyxVQUFVLEdBQUcsTUFBSTtBQUNuQixzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQXlCQTtBQUFBLDBDQUFnQixVQUFoQjtBQUFBLDZCQUNNO0FBQUEsNENBQWdCLGFBQWhCO0FBQUEsK0JBQThCO0FBQWdDLGVBQUssRUFBQyxNQUF0QztBQUE2QyxxQkFBVyxFQUFDLEdBQXpEO0FBQTZELG1CQUFTLEVBQUMsSUFBdkU7QUFFdEIsYUFBRyxFQUFDLHlJQUZrQjtBQUFBLDhDQUFrQjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpCQTtBQUFBLGtCQURGO0FBbUNILENBcENEOztBQXNDQSwrREFBZUEsVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFFQSxJQUFJQyxXQUFXLEdBQUUsRUFBakI7QUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLGNBQUQsRUFBaUIsbUJBQWpCLEVBQXNDLGNBQXRDLEVBQXVELG9CQUF2RCxFQUE2RSxpQkFBN0UsRUFBZ0csbUJBQWhHLENBQXBCOztBQUlBLFNBQVNDLFdBQVQsR0FBc0I7QUFDbEIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQWtCbkMsK0NBQVEsQ0FBQ2dDLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FBaEM7O0FBR0EsUUFBTUksVUFBVSxHQUFHLE1BQUk7QUFDbEJMLFNBQUssR0FBR0MsV0FBVyxDQUFDSyxNQUFaLEdBQW1CLENBQTVCLEdBQWlDTixLQUFLLEVBQXRDLEdBQTJDQSxLQUFLLEdBQUMsQ0FBakQ7QUFDQUQsZUFBVyxHQUFJRSxXQUFXLENBQUNELEtBQUQsQ0FBMUI7QUFDQUksWUFBUSxDQUFDTCxXQUFELENBQVI7QUFDSCxHQUpEOztBQUtBUSxZQUFVLENBQUNGLFVBQUQsRUFBYSxJQUFiLENBQVY7QUFFQSxzQkFDSTtBQUFTLGFBQVMsRUFBQyxlQUFuQjtBQUFtQyxNQUFFLEVBQUMsS0FBdEM7QUFBQSwyQkFDQTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FHSTtBQUFJLG1CQUFTLEVBQUMsZ0JBQWQ7QUFBQSw2Q0FDVztBQUFNLHFCQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFgsZUFFSTtBQUFJLHFCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0k7QUFBTSxxQkFBUyxFQUFDLDRCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQUlJO0FBQU0scUJBQVMsRUFBQyxzQkFBaEI7QUFBQSxzQkFBd0NGO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBVUk7QUFBRyxtQkFBUyxFQUFDLDZCQUFiO0FBQTJDLGNBQUksRUFBQyxXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIOztBQUVELCtEQUFlRCxXQUFmLEU7Ozs7Ozs7Ozs7OztBQzFDQSxNQUFNTSxRQUFRLEdBQUUsQ0FDWjtBQUNJQyxJQUFFLEVBQUMsQ0FEUDtBQUVJMUMsTUFBSSxFQUFFLGFBRlY7QUFHSTJDLE1BQUksRUFBRSw4QkFIVjtBQUlJQyxhQUFXLEVBQUUsNExBSmpCO0FBS0lDLE9BQUssRUFBQyxlQUxWO0FBTUlDLEtBQUcsRUFBQztBQU5SLENBRFksRUFTWjtBQUNJSixJQUFFLEVBQUMsQ0FEUDtBQUVJMUMsTUFBSSxFQUFFLGtCQUZWO0FBR0kyQyxNQUFJLEVBQUUsZ0NBSFY7QUFJSUMsYUFBVyxFQUFDLDJSQUpoQjtBQUtJQyxPQUFLLEVBQUUsbUJBTFg7QUFNSUMsS0FBRyxFQUFDO0FBTlIsQ0FUWSxFQWlCWjtBQUNJSixJQUFFLEVBQUMsQ0FEUDtBQUVJMUMsTUFBSSxFQUFFLGFBRlY7QUFHSTJDLE1BQUksRUFBRSw4QkFIVjtBQUlJQyxhQUFXLEVBQUMsaU1BSmhCO0FBS0lDLE9BQUssRUFBRTtBQUxYLENBakJZLEVBeUJaO0FBQ0lILElBQUUsRUFBQyxDQURQO0FBRUkxQyxNQUFJLEVBQUUsbUJBRlY7QUFHSTJDLE1BQUksRUFBRSxrQ0FIVjtBQUlJQyxhQUFXLEVBQUMsMkhBSmhCO0FBS0lDLE9BQUssRUFBRTtBQUxYLENBekJZLEVBaUNaO0FBQ0lILElBQUUsRUFBQyxDQURQO0FBRUkxQyxNQUFJLEVBQUUsZ0JBRlY7QUFHSTJDLE1BQUksRUFBRSw4QkFIVjtBQUlJQyxhQUFXLEVBQUMsbUhBSmhCO0FBS0lDLE9BQUssRUFBRTtBQUxYLENBakNZLEVBd0NaO0FBQ0lILElBQUUsRUFBQyxDQURQO0FBRUkxQyxNQUFJLEVBQUUsa0JBRlY7QUFHSTJDLE1BQUksRUFBRSxrQ0FIVjtBQUlJQyxhQUFXLEVBQUMsaU1BSmhCO0FBS0lDLE9BQUssRUFBRTtBQUxYLENBeENZLEVBK0NaO0FBQ0lILElBQUUsRUFBQyxDQURQO0FBRUkxQyxNQUFJLEVBQUUsaUJBRlY7QUFHSTJDLE1BQUksRUFBRSxrQ0FIVjtBQUlJQyxhQUFXLEVBQUMsbVFBSmhCO0FBS0lDLE9BQUssRUFBRTtBQUxYLENBL0NZLEVBc0RaO0FBQ0lILElBQUUsRUFBQyxDQURQO0FBRUkxQyxNQUFJLEVBQUUsdUJBRlY7QUFHSTJDLE1BQUksRUFBRSx3Q0FIVjtBQUlJQyxhQUFXLEVBQUMsZ1FBSmhCO0FBS0lDLE9BQUssRUFBRTtBQUxYLENBdERZLEVBNkRaO0FBQ0lILElBQUUsRUFBQyxDQURQO0FBRUkxQyxNQUFJLEVBQUUsY0FGVjtBQUdJMkMsTUFBSSxFQUFFLCtCQUhWO0FBSUlDLGFBQVcsRUFBQyw2SEFKaEI7QUFLSUMsT0FBSyxFQUFFO0FBTFgsQ0E3RFksRUFvRVo7QUFDSUgsSUFBRSxFQUFDLEVBRFA7QUFFSTFDLE1BQUksRUFBRSxxQkFGVjtBQUdJMkMsTUFBSSxFQUFFLHNDQUhWO0FBSUlDLGFBQVcsRUFBQyw0SkFKaEI7QUFLSUMsT0FBSyxFQUFFO0FBTFgsQ0FwRVksQ0FBaEI7QUE2RUEsK0RBQWVKLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTs7QUFHQSxNQUFNTSxpQkFBaUIsR0FBRSxNQUFNO0FBRTNCLHNCQUNBO0FBQUEsMkJBRUo7QUFBUyxlQUFTLEVBQUMsa0JBQW5CO0FBQUEsOEJBQ1E7QUFBTSxpQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFIsZUFFUTtBQUFNLGlCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGUixlQUdRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhSLGVBSVE7QUFBTSxpQkFBUyxFQUFDLGNBQWhCO0FBQUEsK0JBQ1EsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUMsMERBQVg7QUFBc0UsYUFBRyxFQUFDLE9BQTFFO0FBQWlGLGVBQUssRUFBRSxFQUF4RjtBQUE0RixnQkFBTSxFQUFFLEVBQXBHO0FBQXdHLG1CQUFTLEVBQUU7QUFBbkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSlIsZUFRQSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJBLGVBU0E7QUFBTSxpQkFBUyxFQUFDLGNBQWhCO0FBQUEsK0JBQ2dCLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFDLDBEQUFYO0FBQXNFLGFBQUcsRUFBQyxPQUExRTtBQUFpRixlQUFLLEVBQUUsRUFBeEY7QUFBNEYsZ0JBQU0sRUFBRSxFQUFwRztBQUF3RyxtQkFBUyxFQUFFO0FBQW5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSSxtQkFEQTtBQW1CSCxDQXJCRDs7QUF3QkEsK0RBQWVBLGlCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBRUE7QUFFQTtBQUVBOztBQU1DLFNBQVNDLGVBQVQsR0FBMkI7QUFDeEIsUUFBTTtBQUFBLE9BQUNaLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CbkMsK0NBQVEsQ0FBQ3VDLHNEQUFELENBQWxDO0FBQ0Esc0JBQ0k7QUFBQSwyQkFDQTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUVJO0FBQUssaUJBQVMsRUFBQyxtQ0FBZjtBQUFBLGtCQUNLTCxLQUFLLENBQUNhLEdBQU4sQ0FBVTtBQUFBLGNBQUM7QUFBRVA7QUFBRixXQUFEO0FBQUEsY0FBVVEsaUJBQVY7O0FBQUEsOEJBQ1AsOERBQUMsa0RBQUQsb0JBQTJCQSxpQkFBM0IsR0FBbUJSLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRE87QUFBQSxTQUFWO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQVlIOztBQUdELCtEQUFnQk0sZUFBaEIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUVlLFNBQVNHLFlBQVQsQ0FBdUI7QUFBQ1IsTUFBRDtBQUFPM0MsTUFBUDtBQUFhNEMsYUFBYjtBQUEwQkM7QUFBMUIsQ0FBdkIsRUFBeUQ7QUFFcEUsc0JBQ0k7QUFBQSwyQkFDQTtBQUFLLGVBQVMsRUFBRSw0RUFBaEI7QUFBQSw4QkFDUTtBQUFJLGlCQUFTLEVBQUMsMEJBQWQ7QUFBQSxrQkFBMEM3QztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFIsZUFFUSw4REFBQyxtREFBRDtBQUFPLGlCQUFTLEVBQUMsaUNBQWpCO0FBQW1ELFdBQUcsRUFBRTJDLElBQXhEO0FBQThELFdBQUcsRUFBQyxrQkFBbEU7QUFBcUYsYUFBSyxFQUFFLEVBQTVGO0FBQWdHLGNBQU0sRUFBRSxFQUF4RztBQUE0RyxjQUFNLEVBQUMsWUFBbkg7QUFBZ0ksaUJBQVMsRUFBQyxTQUExSTtBQUFvSixlQUFPLEVBQUU7QUFBN0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZSLGVBSVE7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQW1DLFVBQUUsRUFBRTNDLElBQXZDO0FBQUEsZ0NBRUk7QUFBRyxtQkFBUyxFQUFDLFlBQWI7QUFBQSwwQkFBNEI0QyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHUTtBQUFHLG1CQUFTLEVBQUMsNEJBQWI7QUFBMEMsY0FBSSxFQUFFQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESjtBQWNDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkw7QUFFQTtBQUVBO0FBQ0E7QUFHZSxTQUFTTyxJQUFULEdBQWdCO0FBRS9CLFFBQU1DLEtBQUssR0FBRyxvQkFBZDtBQUNBLFFBQU1ULFdBQVcsR0FBRyxFQUFwQjtBQUVFLHNCQUNFO0FBQUEsNEJBRUUsOERBQUMsNkNBQUQ7QUFBUyxXQUFLLEVBQUlTLEtBQWxCO0FBQXlCLGlCQUFXLEVBQUdUO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUlFLDhEQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLDhEQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FLDhEQUFDLG9GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBa1BELEM7Ozs7Ozs7Ozs7O0FDalFELG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgRm9ybSA9ICgpPT57XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSAgdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZ2Rwciwgc2V0R2Rwcl09dXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyFcIilcclxuICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBjb21tZW50cyxcclxuICAgICAgICBwaG9uZSxcclxuICAgICAgICBnZHByLFxyXG4gICAgICAgIHN1Ym1pdHRlZFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSEFORExFIFNVQk1JVCBNQUkgSk9TIEUgREFUQVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICBpZihkYXRhLm5hbWUgJiYgZGF0YS5lbWFpbCAmJiBkYXRhLmNvbW1lbnRzICYmIGRhdGEucGhvbmUgJiYgZGF0YS5nZHByICYmIGRhdGEuc3VibWl0dGVkID09ZmFsc2Upe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQUlDSSBTVU5UIERBVEVMRVwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9jb250YWN0JyxkYXRhLCBoZWFkZXJzKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoXCJWYSBtdWx0dW1pbSwgdmEgdm9tIGNvbnRhY3RhIGN1cmFuZFwiKTtcclxuICAgICAgICAgIHJlc2V0U3RhdGUoKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBhbGVydChcIkZvcm11bGFydWwgbnUgcy1hIHRyaW1pcyEhISFcIik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gZS5yZXNldCgpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIQU5ETEUgU1VCTUlUL249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgfSBlbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgYWxlcnQoXCJlcm9hcmUgaW4gSUZcIilcclxuICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gY29uc3QgcmVzZXRTdGF0ZT0oKT0+e1xyXG5zZXROYW1lKFwiXCIpXHJcbnNldEVtYWlsKFwiXCIpXHJcbnNldFBob25lKFwiXCIpXHJcbnNldEdkcHIoXCJcIilcclxuc2V0U3VibWl0dGVkKGZhbHNlKVxyXG4gfSAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIiBpZD1cImNvbnRhY3RcIj5cclxuICAgIDxoMj5Db250YWN0IFJhcGlkPC9oMj5cclxuICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAvLyAgYWN0aW9uPVwiL3BhZ2VzL3N1Y2Nlc3MuaHRtbFwiIFxyXG4gICAgIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm51bWVcIj5OdW1lPC9sYWJlbD5cclxuXHJcbiAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJudW1lXCIgbmFtZT1cIm51bWVcIiBwbGFjZWhvbGRlcj1cIk51bWUgc2kgUHJlbnVtZVwiIG9uQ2hhbmdlPXsoZSk9PntzZXRTdWJtaXR0ZWQoZmFsc2UpLCBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuXHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkFkcmVzYSBkZSBlbWFpbFwiIG9uQ2hhbmdlPXsoZSk9PntzZXRTdWJtaXR0ZWQoZmFsc2UpLCBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9fS8+XHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5UZWxlZm9uPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInRlbFwiIG5hbWU9XCJwaG9uZVwiIGlkPVwicGhvbmVcIiBwYXR0ZXJuPVwiWzAtOV17MTB9XCIgcGxhY2Vob2xkZXI9XCJUZWxlZm9uXCIgb25DaGFuZ2U9eyhlKT0+e3NldFBob25lKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICA8dGV4dGFyZWEgcmVxdWlyZWQgbmFtZT1cImNvbW1lbnRzXCIgaWQ9XCJjb21tZW50c1wiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpZXRpIENhdXphXCIgb25DaGFuZ2U9eyhlKT0+e3NldENvbW1lbnRzKGUudGFyZ2V0LnZhbHVlKX19IC8+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8bGFiZWwgaWQ9XCJnZHByLWxhYmVsXCIgaHRtbEZvcj1cImdkcHJcIj48YSBocmVmPVwiL3BhZ2VzL2dkcHIuaHRtbFwiPlN1bnQgZGUgYWNvcmQgY3UgcG9saXRpY2EgZGUgcHJlbHVjcmFyZVxyXG4gICAgICAgICAgICAgICAgICAgIGEgZGF0ZWxvcjwvYT48L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImdkcHJcIiBvbkNoYW5nZT17KGUpPT57c2V0R2RwcihlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBmcm9tLXJpZ2h0XCIgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgIG9uQ2xpY2s9eyhlKT0+e2hhbmRsZVN1Ym1pdChlKVxyXG4gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5yZXNldCgpXHJcbiAgICAgICAgIH19ID4gVHJpbWl0ZXRpITwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG48L21haW4+XHJcbjwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtIiwiaW1wb3J0IEdvb2dsZU1hcHMgZnJvbSAnLi4vR29vZ2xlTWFwcy9Hb29nbGVNYXBzJ1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL0Zvcm0vZm9ybSdcclxuXHJcbmNvbnN0IENvbnN1bHRhbnRhT25saW5lID0gKCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gIDxzdHlsZSBqc3g+e2AgICAgXHJcblxyXG5cclxuI2NvbnN1bHRhbnRhLW9ubGluZXtcclxuICAgIG1heC13aWR0aDogOTB2dztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICBcclxufVxyXG5cclxuI2NvbnN1bHRhbnRhLW9ubGluZSAuYmFja2dyb3VuZHtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4jY29uc3VsdGFudGEtb25saW5lIC5mb3JtLWNvbnRhaW5lciwgI2NvbnN1bHRhbnRhLW9ubGluZSAuZGVzY3JpcHRpb257XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxufVxyXG4jY29uc3VsdGFudGEtb25saW5lIC5mb3JtLWNvbnRhaW5lcntcclxuICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gICBncmlkLXJvdzogMSAvIDI7XHJcbiBcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVye1xyXG4gICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcclxufVxyXG4uZm9ybS1jb250YWluZXIgaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LWZhbWlseTp2YXIoLS1kZWNvcmF0aXZlRm9udCk7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBcclxufVxyXG4uZm9ybS1jb250YWluZXIgZm9ybSB7XHJcbiAgICBcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogd2hpdGUgc29saWQgMnB4O1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGVhdDtcclxuICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbn1cclxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgLCB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5pbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIFxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjAwMDAxKVxyXG59XHJcblxyXG5mb3JtIGlucHV0LCBmb3JtIHRleHRhcmVhe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpIDJweCBzb2xpZDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpbnB1dDpmb2N1cyB+IGxhYmVsLFxyXG4uZm9ybS1jb250YWluZXIgdGV4dGFyZWE6Zm9jdXMgfiBsYWJlbCxcclxuLmZvcm0tY29udGFpbmVyIGlucHV0OnZhbGlkIH4gbGFiZWwsXHJcbi5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYTp2YWxpZCB+IGxhYmVsIHtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxubGFiZWx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jZ2Rwci1sYWJlbHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxudGV4dGFyZWEsIGlucHV0LCBsYWJlbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogdmFyKC0taW52KSBzb2xpZCAycHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZGVjb3JhdGl2ZUZvbnQpO1xyXG59XHJcbnRleHRhcmVhe1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDFmcjtcclxufVxyXG5maWVsZHNldCBsYWJlbCBhe1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICB0cmFuc2l0aW9uOiBjb2xvciAuNXM7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmZpZWxkc2V0IGxhYmVsIGE6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIHNvbGlkIHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKSA7XHJcbiAgICBjb2xvcjpibHVlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dCwgLmZvcm0tY29udGFpbmVyIGJ1dHRvbntcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5gfTwvc3R5bGU+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJjb25zdWx0YW50YS1vbmxpbmVcIj5cclxuXHJcblxyXG48bWFpbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiBjb250ZW50XCI+XHJcbiAgICA8bWFpbj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkXCI+QVZPQ0FUIERPUlUgQk9URUE8L2gyPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRcIj5DT05TVUxUQU5UQSBKVVJJRElDQSBPTkxJTkUhPC9oMz5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkXCI+QVBST0FQRSBERSBEVU1ORUFWT0FTVFJBIE9SSVVOREUgQVRJIEZJITwvaDQ+XHJcbiAgICA8L21haW4+XHJcblxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwicGFyYWdyYXBoc1wiPlxyXG5cclxuICAgICAgICA8cD5DYWJpbmV0IEF2b2NhdCBEb3J1IEJvdGVhIHZpbmUgw65uIMOubnTDom1waW5hcmVhIG5ldm9pbG9yIGNsaWVuxaNpbG9yLCBwcmluIGFzaWd1cmFyZWEgZGUgc2VydmljaWkgZGVcclxuICAgICAgICAgICAgY29uc3VsdGFuxaPEgyBqdXJpZGljxIMgb25saW5lLjwvcD5cclxuXHJcbiAgICAgICAgPHA+IEFjZXN0IHRpcCBkZSBzZXJ2aWNpaSBkZSBjb25zdWx0YW7Fo8SDIGFzaWd1csSDIG8gcmV6b2x2YXJlIGZhY2lsxIMgxZ9pIHJhcGlkxIMgcGVudHJ1IGFudW1pdGUgcHJvYmxlbWVcclxuICAgICAgICAgICAganVyaWRpY2VcclxuICAgICAgICAgICAgxZ9pIG9mZXLEgyBvIHNlcmllIGRlIGF2YW50YWplIGN1bSBhciBmaSBldml0YXJlYSBkZXBsYXPEg3JpaSBjdSByZXp1bHRhdHVsIGZpcmVzYyBhbCBlY29ub21pZWkgZGVcclxuICAgICAgICAgICAgdGltcCxcclxuICAgICAgICAgICAgY29zdHVyaSBtYWkgc2PEg3p1dGUgxZ9pIG51IMOubiB1bHRpbXVsIHLDom5kLCBhdsOibmQgw65uIHZlZGVyZSBjb250ZXh0dWwgc29jaWFsLCBwxINzdHJhcmVhIHVuZWlcclxuICAgICAgICAgICAgZGlzdGFuxaPEg3JpXHJcbiAgICAgICAgICAgIHNvY2lhbGUuPC9wPlxyXG5cclxuICAgICAgICA8cD4gU29jaWV0YXRlYSDDrm4gY2FyZSB0csSDaW0gc2UgYWZsxIMgw65udHItbyBjb250aW51xIMgZXZvbHXFo2llLCBpYXIgw65uIHByZXplbnQgYcWfYSBudW1pdHVsIHByb2NlcyBkZVxyXG4gICAgICAgICAgICBkaWdpdGFsaXphcmUsIGN1cHJpbmRlIHRvdCBtYWkgbXVsdGUgc2VjdG9hcmUgYWxlIHZpZcWjaWkgZWNvbm9taWNvIHNvY2lhbGUgxZ9pIGFzaWd1csSDIG8gcGFsZXTEgyBkaW5cclxuICAgICAgICAgICAgY2Ugw65uIGNlXHJcbiAgICAgICAgICAgIG1haSBsYXJnxIMgZGUgc2VydmljaWkuPC9wPlxyXG5cclxuICAgIDwvbWFpbj5cclxuPC9tYWluPlxyXG5cclxuPEZvcm0vPlxyXG48R29vZ2xlTWFwcyAvPlxyXG48L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnN1bHRhbnRhT25saW5lIiwiXHJcblxyXG5jb25zdCBHb29nbGVNYXBzID0gKCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgPD5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgIFxyXG4ubWFwb3V0ZXIge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcclxuICBncmlkLXJvdzogMiAvIDM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5nbWFwX2NhbnZhcyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLmdtYXBfaWZyYW1lIHtcclxuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXBvdXRlclwiPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJnbWFwX2NhbnZhc1wiPjxpZnJhbWUgY2xhc3NOYW1lPVwiZ21hcF9pZnJhbWVcIiB3aWR0aD1cIjEwMCVcIiBmcmFtZUJvcmRlcj1cIjBcIiBzY3JvbGxpbmc9XCJub1wiXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcz93aWR0aD02MDAmYW1wO2hlaWdodD00MDAmYW1wO2hsPWVuJmFtcDtxPVN0cmFkYSBJdWxpdSBNYW5pdSA0NyBCcmHImW92IDUwMDA5MSZhbXA7dD0mYW1wO3o9MTQmYW1wO2llPVVURjgmYW1wO2l3bG9jPUImYW1wO291dHB1dD1lbWJlZFwiPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvb2dsZU1hcHMiLCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxubGV0IGN1cnJlbnRUZXh0ID1cIlwiXHJcbmxldCBpbmRleCA9IDA7XHJcbmNvbnN0IHRleHRDb250ZW50ID0gW1wiIGRyZXB0IHBlbmFsXCIsIFwiIGRyZXB0dWwgZmFtaWxpZWlcIiwgXCIgZHJlcHQgY2l2aWxcIiwgIFwiIG1hbHByYXhpcyBtZWRpY2FsXCIsIFwiIGRyZXB0dWwgbXVuY2lpXCIsIFwiIGV4ZWN1dGFyaSBzaWxpdGVcIiBdO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBGaXJzU2VjdGlvbigpe1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV09dXNlU3RhdGUodGV4dENvbnRlbnRbMF0pXHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgY2hhbmdlVGV4dCA9ICgpPT57XHJcbiAgICAgICAgKGluZGV4IDwgdGV4dENvbnRlbnQubGVuZ3RoLTEpID8gaW5kZXgrKyA6IGluZGV4PTA7XHJcbiAgICAgICAgY3VycmVudFRleHQgPSAgdGV4dENvbnRlbnRbaW5kZXhdXHJcbiAgICAgICAgc2V0U3RhdGUoY3VycmVudFRleHQpXHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KGNoYW5nZVRleHQsIDMwMDApO1xyXG4gICAgICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZpcnN0LXNlY3Rpb25cIiBpZD1cInRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcGVhckZpcnN0TFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTQgaGVyby10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQXZvY2F0IDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5Eb3J1IEJvdGVhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciBjbGFzc05hbWU9XCJteS00IGQtYmxvY2sgbGluZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXktNCBkLWJsb2NrIHNwZWNpYWxpemFyaSBcIj5Qcm9mZXNpb25hbGlzbSBzaSBJbmNyZWRlcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9jayBtdC00IGRpbmFtaWNcIj57c3RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtYWluLWN0YSBidG4gYnRuMSBmcm9tLWxlZnRcIiBocmVmPVwiI3NlcnZpY2lpXCI+dmVkZXRpIG1haSBtdWx0ZTwvYT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvc2VjdGlvbj4gIFxyXG4gICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnNTZWN0aW9uIiwiY29uc3Qgc2VydmljaWkgPVtcclxuICAgIHtcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5hbWU6IFwiRHJlcHQgUGVuYWxcIixcclxuICAgICAgICBpY29uOiBcIi9hc3NldHMvaW1hZ2VzL3N2Zy9wZW5hbC5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBc2lzdGVuyJvEgyDImWkgcmVwcmV6ZW50YXJlIGp1cmlkaWPEgyDDrm4gZmF6YSBkZSB1cm3Eg3JpcmUgcGVuYWzEgyDImWkgw65uIGZhyJthIGluc3RhbsibZWxvciBkZSBqdWRlY2F0xIMgYXTDonQgcGVudHJ1IHBlcnNvYW5lIGNlcmNldGF0ZSAoc3VzcGVjyJtpLCBpbmN1bHBhyJtpKSBjw6J0IMiZaSBwZW50cnUgcMSDcsibaSBjaXZpbGUvdsSDdMSDbWF0ZS5cIixcclxuICAgICAgICByb3V0ZTpcIiAvZHJlcHQtcGVuYWxcIixcclxuICAgICAgICBhbHQ6XCJpY29uIERyZXB0IFBlbmFsXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6MixcclxuICAgICAgICBuYW1lOiBcIkRyZXB0dWwgRmFtaWxpZWlcIixcclxuICAgICAgICBpY29uOiBcIi9hc3NldHMvaW1hZ2VzL3N2Zy9mYW1pbGllLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiQ29uc3VsdGFuyJvEgyDImWkgYXNpc3RlbsibxIMganVyaWRpY2Egw65uIGNhdXplbGUgZGUgZGl2b3J0LCBzdGFiaWxpcmVhIGRvbWljaWxpdWx1aSBjb3BpbHVsdWksIGV4ZXJjaXRhcmVhIGF1dG9yaXRhdGlpIHBhcmludGVzdGksIHBlbnNpZSBkZSBpbnRyZXRpbmVyZSBjYXQgc2kgcHJvZ3JhbSBkZSB2aXppdGEuIFBhcnRhaiBidW51cmkgY29tdW5lIGluIGZhdGEgaW5zdGFudGVsb3IgZGUganVkZWNhdGEgY2F0IHNpIGEgdHV0dXJvciBhdXRvcml0YXRpbG9yL2luc3RpdHV0aWlsb3IgcHVibGljZS5cIixcclxuICAgICAgICByb3V0ZTogXCIvZHJlcHR1bC1mYW1pbGllaVwiLFxyXG4gICAgICAgIGFsdDpcImljb24gRHJlcHQgUGVuYWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDozLFxyXG4gICAgICAgIG5hbWU6IFwiRHJlcHQgQ2l2aWxcIixcclxuICAgICAgICBpY29uOiBcIi9hc3NldHMvaW1hZ2VzL3N2Zy9jaXZpbC5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkFzaXN0ZW7Im8SDLCBjb25zdWx0YW7Im8SDIMiZaSByZXByZXplbnRhcmUganVyaWRpY8SDIMOubiB0b2F0ZSByYW11cmlsZSBkcmVwdHVsdWkgY2l2aWwsIGxpdGlnaWkgw65udHJlIHByb2Zlc2lvbmnImXRpLCBjb250cmFjdGUsIHN1Y2Nlc2l1bmksIGRpdm9yyJssIHBhcnRhaiwgZHJlcHR1cmkgbmVwYXRyaW1vbmlhbGUsIGRyZXB0IHNvY2lldGFyLlwiLFxyXG4gICAgICAgIHJvdXRlOiBcIi9kcmVwdC1jaXZpbFwiLFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDo0LFxyXG4gICAgICAgIG5hbWU6IFwiTWFscHJheGlzIE1lZGljYWxcIixcclxuICAgICAgICBpY29uOiBcIi9hc3NldHMvaW1hZ2VzL3N2Zy9tYWxwcmF4aXMucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJBc2lzdGVuyJvEgyBqdXJpZGljxIMgw65uIGZhyJthIENvbGVnaXVsdWkgTWVkaWNpbG9yLCBjw6J0IMiZaSBwZSBkdXJhdGEgdW51aSBldmVudHVhbCBsaXRpZ2l1IMOubiBmYcibYSBpbnN0YW7Im2Vsb3IganVkZWPEg3RvcmXImXRpXCIsXHJcbiAgICAgICAgcm91dGU6IFwiL21hbHByYXhpcy1tZWRpY2FsXCIsXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjUsXHJcbiAgICAgICAgbmFtZTogXCJEcmVwdHVsIE11bmNpaVwiLFxyXG4gICAgICAgIGljb246IFwiL2Fzc2V0cy9pbWFnZXMvc3ZnL211bmNhLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiQ29uc3VsdGFuyJvEgyBwZW50cnUgYW5nYWphdG9yaSDImWkgYW5nYWphyJtpLCBhc2lzdGVuyJvEgyDImWkgcmVwcmV6ZW50YXJlIMOubiB2ZWRlcmVhIHNvbHXIm2lvbsSDcmlpIGxpdGlnaWlsb3IgZGUgbXVuY8SDLlwiLFxyXG4gICAgICAgIHJvdXRlOiBcIi9kcmVwdHVsLW11bmNpaVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjYsXHJcbiAgICAgICAgbmFtZTogXCJFeGVjdXRhcmkgU2lsaXRlXCIsXHJcbiAgICAgICAgaWNvbjogXCIvYXNzZXRzL2ltYWdlcy9zdmcvZXhlY3V0YXJpLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiQXNpc3RlbsibxIMsIGNvbnN1bHRhbsibxIMgyJlpIHJlcHJlemVudGFyZSBqdXJpZGljxIMgw65uIHRvYXRlIHJhbXVyaWxlIGRyZXB0dWx1aSBjaXZpbCwgbGl0aWdpaSDDrm50cmUgcHJvZmVzaW9uaciZdGksIGNvbnRyYWN0ZSwgc3VjY2VzaXVuaSwgZGl2b3LImywgcGFydGFqLCBkcmVwdHVyaSBuZXBhdHJpbW9uaWFsZSwgZHJlcHQgc29jaWV0YXIuXCIsXHJcbiAgICAgICAgcm91dGU6IFwiL2V4ZWN1dGFyaVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjcsXHJcbiAgICAgICAgbmFtZTogXCJEcmVwdCBJbW9iaWxpYXJcIixcclxuICAgICAgICBpY29uOiBcIi9hc3NldHMvaW1hZ2VzL3N2Zy9pbW9iaWxpYXIucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJDYWJpbmV0IEF2b2NhdCBEb3J1IEJvdGVhIEJyYXNvdiBwcm9mZXNlYXphIHNpIGluIERyZXB0IEltb2JpbGlhciwgdHJhbnphY3RpaSBpbW9iaWxpYXJlLCBkcmVwdHVsIGNvbnN0cnVjdGlpbG9yIHNpIGFzaWd1cmEgY29uc2lsaWVyZSBzb2NpZXRhdGlsb3IgY29tZXJjaWFsZSBzaSBtYXJpbG9yIGNvbXBhbmlpIGRlIGludmVzdGl0aWksIGdlc3Rpb25hbmQgdHJhbnphY3RpaSBzaSBsaXRpZ2lpIGNvbXBsZXhlIGRlIG5hdHVyYSBpbW9iaWxpYXJhLlwiLFxyXG4gICAgICAgIHJvdXRlOiBcIi9pbW9iaWxpYXJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDo4LFxyXG4gICAgICAgIG5hbWU6IFwiRHJlcHQgQ29udHJhdmVudGlvbmFsXCIsXHJcbiAgICAgICAgaWNvbjogXCIvYXNzZXRzL2ltYWdlcy9zdmcvY29udHJhdmVudGlvbmFsLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiQXNpc3RlbnRhIGp1cmlkaWNhIHNpIHJlcHJlemVudGFyZSBpbiBsaXRpZ2lpbGUgY2FyZSBhdSBjYSBvYmllY3QgYW51bGFyZWEgcHJvY2VzdWx1aS12ZXJiYWwgZGUgY29udHJhdmVudGllIGNhIHVybWFyZSBhIGludGVydmVuaXJpaSBwcmVzY3JpcHRpZWkgcmFzcHVuZGVyaWkgY29udHJhdmVudGlvbmFsZSBzaSBhIGNhZHVjaXRhdGlpIGFjZXN0dWlhOyBPcmljZSBhbHRlIGFjdGl2aXRhdGkgZGluIGRvbWVuaXVsIGNvbnRyYXZlbnRpaWxvci5cIixcclxuICAgICAgICByb3V0ZTogXCIvY29udHJhdmVudGlvbmFsXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6OSxcclxuICAgICAgICBuYW1lOiBcIkRyZXB0IEJhbmNhclwiLFxyXG4gICAgICAgIGljb246IFwiL2Fzc2V0cy9pbWFnZXMvc3ZnL2JhbmNhci5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkNhYmluZXR1bCBkZSBhdm9jYXR1cmEg4oCcRG9ydSBCb3RlYeKAnSBvZmVyaW0gcGFydGVuZXJpbG9yIG5vyJl0cmkgdW4gc2VydmljaXUgZGVkaWNhdCBkZSBjb25zdWx0YW7Im8SDIGp1cmlkaWPEgyDDrm4gcmVsYcibaWEgYmFuY2FcIixcclxuICAgICAgICByb3V0ZTogXCIvYmFuY2FyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6MTAsXHJcbiAgICAgICAgbmFtZTogXCJEcmVwdCBBZG1pbmlzdHJhdGl2XCIsXHJcbiAgICAgICAgaWNvbjogXCIvYXNzZXRzL2ltYWdlcy9zdmcvYWRtaW5pc3RyYXRpdi5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkFjZWFzdMSDIG1hdGVyaWUgcmVnbGVtZW50ZWF6xIMgZHJlcHR1bCBwZXJzb2FuZWkgY2FyZSBzZSBjb25zaWRlcsSDIHbEg3TEg21hdMSDIMOubnRyLXVuIGRyZXB0IGFsIHPEg3Ugb3JpIMOubnRyLXVuIGludGVyZXMgbGVnaXRpbSwgZGUgY8SDdHJlIG8gYXV0b3JpdGF0ZSBwdWJsaWPEg1wiLFxyXG4gICAgICAgIHJvdXRlOiBcIi9hZG1pbmlzdHJhdGl2XCJcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2lpIiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBTZXJ2aWNpaVdyYXBwZXIgZnJvbSAnLi9zZXJ2aWNpaS13cmFwcGVyJ1xyXG5cclxuXHJcbmNvbnN0IFNlcnZpY2lpQ29udGFpbmVyID0oKSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgIDw+XHJcblxyXG48c2VjdGlvbiBjbGFzc05hbWU9XCJzZXJ2aWNpaS1kZXRhbGlpXCI+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwic2VjdGlvbi1pbWdcIj48L21haW4+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPjwvbWFpbj5cclxuICAgICAgICA8aDI+U2VydmljaWk8L2gyPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImgxLXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2RlY29yYXRpdmUvaDEtc2VwYXJhdG9yLWN1c3RvbS1pY29uLTEucG5nXCIgYWx0PVwiaW1hZ2VcIndpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gb2JqZWN0Rml0PSBcImNvbnRhaW5cIi8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9tYWluPlxyXG48U2VydmljaWlXcmFwcGVyIC8+XHJcbjxtYWluIGNsYXNzTmFtZT1cImgxLXNlcGFyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2RlY29yYXRpdmUvaDEtc2VwYXJhdG9yLWN1c3RvbS1pY29uLTEucG5nXCIgYWx0PVwiaW1hZ2VcIndpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gb2JqZWN0Rml0PSBcImNvbnRhaW5cIi8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9tYWluPlxyXG48L3NlY3Rpb24+XHJcbjwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljaWlDb250YWluZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgc2VydmljaWkgZnJvbSAnLi9kYXRlL3NlcnZpY2lpLmpzJztcclxuXHJcbmltcG9ydCBTZXJ2aWNpaUNhcmQgZnJvbSAnLi9zZXJ2aWNpaUNhcmQnXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiBmdW5jdGlvbiBTZXJ2aWNpaVdyYXBwZXIoKSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHNlcnZpY2lpKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmRcIj5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5tYXAoKHsgaWQsIC4uLm90aGVyU2VjdGlvblByb3BzIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8U2VydmljaWlDYXJkIGtleT17aWR9IHsuLi5vdGhlclNlY3Rpb25Qcm9wc30gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbilcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICBTZXJ2aWNpaVdyYXBwZXI7IiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNpaUNhcmQgKHtpY29uLCBuYW1lLCBkZXNjcmlwdGlvbiwgcm91dGV9KSB7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImNvbC1sZy0zICBjb2wtbWQtNiBjb2wtc20tMTIgbWItMyBzZXJ2aWNpaS1jb250YWluZXIgY2FyZCB0cmFuc3BhcmVudC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkIGNhcmQtaGVhZGVyXCI+e25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCIgYWxpZ24tc2VsZi1jZW50ZXIgY2FyZC1pbWctdG9wXCIgc3JjPXtpY29ufSBhbHQ9XCJJY29ucyBPZiBTZXJ2aWNpXCIgd2lkdGg9ezUwfSBoZWlnaHQ9ezEwfSBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIHF1YWxpdHk9ezEwMH0vPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBjYXJkLWJvZHlcIiBpZD17bmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJhZ3JhcGhzXCI+IHtkZXNjcmlwdGlvbn0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuMSBmcm9tLWxlZnQgZC1ibG9ja1wiIGhyZWY9e3JvdXRlfT5jaXRpdGkgbWFpIG11bHQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgKVxyXG4gICAgfSIsIlxyXG5cclxuaW1wb3J0IHtOZXh0U2VvfSBmcm9tICduZXh0LXNlbydcclxuXHJcbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9maXJzdFNlY3Rpb24vZmlyc3RTZWN0aW9uJ1xyXG5cclxuaW1wb3J0IENvbnN1bHRhbnRhT25saW5lIGZyb20gJy4uL2NvbXBvbmVudHMvQ29uc3VsdGFudGFPbmxpbmUvY29uc3VsdGFudGFPbmxpbmUnXHJcbmltcG9ydCBTZXJ2aWNpaUNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL3NlcnZpY2lpL3NlcnZpY2lpLWNvbnRhaW5lcidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuY29uc3QgdGl0bGUgPSBcIkF2b2NhdCBCcmFzb3YgRG9ydVwiIFxyXG5jb25zdCBkZXNjcmlwdGlvbiA9IFwiXCJcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG4gICAgICA8TmV4dFNlbyB0aXRsZSA9IHt0aXRsZX0gZGVzY3JpcHRpb24gPXtkZXNjcmlwdGlvbn0vPlxyXG4gICAgICBcclxuICAgICAgPEZpcnN0U2VjdGlvbiAvPlxyXG4gICAgICA8U2VydmljaWlDb250YWluZXIgLz5cclxuICAgICAgPENvbnN1bHRhbnRhT25saW5lIC8+XHJcbiAgICAgIFxyXG4gICAgICBcclxuXHJcbjxzdHlsZSBnbG9iYWwganN4PntgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5ib2R5e1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICBoZWFkZXIsIHNlY3Rpb24sIC5maXJzdC1zZWN0aW9uLCAuc2Vjb25kLXNlY3Rpb24sICNjb25zdWx0YW50YS1vbmxpbmV7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIFxyXG4gIGJvZHksIC5maXJzdC1zZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kMS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5maXJzdC1zZWN0aW9uIC5jb250ZW50OmZpcnN0LWNoaWxke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcblxyXG4gIC5maXJzdC1zZWN0aW9uIC5jb250ZW50e1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGZvbnQtZmFtaWx5OnZhcigtLWRlY29yYXRpdmVGb250KTtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogdmFyKC0tc2l0ZS13aWR0aCk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyIDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyIDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaW5hbWlje1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWZvbnQtY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAubmFtZXtcclxuICAgIGNvbG9yOnZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKVxyXG4gIH1cclxuICAuc3BlY2lhbGl6YXJpe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcclxuICB9XHJcblxyXG5cclxuICAuaGVyby10ZXh0e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIC5tYWluLWN0YXtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjFyZW07XHJcbiAgfVxyXG4gICAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLnNlY29uZC1zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvc2VjdGlvbjJcXCBiYWNrZ3JvdW5kLmpwZyk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG5cclxuICBcclxuICAuY2FyZHN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIFxyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlY29yYXRpdmVGb250KTtcclxuICB9XHJcblxyXG4gICNzZXJ2aWNpaXtcclxuICAgIFxyXG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDVweCB2YXIoLS10cmFuc3BhcmVudCk7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIFxyXG4gICAgei1pbmRleDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdHJhbnNwYXJlbnQpO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5zZXJ2aWNpaS1idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLXRyYW5zcGFyZW50KTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWZvbnQtY29sb3IpO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgIC5zZXJ2aWNpaS1idG4sIC5zZXJ2aWNpaS1idG46aG92ZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICB9IFxyXG4gIFxyXG4gIC5zZXJ2aWNpaS1idG4gc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBcclxuICBcclxuICAuc2VydmljaWktZGV0YWxpaXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZpcnN0LXNlY3Rpb24sIC5zZXJ2aWNpaS1kZXRhbGlpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG4gIH1cclxuICBcclxuICAuc2VjdGlvbi1pbWd7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9TZXJ2aWNpaUJHLmpwZyk7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG5cclxuICAuc2VjdGlvbi10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLnNlY3Rpb24taGVhZCwgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBjb2xvcjogdmFyKCAtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcclxuICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgLm1hcG91dGVye1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xyXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLnRyYW5zcGFyZW50LWNhcmQge1xyXG4gICBcclxuICAgIFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuYH08L3N0eWxlPlxyXG5cclxuPC8+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==