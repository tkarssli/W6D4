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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor(arr) {\n        this.arr = arr;\n    }\n\n    html(string = '') {\n        if (string.length > 0) {\n            this.arr.forEach((el) => {\n                el.innerHTML = string;\n            })\n        } else {\n            return this.arr[0].innerHTML\n        }\n    }\n\n    empty() {\n        this.arr.forEach((el) => {\n            el.innerHTML = '';\n        })\n    }\n\n    append(input) {\n        if (input instanceof DOMNodeCollection) {\n            // debugger\n            this.arr.forEach((el) => {\n                input.arr.forEach((el2) => {\n                    el.innerHTML = el.innerHTML + el2.outerHTML;\n                })\n            })\n\n        } else if (input instanceof HTMLElement) {\n            this.arr.forEach((el) => {\n                el.innerHTML = el.innerHTML + input.outerHTML;\n            })\n        } else {\n            this.arr.forEach((el) => {\n                el.innerHTML += input;\n            })\n        }\n        // if (input instanceof HTMLElement) {\n\n        // }\n    }\n\n    addClass(className) {\n        this.arr.forEach((el) => {\n            el.classList.add(className);\n        })\n    }\n\n    removeClass(className) {\n        this.arr.forEach((el) => {\n            el.classList.remove(className);\n        })\n    }\n\n    attr(attribute, value) {\n        this.arr.forEach((el) => {\n            el.setAttribute(attribute, value);\n        })\n    }\n\n    children() {\n        const newCollection = [];\n        this.arr.forEach((el) => {\n            newCollection.push(el.children[0]);\n        })\n\n        return new DOMNodeCollection(newCollection);\n    }\n\n    parent() {\n        const newCollection = [];\n        this.arr.forEach((el => {\n            newCollection.push(el.parentElement);\n        }))\n\n        return new DOMNodeCollection(newCollection);\n    }\n\n    find(selector) {\n        // const childrenCollection = this.children();\n        const matchingCollection = []\n        this.arr.forEach((el) => {\n            // debugger\n            const nodeLists = el.querySelectorAll(selector)\n            nodeLists.forEach((el) => {\n                matchingCollection.push(el)\n            })\n        })\n        return new DOMNodeCollection(matchingCollection);\n    }\n\n    remove() {\n        this.arr.forEach((el) => {\n            el.outerHTML = '';\n        })\n    }\n\n\n    on(string, callback) {\n        this.arr.forEach((el) => {\n            el[string] = callback\n            el.addEventListener(string, callback);\n        })\n    }\n\n    off(string) {\n        this.arr.forEach((el) => {\n            el.removeEventListener(string, el[string]);\n            el[string] = '';\n        })\n\n    }\n\n}\n\n\n\n\n\nmodule.exports = DOMNodeCollection\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\")\n\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n$l = function (selector) {\n    const functions = [] //[fn]\n    if (selector instanceof HTMLElement) {\n        const arr = [selector];\n        return new DOMNodeCollection(arr);\n    } else if (selector instanceof Function) {\n        if (document.readyState === \"complete\") {\n            selector();\n        } else {\n            functions.push(selector)\n        }\n\n\n\n    } else {\n\n        const elements = document.querySelectorAll(selector);\n        const arr = [];\n        elements.forEach((el) => {\n            arr.push(el)\n        })\n\n        return new DOMNodeCollection(arr);\n    }\n\n    document.addEventListener('DOMContentLoaded', () => {\n        functions.forEach((el) => {\n            el();\n            functions.shift();\n        })\n    }, false);\n}\n\nli = $l('li')\np = document.createElement('p')\np.innerHTML = 'Taco'\n$p = $l(p)\n\nli.append($p)\n$l(() => alert('the document is ready'));\n$l(() => alert('the document is SUPER ready'));\n// console.log('alert');\n\n\n// window.$l = $l;\n// })\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });