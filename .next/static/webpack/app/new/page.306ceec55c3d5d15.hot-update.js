"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/new/page",{

/***/ "(app-pages-browser)/./app/api/api-hooks.js":
/*!******************************!*\
  !*** ./app/api/api-hooks.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGetDataByCategory: function() { return /* binding */ useGetDataByCategory; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-utils */ \"(app-pages-browser)/./app/api/api-utils.js\");\nvar _s = $RefreshSig$();\n\n\nconst useGetDataByCategory = (endpoint, category)=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        async function fetchData() {\n            const data = await (0,_api_utils__WEBPACK_IMPORTED_MODULE_1__.getNormalizedGamesDataByCategory)(endpoint, category);\n            if ((0,_api_utils__WEBPACK_IMPORTED_MODULE_1__.isResponseOk)(Response)) setData(Response.data);\n        }\n        fetchData();\n    }, []);\n    return data;\n};\n_s(useGetDataByCategory, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hcGkvYXBpLWhvb2tzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBQ2lDO0FBRXRFLE1BQU1JLHVCQUF1QixDQUFDQyxVQUFVQzs7SUFDN0MsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pDQyxnREFBU0EsQ0FBQztRQUNSLGVBQWVRO1lBQ2IsTUFBTUYsT0FBTyxNQUFNTCw0RUFBZ0NBLENBQUNHLFVBQVVDO1lBQzlELElBQUlILHdEQUFZQSxDQUFDTyxXQUFXRixRQUFRRSxTQUFTSCxJQUFJO1FBQ25EO1FBQ0FFO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsT0FBT0Y7QUFDVCxFQUFFO0dBVldIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hcGkvYXBpLWhvb2tzLmpzP2YxYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXROb3JtYWxpemVkR2FtZXNEYXRhQnlDYXRlZ29yeSwgaXNSZXNwb25zZU9rIH0gZnJvbSBcIi4vYXBpLXV0aWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR2V0RGF0YUJ5Q2F0ZWdvcnkgPSAoZW5kcG9pbnQsIGNhdGVnb3J5KSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldE5vcm1hbGl6ZWRHYW1lc0RhdGFCeUNhdGVnb3J5KGVuZHBvaW50LCBjYXRlZ29yeSk7XHJcbiAgICAgIGlmIChpc1Jlc3BvbnNlT2soUmVzcG9uc2UpKSBzZXREYXRhKFJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXROb3JtYWxpemVkR2FtZXNEYXRhQnlDYXRlZ29yeSIsImlzUmVzcG9uc2VPayIsInVzZUdldERhdGFCeUNhdGVnb3J5IiwiZW5kcG9pbnQiLCJjYXRlZ29yeSIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hEYXRhIiwiUmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/api/api-hooks.js\n"));

/***/ })

});