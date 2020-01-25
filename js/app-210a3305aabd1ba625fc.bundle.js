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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("cbRa");
__webpack_require__("jk3O");
module.exports = __webpack_require__("4+nx");


/***/ }),

/***/ "4+nx":
/***/ (function(module, exports) {

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(function(reg) {
        // reg.onupdatefound = function() {
        //   var installingWorker = reg.installing;
        //   installingWorker.onstatechange = function() {
        //     switch (installingWorker.state) {
        //       case "installed":
        //         if (navigator.serviceWorker.controller) {
        //           var toast = document.getElementById("toast");
        //           toast.innerHTML =
        //             "A newer version is available. Tap to refresh.";
        //           toast.classList.add("show", "clickable");
        //           toast.onclick = function() {
        //             window.location.reload();
        //           };
        //         } else {
        //           // console.log('Content is now available offline!');
        //         }
        //         break;
        //       case "redundant":
        //         // console.error('The installing service worker became redundant.');
        //         break;
        //     }
        //   };
        // };
      })
      .catch(function(err) {
        console.error(err);
      });
  });
}


/***/ }),

/***/ "cbRa":
/***/ (function(module, exports) {

window.addEventListener('online', onlineMode)
window.addEventListener('offline', offlineMode)

const toast = document.getElementById('toast')

if (!navigator.onLine) {
    offlineMode()
}

function onlineMode() {
    document.head
    .querySelector('meta[name=theme-color]')
    .setAttribute('content', '#f26c4f')

    document.body.classList.remove('offline')

    toast.classList.remove('show')
}

function offlineMode() {
    document.head
    .querySelector('meta[name=theme-color]')
    .setAttribute('content', '#153342')

    document.body.classList.add('offline')

    toast.innerHTML = 'You are browsing in offline mode'
    toast.classList.add('show')
}


/***/ }),

/***/ "jk3O":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=app-210a3305aabd1ba625fc.bundle.js.map