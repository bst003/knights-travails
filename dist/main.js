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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pubsub */ \"./src/modules/pubsub.js\");\n/* harmony import */ var _modules_knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/knight */ \"./src/modules/knight.js\");\n/* harmony import */ var _modules_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/board */ \"./src/modules/board.js\");\n\n\n\n\n// pubsub.publish(\"pageLoad\", { start: [0, 0], end: [3, 3] });\n\n// console.log(knight);\n\n_modules_knight__WEBPACK_IMPORTED_MODULE_1__.knight.knightMoves({ start: [0, 0], end: [1, 2] }); // Works: [[0,0],[1,2]]\n_modules_knight__WEBPACK_IMPORTED_MODULE_1__.knight.knightMoves({ start: [0, 0], end: [3, 3] }); // Works: [[0,0],[1,2],[3,3]]\n_modules_knight__WEBPACK_IMPORTED_MODULE_1__.knight.knightMoves({ start: [3, 3], end: [0, 0] }); // Works: [[3,3],[1,2],[0,0]]\n\n/*\n\nNOTES\n\nCreate Knight \"node\" with all possible options it could go to?\n    Could work similar to social network graph\n    Would have to accomodate for 8 children at points\n        Level order traversal? - https://www.youtube.com/watch?v=86g8jAQug04\n        Could get exponentially larger with each move\n    Would this lead to an infinite loop?\n    Where does game board come in on this solution?\n\nCreate gameboard similar to Tic Tac Toe board?\n    How dow this accomplish getting to another spot as quickly as possible?\n    Use board as quick wway to check coordinates are valid?\n        If the coords don't exist in array then don't run function.\n\nNOTES 09/12\n    Use Levelorder\n        create queue and slowl go through them that way.\n        Move the boardarray to knight alongside the other board items\n*/\n\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

/***/ }),

/***/ "./src/modules/board.js":
/*!******************************!*\
  !*** ./src/modules/board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"board\": () => (/* binding */ board),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/modules/pubsub.js\");\n\n\nconst board = (() => {\n    // Private variables/functions\n\n    // Public variables/functions\n\n    const boardArray = [\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n        [\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\"],\n    ];\n\n    const checkValidBasePos = (data) => {\n        if (!data.start || !data.end) {\n            return false;\n        }\n\n        const startPos = data.start;\n        const startPosX = startPos[0];\n        const startPosY = startPos[1];\n\n        const endPos = data.end;\n        const endPosX = endPos[0];\n        const endPosY = endPos[1];\n\n        if (\n            boardArray[startPosX] === undefined ||\n            boardArray[startPosY] === undefined\n        ) {\n            return false;\n        }\n\n        if (\n            boardArray[endPosX] === undefined ||\n            boardArray[endPosY] === undefined\n        ) {\n            return false;\n        }\n\n        return true;\n    };\n\n    const checkMovesValid = (moves) => {\n        const moveData = moves;\n\n        Object.entries(moveData).forEach(([key, value]) => {\n            if (key === \"prevVals\") {\n                return;\n            }\n\n            if (\n                boardArray[value[0]] === undefined ||\n                boardArray[value[1]] === undefined\n            ) {\n                moveData[key] = null;\n            }\n        });\n\n        return moveData;\n    };\n\n    return {\n        checkValidBasePos,\n        checkMovesValid,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ board });\n\n\n//# sourceURL=webpack://knights-travails/./src/modules/board.js?");

/***/ }),

