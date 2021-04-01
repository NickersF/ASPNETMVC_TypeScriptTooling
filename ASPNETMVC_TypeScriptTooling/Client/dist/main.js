/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controllers/hello_controller.ts":
/*!*****************************************!*\
  !*** ./controllers/hello_controller.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sayHelloExp = void 0;
function sayHelloExp() {
    console.log("Hello World! From Client/controllers");
}
exports.sayHelloExp = sayHelloExp;


/***/ }),

/***/ "./controllers/jquery_example_controller.ts":
/*!**************************************************!*\
  !*** ./controllers/jquery_example_controller.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderTextJQuery = void 0;
function renderTextJQuery() {
    $(document).ready(function () {
        $("#ts_testString").text("This project uses modular TypseScript and Webpack.");
    });
}
exports.renderTextJQuery = renderTextJQuery;
;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const hello_controller_1 = __webpack_require__(/*! ./controllers/hello_controller */ "./controllers/hello_controller.ts");
const jquery_example_controller_1 = __webpack_require__(/*! ./controllers/jquery_example_controller */ "./controllers/jquery_example_controller.ts");
function SayHello() {
    console.log("Hello World from the Client directory!");
}
SayHello(); // From this file
hello_controller_1.sayHelloExp();
jquery_example_controller_1.renderTextJQuery();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2NvbnRyb2xsZXJzL2pxdWVyeV9leGFtcGxlX2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLFNBQWdCLFdBQVc7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFGRCxrQ0FFQzs7Ozs7Ozs7Ozs7Ozs7QUNKRCxTQUFnQixnQkFBZ0I7SUFDNUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0lBQ25GLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUpELDRDQUlDO0FBQUEsQ0FBQzs7Ozs7OztVQ0pGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3JCQSwwSEFBNkQ7QUFDN0QscUpBQTJFO0FBRTNFLFNBQVMsUUFBUTtJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQsUUFBUSxFQUFFLENBQUMsQ0FBNkIsaUJBQWlCO0FBQ3pELDhCQUFXLEVBQUUsQ0FBQztBQUNkLDRDQUFnQixFQUFFLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXlIZWxsb0V4cCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGQhIEZyb20gQ2xpZW50L2NvbnRyb2xsZXJzXCIpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRleHRKUXVlcnkoKSB7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiN0c190ZXN0U3RyaW5nXCIpLnRleHQoXCJUaGlzIHByb2plY3QgdXNlcyBtb2R1bGFyIFR5cHNlU2NyaXB0IGFuZCBXZWJwYWNrLlwiKTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBzYXlIZWxsb0V4cCB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgcmVuZGVyVGV4dEpRdWVyeSB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL2pxdWVyeV9leGFtcGxlX2NvbnRyb2xsZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFNheUhlbGxvKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZCBmcm9tIHRoZSBDbGllbnQgZGlyZWN0b3J5IVwiKTtcclxufVxyXG5cclxuU2F5SGVsbG8oKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZyb20gdGhpcyBmaWxlXHJcbnNheUhlbGxvRXhwKCk7XHJcbnJlbmRlclRleHRKUXVlcnkoKTsiXSwic291cmNlUm9vdCI6IiJ9