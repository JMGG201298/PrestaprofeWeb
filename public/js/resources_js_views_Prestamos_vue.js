"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Prestamos_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogNote.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogNote.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DialogNote',
  data: function data() {
    return {
      dialogNote: false
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogPdf.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogPdf.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DialogPdf',
  data: function data() {
    return {
      srcPdf: '',
      dialog: false,
      isLoading: true
    };
  },
  methods: {
    closePdf: function closePdf() {
      this.dialog = false;
    },
    openPdf: function openPdf() {
      this.dialog = true;
      this.isLoading = true;
    },
    changePdf: function changePdf(src) {
      this.srcPdf = src;
    },
    loadedPdf: function loadedPdf() {
      this.isLoading = false;
      console.log("YA cargo");
    }
  },
  created: function created() {},
  props: {
    loan: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prestamos.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prestamos.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_DialogPdf_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DialogPdf.vue */ "./resources/js/components/DialogPdf.vue");
/* harmony import */ var _components_DialogNote_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DialogNote.vue */ "./resources/js/components/DialogNote.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      mxCurrencyFormat: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }),
      headers: [{
        text: 'Nombre(s)',
        value: 'name'
      }, {
        text: 'Monto del préstamo',
        value: 'base_amount'
      }, {
        text: 'Fecha',
        value: 'application_date'
      }, {
        text: 'Plazo',
        value: 'term'
      }, {
        text: 'Estado',
        value: 'state'
      }, {
        text: 'Acción',
        value: 'accion'
      }, {
        text: 'ID',
        value: 'id'
      }],
      search: '',
      listStates: [{
        title: 'Revisar préstamo',
        icon: 'mdi-magnify',
        id: 2
      }, {
        title: 'Aceptar préstamo',
        icon: 'mdi-check',
        id: 3
      }, {
        title: 'Rechazar préstamo',
        icon: 'mdi-close',
        id: 8
      }],
      isBtnSearchTools: false,
      searchState: '',
      src: 'http://127.0.0.1:8000/api/loan-pdf/1',
      isDialogPdf: false,
      loan: {}
    };
  },
  methods: {
    openDialogPdf: function openDialogPdf(loan) {
      this.loan = loan;
      this.$refs.dialogPdfComponent.changePdf("http://127.0.0.1:8000/api/loan-pdf/" + loan.id + "#toolbar=0");
      this.$refs.dialogPdfComponent.openPdf();
    },
    colorRow: function colorRow(item) {
      var clase = 'No';
      if (item.state == "Pendiente") clase = "colorPendiente";
      if (item.state == "Revisión") clase = "colorRevision";
      if (item.state == "Activo") clase = "colorActivo";
      if (item.state == "Vencido") clase = "colorVencido";
      if (item.state == "Congelado") clase = "colorCongelado";
      if (item.state == "Pagado") clase = "colorPagado";
      if (item.state == "Rechazado") clase = "colorRechazado";
      return clase;
    },
    iconState: function iconState(state) {
      var icono = "";
      if (state.name == "Pendiente") icono = "mdi-clock-outline";
      if (state.name == "Revisión") icono = "mdi-magnify";
      if (state.name == "Activo") icono = "mdi-access-point";
      if (state.name == "Vencido") icono = "mdi-exclamation";
      if (state.name == "Congelado") icono = "mdi-snowflake-alert";
      if (state.name == "Pagado") icono = "mdi-check";
      if (state.name == "Rechazado") clase = "mdi-close";
      return icono;
    },
    showTools: function showTools() {
      this.isBtnSearchTools = !this.isBtnSearchTools;
      this.searchState = '';
    },
    filterSearchText: function filterSearchText(item) {
      return item.name.toLowerCase().includes(this.search.toLowerCase());
    },
    filterStateText: function filterStateText(item) {
      return item.state.toLowerCase().includes(this.searchState.toLowerCase());
    },
    changeStatusLoan: function changeStatusLoan(state, loan) {
      console.log(loan);
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
    loans: function loans(state) {
      return state.loansStore.loans;
    }
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
    loanStates: function loanStates(state) {
      return state.loanStateStore.loanStates;
    }
  })), {}, {
    filters: function filters() {
      var conditions = [];

      if (this.search) {
        conditions.push(this.filterSearchText);
      }

      if (this.searchState) {
        conditions.push(this.filterStateText);
      }

      if (conditions.length > 0) {
        return this.loans.filter(function (loan) {
          return conditions.every(function (condition) {
            return condition(loan);
          });
        });
      }

      return this.loans;
    }
  }),
  components: {
    DialogPdf: _components_DialogPdf_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DialogNote: _components_DialogNote_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    this.$store.dispatch('getLoans');
    this.$store.dispatch('getStates');
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogPdf.vue?vue&type=style&index=0&id=480b2baf&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogPdf.vue?vue&type=style&index=0&id=480b2baf&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.contenedor[data-v-480b2baf]{\n    height: 100%;\n    width: 100%;\n    background: rgba(40, 43, 37, 0.726);\n    height: calc(100% - 64px);\n}\n.estiloPdf[data-v-480b2baf]{\n    height: 100%;\n    width: 50%;\n    margin: 0 auto;\n    display: block;\n}\n.spinner[data-v-480b2baf]{\n    margin: 0 auto;\n    display: block;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prestamos.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prestamos.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#btnHerramientas{\n    font-size: 14px;\n    text-transform: none;\n    color: rgb(0, 0, 0);\n    background-color: #d1d1d1f3;\n}\n.cbBusqueda{\n    font-size: 10px;\n}\n.contenedorHerramientas{\n    background-color: #a39d9d4d;\n}\n.colorPendiente{\n    background-color: rgba(39, 173, 214, 0.26) !important;\n}\n.colorPendiente:hover{\n    background-color: rgba(241, 241, 241, 0.450) !important;\n}\n.colorRevision{\n    background-color: rgba(238, 255, 0, 0.26) !important;\n}\n.colorRevision:hover{\n    background-color: rgba(44, 136, 250, 0.4) !important;\n}\n.colorActivo{\n    background-color: rgba(33, 228, 49, 0.26) !important;\n}\n.colorActivo:hover{\n    background-color: rgba(33, 228, 49, 0.450) !important;\n}\n.colorVencido{\n    background-color: rgba(224, 140, 12, 0.26) !important;\n}\n.colorVencido:hover{\n    background-color: rgba(224, 140, 12, 0.45) !important;\n}\n.colorCongelado{\n    background-color: rgba(33, 215, 228, 0.26) !important;\n}\n.colorCongelado:hover{\n    background-color: rgba(33, 215, 228, 0.450) !important;\n}\n.colorPagado{\n    background-color: rgba(33, 118, 228, 0.26) !important;\n}\n.colorPagado:hover{\n    background-color: rgba(33, 118, 228, 0.450) !important;\n}\n.colorRechazado{\n    background-color: rgba(228, 33, 33, 0.26) !important;\n}\n.colorRechazado:hover{\n    background-color: rgba(228, 33, 33, 0.450) !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogPdf.vue?vue&type=style&index=0&id=480b2baf&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogPdf.vue?vue&type=style&index=0&id=480b2baf&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogPdf_vue_vue_type_style_index_0_id_480b2baf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DialogPdf.vue?vue&type=style&index=0&id=480b2baf&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogPdf.vue?vue&type=style&index=0&id=480b2baf&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogPdf_vue_vue_type_style_index_0_id_480b2baf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogPdf_vue_vue_type_style_index_0_id_480b2baf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prestamos.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prestamos.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Prestamos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prestamos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prestamos.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Prestamos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Prestamos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/DialogNote.vue":
/*!************************************************!*\
  !*** ./resources/js/components/DialogNote.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DialogNote_vue_vue_type_template_id_4a46ad05___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogNote.vue?vue&type=template&id=4a46ad05& */ "./resources/js/components/DialogNote.vue?vue&type=template&id=4a46ad05&");
/* harmony import */ var _DialogNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogNote.vue?vue&type=script&lang=js& */ "./resources/js/components/DialogNote.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DialogNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DialogNote_vue_vue_type_template_id_4a46ad05___WEBPACK_IMPORTED_MODULE_0__.render,
  _DialogNote_vue_vue_type_template_id_4a46ad05___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DialogNote.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/DialogPdf.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/DialogPdf.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DialogPdf_vue_vue_type_template_id_480b2baf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogPdf.vue?vue&type=template&id=480b2baf&scoped=true& */ "./resources/js/components/DialogPdf.vue?vue&type=template&id=480b2baf&scoped=true&");