/***/ "./src/modules/knight.js":
/*!*******************************!*\
  !*** ./src/modules/knight.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"knight\": () => (/* binding */ knight)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/modules/pubsub.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/modules/board.js\");\n\n\n\nconst knight = (() => {\n    // Private variables/functions\n    const _arrayEquals = (a, b) =>\n        Array.isArray(a) &&\n        Array.isArray(b) &&\n        a.length === b.length &&\n        a.every((val, index) => val === b[index]);\n\n    // Public variables/functions\n    const calcPossibleMoves = (data) => {\n        // console.log(\"calc moves\");\n        // console.log(data);\n\n        const startPos = data.value;\n        const startPosX = startPos[0];\n        const startPosY = startPos[1];\n\n        const movePos = {};\n\n        if (data.prevVals === null) {\n            movePos.prevVals = data.value;\n            // console.log(\"should be null at fist\");\n            // console.log(movePos.prevVals);\n        } else {\n            movePos.prevVals = JSON.parse(JSON.stringify(data.prevVals));\n        }\n\n        movePos.upLeft = [startPosX - 1, startPosY - 2];\n        movePos.upRight = [startPosX + 1, startPosY - 2];\n        movePos.rightUp = [startPosX + 2, startPosY - 1];\n        movePos.rightDown = [startPosX + 2, startPosY + 1];\n        movePos.downRight = [startPosX + 1, startPosY + 2];\n        movePos.downLeft = [startPosX - 1, startPosY + 2];\n        movePos.leftDown = [startPosX - 2, startPosY + 1];\n        movePos.leftDown = [startPosX - 2, startPosY - 1];\n\n        return movePos;\n\n        // pubsub.publish(\"checkMoveData\", returnData);\n    };\n\n    // const loopMoves = (data) => {\n    //     console.log(\"loop moves\");\n    //     // console.log(data);\n\n    //     Object.entries(data.movePos).forEach(([key, value]) => {\n    //         if (value === null) {\n    //             return;\n    //         }\n\n    //         console.log(`value is: ${value}`);\n\n    //         if (_arrayEquals(value, data.end)) {\n    //             console.log(\"destination found\");\n    //             return;\n    //         }\n\n    //         const newObj = {\n    //             start: value,\n    //             end: data.end,\n    //             board: data.board,\n    //         };\n\n    //         console.log(newObj);\n\n    //         calcPossibleMoves(newObj);\n    //     });\n    // };\n\n    const knightMoves = (data) => {\n        // pubsub.publish(\"checkBaseData\", data);\n        const queue = [];\n        let finalMoves;\n\n        const validBase = _board__WEBPACK_IMPORTED_MODULE_1__.board.checkValidBasePos(data);\n\n        // Stop function if values aren't valid\n        if (!validBase) {\n            return;\n        }\n\n        // console.log(`start data: ${data.start}`);\n\n        const firstVal = {\n            prevVals: null,\n            value: data.start,\n        };\n\n        // console.log(firstVal);\n\n        queue.push(firstVal);\n\n        // console.log(\"queue begins\");\n        while (queue.length !== 0) {\n            // console.log(`value is: ${queue[0].value}`);\n            // console.log(queue[0]);\n            // console.log(\"why\");\n\n            if (_arrayEquals(queue[0].value, data.end)) {\n                // console.log(\"end point found\");\n                // console.log(queue[0]);\n                finalMoves = JSON.parse(JSON.stringify(queue[0].prevVals));\n                break;\n            }\n\n            // console.log(\"before calcMoves\");\n            // console.log(queue[0]);\n            const posMoves = calcPossibleMoves(queue[0]);\n            const validPosMoves = _board__WEBPACK_IMPORTED_MODULE_1__.board.checkMovesValid(posMoves);\n\n            // console.log(`valid moves below from ${queue[0].value}`);\n            // console.log(validPosMoves);\n\n            Object.entries(validPosMoves).forEach(([key, value]) => {\n                if (value === null || key === \"prevVals\") {\n                    // console.log(\"return on prevVals\");\n                    return;\n                }\n\n                // console.log(`${key}: ${value}, should never be prevVals`);\n\n                const posData = {\n                    value,\n                    prevVals: null,\n                };\n\n                if (_arrayEquals(validPosMoves.prevVals, data.start)) {\n                    posData.prevVals = [validPosMoves.prevVals];\n                } else {\n                    posData.prevVals = JSON.parse(\n                        JSON.stringify(validPosMoves.prevVals)\n                    );\n                }\n\n                const valArray = JSON.parse(JSON.stringify(value));\n\n                // console.log(valArray);\n\n                posData.prevVals.push(valArray);\n\n                // console.log(`post data for ${value}`);\n                // console.log(posData);\n\n                queue.push(posData);\n            });\n\n            queue.shift();\n        }\n\n        console.log(finalMoves);\n    };\n\n    // const test = (value) => {\n    //     const lol = pubsub.publish(\"testStuff\", value);\n\n    //     console.log(lol);\n    //     console.log(\"did this work\");\n    // };\n\n    // const preKnightMoves = (data) => {\n    //     console.log(\"pre move\");\n    //     console.log(data);\n    // };\n\n    // Pubsubs\n    // pubsub.subscribe(\"pageLoad\", preKnightMoves);\n\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe(\"postCheckBaseData\", calcPossibleMoves);\n\n    // pubsub.subscribe(\"postCheckMoveData\", loopMoves);\n\n    return {\n        knightMoves,\n    };\n})();\n\n// export default { knight };\n\n\n//# sourceURL=webpack://knights-travails/./src/modules/knight.js?");

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