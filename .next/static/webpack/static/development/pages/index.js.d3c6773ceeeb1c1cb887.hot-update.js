webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Items.js":
/*!*****************************!*\
  !*** ./components/Items.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/sonyaslegers/Desktop/advanced_react/Advanced-React/sick-fits/frontend/components/Items.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query ALL_ITEMS_QUERY {\n        items {\n            id\n            title\n            price\n            description\n            image\n            largeImage\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ALL_ITEMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var Center = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Items__Center",
  componentId: "tikday-0"
})(["text-align:center;"]);

var Items =
/*#__PURE__*/
function (_Component) {
  _inherits(Items, _Component);

  function Items() {
    _classCallCheck(this, Items);

    return _possibleConstructorReturn(this, _getPrototypeOf(Items).apply(this, arguments));
  }

  _createClass(Items, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Items"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_ITEMS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, " Loading... ");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, "I found ", data.items.length, " items!");
      }));
    }
  }]);

  return Items;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Items);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/isSameUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bn/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bn/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bn/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bn/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bn/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/bn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/de/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/de/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/de/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/de/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/de/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/de/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-CA/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-CA/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-CA/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-GB/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-GB/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eo/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eo/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eo/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eo/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eo/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/eo/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/es/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/es/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/es/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/es/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/es/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/es/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/fr/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/he/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/he/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/he/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/he/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/he/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/he/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hu/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hu/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hu/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hu/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hu/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/hu/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/it/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/it/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/it/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/it/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/it/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/it/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lt/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lt/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lt/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lt/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lt/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/lt/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nb/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nb/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nb/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nb/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nb/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nb/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/nl/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt-BR/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt-BR/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt-BR/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt-BR/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt-BR/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/pt-BR/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ru/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/ru/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sv/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sv/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sv/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sv/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sv/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/sv/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uk/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uk/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uk/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uk/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uk/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/uk/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/vi/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/vi/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-CN/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-CN/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-CN/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-CN/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-CN/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/zh-CN/index.js":
false,

/***/ "./node_modules/date-fns/esm/toDate/index.js":
false

})
//# sourceMappingURL=index.js.d3c6773ceeeb1c1cb887.hot-update.js.map