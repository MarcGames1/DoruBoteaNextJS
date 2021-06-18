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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GoogleMaps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/components/GoogleMaps/GoogleMaps.tsx";

function GoogleMaps() {
  function assignGmap() {
    setTimeout(() => {
      gmap = "https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Strada Iuliu Maniu 47 Brașov 500091&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
    }, 1000);
  }

  let gmap = "";
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/firstSection/firstSection */ "./components/firstSection/firstSection.tsx");
/* harmony import */ var _components_servicii_servicii_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/servicii/servicii-container */ "./components/servicii/servicii-container.tsx");
/* harmony import */ var _components_ConsultantaOnline_consultantaOnline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ConsultantaOnline/consultantaOnline */ "./components/ConsultantaOnline/consultantaOnline.tsx");


var _jsxFileName = "/mnt/d/Repos/Projects/DoruBoteaNextJS/pages/index.tsx";






function Home() {
  const title = "Avocat Brasov Doru Botea";
  const description = "";
  const imageUrl = 'assets/images/background1.jpg';
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb3J1Ym90ZWEvLi9jb21wb25lbnRzL0NvbnN1bHRhbnRhT25saW5lL0Zvcm0vZm9ybS5qc3giLCJ3ZWJwYWNrOi8vZG9ydWJvdGVhLy4vY29tcG9uZW50cy9Db25zdWx0YW50YU9ubGluZS9jb25zdWx0YW50YU9ubGluZS50c3giLCJ3ZWJwYWNrOi8vZG9ydWJvdGVhLy4vY29tcG9uZW50cy9Hb29nbGVNYXBzL0dvb2dsZU1hcHMudHN4Iiwid2VicGFjazovL2RvcnVib3RlYS8uL2NvbXBvbmVudHMvZmlyc3RTZWN0aW9uL2ZpcnN0U2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vZG9ydWJvdGVhLy4vY29tcG9uZW50cy9zZXJ2aWNpaS9kYXRlL3NlcnZpY2lpLmpzIiwid2VicGFjazovL2RvcnVib3RlYS8uL2NvbXBvbmVudHMvc2VydmljaWkvc2VydmljaWktY29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9kb3J1Ym90ZWEvLi9jb21wb25lbnRzL3NlcnZpY2lpL3NlcnZpY2lpLXdyYXBwZXIudHN4Iiwid2VicGFjazovL2RvcnVib3RlYS8uL2NvbXBvbmVudHMvc2VydmljaWkvc2VydmljaWlDYXJkLnRzeCIsIndlYnBhY2s6Ly9kb3J1Ym90ZWEvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZG9ydWJvdGVhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9kb3J1Ym90ZWEvZXh0ZXJuYWwgXCJuZXh0LXNlb1wiIiwid2VicGFjazovL2RvcnVib3RlYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL2RvcnVib3RlYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2RvcnVib3RlYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vZG9ydWJvdGVhL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZG9ydWJvdGVhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9kb3J1Ym90ZWEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9kb3J1Ym90ZWEvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiRm9ybSIsIm5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsInBob25lIiwic2V0UGhvbmUiLCJnZHByIiwic2V0R2RwciIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImhlYWRlcnMiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImFsZXJ0IiwicmVzZXRTdGF0ZSIsImVycm9yIiwidGFyZ2V0IiwidmFsdWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXNldCIsIkNvbnN1bHRhbnRhT25saW5lIiwiR29vZ2xlTWFwcyIsImFzc2lnbkdtYXAiLCJzZXRUaW1lb3V0IiwiZ21hcCIsImN1cnJlbnRUZXh0IiwiaW5kZXgiLCJ0ZXh0Q29udGVudCIsIkZpcnNTZWN0aW9uIiwic3RhdGUiLCJzZXRTdGF0ZSIsImNoYW5nZVRleHQiLCJsZW5ndGgiLCJzZXJ2aWNpaSIsImlkIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwicm91dGUiLCJhbHQiLCJTZXJ2aWNpaUNvbnRhaW5lciIsIlNlcnZpY2lpV3JhcHBlciIsIm1hcCIsIm90aGVyU2VjdGlvblByb3BzIiwiU2VydmljaWlDYXJkIiwiSG9tZSIsInRpdGxlIiwiaW1hZ2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFLQSxNQUFNQSxJQUFJLEdBQUcsTUFBSTtBQUNiLFFBQU07QUFB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Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEZvcm0gPSAoKT0+e1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gIHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2dkcHIsIHNldEdkcHJdPXVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmchXCIpXHJcbiAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgY29tbWVudHMsXHJcbiAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgZ2RwcixcclxuICAgICAgICBzdWJtaXR0ZWRcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcIkhBTkRMRSBTVUJNSVQgTUFJIEpPUyBFIERBVEFcIilcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgaWYoZGF0YS5uYW1lICYmIGRhdGEuZW1haWwgJiYgZGF0YS5jb21tZW50cyAmJiBkYXRhLnBob25lICYmIGRhdGEuZ2RwciAmJiBkYXRhLnN1Ym1pdHRlZCA9PWZhbHNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFJQ0kgU1VOVCBEQVRFTEVcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvY29udGFjdCcsZGF0YSwgaGVhZGVycylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KFwiVmEgbXVsdHVtaW0sIHZhIHZvbSBjb250YWN0YSBjdXJhbmRcIik7XHJcbiAgICAgICAgICByZXNldFN0YXRlKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoXCJGb3JtdWxhcnVsIG51IHMtYSB0cmltaXMhISEhXCIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIC8vIGUucmVzZXQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSEFORExFIFNVQk1JVC9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIH0gZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGFsZXJ0KFwiZXJvYXJlIGluIElGXCIpXHJcbiAgICAgIH1cclxuICAgICAgfVxyXG5cclxuIGNvbnN0IHJlc2V0U3RhdGU9KCk9Pntcclxuc2V0TmFtZShcIlwiKVxyXG5zZXRFbWFpbChcIlwiKVxyXG5zZXRQaG9uZShcIlwiKVxyXG5zZXRHZHByKFwiXCIpXHJcbnNldFN1Ym1pdHRlZChmYWxzZSlcclxuIH0gICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCIgaWQ9XCJjb250YWN0XCI+XHJcbiAgICA8aDI+Q29udGFjdCBSYXBpZDwvaDI+XHJcbiAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgLy8gIGFjdGlvbj1cIi9wYWdlcy9zdWNjZXNzLmh0bWxcIiBcclxuICAgICBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJudW1lXCI+TnVtZTwvbGFiZWw+XHJcblxyXG4gICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwibnVtZVwiIG5hbWU9XCJudW1lXCIgcGxhY2Vob2xkZXI9XCJOdW1lIHNpIFByZW51bWVcIiBvbkNoYW5nZT17KGUpPT57c2V0U3VibWl0dGVkKGZhbHNlKSwgc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9fS8+XHJcblxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJBZHJlc2EgZGUgZW1haWxcIiBvbkNoYW5nZT17KGUpPT57c2V0U3VibWl0dGVkKGZhbHNlKSwgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfX0vPlxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+VGVsZWZvbjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZWxcIiBuYW1lPVwicGhvbmVcIiBpZD1cInBob25lXCIgcGF0dGVybj1cIlswLTldezEwfVwiIHBsYWNlaG9sZGVyPVwiVGVsZWZvblwiIG9uQ2hhbmdlPXsoZSk9PntzZXRQaG9uZShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgPHRleHRhcmVhIHJlcXVpcmVkIG5hbWU9XCJjb21tZW50c1wiIGlkPVwiY29tbWVudHNcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaWV0aSBDYXV6YVwiIG9uQ2hhbmdlPXsoZSk9PntzZXRDb21tZW50cyhlLnRhcmdldC52YWx1ZSl9fSAvPlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgPGxhYmVsIGlkPVwiZ2Rwci1sYWJlbFwiIGh0bWxGb3I9XCJnZHByXCI+PGEgaHJlZj1cIi9wYWdlcy9nZHByLmh0bWxcIj5TdW50IGRlIGFjb3JkIGN1IHBvbGl0aWNhIGRlIHByZWx1Y3JhcmVcclxuICAgICAgICAgICAgICAgICAgICBhIGRhdGVsb3I8L2E+PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJnZHByXCIgb25DaGFuZ2U9eyhlKT0+e3NldEdkcHIoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZnJvbS1yaWdodFwiIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICBvbkNsaWNrPXsoZSk9PntoYW5kbGVTdWJtaXQoZSlcclxuICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIikucmVzZXQoKVxyXG4gICAgICAgICB9fSA+IFRyaW1pdGV0aSE8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuPC9tYWluPlxyXG48Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybSIsImltcG9ydCBHb29nbGVNYXBzIGZyb20gJy4uL0dvb2dsZU1hcHMvR29vZ2xlTWFwcydcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9Gb3JtL2Zvcm0nXHJcblxyXG5jb25zdCBDb25zdWx0YW50YU9ubGluZSA9ICgpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICA8c3R5bGUganN4PntgICAgIFxyXG5cclxuXHJcbiNjb25zdWx0YW50YS1vbmxpbmV7XHJcbiAgICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgXHJcbn1cclxuXHJcbiNjb25zdWx0YW50YS1vbmxpbmUgLmJhY2tncm91bmR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuI2NvbnN1bHRhbnRhLW9ubGluZSAuZm9ybS1jb250YWluZXIsICNjb25zdWx0YW50YS1vbmxpbmUgLmRlc2NyaXB0aW9ue1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbn1cclxuI2NvbnN1bHRhbnRhLW9ubGluZSAuZm9ybS1jb250YWluZXJ7XHJcbiAgIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICAgZ3JpZC1yb3c6IDEgLyAyO1xyXG4gXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC1mYW1pbHk6dmFyKC0tZGVjb3JhdGl2ZUZvbnQpO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgXHJcbn1cclxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xyXG4gICAgXHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDJweDtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hlYXQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xyXG59XHJcbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICwgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbn1cclxuaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wMDAwMSlcclxufVxyXG5cclxuZm9ybSBpbnB1dCwgZm9ybSB0ZXh0YXJlYXtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKSAycHggc29saWQ7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMgfiBsYWJlbCxcclxuLmZvcm0tY29udGFpbmVyIHRleHRhcmVhOmZvY3VzIH4gbGFiZWwsXHJcbi5mb3JtLWNvbnRhaW5lciBpbnB1dDp2YWxpZCB+IGxhYmVsLFxyXG4uZm9ybS1jb250YWluZXIgdGV4dGFyZWE6dmFsaWQgfiBsYWJlbCB7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmxhYmVse1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2dkcHItbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnRleHRhcmVhLCBpbnB1dCwgbGFiZWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IHZhcigtLWludikgc29saWQgMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWRlY29yYXRpdmVGb250KTtcclxufVxyXG50ZXh0YXJlYXtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgXHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhmciAxZnI7XHJcbn1cclxuZmllbGRzZXQgbGFiZWwgYXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgdHJhbnNpdGlvbjogY29sb3IgLjVzO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5maWVsZHNldCBsYWJlbCBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBzb2xpZCB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcikgO1xyXG4gICAgY29sb3I6Ymx1ZTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGZvcm0gaW5wdXQsIC5mb3JtLWNvbnRhaW5lciBidXR0b257XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuYH08L3N0eWxlPlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiY29uc3VsdGFudGEtb25saW5lXCI+XHJcblxyXG5cclxuPG1haW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gY29udGVudFwiPlxyXG4gICAgPG1haW4+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZFwiPkFWT0NBVCBET1JVIEJPVEVBPC9oMj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkXCI+Q09OU1VMVEFOVEEgSlVSSURJQ0EgT05MSU5FITwvaDM+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZFwiPkFQUk9BUEUgREUgRFVNTkVBVk9BU1RSQSBPUklVTkRFIEFUSSBGSSE8L2g0PlxyXG4gICAgPC9tYWluPlxyXG5cclxuICAgIDxtYWluIGNsYXNzTmFtZT1cInBhcmFncmFwaHNcIj5cclxuXHJcbiAgICAgICAgPHA+Q2FiaW5ldCBBdm9jYXQgRG9ydSBCb3RlYSB2aW5lIMOubiDDrm50w6JtcGluYXJlYSBuZXZvaWxvciBjbGllbsWjaWxvciwgcHJpbiBhc2lndXJhcmVhIGRlIHNlcnZpY2lpIGRlXHJcbiAgICAgICAgICAgIGNvbnN1bHRhbsWjxIMganVyaWRpY8SDIG9ubGluZS48L3A+XHJcblxyXG4gICAgICAgIDxwPiBBY2VzdCB0aXAgZGUgc2VydmljaWkgZGUgY29uc3VsdGFuxaPEgyBhc2lndXLEgyBvIHJlem9sdmFyZSBmYWNpbMSDIMWfaSByYXBpZMSDIHBlbnRydSBhbnVtaXRlIHByb2JsZW1lXHJcbiAgICAgICAgICAgIGp1cmlkaWNlXHJcbiAgICAgICAgICAgIMWfaSBvZmVyxIMgbyBzZXJpZSBkZSBhdmFudGFqZSBjdW0gYXIgZmkgZXZpdGFyZWEgZGVwbGFzxINyaWkgY3UgcmV6dWx0YXR1bCBmaXJlc2MgYWwgZWNvbm9taWVpIGRlXHJcbiAgICAgICAgICAgIHRpbXAsXHJcbiAgICAgICAgICAgIGNvc3R1cmkgbWFpIHNjxIN6dXRlIMWfaSBudSDDrm4gdWx0aW11bCByw6JuZCwgYXbDom5kIMOubiB2ZWRlcmUgY29udGV4dHVsIHNvY2lhbCwgcMSDc3RyYXJlYSB1bmVpXHJcbiAgICAgICAgICAgIGRpc3RhbsWjxINyaVxyXG4gICAgICAgICAgICBzb2NpYWxlLjwvcD5cclxuXHJcbiAgICAgICAgPHA+IFNvY2lldGF0ZWEgw65uIGNhcmUgdHLEg2ltIHNlIGFmbMSDIMOubnRyLW8gY29udGludcSDIGV2b2x1xaNpZSwgaWFyIMOubiBwcmV6ZW50IGHFn2EgbnVtaXR1bCBwcm9jZXMgZGVcclxuICAgICAgICAgICAgZGlnaXRhbGl6YXJlLCBjdXByaW5kZSB0b3QgbWFpIG11bHRlIHNlY3RvYXJlIGFsZSB2aWXFo2lpIGVjb25vbWljbyBzb2NpYWxlIMWfaSBhc2lndXLEgyBvIHBhbGV0xIMgZGluXHJcbiAgICAgICAgICAgIGNlIMOubiBjZVxyXG4gICAgICAgICAgICBtYWkgbGFyZ8SDIGRlIHNlcnZpY2lpLjwvcD5cclxuXHJcbiAgICA8L21haW4+XHJcbjwvbWFpbj5cclxuXHJcbjxGb3JtLz5cclxuPEdvb2dsZU1hcHMgLz5cclxuPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25zdWx0YW50YU9ubGluZSIsIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR29vZ2xlTWFwcygpIHtcclxuXHJcbiAgZnVuY3Rpb24gYXNzaWduR21hcCgpe1xyXG4gICAgc2V0VGltZW91dCgoKT0+XHJcbiAgICB7IGdtYXA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcz93aWR0aD02MDAmYW1wO2hlaWdodD00MDAmYW1wO2hsPWVuJmFtcDtxPVN0cmFkYSBJdWxpdSBNYW5pdSA0NyBCcmHImW92IDUwMDA5MSZhbXA7dD0mYW1wO3o9MTQmYW1wO2llPVVURjgmYW1wO2l3bG9jPUImYW1wO291dHB1dD1lbWJlZFwifSwgMTAwMCk7XHJcbiAgICBcclxuICB9XHJcbiBcclxubGV0IGdtYXAgPVwiXCJcclxuYXNzaWduR21hcCgpXHJcbiAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgICAgIFxyXG4gICAgICAubWFwb3V0ZXIge1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcclxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5nbWFwX2NhbnZhcyB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmdtYXBfaWZyYW1lIHtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXBvdXRlclwiPlxyXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZ21hcF9jYW52YXNcIj5cclxuICAgICAgICAgICAgPGlmcmFtZSBsb2FkaW5nPVwibGF6eVwiIGNsYXNzTmFtZT1cImdtYXBfaWZyYW1lXCIgd2lkdGg9XCIxMDAlXCIgZnJhbWVCb3JkZXI9XCIwXCIgc2Nyb2xsaW5nPVwibm9cIlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNyYz17Z21hcH0gPjwvaWZyYW1lPlxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gIFxyXG4gICAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICIsIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5sZXQgY3VycmVudFRleHQgPVwiXCJcclxubGV0IGluZGV4ID0gMDtcclxuY29uc3QgdGV4dENvbnRlbnQgPSBbXCIgZHJlcHQgcGVuYWxcIiwgXCIgZHJlcHR1bCBmYW1pbGllaVwiLCBcIiBkcmVwdCBjaXZpbFwiLCAgXCIgbWFscHJheGlzIG1lZGljYWxcIiwgXCIgZHJlcHR1bCBtdW5jaWlcIiwgXCIgZXhlY3V0YXJpIHNpbGl0ZVwiIF07XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEZpcnNTZWN0aW9uKCl7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXT11c2VTdGF0ZSh0ZXh0Q29udGVudFswXSlcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBjaGFuZ2VUZXh0ID0gKCk9PntcclxuICAgICAgICAoaW5kZXggPCB0ZXh0Q29udGVudC5sZW5ndGgtMSkgPyBpbmRleCsrIDogaW5kZXg9MDtcclxuICAgICAgICBjdXJyZW50VGV4dCA9ICB0ZXh0Q29udGVudFtpbmRleF1cclxuICAgICAgICBzZXRTdGF0ZShjdXJyZW50VGV4dClcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoY2hhbmdlVGV4dCwgMzAwMCk7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmlyc3Qtc2VjdGlvblwiIGlkPVwidG9wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItNCBoZXJvLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICBBdm9jYXQgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPkRvcnUgQm90ZWE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIGNsYXNzTmFtZT1cIm15LTQgZC1ibG9jayBsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteS00IGQtYmxvY2sgc3BlY2lhbGl6YXJpIFwiPlByb2Zlc2lvbmFsaXNtIHNpIEluY3JlZGVyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrIG10LTQgZGluYW1pY1wiPntzdGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1haW4tY3RhIGJ0biBidG4xIGZyb20tbGVmdFwiIGhyZWY9XCIjc2VydmljaWlcIj52ZWRldGkgbWFpIG11bHRlPC9hPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9zZWN0aW9uPiAgXHJcbiAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc1NlY3Rpb24iLCJjb25zdCBzZXJ2aWNpaSA9W1xyXG4gICAge1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmFtZTogXCJEcmVwdCBQZW5hbFwiLFxyXG4gICAgICAgIGljb246IFwiL2Fzc2V0cy9pbWFnZXMvc3ZnL3BlbmFsLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFzaXN0ZW7Im8SDIMiZaSByZXByZXplbnRhcmUganVyaWRpY8SDIMOubiBmYXphIGRlIHVybcSDcmlyZSBwZW5hbMSDIMiZaSDDrm4gZmHIm2EgaW5zdGFuyJtlbG9yIGRlIGp1ZGVjYXTEgyBhdMOidCBwZW50cnUgcGVyc29hbmUgY2VyY2V0YXRlIChzdXNwZWPIm2ksIGluY3VscGHIm2kpIGPDonQgyJlpIHBlbnRydSBwxINyyJtpIGNpdmlsZS92xIN0xINtYXRlLlwiLFxyXG4gICAgICAgIHJvdXRlOlwiIC9kcmVwdC1wZW5hbFwiLFxyXG4gICAgICAgIGFsdDpcImljb24gRHJlcHQgUGVuYWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoyLFxyXG4gICAgICAgIG5hbWU6IFwiRHJlcHR1bCBGYW1pbGllaVwiLFxyXG4gICAgICAgIGljb246IFwiL2Fzc2V0cy9pbWFnZXMvc3ZnL2ZhbWlsaWUucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJDb25zdWx0YW7Im8SDIMiZaSBhc2lzdGVuyJvEgyBqdXJpZGljYSDDrm4gY2F1emVsZSBkZSBkaXZvcnQsIHN0YWJpbGlyZWEgZG9taWNpbGl1bHVpIGNvcGlsdWx1aSwgZXhlcmNpdGFyZWEgYXV0b3JpdGF0aWkgcGFyaW50ZXN0aSwgcGVuc2llIGRlIGludHJldGluZXJlIGNhdCBzaSBwcm9ncmFtIGRlIHZpeml0YS4gUGFydGFqIGJ1bnVyaSBjb211bmUgaW4gZmF0YSBpbnN0YW50ZWxvciBkZSBqdWRlY2F0YSBjYXQgc2kgYSB0dXR1cm9yIGF1dG9yaXRhdGlsb3IvaW5zdGl0dXRpaWxvciBwdWJsaWNlLlwiLFxyXG4gICAgICAgIHJvdXRlOiBcIi9kcmVwdHVsLWZhbWlsaWVpXCIsXHJcbiAgICAgICAgYWx0OlwiaWNvbiBEcmVwdCBQZW5hbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjMsXHJcbiAgICAgICAgbmFtZTogXCJEcmVwdCBDaXZpbFwiLFxyXG4gICAgICAgIGljb246IFwiL2Fzc2V0cy9pbWFnZXMvc3ZnL2NpdmlsLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiQXNpc3RlbsibxIMsIGNvbnN1bHRhbsibxIMgyJlpIHJlcHJlemVudGFyZSBqdXJpZGljxIMgw65uIHRvYXRlIHJhbXVyaWxlIGRyZXB0dWx1aSBjaXZpbCwgbGl0aWdpaSDDrm50cmUgcHJvZmVzaW9uaciZdGksIGNvbnRyYWN0ZSwgc3VjY2VzaXVuaSwgZGl2b3LImywgcGFydGFqLCBkcmVwdHVyaSBuZXBhdHJpbW9uaWFsZSwgZHJlcHQgc29jaWV0YXIuXCIsXHJcbiAgICAgICAgcm91dGU6IFwiL2RyZXB0LWNpdmlsXCIsXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjQsXHJcbiAgICAgICAgbmFtZTogXCJNYWxwcmF4aXMgTWVkaWNhbFwiLFxyXG4gICAgICAgIGljb246IFwiL2Fzc2V0cy9pbWFnZXMvc3ZnL21hbHByYXhpcy5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkFzaXN0ZW7Im8SDIGp1cmlkaWPEgyDDrm4gZmHIm2EgQ29sZWdpdWx1aSBNZWRpY2lsb3IsIGPDonQgyJlpIHBlIGR1cmF0YSB1bnVpIGV2ZW50dWFsIGxpdGlnaXUgw65uIGZhyJthIGluc3RhbsibZWxvciBqdWRlY8SDdG9yZciZdGlcIixcclxuICAgICAgICByb3V0ZTogXCIvbWFscHJheGlzLW1lZGljYWxcIixcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6NSxcclxuICAgICAgICBuYW1lOiBcIkRyZXB0dWwgTXVuY2lpXCIsXHJcbiAgICAgICAgaWNvbjogXCIvYXNzZXRzL2ltYWdlcy9zdmcvbXVuY2EucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJDb25zdWx0YW7Im8SDIHBlbnRydSBhbmdhamF0b3JpIMiZaSBhbmdhamHIm2ksIGFzaXN0ZW7Im8SDIMiZaSByZXByZXplbnRhcmUgw65uIHZlZGVyZWEgc29sdcibaW9uxINyaWkgbGl0aWdpaWxvciBkZSBtdW5jxIMuXCIsXHJcbiAgICAgICAgcm91dGU6IFwiL2RyZXB0dWwtbXVuY2lpXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6NixcclxuICAgICAgICBuYW1lOiBcIkV4ZWN1dGFyaSBTaWxpdGVcIixcclxuICAgICAgICBpY29uOiBcIi9hc3NldHMvaW1hZ2VzL3N2Zy9leGVjdXRhcmkucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJBc2lzdGVuyJvEgywgY29uc3VsdGFuyJvEgyDImWkgcmVwcmV6ZW50YXJlIGp1cmlkaWPEgyDDrm4gdG9hdGUgcmFtdXJpbGUgZHJlcHR1bHVpIGNpdmlsLCBsaXRpZ2lpIMOubnRyZSBwcm9mZXNpb25pyJl0aSwgY29udHJhY3RlLCBzdWNjZXNpdW5pLCBkaXZvcsibLCBwYXJ0YWosIGRyZXB0dXJpIG5lcGF0cmltb25pYWxlLCBkcmVwdCBzb2NpZXRhci5cIixcclxuICAgICAgICByb3V0ZTogXCIvZXhlY3V0YXJpXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6NyxcclxuICAgICAgICBuYW1lOiBcIkRyZXB0IEltb2JpbGlhclwiLFxyXG4gICAgICAgIGljb246IFwiL2Fzc2V0cy9pbWFnZXMvc3ZnL2ltb2JpbGlhci5wbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkNhYmluZXQgQXZvY2F0IERvcnUgQm90ZWEgQnJhc292IHByb2Zlc2VhemEgc2kgaW4gRHJlcHQgSW1vYmlsaWFyLCB0cmFuemFjdGlpIGltb2JpbGlhcmUsIGRyZXB0dWwgY29uc3RydWN0aWlsb3Igc2kgYXNpZ3VyYSBjb25zaWxpZXJlIHNvY2lldGF0aWxvciBjb21lcmNpYWxlIHNpIG1hcmlsb3IgY29tcGFuaWkgZGUgaW52ZXN0aXRpaSwgZ2VzdGlvbmFuZCB0cmFuemFjdGlpIHNpIGxpdGlnaWkgY29tcGxleGUgZGUgbmF0dXJhIGltb2JpbGlhcmEuXCIsXHJcbiAgICAgICAgcm91dGU6IFwiL2ltb2JpbGlhclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjgsXHJcbiAgICAgICAgbmFtZTogXCJEcmVwdCBDb250cmF2ZW50aW9uYWxcIixcclxuICAgICAgICBpY29uOiBcIi9hc3NldHMvaW1hZ2VzL3N2Zy9jb250cmF2ZW50aW9uYWwucG5nXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJBc2lzdGVudGEganVyaWRpY2Egc2kgcmVwcmV6ZW50YXJlIGluIGxpdGlnaWlsZSBjYXJlIGF1IGNhIG9iaWVjdCBhbnVsYXJlYSBwcm9jZXN1bHVpLXZlcmJhbCBkZSBjb250cmF2ZW50aWUgY2EgdXJtYXJlIGEgaW50ZXJ2ZW5pcmlpIHByZXNjcmlwdGllaSByYXNwdW5kZXJpaSBjb250cmF2ZW50aW9uYWxlIHNpIGEgY2FkdWNpdGF0aWkgYWNlc3R1aWE7IE9yaWNlIGFsdGUgYWN0aXZpdGF0aSBkaW4gZG9tZW5pdWwgY29udHJhdmVudGlpbG9yLlwiLFxyXG4gICAgICAgIHJvdXRlOiBcIi9jb250cmF2ZW50aW9uYWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDo5LFxyXG4gICAgICAgIG5hbWU6IFwiRHJlcHQgQmFuY2FyXCIsXHJcbiAgICAgICAgaWNvbjogXCIvYXNzZXRzL2ltYWdlcy9zdmcvYmFuY2FyLnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiQ2FiaW5ldHVsIGRlIGF2b2NhdHVyYSDigJxEb3J1IEJvdGVh4oCdIG9mZXJpbSBwYXJ0ZW5lcmlsb3Igbm/ImXRyaSB1biBzZXJ2aWNpdSBkZWRpY2F0IGRlIGNvbnN1bHRhbsibxIMganVyaWRpY8SDIMOubiByZWxhyJtpYSBiYW5jYVwiLFxyXG4gICAgICAgIHJvdXRlOiBcIi9iYW5jYXJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoxMCxcclxuICAgICAgICBuYW1lOiBcIkRyZXB0IEFkbWluaXN0cmF0aXZcIixcclxuICAgICAgICBpY29uOiBcIi9hc3NldHMvaW1hZ2VzL3N2Zy9hZG1pbmlzdHJhdGl2LnBuZ1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiQWNlYXN0xIMgbWF0ZXJpZSByZWdsZW1lbnRlYXrEgyBkcmVwdHVsIHBlcnNvYW5laSBjYXJlIHNlIGNvbnNpZGVyxIMgdsSDdMSDbWF0xIMgw65udHItdW4gZHJlcHQgYWwgc8SDdSBvcmkgw65udHItdW4gaW50ZXJlcyBsZWdpdGltLCBkZSBjxIN0cmUgbyBhdXRvcml0YXRlIHB1YmxpY8SDXCIsXHJcbiAgICAgICAgcm91dGU6IFwiL2FkbWluaXN0cmF0aXZcIlxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VydmljaWkiLCJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFNlcnZpY2lpV3JhcHBlciBmcm9tICcuL3NlcnZpY2lpLXdyYXBwZXInXHJcblxyXG5cclxuY29uc3QgU2VydmljaWlDb250YWluZXIgPSgpID0+IHtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgPD5cclxuXHJcbjxzZWN0aW9uIGNsYXNzTmFtZT1cInNlcnZpY2lpLWRldGFsaWlcIj5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJzZWN0aW9uLWltZ1wiPjwvbWFpbj5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+PC9tYWluPlxyXG4gICAgICAgIDxoMj5TZXJ2aWNpaTwvaDI+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiaDEtc2VwYXJhdG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9pbWFnZXMvZGVjb3JhdGl2ZS9oMS1zZXBhcmF0b3ItY3VzdG9tLWljb24tMS5wbmdcIiBhbHQ9XCJpbWFnZVwid2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBvYmplY3RGaXQ9IFwiY29udGFpblwiLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L21haW4+XHJcbjxTZXJ2aWNpaVdyYXBwZXIgLz5cclxuPG1haW4gY2xhc3NOYW1lPVwiaDEtc2VwYXJhdG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9pbWFnZXMvZGVjb3JhdGl2ZS9oMS1zZXBhcmF0b3ItY3VzdG9tLWljb24tMS5wbmdcIiBhbHQ9XCJpbWFnZVwid2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBvYmplY3RGaXQ9IFwiY29udGFpblwiLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L21haW4+XHJcbjwvc2VjdGlvbj5cclxuPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNpaUNvbnRhaW5lciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzZXJ2aWNpaSBmcm9tICcuL2RhdGUvc2VydmljaWkuanMnO1xyXG5cclxuaW1wb3J0IFNlcnZpY2lpQ2FyZCBmcm9tICcuL3NlcnZpY2lpQ2FyZCdcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIGZ1bmN0aW9uIFNlcnZpY2lpV3JhcHBlcigpIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoc2VydmljaWkpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAge3N0YXRlLm1hcCgoeyBpZCwgLi4ub3RoZXJTZWN0aW9uUHJvcHMgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTZXJ2aWNpaUNhcmQga2V5PXtpZH0gey4uLm90aGVyU2VjdGlvblByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIFNlcnZpY2lpV3JhcHBlcjsiLCJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2lpQ2FyZCAoe2ljb24sIG5hbWUsIGRlc2NyaXB0aW9uLCByb3V0ZX0pIHtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiY29sLWxnLTMgIGNvbC1tZC02IGNvbC1zbS0xMiBtYi0zIHNlcnZpY2lpLWNvbnRhaW5lciBjYXJkIHRyYW5zcGFyZW50LWNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWQgY2FyZC1oZWFkZXJcIj57bmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cIiBhbGlnbi1zZWxmLWNlbnRlciBjYXJkLWltZy10b3BcIiBzcmM9e2ljb259IGFsdD1cIkljb25zIE9mIFNlcnZpY2lcIiB3aWR0aD17NTB9IGhlaWdodD17MTB9IGxheW91dD1cInJlc3BvbnNpdmVcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgcXVhbGl0eT17MTAwfS8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGNhcmQtYm9keVwiIGlkPXtuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFwaHNcIj4ge2Rlc2NyaXB0aW9ufSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4xIGZyb20tbGVmdCBkLWJsb2NrXCIgaHJlZj17cm91dGV9PmNpdGl0aSBtYWkgbXVsdDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgICB9IiwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHtOZXh0U2VvfSBmcm9tICduZXh0LXNlbydcclxuaW1wb3J0IEZpcnN0U2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2ZpcnN0U2VjdGlvbi9maXJzdFNlY3Rpb24nXHJcbmltcG9ydCBTZXJ2aWNpaUNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL3NlcnZpY2lpL3NlcnZpY2lpLWNvbnRhaW5lcidcclxuaW1wb3J0IENvbnN1bHRhbnRhT25saW5lIGZyb20gJy4uL2NvbXBvbmVudHMvQ29uc3VsdGFudGFPbmxpbmUvY29uc3VsdGFudGFPbmxpbmUnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuY29uc3QgdGl0bGUgPSBcIkF2b2NhdCBCcmFzb3YgRG9ydSBCb3RlYVwiIFxyXG5jb25zdCBkZXNjcmlwdGlvbiA9IFwiXCJcclxuY29uc3QgaW1hZ2VVcmwgPSAnYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kMS5qcGcnXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbjxIZWFkPiBcclxuICA8bGlua1xyXG4gICAgcmVsPVwicHJlbG9hZFwiXHJcbiAgICBocmVmPXtpbWFnZVVybH1cclxuICAgIGFzPVwiaW1hZ2VcIlxyXG4gIC8+XHJcbjwvSGVhZD5cclxuICAgICAgPE5leHRTZW8gdGl0bGUgPSB7dGl0bGV9IGRlc2NyaXB0aW9uID17ZGVzY3JpcHRpb259Lz5cclxuICAgICAgXHJcbiAgICAgIDxGaXJzdFNlY3Rpb24gLz5cclxuICAgICAgPFNlcnZpY2lpQ29udGFpbmVyIC8+XHJcbiAgICAgIDxDb25zdWx0YW50YU9ubGluZSAvPlxyXG4gICAgICBcclxuICAgICAgXHJcblxyXG48c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuYm9keXtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgaGVhZGVyLCBzZWN0aW9uLCAuZmlyc3Qtc2VjdGlvbiwgLnNlY29uZC1zZWN0aW9uLCAjY29uc3VsdGFudGEtb25saW5le1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBcclxuICBib2R5LCAuZmlyc3Qtc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDEuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZmlyc3Qtc2VjdGlvbiAuY29udGVudDpmaXJzdC1jaGlsZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuICAuZmlyc3Qtc2VjdGlvbiAuY29udGVudHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBmb250LWZhbWlseTp2YXIoLS1kZWNvcmF0aXZlRm9udCk7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IHZhcigtLXNpdGUtd2lkdGgpO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlciA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuICBcclxuICAuZGluYW1pY3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb250LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgLm5hbWV7XHJcbiAgICBjb2xvcjp2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcilcclxuICB9XHJcbiAgLnNwZWNpYWxpemFyaXtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmhlcm8tdGV4dHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gIH1cclxuICAubWFpbi1jdGF7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS4xcmVtO1xyXG4gIH1cclxuICAgIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5zZWNvbmQtc2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3NlY3Rpb24yXFwgYmFja2dyb3VuZC5qcGcpO1xyXG5cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmNhcmRze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBcclxuICAgIGdhcDogNXB4O1xyXG4gICAgXHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWNvcmF0aXZlRm9udCk7XHJcbiAgfVxyXG5cclxuICAjc2VydmljaWl7XHJcbiAgICBcclxuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCA1cHggdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICBcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLXRyYW5zcGFyZW50KTtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuc2VydmljaWktYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci10cmFuc3BhcmVudCk7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1mb250LWNvbG9yKTtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gICAuc2VydmljaWktYnRuLCAuc2VydmljaWktYnRuOmhvdmVye1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgfSBcclxuICBcclxuICAuc2VydmljaWktYnRuIHNwYW57XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuXHJcbiAgXHJcbiAgXHJcbiAgLnNlcnZpY2lpLWRldGFsaWl7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5maXJzdC1zZWN0aW9uLCAuc2VydmljaWktZGV0YWxpaXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuICB9XHJcbiAgXHJcbiAgLnNlY3Rpb24taW1ne1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvU2VydmljaWlCRy5qcGcpO1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLWhlYWQsIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcclxuXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgY29sb3I6IHZhciggLS1zZWNvbmRhcnktZm9udC1jb2xvcik7XHJcbiAgIFxyXG4gIH1cclxuXHJcblxyXG4gIC5tYXBvdXRlcntcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcclxuICAgIGdyaWQtcm93OiAyIC8gMztcclxuICB9XHJcblxyXG4gIFxyXG4gIC50cmFuc3BhcmVudC1jYXJkIHtcclxuICAgXHJcbiAgICBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbmB9PC9zdHlsZT5cclxuXHJcbjwvPlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VvXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==