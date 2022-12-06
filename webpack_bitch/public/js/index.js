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

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var _levels_Level_1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels/Level_1.js */ \"./src/levels/Level_1.js\");\n/* harmony import */ var _levels_Level_2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels/Level_2.js */ \"./src/levels/Level_2.js\");\n \n\nconst config = {\n    type: Phaser.AUTO,\n    width: 800,\n    height: 600,\n    physics: {\n        default: 'arcade',\n        arcade: {\n            gravity: { y: 300 },\n            debug: false\n        }\n    },\n    scene:[_levels_Level_1_js__WEBPACK_IMPORTED_MODULE_0__.Level_1,_levels_Level_2_js__WEBPACK_IMPORTED_MODULE_1__.Level_2]\n};\n\n\n//# sourceURL=webpack://webpack_bitch/./src/config.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

eval("/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n\n\n\nvar game = new Phaser.Game(_config_js__WEBPACK_IMPORTED_MODULE_0__.config);\n\n\n\n//# sourceURL=webpack://webpack_bitch/./src/game.js?");

/***/ }),

/***/ "./src/levels/Level_1.js":
/*!*******************************!*\
  !*** ./src/levels/Level_1.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Level_1\": () => (/* binding */ Level_1)\n/* harmony export */ });\n var   cursors;\n var   platforms;\n  var  player;\nclass Level_1 extends Phaser.Scene {\n\n\n    constructor ()\n    {\n        super({ key: 'Level 1', active: true });\n    }\n\n    preload ()\n    {\n        this.load.image('fon', './assets/fon.png');\n        this.load.image('platform', './assets/platform.png');\n        this.load.spritesheet('dude', \n        'assets/dude.png',\n        { frameWidth: 32, frameHeight: 48 }\n        );\n        cursors = this.input.keyboard.createCursorKeys();\n    }\n\n    create ()\n    {\nconsole.log('prepare to DIEswws');\n        this.add.image(400, 300, 'fon');\n\n        platforms = this.physics.add.staticGroup();\n        platforms.create(400, 650, 'platform').setScale(1).refreshBody();\n        platforms.create(600, 490, 'platform').setScale(0.5).refreshBody();\n        platforms.create(50, 320, 'platform').setScale(0.5).refreshBody();\n        platforms.create(610, 220, 'platform').setScale(0.5).refreshBody(); \n        \n\n\n\n        player = this.physics.add.sprite(100, 450, 'dude');\n\n        player.setBounce(0.2);\n        player.setCollideWorldBounds(true);\n\n\n        this.physics.add.collider(player, platforms);\n        this.anims.create({\n            key: 'left',\n            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),\n            frameRate: 10,\n            repeat: -1\n        });\n        \n        this.anims.create({\n            key: 'turn',\n            frames: [ { key: 'dude', frame: 4 } ],\n            frameRate: 20\n        });\n        \n        this.anims.create({\n            key: 'right',\n            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),\n            frameRate: 10,\n            repeat: -1\n        });\n    }\n    update(){\n        if (cursors.left.isDown)\n        {\n            player.setVelocityX(-160);\n        \n            player.anims.play('left', true);\n        }\n        else if (cursors.right.isDown)\n        {\n            player.setVelocityX(160);\n        \n            player.anims.play('right', true);\n        }\n        else\n        {\n            player.setVelocityX(0);\n        \n            player.anims.play('turn');\n        }\n        \n        if (cursors.up.isDown && player.body.touching.down)\n        {\n            \n            player.setVelocityY(-330);\n        }\n        // console.log(player.x,player.y)\n        //784 159\n    }\n}\n\n\n//# sourceURL=webpack://webpack_bitch/./src/levels/Level_1.js?");

/***/ }),

/***/ "./src/levels/Level_2.js":
/*!*******************************!*\
  !*** ./src/levels/Level_2.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Level_2\": () => (/* binding */ Level_2)\n/* harmony export */ });\nclass Level_2 extends Phaser.Scene {\n\n    constructor ()\n    {\n        super({ key: 'Level 2', active: true });\n    }\n\n    preload ()\n    {\n       // this.load.image('rick', 'assets/pics/guard-rick.png');\n    }\n\n    create ()\n    {\n        this.add.image(750, 600, 'rick').setOrigin(1);\n    }\n    update(){\n    \n    }\n}\n\n\n//# sourceURL=webpack://webpack_bitch/./src/levels/Level_2.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/game.js");
/******/ 	
/******/ })()
;