"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Meme.js":
/*!********************************!*\
  !*** ./src/components/Meme.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Meme; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_memesData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/memesData */ \"./src/memesData.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Meme() {\n    _s();\n    // const [memeImage, setMemeImage] = useState(\"\");\n    const [meme, setMeme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        topText: \"\",\n        bottomText: \"\",\n        randomImage: \"http://i.imgflip.com/1bij.jpg\"\n    });\n    const [allMemeImages, setAllMemeImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_src_memesData__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    function getMemeImage() {\n        const memesArray = _src_memesData__WEBPACK_IMPORTED_MODULE_2__[\"default\"].data.memes;\n        const randomNumber = Math.floor(Math.random() * memesArray.length);\n        const url = memesArray[randomNumber.url];\n        setMeme();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Top-text\",\n                        className: \"form--input\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christopherj/Documents/2023 Projects/Meme Generator (Scrimba Project)/src/components/Meme.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Bottom-text\",\n                        className: \"form--input\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christopherj/Documents/2023 Projects/Meme Generator (Scrimba Project)/src/components/Meme.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"form--button\",\n                        onClick: getMemeImage,\n                        children: \"Get a new meme image \\uD83D\\uDDBC\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christopherj/Documents/2023 Projects/Meme Generator (Scrimba Project)/src/components/Meme.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/christopherj/Documents/2023 Projects/Meme Generator (Scrimba Project)/src/components/Meme.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: memeImage,\n                className: \"meme--image\"\n            }, void 0, false, {\n                fileName: \"/Users/christopherj/Documents/2023 Projects/Meme Generator (Scrimba Project)/src/components/Meme.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/christopherj/Documents/2023 Projects/Meme Generator (Scrimba Project)/src/components/Meme.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(Meme, \"5UBB9YRk0/Y87S9l2uP7qfvk9+M=\");\n_c = Meme;\nvar _c;\n$RefreshReg$(_c, \"Meme\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ007QUFFeEIsU0FBU0U7O0lBQ3BCLGtEQUFrRDtJQUNsRCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7UUFDN0JLLFNBQVM7UUFDVEMsWUFBWTtRQUNaQyxhQUFhO0lBQ2pCO0lBQ0EsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1QsK0NBQVFBLENBQUNDLHNEQUFTQTtJQUU1RCxTQUFTUztRQUNMLE1BQU1DLGFBQWFWLDJEQUFjVyxDQUFDQztRQUNsQyxNQUFNQyxlQUFlQyxLQUFLQyxNQUFNRCxLQUFLRSxXQUFXTixXQUFXTztRQUMzRCxNQUFNQyxNQUFNUixVQUFVLENBQUNHLGFBQWFLLElBQUk7UUFDeENmO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ2dCOzswQkFDRyw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFDR0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkgsV0FBVTs7Ozs7O2tDQUVkLDhEQUFDQzt3QkFDR0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkgsV0FBVTs7Ozs7O2tDQUVkLDhEQUFDSTt3QkFBT0osV0FBVTt3QkFBZUssU0FBU2pCO2tDQUFjOzs7Ozs7Ozs7Ozs7MEJBRTVELDhEQUFDa0I7Z0JBQUlDLEtBQUtDO2dCQUFXUixXQUFVOzs7Ozs7Ozs7Ozs7QUFHM0M7R0FsQ3dCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVtZS5qcz83NmQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbWVtZXNEYXRhIGZyb20gXCIvc3JjL21lbWVzRGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW1lKCkge1xuICAgIC8vIGNvbnN0IFttZW1lSW1hZ2UsIHNldE1lbWVJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbbWVtZSwgc2V0TWVtZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHRvcFRleHQ6IFwiXCIsXG4gICAgICAgIGJvdHRvbVRleHQ6IFwiXCIsXG4gICAgICAgIHJhbmRvbUltYWdlOiBcImh0dHA6Ly9pLmltZ2ZsaXAuY29tLzFiaWouanBnXCJcbiAgICB9KTtcbiAgICBjb25zdCBbYWxsTWVtZUltYWdlcywgc2V0QWxsTWVtZUltYWdlc10gPSB1c2VTdGF0ZShtZW1lc0RhdGEpO1xuXG4gICAgZnVuY3Rpb24gZ2V0TWVtZUltYWdlKCkge1xuICAgICAgICBjb25zdCBtZW1lc0FycmF5ID0gbWVtZXNEYXRhLmRhdGEubWVtZXM7XG4gICAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1lbWVzQXJyYXkubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgdXJsID0gbWVtZXNBcnJheVtyYW5kb21OdW1iZXIudXJsXTtcbiAgICAgICAgc2V0TWVtZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRvcC10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS0taW5wdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQm90dG9tLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZvcm0tLWJ1dHRvblwiIG9uQ2xpY2s9e2dldE1lbWVJbWFnZX0+R2V0IGEgbmV3IG1lbWUgaW1hZ2Ug8J+WvDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz17bWVtZUltYWdlfSBjbGFzc05hbWU9XCJtZW1lLS1pbWFnZVwiIC8+XG4gICAgICAgIDwvbWFpbj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwibWVtZXNEYXRhIiwiTWVtZSIsIm1lbWUiLCJzZXRNZW1lIiwidG9wVGV4dCIsImJvdHRvbVRleHQiLCJyYW5kb21JbWFnZSIsImFsbE1lbWVJbWFnZXMiLCJzZXRBbGxNZW1lSW1hZ2VzIiwiZ2V0TWVtZUltYWdlIiwibWVtZXNBcnJheSIsImRhdGEiLCJtZW1lcyIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInVybCIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJtZW1lSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Meme.js\n"));

/***/ })

});