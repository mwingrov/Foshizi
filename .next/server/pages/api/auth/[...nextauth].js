"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const { email , password  } = credentials;\n                if (!email) {\n                    return null;\n                }\n                var myHeaders = new Headers();\n                myHeaders.append(\"Content-Type\", \"application/json\");\n                var raw = JSON.stringify({\n                    email: \"heritier@gmail.com\",\n                    password: \"123456\"\n                });\n                var requestOptions = {\n                    method: \"POST\",\n                    headers: myHeaders,\n                    body: raw,\n                    redirect: \"follow\"\n                };\n                let user;\n                try {\n                    const response = await fetch(\"https://foshizi.herokuapp.com/api/loginuser\", requestOptions);\n                    const data = await response.json();\n                    const { result  } = data;\n                    user = {\n                        id: result._id,\n                        phone: \"089 848 8484\",\n                        name: result.name,\n                        email: result.email,\n                        address: \"13 Bloemendal Mowbray\",\n                        zip: \"7700\",\n                        role: \"Frontend Software Engineer\",\n                        accessToken: \"Y9/yr3NfXj4mKcp1PxX1Bnshb3Z7X+nHXwZWVkU3Uas=\"\n                    };\n                } catch (error) {\n                    throw new Error(error.message);\n                }\n                if (user) {\n                    return user;\n                } else {\n                    return null;\n                }\n            }\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    secret: process.env.JWT_SECRET,\n    session: {\n        strategy: \"jwt\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUN1QjtBQUNVO0FBQzNELE1BQU1HLGNBQWM7SUFDekJDLFdBQVc7UUFDVEYsc0VBQW1CQSxDQUFDO1lBQ2xCRyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLFVBQVU7b0JBQUVDLE9BQU87b0JBQVlDLE1BQU07b0JBQVFDLGFBQWE7Z0JBQVM7Z0JBQ25FQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUcsV0FBVU4sV0FBVyxFQUFFTyxHQUFHLEVBQUU7Z0JBQ2hDLE1BQU0sRUFBRUMsTUFBSyxFQUFFSCxTQUFRLEVBQUUsR0FBR0w7Z0JBQzVCLElBQUksQ0FBQ1EsT0FBTztvQkFDVixPQUFPLElBQUk7Z0JBQ2IsQ0FBQztnQkFFRCxJQUFJQyxZQUFZLElBQUlDO2dCQUNwQkQsVUFBVUUsTUFBTSxDQUFDLGdCQUFnQjtnQkFFakMsSUFBSUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUN2Qk4sT0FBTztvQkFDUEgsVUFBVTtnQkFDWjtnQkFFQSxJQUFJVSxpQkFBaUI7b0JBQ25CQyxRQUFRO29CQUNSQyxTQUFTUjtvQkFDVFMsTUFBTU47b0JBQ05PLFVBQVU7Z0JBQ1o7Z0JBQ0EsSUFBSUM7Z0JBQ0osSUFBSTtvQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLCtDQUNBUDtvQkFFRixNQUFNUSxPQUFPLE1BQU1GLFNBQVNHLElBQUk7b0JBRWhDLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdGO29CQUNuQkgsT0FBTzt3QkFDTE0sSUFBSUQsT0FBT0UsR0FBRzt3QkFDZEMsT0FBTzt3QkFDUDdCLE1BQU0wQixPQUFPMUIsSUFBSTt3QkFDakJTLE9BQU9pQixPQUFPakIsS0FBSzt3QkFDbkJxQixTQUFTO3dCQUNUQyxLQUFLO3dCQUNMQyxNQUFNO3dCQUNOQyxhQUFhO29CQUNmO2dCQUNGLEVBQUUsT0FBT0MsT0FBTztvQkFDZCxNQUFNLElBQUlDLE1BQU1ELE1BQU1FLE9BQU8sRUFBRTtnQkFDakM7Z0JBRUEsSUFBSWYsTUFBTTtvQkFDUixPQUFPQTtnQkFDVCxPQUFPO29CQUNMLE9BQU8sSUFBSTtnQkFDYixDQUFDO1lBQ0g7UUFDRjtRQUNBekIsaUVBQWNBLENBQUM7WUFDYnlDLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNoRDtLQUNEO0lBQ0RDLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0ssVUFBVTtJQUM5QkMsU0FBUztRQUNQQyxVQUFVO0lBQ1o7QUFDRixFQUFFO0FBRUYsaUVBQWVuRCxnREFBUUEsQ0FBQ0csWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvc2hpemkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz83OGFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJqc21pdGhcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHM7XG4gICAgICAgIGlmICghZW1haWwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuICAgICAgICB2YXIgcmF3ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGVtYWlsOiBcImhlcml0aWVyQGdtYWlsLmNvbVwiLFxuICAgICAgICAgIHBhc3N3b3JkOiBcIjEyMzQ1NlwiLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiBteUhlYWRlcnMsXG4gICAgICAgICAgYm9keTogcmF3LFxuICAgICAgICAgIHJlZGlyZWN0OiBcImZvbGxvd1wiLFxuICAgICAgICB9O1xuICAgICAgICBsZXQgdXNlcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgXCJodHRwczovL2Zvc2hpemkuaGVyb2t1YXBwLmNvbS9hcGkvbG9naW51c2VyXCIsXG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9uc1xuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBkYXRhO1xuICAgICAgICAgIHVzZXIgPSB7XG4gICAgICAgICAgICBpZDogcmVzdWx0Ll9pZCxcbiAgICAgICAgICAgIHBob25lOiBcIjA4OSA4NDggODQ4NFwiLFxuICAgICAgICAgICAgbmFtZTogcmVzdWx0Lm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogcmVzdWx0LmVtYWlsLFxuICAgICAgICAgICAgYWRkcmVzczogXCIxMyBCbG9lbWVuZGFsIE1vd2JyYXlcIixcbiAgICAgICAgICAgIHppcDogXCI3NzAwXCIsXG4gICAgICAgICAgICByb2xlOiBcIkZyb250ZW5kIFNvZnR3YXJlIEVuZ2luZWVyXCIsXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogXCJZOS95cjNOZlhqNG1LY3AxUHhYMUJuc2hiM1o3WCtuSFh3WldWa1UzVWFzPVwiLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KSxcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gIF0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXEiLCJlbWFpbCIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJyYXciLCJKU09OIiwic3RyaW5naWZ5IiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJlZGlyZWN0IiwidXNlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInJlc3VsdCIsImlkIiwiX2lkIiwicGhvbmUiLCJhZGRyZXNzIiwiemlwIiwicm9sZSIsImFjY2Vzc1Rva2VuIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJzZWNyZXQiLCJKV1RfU0VDUkVUIiwic2Vzc2lvbiIsInN0cmF0ZWd5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();