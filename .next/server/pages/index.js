(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 389:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
var jsx_runtime_namespaceObject = require("react/jsx-runtime");;
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: ./pages/index.js



async function getStaticProps(context) {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokedex/2/").then(respostaDoServer => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }
  }).then(respostaEmObjeto => {
    return respostaEmObjeto.pokemon_entries;
  });
  return {
    props: {
      pokemons
    }
  };
}
function Home(props) {
  const {
    pokemons
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_namespaceObject.jsxs)("div", {
    children: ["Pok\xE9dex", /*#__PURE__*/jsx_runtime_namespaceObject.jsx("ul", {
      children: pokemons.map(pokemon => /*#__PURE__*/jsx_runtime_namespaceObject.jsx("li", {
        children: pokemon.pokemon_species.name
      }, pokemon.entry_number))
    })]
  });
}

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(389));
module.exports = __webpack_exports__;

})();