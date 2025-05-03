"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@zag-js+types@1.8.2";
exports.ids = ["vendor-chunks/@zag-js+types@1.8.2"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@zag-js+types@1.8.2/node_modules/@zag-js/types/dist/index.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/@zag-js+types@1.8.2/node_modules/@zag-js/types/dist/index.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNormalizer: () => (/* binding */ createNormalizer),\n/* harmony export */   createProps: () => (/* binding */ createProps)\n/* harmony export */ });\n// src/prop-types.ts\nfunction createNormalizer(fn) {\n  return new Proxy({}, {\n    get(_target, key) {\n      if (key === \"style\")\n        return (props) => {\n          return fn({ style: props }).style;\n        };\n      return fn;\n    }\n  });\n}\n\n// src/create-props.ts\nvar createProps = () => (props) => Array.from(new Set(props));\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHphZy1qcyt0eXBlc0AxLjguMi9ub2RlX21vZHVsZXMvQHphZy1qcy90eXBlcy9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRXlDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHdlc2pyXFxEb2N1bWVudHNcXFByb2pldG9zXFxkYXNoLWNyeXB0b2NvaW5cXG5vZGVfbW9kdWxlc1xcLnBucG1cXEB6YWctanMrdHlwZXNAMS44LjJcXG5vZGVfbW9kdWxlc1xcQHphZy1qc1xcdHlwZXNcXGRpc3RcXGluZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvcHJvcC10eXBlcy50c1xuZnVuY3Rpb24gY3JlYXRlTm9ybWFsaXplcihmbikge1xuICByZXR1cm4gbmV3IFByb3h5KHt9LCB7XG4gICAgZ2V0KF90YXJnZXQsIGtleSkge1xuICAgICAgaWYgKGtleSA9PT0gXCJzdHlsZVwiKVxuICAgICAgICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGZuKHsgc3R5bGU6IHByb3BzIH0pLnN0eWxlO1xuICAgICAgICB9O1xuICAgICAgcmV0dXJuIGZuO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIHNyYy9jcmVhdGUtcHJvcHMudHNcbnZhciBjcmVhdGVQcm9wcyA9ICgpID0+IChwcm9wcykgPT4gQXJyYXkuZnJvbShuZXcgU2V0KHByb3BzKSk7XG5cbmV4cG9ydCB7IGNyZWF0ZU5vcm1hbGl6ZXIsIGNyZWF0ZVByb3BzIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@zag-js+types@1.8.2/node_modules/@zag-js/types/dist/index.mjs\n");

/***/ })

};
;