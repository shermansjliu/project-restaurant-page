/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/*! exports provided: homeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homeTab\", function() { return homeTab; });\nconst homeTab = () => {\n    let content = document.querySelector('.content');\n    let container = document.createElement('div');\n    let title = document.createElement('div');\n    let description = document.createElement('div');\n    \n\n    container.classList.toggle('container');\n    container.appendChild(title);\n    container.appendChild(description);\n    title.classList.toggle('title');\n    description.classList.toggle('description');\n\n\n    title.textContent = \"Yums\";\n    description.textContent = \"Feast on Yums\";\n    content.appendChild(container);\n    \n    content.classList.toggle('homepage');\n};\n\n\n\n\n//# sourceURL=webpack:///./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nObject(_navbar__WEBPACK_IMPORTED_MODULE_0__[\"createNavbar\"])();\nObject(_homepage__WEBPACK_IMPORTED_MODULE_1__[\"homeTab\"])();\nconst menu_item = document.querySelector('data-page');\n\ndocument.querySelectorAll('.nav-item').forEach((tab) => {\n\n    tab.addEventListener('click', (e) => {\n        loadPage(e.target);\n    })\n\n});\n\n\nfunction loadPage(tab) {\n    let pageName = tab.dataset.page.toLowerCase();\n    updateNavElement(pageName);\n\n    let oldContent = document.querySelector('.content');\n    oldContent.remove();\n\n    let newContent = document.createElement('div');\n    newContent.classList.add('content');\n    document.querySelector('body').appendChild(newContent);\n\n    if (pageName == 'home') {\n        Object(_homepage__WEBPACK_IMPORTED_MODULE_1__[\"homeTab\"])();\n    }\n    else if (pageName == 'menu'){\n        Object(_menu__WEBPACK_IMPORTED_MODULE_2__[\"menuPage\"])();\n\n    }\n    else if (pageName == 'contact'){\n        contactTab();\n\n    }\n}\n\n\nfunction updateNavElement(pageName) {\n    document.querySelectorAll('.nav-item').forEach(tab => {\n        let hasSelected = tab.classList.contains('tab-selected');\n        let hasClicked = tab.dataset.page.toLowerCase() == pageName;\n        if (hasClicked && hasSelected){\n            tab.classList.add('tab-selected')\n        }\n        if (!hasClicked && !hasSelected){\n            tab.classList.remove('tab-selected')\n        }\n    })\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: menuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuPage\", function() { return menuPage; });\nfunction createMenuItem(menu_item, name) {\n    const item_name = document.createElement('p');\n    item_name.textContent = name;\n    item_name.className.toggle(\"menu-item-name\")\n    menu_item.appendChild(item_name);\n}\nfunction menuPage() {\n    const navbar = document.querySelector('#navbar');\n    const content = document.querySelector('.content');\n    const menuGrid = document.createElement('div');\n    const cafe_items = [\"Tea\", \"Crossaint\", \"Coffee\", \"Cake\"];\n\n    for (let int = 0; i < 4; int++) {\n        let menu_item = document.createElement('div');\n        menu_item.classList.toggle('menu-item');\n        createMenuItem(menu_item);\n        menuGrid.append(menu_item);\n    }\n\n    content.appendChild(menuGrid);\n    // content.appendChild(document.createElement(\"p\"));\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/*! exports provided: createNavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNavbar\", function() { return createNavbar; });\nfunction createNavbar () {\n    const nav = document.querySelector('#navbar');\n    const navList = document.createElement('ul');\n    const iconContainer = document.createElement('div');\n    iconContainer.classList.toggle('iconContainer');\n\n    nav.appendChild(iconContainer);\n    const icon = document.createElement('p')\n    icon.className = 'nav-item icon';\n    icon.textContent = \"Yums\";\n    icon.setAttribute('data-page', 'home');\n\n    iconContainer.appendChild(icon);\n    navList.appendChild(createNavItem('Menu'));\n    navList.appendChild(createNavItem('Contact'));\n    nav.appendChild(navList);\n\n\n\n}\n\nfunction createNavItem(content) {\n    let navItem = document.createElement('li');\n    navItem.classList.toggle('nav-item');\n    navItem.setAttribute('data-page', content);\n    navItem.textContent = content;\n\n    return navItem\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/navbar.js?");

/***/ })

/******/ });