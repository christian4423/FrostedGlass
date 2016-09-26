/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(6);

/***/ },

/***/ 6:
/***/ function(module, exports) {

	'use strict';

	$(function () {
	  frostedGlass();

	  $(window).resize(function () {
	    frostedGlass();
	  });
	});

	function frostedGlass() {
	  var element = $('[data-action=frostedGlassInit]');
	  var len = element.length;
	  for (var i = 0; i < len; i++) {
	    var obj = $(element[i]);
	    var objProp = {
	      width: obj.width(),
	      height: obj.height(),
	      leftPos: obj.offset().left,
	      topPos: obj.offset().top
	    },
	        imageSrc = obj.data('imagesrc'),
	        blur = obj.find('.image--blur'),
	        mask = obj.find('.mask'),
	        maskLeftPos = mask.offset().left,
	        difference = objProp.leftPos - maskLeftPos;

	    obj.css({
	      "background-image": 'url(\'' + imageSrc + '\')'
	    });
	    blur.css({
	      "background-image": 'url(\'' + imageSrc + '\')',
	      left: difference + 'px',
	      width: obj.width(),
	      height: obj.height()
	    });
	  };
	};

/***/ }

/******/ });