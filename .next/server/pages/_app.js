/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/base/store/authSlice.js":
/*!************************************************!*\
  !*** ./src/components/base/store/authSlice.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authSlice\": () => (/* binding */ authSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"loginSuccess\": () => (/* binding */ loginSuccess),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"selectUser\": () => (/* binding */ selectUser)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    email: \"email\",\n    password: \"password\",\n    number: \"number\",\n    initialState: {\n        user: null\n    },\n    reducers: {\n        loginSuccess: (state, action)=>{\n            state.user = action.payload;\n        },\n        logout: (state)=>{\n            state.user = null;\n        }\n    }\n});\nconst { loginSuccess , logout  } = authSlice.actions;\nconst selectUser = (state)=>state.user.user;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9iYXNlL3N0b3JlL2F1dGhTbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStDO0FBRXhDLE1BQU1DLFlBQVlELDZEQUFXQSxDQUFDO0lBQ25DRSxNQUFNO0lBQ05DLE9BQU87SUFDUEMsVUFBVTtJQUNWQyxRQUFRO0lBQ1JDLGNBQWM7UUFDWkMsTUFBTSxJQUFJO0lBQ1o7SUFDQUMsVUFBVTtRQUNSQyxjQUFjLENBQUNDLE9BQU9DLFNBQVc7WUFDL0JELE1BQU1ILElBQUksR0FBR0ksT0FBT0MsT0FBTztRQUM3QjtRQUNBQyxRQUFRLENBQUNILFFBQVU7WUFDakJBLE1BQU1ILElBQUksR0FBRyxJQUFJO1FBQ25CO0lBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUFFRSxhQUFZLEVBQUVJLE9BQU0sRUFBRSxHQUFHWixVQUFVYSxPQUFPLENBQUM7QUFFbkQsTUFBTUMsYUFBYSxDQUFDTCxRQUFVQSxNQUFNSCxJQUFJLENBQUNBLElBQUksQ0FBQztBQUVyRCxpRUFBZU4sVUFBVWUsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9zaGl6aS8uL3NyYy9jb21wb25lbnRzL2Jhc2Uvc3RvcmUvYXV0aFNsaWNlLmpzPzQzOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuZXhwb3J0IGNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3VzZXInLFxuICBlbWFpbDogJ2VtYWlsJyxcbiAgcGFzc3dvcmQ6ICdwYXNzd29yZCcsXG4gIG51bWJlcjogJ251bWJlcicsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHVzZXI6IG51bGwsXG4gIH0sXG4gIHJlZHVjZXJzOiB7XG4gICAgbG9naW5TdWNjZXNzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gICAgbG9nb3V0OiAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgbG9naW5TdWNjZXNzLCBsb2dvdXQgfSA9IGF1dGhTbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlciA9IChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2VyO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImF1dGhTbGljZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwibnVtYmVyIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsInJlZHVjZXJzIiwibG9naW5TdWNjZXNzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwibG9nb3V0IiwiYWN0aW9ucyIsInNlbGVjdFVzZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/base/store/authSlice.js\n");

/***/ }),

/***/ "./src/components/base/store/store.js":
/*!********************************************!*\
  !*** ./src/components/base/store/store.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authSlice */ \"./src/components/base/store/authSlice.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        user: _authSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9iYXNlL3N0b3JlL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDWjtBQUV0QyxNQUFNRSxRQUFRRixnRUFBY0EsQ0FBQztJQUMzQkcsU0FBUztRQUNQQyxNQUFNSCxrREFBV0E7SUFDbkI7QUFDRjtBQUVBLGlFQUFlQyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9zaGl6aS8uL3NyYy9jb21wb25lbnRzL2Jhc2Uvc3RvcmUvc3RvcmUuanM/YmE2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSBcIi4vYXV0aFNsaWNlXCI7XG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgdXNlcjogYXV0aFJlZHVjZXIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJhdXRoUmVkdWNlciIsInN0b3JlIiwicmVkdWNlciIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/base/store/store.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_base_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/base/store/store */ \"./src/components/base/store/store.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_4__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n            store: _components_base_store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/jordytshibangu/Documents/PROGRAMMING WORLD /FOSHIZI/src/pages/_app.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jordytshibangu/Documents/PROGRAMMING WORLD /FOSHIZI/src/pages/_app.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jordytshibangu/Documents/PROGRAMMING WORLD /FOSHIZI/src/pages/_app.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNVO0FBQ1k7QUFDRDtBQUVuQyxTQUFTRyxJQUFJLEVBQzFCQyxVQUFTLEVBQ1RDLFdBQVcsRUFBRUMsUUFBTyxFQUFFLEdBQUdELFdBQVcsR0FDckMsRUFBRTtJQUNELHFCQUNFLDhEQUFDSCw0REFBZUE7UUFBQ0ksU0FBU0E7a0JBQ3hCLDRFQUFDTixpREFBUUE7WUFBQ0MsT0FBT0Esb0VBQUtBO3NCQUNwQiw0RUFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9zaGl6aS8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9iYXNlL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7XG4gIENvbXBvbmVudCxcbiAgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9LFxufSkge1xuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiU2Vzc2lvblByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();