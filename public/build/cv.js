(self["webpackChunk"] = self["webpackChunk"] || []).push([["cv"],{

/***/ "./assets/cv.js":
/*!**********************!*\
  !*** ./assets/cv.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

var btnMenu = document.querySelector('.btn-rond-menu');
var nav = document.querySelector('.nav-gauche');
var allItemNav = document.querySelectorAll('.nav-menu-item');
var ligne = document.querySelector('.cont-ligne');
btnMenu.addEventListener('click', function () {
  ligne.classList.toggle('active');
  nav.classList.toggle('menu-visible');
});

if (window.matchMedia('(max-width: 1300px)')) {
  allItemNav.forEach(function (item) {
    item.addEventListener('click', function () {
      nav.classList.toggle('menu-visible');
      ligne.classList.toggle('active');
    });
  });
} // Animation écriture


var txtAnim = document.querySelector('.txt-animation');
var typewriter = new Typewriter(txtAnim, {
  loop: false,
  deleteSpeed: 20
});
typewriter.pauseFor(1800).changeDelay(20).typeString('Moi c\'est Yanis El Kajjoui').pauseFor(300).typeString('<strong>, Développeur Junior Full-Stack</strong> !').pauseFor(1000).deleteChars(13).typeString('<span style="color: #27ae60;"> CSS</span> !').pauseFor(1000).deleteChars(5).typeString('<span style="color: #EA39ff;"> PhP</span> !').pauseFor(1000).deleteChars(5).typeString('<span style="color: midnightblue;"> React</span> !').pauseFor(1000).deleteChars(8).typeString('<span style="color: #ff6910;"> JavaScript</span> !').start(); // Animation Contact

var input_fields = document.querySelectorAll('input');

for (var i = 0; i < input_fields.length; i++) {
  var field = input_fields[i];
  field.addEventListener('input', function (e) {
    if (e.target.value !== '') {
      e.target.parentNode.classList.add('animation');
    } else if (e.target.value == '') {
      e.target.parentNode.classList.remove('animation');
    }
  });
} // Anim GSAP + ScrollMagic


var navbar = document.querySelector('.nav-gauche');
var titre = document.querySelector('h1');
var btn = document.querySelectorAll('.btn-acc');
var btnMedias = document.querySelectorAll('.media');
var btnRondAccueil = document.querySelector('.btn-rond');
var TL1 = gsap.timeline({
  paused: true
});
TL1.to(navbar, {
  left: '0px',
  ease: Power3.easeOut,
  duration: 0.6
}).from(titre, {
  y: -50,
  opacity: 0,
  ease: Power3.easeOut,
  duration: 0.4
}).staggerFrom(btn, 1, {
  opacity: 0
}, 0.2, '-=0.30').staggerFrom(btnMedias, 1, {
  opacity: 0
}, 0.2, '-=0.75').from(btnRondAccueil, {
  y: -50,
  opacity: 0,
  ease: Power3.easeOut,
  duration: 0.4
}, '-=1');
window.addEventListener('load', function () {
  TL1.play();
}); // Animation ScrollMagic GSAP presentation

var presentationContainer = document.querySelector('.presentation');
var titrePres = document.querySelector('.titre-pres');
var presGauche = document.querySelector('.pres-gauche');
var listePres = document.querySelectorAll('.item-liste');
var tlpres = new TimelineMax();
tlpres.from(titrePres, {
  y: -200,
  opacity: 0,
  duration: 0.6
}).from(presGauche, {
  y: -20,
  opacity: 0,
  duration: 0.6
}, '-=0.5').staggerFrom(listePres, 1, {
  opacity: 0
}, 0.2, '-=0.5');
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: presentationContainer,
  triggerHook: 0.5,
  reverse: false
}).setTween(tlpres) // .addIndicators()
.addTo(controller); // Anim portfolio

var portfolioContainer = document.querySelector('.portfolio');
var titrePortfolio = document.querySelector('.titre-port');
var itemPortfolio = document.querySelectorAll('.vague1');
var tlPortfolio = new TimelineMax();
tlPortfolio.from(titrePortfolio, {
  y: -50,
  opacity: 0,
  duration: 0.5
}).staggerFrom(itemPortfolio, 1, {
  opacity: 0
}, 0.2, '-=0.5');
var scene2 = new ScrollMagic.Scene({
  triggerElement: portfolioContainer,
  triggerHook: 0.5,
  reverse: false
}).setTween(tlPortfolio) // .addIndicators()
.addTo(controller); // Vague 2 

var itemPortfolio2 = document.querySelectorAll('.vague2');
var tlPortfolio2 = new TimelineMax();
tlPortfolio2.staggerFrom(itemPortfolio2, 1, {
  opacity: 0
}, 0.2, '-=0.5');
var scene3 = new ScrollMagic.Scene({
  triggerElement: itemPortfolio,
  triggerHook: 0.2,
  reverse: false
}).setTween(tlPortfolio2) // .addIndicators()
.addTo(controller); // Vague 3

var itemPortfolio3 = document.querySelectorAll('.vague3');
var tlPortfolio3 = new TimelineMax();
tlPortfolio3.staggerFrom(itemPortfolio3, 1, {
  opacity: 0
}, 0.2, '-=0.5');
var scene4 = new ScrollMagic.Scene({
  triggerElement: itemPortfolio2,
  triggerHook: 0.2,
  reverse: false
}).setTween(tlPortfolio3) // .addIndicators()
.addTo(controller); // Animation range

var sectionComp = document.querySelector('.section-range');
var titreComp = document.querySelector('.titre-exp');
var allLabel = document.querySelectorAll('.label-skill');
var allPourcent = document.querySelectorAll('.number-skill');
var allBarres = document.querySelectorAll('.barre-skill');
var allShadowBarres = document.querySelectorAll('.barre-grises');
var tlCompetences = new TimelineMax();
tlCompetences.from(titreComp, {
  opacity: 0,
  duration: 0.6
}).staggerFrom(allLabel, 0.5, {
  y: -50,
  opacity: 0
}, 0.1, '-=0.5').staggerFrom(allPourcent, 0.5, {
  y: -10,
  opacity: 0
}, 0.1, '-=1').staggerFrom(allShadowBarres, 0.5, {
  y: -10,
  opacity: 0
}, 0.1, '-=1').staggerFrom(allBarres, 0.5, {
  y: -10,
  opacity: 0
}, 0.1, '-=1');
var scene5 = new ScrollMagic.Scene({
  triggerElement: sectionComp,
  reverse: false
}).setTween(tlCompetences).addTo(controller);

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_dom--711a0d"], () => (__webpack_exec__("./assets/cv.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly8vLi9hc3NldHMvY3YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXJvbmQtbWVudScpXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWdhdWNoZScpO1xuY29uc3QgYWxsSXRlbU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbWVudS1pdGVtJyk7XG5jb25zdCBsaWduZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250LWxpZ25lJyk7XG5cbmJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICBsaWduZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LXZpc2libGUnKVxuXG59KVxuXG5pZih3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTMwMHB4KScpKSB7XG4gXG4gICAgYWxsSXRlbU5hdi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtdmlzaWJsZScpXG4gICAgICAgICAgICBsaWduZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cbi8vIEFuaW1hdGlvbiDDqWNyaXR1cmVcblxuY29uc3QgdHh0QW5pbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50eHQtYW5pbWF0aW9uJyk7XG5cbmxldCB0eXBld3JpdGVyID0gbmV3IFR5cGV3cml0ZXIodHh0QW5pbSwgIHtcbiAgICBsb29wOiBmYWxzZSxcbiAgICBkZWxldGVTcGVlZDogMjBcbn0pXG5cbnR5cGV3cml0ZXIgXG4ucGF1c2VGb3IoMTgwMClcbi5jaGFuZ2VEZWxheSgyMClcbi50eXBlU3RyaW5nKCdNb2kgY1xcJ2VzdCBZYW5pcyBFbCBLYWpqb3VpJylcbi5wYXVzZUZvcigzMDApXG4udHlwZVN0cmluZygnPHN0cm9uZz4sIETDqXZlbG9wcGV1ciBKdW5pb3IgRnVsbC1TdGFjazwvc3Ryb25nPiAhJylcbi5wYXVzZUZvcigxMDAwKVxuLmRlbGV0ZUNoYXJzKDEzKVxuLnR5cGVTdHJpbmcoJzxzcGFuIHN0eWxlPVwiY29sb3I6ICMyN2FlNjA7XCI+IENTUzwvc3Bhbj4gIScpXG4ucGF1c2VGb3IoMTAwMClcbi5kZWxldGVDaGFycyg1KVxuLnR5cGVTdHJpbmcoJzxzcGFuIHN0eWxlPVwiY29sb3I6ICNFQTM5ZmY7XCI+IFBoUDwvc3Bhbj4gIScpXG4ucGF1c2VGb3IoMTAwMClcbi5kZWxldGVDaGFycyg1KVxuLnR5cGVTdHJpbmcoJzxzcGFuIHN0eWxlPVwiY29sb3I6IG1pZG5pZ2h0Ymx1ZTtcIj4gUmVhY3Q8L3NwYW4+ICEnKVxuLnBhdXNlRm9yKDEwMDApXG4uZGVsZXRlQ2hhcnMoOClcbi50eXBlU3RyaW5nKCc8c3BhbiBzdHlsZT1cImNvbG9yOiAjZmY2OTEwO1wiPiBKYXZhU2NyaXB0PC9zcGFuPiAhJylcbi5zdGFydCgpXG5cbi8vIEFuaW1hdGlvbiBDb250YWN0XG5cbmNvbnN0IGlucHV0X2ZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbmZvcihsZXQgaSA9IDA7IGkgPCBpbnB1dF9maWVsZHMubGVuZ3RoOyBpKyspIHtcblxuICAgIGxldCBmaWVsZCA9IGlucHV0X2ZpZWxkc1tpXTtcblxuICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQudmFsdWUgIT09ICcnKXtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uJylcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PSAnJyl7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGlvbicpXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbi8vIEFuaW0gR1NBUCArIFNjcm9sbE1hZ2ljXG5cbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtZ2F1Y2hlJyk7XG5jb25zdCB0aXRyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWFjYycpXG5jb25zdCBidG5NZWRpYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVkaWEnKVxuY29uc3QgYnRuUm9uZEFjY3VlaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXJvbmQnKVxuXG5cbmNvbnN0IFRMMSA9IGdzYXAudGltZWxpbmUoe3BhdXNlZDogdHJ1ZX0pO1xuXG5UTDEgXG4udG8obmF2YmFyLCB7bGVmdDogJzBweCcsIGVhc2U6IFBvd2VyMy5lYXNlT3V0LCBkdXJhdGlvbjogMC42fSlcbi5mcm9tKHRpdHJlLCB7eTogLTUwLCBvcGFjaXR5OiAwLCBlYXNlOiBQb3dlcjMuZWFzZU91dCwgZHVyYXRpb246IDAuNH0pXG4uc3RhZ2dlckZyb20oYnRuLCAxLCB7b3BhY2l0eTogMH0sIDAuMiwgJy09MC4zMCcpXG4uc3RhZ2dlckZyb20oYnRuTWVkaWFzLCAxLCB7b3BhY2l0eTogMH0sIDAuMiwgJy09MC43NScpXG4uZnJvbShidG5Sb25kQWNjdWVpbCwge3k6IC01MCwgb3BhY2l0eTowLCBlYXNlOiBQb3dlcjMuZWFzZU91dCwgZHVyYXRpb246IDAuNH0sICctPTEnKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICBUTDEucGxheSgpO1xufSlcblxuLy8gQW5pbWF0aW9uIFNjcm9sbE1hZ2ljIEdTQVAgcHJlc2VudGF0aW9uXG5cbmNvbnN0IHByZXNlbnRhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzZW50YXRpb24nKVxuY29uc3QgdGl0cmVQcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdHJlLXByZXMnKTtcbmNvbnN0IHByZXNHYXVjaGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlcy1nYXVjaGUnKVxuY29uc3QgbGlzdGVQcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tbGlzdGUnKVxuXG5jb25zdCB0bHByZXMgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxudGxwcmVzXG4uZnJvbSh0aXRyZVByZXMsIHt5OiAtMjAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC42fSlcbi5mcm9tKHByZXNHYXVjaGUsIHt5Oi0yMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNn0sICctPTAuNScpXG4uc3RhZ2dlckZyb20obGlzdGVQcmVzLCAxLCB7b3BhY2l0eTogMH0sIDAuMiwgJy09MC41JylcblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XG5cbmNvbnN0IHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICB0cmlnZ2VyRWxlbWVudDogcHJlc2VudGF0aW9uQ29udGFpbmVyLFxuICAgIHRyaWdnZXJIb29rOiAwLjUsXG4gICAgcmV2ZXJzZTogZmFsc2Vcbn0pXG4uc2V0VHdlZW4odGxwcmVzKVxuLy8gLmFkZEluZGljYXRvcnMoKVxuLmFkZFRvKGNvbnRyb2xsZXIpXG5cbi8vIEFuaW0gcG9ydGZvbGlvXG5cbmNvbnN0IHBvcnRmb2xpb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8nKVxuY29uc3QgdGl0cmVQb3J0Zm9saW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0cmUtcG9ydCcpXG5jb25zdCBpdGVtUG9ydGZvbGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhZ3VlMScpXG5cbmNvbnN0IHRsUG9ydGZvbGlvID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbnRsUG9ydGZvbGlvXG4uZnJvbSh0aXRyZVBvcnRmb2xpbywge3k6IC01MCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNX0pXG4uc3RhZ2dlckZyb20oaXRlbVBvcnRmb2xpbywgMSwge29wYWNpdHk6IDB9LCAwLjIsICctPTAuNScpXG5cbmNvbnN0IHNjZW5lMiA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgdHJpZ2dlckVsZW1lbnQ6IHBvcnRmb2xpb0NvbnRhaW5lcixcbiAgICB0cmlnZ2VySG9vazogMC41LFxuICAgIHJldmVyc2U6IGZhbHNlXG59KVxuLnNldFR3ZWVuKHRsUG9ydGZvbGlvKVxuLy8gLmFkZEluZGljYXRvcnMoKVxuLmFkZFRvKGNvbnRyb2xsZXIpXG5cblxuLy8gVmFndWUgMiBcblxuY29uc3QgaXRlbVBvcnRmb2xpbzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFndWUyJylcblxuY29uc3QgdGxQb3J0Zm9saW8yID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbnRsUG9ydGZvbGlvMlxuLnN0YWdnZXJGcm9tKGl0ZW1Qb3J0Zm9saW8yLCAxLCB7b3BhY2l0eTogMH0sIDAuMiwgJy09MC41JylcblxuY29uc3Qgc2NlbmUzID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICB0cmlnZ2VyRWxlbWVudDogaXRlbVBvcnRmb2xpbyxcbiAgICB0cmlnZ2VySG9vazogMC4yLFxuICAgIHJldmVyc2U6IGZhbHNlXG59KVxuLnNldFR3ZWVuKHRsUG9ydGZvbGlvMilcbi8vIC5hZGRJbmRpY2F0b3JzKClcbi5hZGRUbyhjb250cm9sbGVyKVxuXG5cbi8vIFZhZ3VlIDNcblxuY29uc3QgaXRlbVBvcnRmb2xpbzMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFndWUzJylcblxuY29uc3QgdGxQb3J0Zm9saW8zID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cbnRsUG9ydGZvbGlvM1xuLnN0YWdnZXJGcm9tKGl0ZW1Qb3J0Zm9saW8zLCAxLCB7b3BhY2l0eTogMH0sIDAuMiwgJy09MC41JylcblxuY29uc3Qgc2NlbmU0ID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICB0cmlnZ2VyRWxlbWVudDogaXRlbVBvcnRmb2xpbzIsXG4gICAgdHJpZ2dlckhvb2s6IDAuMixcbiAgICByZXZlcnNlOiBmYWxzZVxufSlcbi5zZXRUd2Vlbih0bFBvcnRmb2xpbzMpXG4vLyAuYWRkSW5kaWNhdG9ycygpXG4uYWRkVG8oY29udHJvbGxlcilcblxuXG4vLyBBbmltYXRpb24gcmFuZ2VcblxuY29uc3Qgc2VjdGlvbkNvbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1yYW5nZScpO1xuY29uc3QgdGl0cmVDb21wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdHJlLWV4cCcpO1xuY29uc3QgYWxsTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGFiZWwtc2tpbGwnKVxuY29uc3QgYWxsUG91cmNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubnVtYmVyLXNraWxsJylcbmNvbnN0IGFsbEJhcnJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXJyZS1za2lsbCcpXG5jb25zdCBhbGxTaGFkb3dCYXJyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFycmUtZ3Jpc2VzJylcblxuY29uc3QgdGxDb21wZXRlbmNlcyA9IG5ldyBUaW1lbGluZU1heCgpO1xuXG50bENvbXBldGVuY2VzXG4uZnJvbSh0aXRyZUNvbXAsIHtvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC42fSlcbi5zdGFnZ2VyRnJvbShhbGxMYWJlbCwgMC41LCB7eTogLTUwLCBvcGFjaXR5OjB9LCAwLjEsICctPTAuNScpXG4uc3RhZ2dlckZyb20oYWxsUG91cmNlbnQsIDAuNSwge3k6IC0xMCwgb3BhY2l0eTowfSwgMC4xLCAnLT0xJylcbi5zdGFnZ2VyRnJvbShhbGxTaGFkb3dCYXJyZXMsIDAuNSwge3k6IC0xMCwgb3BhY2l0eTowfSwgMC4xLCAnLT0xJylcbi5zdGFnZ2VyRnJvbShhbGxCYXJyZXMsIDAuNSwge3k6IC0xMCwgb3BhY2l0eTowfSwgMC4xLCAnLT0xJylcblxuY29uc3Qgc2NlbmU1ID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICB0cmlnZ2VyRWxlbWVudDogc2VjdGlvbkNvbXAsXG4gICAgcmV2ZXJzZTogZmFsc2Vcbn0pXG4uc2V0VHdlZW4odGxDb21wZXRlbmNlcylcbi5hZGRUbyhjb250cm9sbGVyKTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHJldHVybiAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUpO1xuICB9XG59XG5cbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xuIl0sIm5hbWVzIjpbImJ0bk1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXYiLCJhbGxJdGVtTmF2IiwicXVlcnlTZWxlY3RvckFsbCIsImxpZ25lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJmb3JFYWNoIiwiaXRlbSIsInR4dEFuaW0iLCJ0eXBld3JpdGVyIiwiVHlwZXdyaXRlciIsImxvb3AiLCJkZWxldGVTcGVlZCIsInBhdXNlRm9yIiwiY2hhbmdlRGVsYXkiLCJ0eXBlU3RyaW5nIiwiZGVsZXRlQ2hhcnMiLCJzdGFydCIsImlucHV0X2ZpZWxkcyIsImkiLCJsZW5ndGgiLCJmaWVsZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhcmVudE5vZGUiLCJhZGQiLCJyZW1vdmUiLCJuYXZiYXIiLCJ0aXRyZSIsImJ0biIsImJ0bk1lZGlhcyIsImJ0blJvbmRBY2N1ZWlsIiwiVEwxIiwiZ3NhcCIsInRpbWVsaW5lIiwicGF1c2VkIiwidG8iLCJsZWZ0IiwiZWFzZSIsIlBvd2VyMyIsImVhc2VPdXQiLCJkdXJhdGlvbiIsImZyb20iLCJ5Iiwib3BhY2l0eSIsInN0YWdnZXJGcm9tIiwicGxheSIsInByZXNlbnRhdGlvbkNvbnRhaW5lciIsInRpdHJlUHJlcyIsInByZXNHYXVjaGUiLCJsaXN0ZVByZXMiLCJ0bHByZXMiLCJUaW1lbGluZU1heCIsImNvbnRyb2xsZXIiLCJTY3JvbGxNYWdpYyIsIkNvbnRyb2xsZXIiLCJzY2VuZSIsIlNjZW5lIiwidHJpZ2dlckVsZW1lbnQiLCJ0cmlnZ2VySG9vayIsInJldmVyc2UiLCJzZXRUd2VlbiIsImFkZFRvIiwicG9ydGZvbGlvQ29udGFpbmVyIiwidGl0cmVQb3J0Zm9saW8iLCJpdGVtUG9ydGZvbGlvIiwidGxQb3J0Zm9saW8iLCJzY2VuZTIiLCJpdGVtUG9ydGZvbGlvMiIsInRsUG9ydGZvbGlvMiIsInNjZW5lMyIsIml0ZW1Qb3J0Zm9saW8zIiwidGxQb3J0Zm9saW8zIiwic2NlbmU0Iiwic2VjdGlvbkNvbXAiLCJ0aXRyZUNvbXAiLCJhbGxMYWJlbCIsImFsbFBvdXJjZW50IiwiYWxsQmFycmVzIiwiYWxsU2hhZG93QmFycmVzIiwidGxDb21wZXRlbmNlcyIsInNjZW5lNSJdLCJzb3VyY2VSb290IjoiIn0=