/* harmony import */ var _DialogPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogPdf.vue?vue&type=script&lang=js& */ "./resources/js/components/DialogPdf.vue?vue&type=script&lang=js&");
/* harmony import */ var _DialogPdf_vue_vue_type_style_index_0_id_480b2baf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DialogPdf.vue?vue&type=style&index=0&id=480b2baf&scoped=true&lang=css& */ "./resources/js/components/DialogPdf.vue?vue&type=style&index=0&id=480b2baf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DialogPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DialogPdf_vue_vue_type_template_id_480b2baf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DialogPdf_vue_vue_type_template_id_480b2baf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "480b2baf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DialogPdf.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Prestamos.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Prestamos.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Prestamos_vue_vue_type_template_id_30d86945___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prestamos.vue?vue&type=template&id=30d86945& */ "./resources/js/views/Prestamos.vue?vue&type=template&id=30d86945&");
/* harmony import */ var _Prestamos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prestamos.vue?vue&type=script&lang=js& */ "./resources/js/views/Prestamos.vue?vue&type=script&lang=js&");
/* harmony import */ var _Prestamos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prestamos.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Prestamos.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Prestamos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Prestamos_vue_vue_type_template_id_30d86945___WEBPACK_IMPORTED_MODULE_0__.render,
  _Prestamos_vue_vue_type_template_id_30d86945___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Prestamos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/DialogNote.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/DialogNote.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DialogNote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogNote.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DialogPdf.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/DialogPdf.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DialogPdf.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogPdf.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Prestamos.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Prestamos.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prestamos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prestamos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prestamos.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prestamos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DialogPdf.vue?vue&type=style&index=0&id=480b2baf&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/DialogPdf.vue?vue&type=style&index=0&id=480b2baf&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogPdf_vue_vue_type_style_index_0_id_480b2baf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DialogPdf.vue?vue&type=style&index=0&id=480b2baf&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogPdf.vue?vue&type=style&index=0&id=480b2baf&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/Prestamos.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Prestamos.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Prestamos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prestamos.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prestamos.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/DialogNote.vue?vue&type=template&id=4a46ad05&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/DialogNote.vue?vue&type=template&id=4a46ad05& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogNote_vue_vue_type_template_id_4a46ad05___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogNote_vue_vue_type_template_id_4a46ad05___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogNote_vue_vue_type_template_id_4a46ad05___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DialogNote.vue?vue&type=template&id=4a46ad05& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogNote.vue?vue&type=template&id=4a46ad05&");


