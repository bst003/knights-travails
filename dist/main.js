/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pubsub */ \"./src/modules/pubsub.js\");\n/* harmony import */ var _modules_knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/knight */ \"./src/modules/knight.js\");\n/* harmony import */ var _modules_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/board */ \"./src/modules/board.js\");\n\n\n\n\n_modules_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish(\"pageLoad\");\n\nconsole.log(\"test\");\n\n/*\n\nNOTES\n\nCreate Knight \"node\" with all possible options it could go to?\n    Could work similar to social network graph\n    Would have to accomodate for 8 children at points\n        Level order traversal? - https://www.youtube.com/watch?v=86g8jAQug04\n        Could get exponentially larger with each move\n    Would this lead to an infinite loop?\n    Where does game board come in on this solution?\n\nCreate gameboard similar to Tic Tac Toe board?\n    How dow this accomplish getting to another spot as quickly as possible?\n*/\n\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

/***/ }),

/***/ "./src/modules/board.js":
/*!******************************!*\
  !*** ./src/modules/board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/modules/pubsub.js\");\n\n\nconst board = (() => {\n    // Private variables/functions\n\n    // Public variables/functions\n\n    let boardArray = [\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    ];\n\n    const boardFunc = () => {\n        console.log(\"board func\");\n    };\n\n    // Pubsubs\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe(\"pageLoad\", boardFunc);\n\n    return {};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ board });\n\n\n//# sourceURL=webpack://knights-travails/./src/modules/board.js?");

/***/ }),

/***/ "./src/modules/knight.js":
/*!*******************************!*\
  !*** ./src/modules/knight.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/modules/pubsub.js\");\n\n\nconst knight = (() => {\n    // Private variables/functions\n\n    // Public variables/functions\n    const knightMoves = (startPos, endPos) => {\n        console.log(\"knight func\");\n    };\n\n    // Pubsubs\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe(\"pageLoad\", knightMoves);\n\n    return {};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ knight });\n\n\n//# sourceURL=webpack://knights-travails/./src/modules/knight.js?");

/***/ }),

/***/ "./src/modules/pubsub.js":
/*!*******************************!*\
  !*** ./src/modules/pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pubsub\": () => (/* binding */ pubsub)\n/* harmony export */ });\nconst pubsub = {\n    events: {},\n    subscribe(eventName, fn) {\n        this.events[eventName] = this.events[eventName] || [];\n        this.events[eventName].push(fn);\n    },\n    unsubscribe(eventName, fn) {\n        if (this.events[eventName]) {\n            for (let i = 0; i < this.events[eventName].length; i += 1) {\n                if (this.events[eventName][i] === fn) {\n                    this.events[eventName].splice(i, 1);\n                    break;\n                }\n            }\n        }\n    },\n    publish(eventName, data) {\n        if (this.events[eventName]) {\n            this.events[eventName].forEach((fn) => {\n                fn(data);\n            });\n        }\n    },\n};\n\n\n\n\n//# sourceURL=webpack://knights-travails/./src/modules/pubsub.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;