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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AddBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AddBook */ \"./src/components/AddBook.tsx\");\n/* harmony import */ var _components_BookContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BookContainer */ \"./src/components/BookContainer.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _services_axiosReqs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/axiosReqs */ \"./src/services/axiosReqs.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [books, setBooks] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);\n    const [newTitle, setNewTitle] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [newAuthor, setNewAuthor] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);\n    const [forceRender, setForceRender] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);\n    const deletingButton = async (e)=>{\n        await _services_axiosReqs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dropBook(e.target.id);\n        setForceRender((c)=>c + 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const getBooks = async ()=>{\n            const response = await _services_axiosReqs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getAll();\n            const bookList = await response.data;\n            setBooks(bookList);\n            console.log(bookList);\n            console.log(response.status);\n        };\n        getBooks();\n    }, [\n        books\n    ]);\n    const booksData = {\n        bookData: books\n    };\n    const titleChange = (event)=>{\n        event.preventDefault();\n        setNewTitle(event.target.value);\n    };\n    const authorChange = (event)=>{\n        event.preventDefault();\n        setNewAuthor(event.target.value);\n    };\n    const currentPageChange = (event)=>{\n        event.preventDefault();\n        setCurrentPage(event.target.value);\n    };\n    // Adding a new book to the\n    const addBook = async (event)=>{\n        event.preventDefault();\n        const book = {\n            name: newTitle,\n            author: newAuthor,\n            currentPage: currentPage\n        };\n        await _services_axiosReqs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].create(book);\n        setNewTitle(\"\");\n        setNewAuthor(\"\");\n        setCurrentPage(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-[#616247FF] z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"BookMarKT\"\n                }, void 0, false, {\n                    fileName: \"/Users/patsenn/Desktop/Code tingies/Personal/Portfolio/patryksienniak.github.io/bookmarkt/src/pages/index.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/patsenn/Desktop/Code tingies/Personal/Portfolio/patryksienniak.github.io/bookmarkt/src/pages/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/patsenn/Desktop/Code tingies/Personal/Portfolio/patryksienniak.github.io/bookmarkt/src/pages/index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"bestSellers\",\n                className: \"pt-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    bookData: booksData.bookData,\n                    onDelete: (e)=>deletingButton(e)\n                }, void 0, false, {\n                    fileName: \"/Users/patsenn/Desktop/Code tingies/Personal/Portfolio/patryksienniak.github.io/bookmarkt/src/pages/index.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/patsenn/Desktop/Code tingies/Personal/Portfolio/patryksienniak.github.io/bookmarkt/src/pages/index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddBook__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onSubmit: addBook,\n                newTitle: newTitle,\n                titleChange: titleChange,\n                newAuthor: newAuthor,\n                authorChange: authorChange,\n                currentPage: currentPage,\n                currentPageChange: currentPageChange\n            }, void 0, false, {\n                fileName: \"/Users/patsenn/Desktop/Code tingies/Personal/Portfolio/patryksienniak.github.io/bookmarkt/src/pages/index.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/patsenn/Desktop/Code tingies/Personal/Portfolio/patryksienniak.github.io/bookmarkt/src/pages/index.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/patsenn/Desktop/Code tingies/Personal/Portfolio/patryksienniak.github.io/bookmarkt/src/pages/index.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"bEs4dVasU+0ZZ+LyBjEfgGacvLM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n{\n/* Colour list\n#626D71 Slate\n#CDCDC0 Ceramic\n#DDBC95 Latte\n#B38867 Coffee\n\n#E3CD81FF Dusky Citron\n#B1B3B3FF Cool Gray\n\nMango Mojito #DAA03DFF\nTerrarium Moss #616247FF\n\n\ndata = {\n    bookData: [\n      {\n        name: \"Atomic Habits\",\n        author: \"James Clear\",\n        currentPage: 12,\n      },\n      {\n        name: \"How to Win Friends and Influence People\",\n        author: \"Dale Carnegie\",\n        currentPage: 204,\n      },\n      {\n        name: \"Black Box Thinking\",\n        author: \"Not sure\",\n        currentPage: 84,\n      },\n      {\n        name: \"Mindset\",\n        author: \"Dr. Carol Schwelick\",\n        currentPage: 91,\n      },\n      {\n        name: \"It Starts with Why\",\n        author: \"Simon Sinek\",\n        currentPage: 307,\n      },\n    ],\n  };\n\n\n*/ }var _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1k7QUFDZDtBQUNBO0FBQ1o7QUFFZTtBQUVJO0FBa0JoRCxTQUFTUSxPQUFPOztJQUNkLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBZSxFQUFFO0lBQ25ELE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBUztJQUNqRCxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQVM7SUFDbkQsTUFBTSxDQUFDVSxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFTO0lBQ3ZELE1BQU0sQ0FBQ1ksYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNYyxpQkFBaUIsT0FBT0MsSUFBVztRQUN2QyxNQUFNYixvRUFBb0IsQ0FBQ2EsRUFBRUUsTUFBTSxDQUFDQyxFQUFFO1FBQ3RDTCxlQUFlLENBQUNNLElBQU1BLElBQUk7SUFDNUI7SUFFQWxCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNbUIsV0FBVyxVQUFZO1lBQzNCLE1BQU1DLFdBQVcsTUFBTW5CLGtFQUFrQjtZQUN6QyxNQUFNcUIsV0FBVyxNQUFNRixTQUFTRyxJQUFJO1lBQ3BDbkIsU0FBU2tCO1lBQ1RFLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWkUsUUFBUUMsR0FBRyxDQUFDTCxTQUFTTSxNQUFNO1FBQzdCO1FBQ0FQO0lBQ0YsR0FBRztRQUFDaEI7S0FBTTtJQUVWLE1BQU13QixZQUE0QjtRQUNoQ0MsVUFBVXpCO0lBQ1o7SUFFQSxNQUFNMEIsY0FBYyxDQUFDQyxRQUFlO1FBQ2xDQSxNQUFNQyxjQUFjO1FBQ3BCekIsWUFBWXdCLE1BQU1kLE1BQU0sQ0FBQ2dCLEtBQUs7SUFDaEM7SUFFQSxNQUFNQyxlQUFlLENBQUNILFFBQWU7UUFDbkNBLE1BQU1DLGNBQWM7UUFDcEJ2QixhQUFhc0IsTUFBTWQsTUFBTSxDQUFDZ0IsS0FBSztJQUNqQztJQUNBLE1BQU1FLG9CQUFvQixDQUFDSixRQUFlO1FBQ3hDQSxNQUFNQyxjQUFjO1FBQ3BCckIsZUFBZW9CLE1BQU1kLE1BQU0sQ0FBQ2dCLEtBQUs7SUFDbkM7SUFFQSwyQkFBMkI7SUFDM0IsTUFBTUcsVUFBVSxPQUFPTCxRQUFlO1FBQ3BDQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1LLE9BQWtCO1lBQ3RCQyxNQUFNaEM7WUFDTmlDLFFBQVEvQjtZQUNSRSxhQUFhQTtRQUNmO1FBQ0EsTUFBTVIsa0VBQWtCLENBQUNtQztRQUN6QjlCLFlBQVk7UUFDWkUsYUFBYTtRQUNiRSxlQUFlO0lBQ2pCO0lBRUEscUJBQ0UsOERBQUM4QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQzNDLGtEQUFJQTswQkFDSCw0RUFBQzRDOzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQzdDLDBEQUFNQTs7Ozs7MEJBR1AsOERBQUM4QztnQkFBUTFCLElBQUc7Z0JBQWN3QixXQUFVOzBCQUNsQyw0RUFBQzlDLGlFQUFhQTtvQkFDWmlDLFVBQVVELFVBQVVDLFFBQVE7b0JBQzVCZ0IsVUFBVSxDQUFDOUIsSUFBYUQsZUFBZUM7Ozs7Ozs7Ozs7OzBCQUkzQyw4REFBQ3BCLDJEQUFPQTtnQkFDTm1ELFVBQVVWO2dCQUNWOUIsVUFBVUE7Z0JBQ1Z3QixhQUFhQTtnQkFDYnRCLFdBQVdBO2dCQUNYMEIsY0FBY0E7Z0JBQ2R4QixhQUFhQTtnQkFDYnlCLG1CQUFtQkE7Ozs7OzswQkFVckIsOERBQUN0QywwREFBTUE7Ozs7Ozs7Ozs7O0FBR2I7R0EzRlNNO0tBQUFBO0FBNkZULCtEQUFlQSxJQUFJQSxFQUFDO0FBRXBCO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENGLEdBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRCb29rIGZyb20gXCJAL2NvbXBvbmVudHMvQWRkQm9va1wiO1xuaW1wb3J0IEJvb2tDb250YWluZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Cb29rQ29udGFpbmVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGJvb2tTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9heGlvc1JlcXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQm9va1Byb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBhdXRob3I6IHN0cmluZztcbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJvb2tMaXN0UHJvcHMge1xuICBib29rRGF0YToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhdXRob3I6IHN0cmluZztcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyO1xuICAgIGlkPzogc3RyaW5nO1xuICB9W107XG59XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtib29rcywgc2V0Qm9va3NdID0gdXNlU3RhdGU8SUJvb2tQcm9wc1tdPihbXSk7XG4gIGNvbnN0IFtuZXdUaXRsZSwgc2V0TmV3VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW25ld0F1dGhvciwgc2V0TmV3QXV0aG9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2ZvcmNlUmVuZGVyLCBzZXRGb3JjZVJlbmRlcl0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBkZWxldGluZ0J1dHRvbiA9IGFzeW5jIChlOiBhbnkpID0+IHtcbiAgICBhd2FpdCBib29rU2VydmljZS5kcm9wQm9vayhlLnRhcmdldC5pZCk7XG4gICAgc2V0Rm9yY2VSZW5kZXIoKGMpID0+IGMgKyAxKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldEJvb2tzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBib29rU2VydmljZS5nZXRBbGwoKTtcbiAgICAgIGNvbnN0IGJvb2tMaXN0ID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcbiAgICAgIHNldEJvb2tzKGJvb2tMaXN0KTtcbiAgICAgIGNvbnNvbGUubG9nKGJvb2tMaXN0KTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfTtcbiAgICBnZXRCb29rcygpO1xuICB9LCBbYm9va3NdKTtcblxuICBjb25zdCBib29rc0RhdGE6IElCb29rTGlzdFByb3BzID0ge1xuICAgIGJvb2tEYXRhOiBib29rcyxcbiAgfTtcblxuICBjb25zdCB0aXRsZUNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXROZXdUaXRsZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGF1dGhvckNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXROZXdBdXRob3IoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3QgY3VycmVudFBhZ2VDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0Q3VycmVudFBhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICAvLyBBZGRpbmcgYSBuZXcgYm9vayB0byB0aGVcbiAgY29uc3QgYWRkQm9vayA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGJvb2s6SUJvb2tQcm9wcyA9IHtcbiAgICAgIG5hbWU6IG5ld1RpdGxlLFxuICAgICAgYXV0aG9yOiBuZXdBdXRob3IsXG4gICAgICBjdXJyZW50UGFnZTogY3VycmVudFBhZ2UsXG4gICAgfTtcbiAgICBhd2FpdCBib29rU2VydmljZS5jcmVhdGUoYm9vayk7XG4gICAgc2V0TmV3VGl0bGUoXCJcIik7XG4gICAgc2V0TmV3QXV0aG9yKFwiXCIpO1xuICAgIHNldEN1cnJlbnRQYWdlKDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgYmctWyM2MTYyNDdGRl0gei0wXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJvb2tNYXJLVDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgey8qIFNpZGUgICovfVxuICAgICAgPHNlY3Rpb24gaWQ9XCJiZXN0U2VsbGVyc1wiIGNsYXNzTmFtZT1cInB0LTIwXCI+XG4gICAgICAgIDxCb29rQ29udGFpbmVyXG4gICAgICAgICAgYm9va0RhdGE9e2Jvb2tzRGF0YS5ib29rRGF0YX1cbiAgICAgICAgICBvbkRlbGV0ZT17KGU6IEV2ZW50KSA9PiBkZWxldGluZ0J1dHRvbihlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIHsvKiAqL31cbiAgICAgIDxBZGRCb29rXG4gICAgICAgIG9uU3VibWl0PXthZGRCb29rfVxuICAgICAgICBuZXdUaXRsZT17bmV3VGl0bGV9XG4gICAgICAgIHRpdGxlQ2hhbmdlPXt0aXRsZUNoYW5nZX1cbiAgICAgICAgbmV3QXV0aG9yPXtuZXdBdXRob3J9XG4gICAgICAgIGF1dGhvckNoYW5nZT17YXV0aG9yQ2hhbmdlfVxuICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgIGN1cnJlbnRQYWdlQ2hhbmdlPXtjdXJyZW50UGFnZUNoYW5nZX1cbiAgICAgIC8+XG4gICAgICB7LyogKi99XG4gICAgICB7LyogKi99XG4gICAgICB7LyogKi99XG4gICAgICB7LyogKi99XG4gICAgICB7LyogKi99XG4gICAgICB7LyogKi99XG4gICAgICB7LyogKi99XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxue1xuICAvKiBDb2xvdXIgbGlzdFxuIzYyNkQ3MSBTbGF0ZVxuI0NEQ0RDMCBDZXJhbWljXG4jRERCQzk1IExhdHRlXG4jQjM4ODY3IENvZmZlZVxuXG4jRTNDRDgxRkYgRHVza3kgQ2l0cm9uXG4jQjFCM0IzRkYgQ29vbCBHcmF5XG5cbk1hbmdvIE1vaml0byAjREFBMDNERkZcblRlcnJhcml1bSBNb3NzICM2MTYyNDdGRlxuXG5cbmRhdGEgPSB7XG4gICAgYm9va0RhdGE6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJBdG9taWMgSGFiaXRzXCIsXG4gICAgICAgIGF1dGhvcjogXCJKYW1lcyBDbGVhclwiLFxuICAgICAgICBjdXJyZW50UGFnZTogMTIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkhvdyB0byBXaW4gRnJpZW5kcyBhbmQgSW5mbHVlbmNlIFBlb3BsZVwiLFxuICAgICAgICBhdXRob3I6IFwiRGFsZSBDYXJuZWdpZVwiLFxuICAgICAgICBjdXJyZW50UGFnZTogMjA0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJCbGFjayBCb3ggVGhpbmtpbmdcIixcbiAgICAgICAgYXV0aG9yOiBcIk5vdCBzdXJlXCIsXG4gICAgICAgIGN1cnJlbnRQYWdlOiA4NCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiTWluZHNldFwiLFxuICAgICAgICBhdXRob3I6IFwiRHIuIENhcm9sIFNjaHdlbGlja1wiLFxuICAgICAgICBjdXJyZW50UGFnZTogOTEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkl0IFN0YXJ0cyB3aXRoIFdoeVwiLFxuICAgICAgICBhdXRob3I6IFwiU2ltb24gU2luZWtcIixcbiAgICAgICAgY3VycmVudFBhZ2U6IDMwNyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuXG4qL1xufVxuIl0sIm5hbWVzIjpbIkFkZEJvb2siLCJCb29rQ29udGFpbmVyIiwiRm9vdGVyIiwiSGVhZGVyIiwiSGVhZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYm9va1NlcnZpY2UiLCJIb21lIiwiYm9va3MiLCJzZXRCb29rcyIsIm5ld1RpdGxlIiwic2V0TmV3VGl0bGUiLCJuZXdBdXRob3IiLCJzZXROZXdBdXRob3IiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiZm9yY2VSZW5kZXIiLCJzZXRGb3JjZVJlbmRlciIsImRlbGV0aW5nQnV0dG9uIiwiZSIsImRyb3BCb29rIiwidGFyZ2V0IiwiaWQiLCJjIiwiZ2V0Qm9va3MiLCJyZXNwb25zZSIsImdldEFsbCIsImJvb2tMaXN0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJib29rc0RhdGEiLCJib29rRGF0YSIsInRpdGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiYXV0aG9yQ2hhbmdlIiwiY3VycmVudFBhZ2VDaGFuZ2UiLCJhZGRCb29rIiwiYm9vayIsIm5hbWUiLCJhdXRob3IiLCJjcmVhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInNlY3Rpb24iLCJvbkRlbGV0ZSIsIm9uU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});