/***/ }),

/***/ "./resources/js/components/DialogPdf.vue?vue&type=template&id=480b2baf&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/DialogPdf.vue?vue&type=template&id=480b2baf&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogPdf_vue_vue_type_template_id_480b2baf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogPdf_vue_vue_type_template_id_480b2baf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogPdf_vue_vue_type_template_id_480b2baf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DialogPdf.vue?vue&type=template&id=480b2baf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogPdf.vue?vue&type=template&id=480b2baf&scoped=true&");


/***/ }),

/***/ "./resources/js/views/Prestamos.vue?vue&type=template&id=30d86945&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Prestamos.vue?vue&type=template&id=30d86945& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prestamos_vue_vue_type_template_id_30d86945___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prestamos_vue_vue_type_template_id_30d86945___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prestamos_vue_vue_type_template_id_30d86945___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prestamos.vue?vue&type=template&id=30d86945& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prestamos.vue?vue&type=template&id=30d86945&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogNote.vue?vue&type=template&id=4a46ad05&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogNote.vue?vue&type=template&id=4a46ad05& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-dialog",
        {
          attrs: { width: "500" },
          model: {
            value: _vm.dialogNote,
            callback: function ($$v) {
              _vm.dialogNote = $$v
            },
            expression: "dialogNote",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _vm._v("\n                Anotaciones\n            "),
              ]),
              _vm._v(" "),
              _c("v-card-subtitle", [
                _vm._v(
                  "\n                Indica la razón por la cual el prestamo se "
                ),
                _c("span", [_vm._v("#")]),
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-textarea", {
                    attrs: { solo: "", label: "Escribe una razón" },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogPdf.vue?vue&type=template&id=480b2baf&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DialogPdf.vue?vue&type=template&id=480b2baf&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { height: "100%" } },
    [
      _c(
        "v-dialog",
        {
          staticClass: "dialogo",
          attrs: { fullscreen: "" },
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _c(
            "v-toolbar",
            { attrs: { color: "#006a82" } },
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-toolbar-title", { staticClass: "white--text" }, [
                _vm._v("Detalles del préstamo / #"),
                _c("span", [_vm._v(_vm._s(_vm.loan.id))]),
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "", color: "white" } },
                [_c("v-icon", [_vm._v("mdi-printer")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "", color: "white" } },
                [_c("v-icon", [_vm._v("mdi-clipboard-text-search-outline")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "", color: "white" } },
                [_c("v-icon", [_vm._v("mdi-email")])],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { small: "", fab: "", dark: "", color: "red" },
                  on: {
                    click: function ($event) {
                      return _vm.closePdf()
                    },
                  },
                },
                [_c("v-icon", { attrs: { dark: "" } }, [_vm._v("mdi-close")])],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "contenedor" },
            [
              _vm.isLoading
                ? _c("v-progress-circular", {
                    staticClass: "spinner",
                    attrs: { color: "primary", size: "100", indeterminate: "" },
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("iframe", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isLoading,
                    expression: "!isLoading",
                  },
                ],
                staticClass: "estiloPdf",
                attrs: { onload: _vm.loadedPdf(), src: _vm.srcPdf },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prestamos.vue?vue&type=template&id=30d86945&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Prestamos.vue?vue&type=template&id=30d86945& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "p-3" },
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            { staticClass: "black" },
            [
              _c("span", { staticClass: "white--text" }, [
                _vm._v("Lista de clientes"),
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "append-icon": "mdi-magnify",
                  label: "Buscar...",
                  solo: "",
                  "single-line": "",
                  "hide-details": "",
                  dense: "",
                },
                model: {
                  value: _vm.search,
                  callback: function ($$v) {
                    _vm.search = $$v
                  },
                  expression: "search",
                },
              }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "ma-2",
                  attrs: { id: "btnHerramientas" },
                  on: { click: _vm.showTools },
                },
                [
                  _vm._v("Herramientas de búsqueda\n            "),
                  _c("v-icon", [_vm._v("mdi-menu-down")]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _vm.isBtnSearchTools
            ? _c(
                "v-card-actions",
                { staticClass: "contenedorHerramientas" },
                [
                  _c("v-select", {
                    staticClass: "cbBusqueda",
                    attrs: {
                      label: "Seleccionar Estado",
                      items: _vm.loanStates,
                      "item-text": "name",
                      solo: "",
                      "hide-details": "",
                      dense: "",
                    },
                    model: {
                      value: _vm.searchState,
                      callback: function ($$v) {
                        _vm.searchState = $$v
                      },
                      expression: "searchState",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-select", {
                    staticClass: "cbBusqueda",
                    attrs: {
                      label: "Seleccionar Nivel",
                      solo: "",
                      "hide-details": "",
                      dense: "",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-spacer"),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("v-data-table", {
            attrs: {
              headers: _vm.headers,
              items: _vm.filters,
              search: _vm.search,
              "show-select": "",
              "item-class": _vm.colorRow,
            },
            scopedSlots: _vm._u([
              {
                key: "item.name",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.last_name + " " + item.name) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.state",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.state) +
                        "\n                "
                    ),
                    _c(
                      "v-menu",
                      {
                        attrs: { top: "", offset: "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function (ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-btn",
                                    _vm._g(
                                      _vm._b(
                                        { attrs: { icon: "" } },
                                        "v-btn",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [_c("v-icon", [_vm._v("mdi-pencil")])],
                                    1
                                  ),
                                ]
                              },
                            },
                          ],
                          null,
                          true
                        ),
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "v-list",
                          _vm._l(_vm.listStates, function (item2, index) {
                            return _c(
                              "v-list-item",
                              {
                                key: index,
                                attrs: { link: "", dense: "" },
                                on: {
                                  click: function ($event) {
                                    return _vm.changeStatusLoan(item2, item)
                                  },
                                },
                              },
                              [
                                _c("v-icon", [_vm._v(_vm._s(item2.icon))]),
                                _vm._v(" "),
                                _c("v-list-item-title", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(item2.title) +
                                      "\n                            "
                                  ),
                                ]),
                              ],
                              1
                            )
                          }),
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                },
              },
              {
                key: "item.base_amount",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.mxCurrencyFormat.format(item.base_amount)) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.term",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(item.term + " días") +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "item.accion",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-btn",
                      { attrs: { icon: "" } },
                      [
                        _c(
                          "v-icon",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.openDialogPdf(item)
                              },
                            },
                          },
                          [_vm._v("mdi-eye")]
                        ),
                      ],
                      1
                    ),
                  ]
                },
              },
            ]),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("DialogPdf", { ref: "dialogPdfComponent", attrs: { loan: _vm.loan } }),
      _vm._v(" "),
      _c("DialogNote"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);