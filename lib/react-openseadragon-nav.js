'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenSeadragonNav = function (_React$Component) {
  _inherits(OpenSeadragonNav, _React$Component);

  function OpenSeadragonNav(props) {
    _classCallCheck(this, OpenSeadragonNav);

    var _this = _possibleConstructorReturn(this, (OpenSeadragonNav.__proto__ || Object.getPrototypeOf(OpenSeadragonNav)).call(this, props));

    _this.active_index = _this.active_index.bind(_this);
    _this.active_class = _this.active_class.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this._toc = _this.toc.bind(_this);
    return _this;
  }

  _createClass(OpenSeadragonNav, [{
    key: 'active_index',
    value: function active_index() {
      return this.props.getActiveItemIndex();
    }
  }, {
    key: 'active_class',
    value: function active_class(i) {
      return this.active_index() == i ? 'active' : '';
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e, target) {
      this.props.viewer.goToPage(e.target.value);
    }
  }, {
    key: 'toc',
    value: function toc(items, handleChange) {
      var tocs = this.props.tocs;

      if (tocs.length > 1) {
        return _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'div',
            { className: 'toc-select' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'toc' },
              'Table of Contents:'
            ),
            _react2.default.createElement(
              'select',
              { name: 'toc', onChange: this.handleChange },
              tocs.map(function (toc, i) {
                var page = i + 1;
                return _react2.default.createElement(
                  'option',
                  { value: i, key: i },
                  page,
                  '. ',
                  toc
                );
              })
            )
          )
        );
      } else {
        return _react2.default.createElement('span', null);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          class_name = _props.class_name,
          setActiveItem = _props.setActiveItem,
          getActiveItem = _props.getActiveItem,
          viewer = _props.viewer;

      var active_class = this.active_class;
      return _react2.default.createElement(
        'div',
        { className: 'row image-nav' },
        _react2.default.createElement(
          'ul',
          { className: 'nav nav-pills' },
          items.map(function (item, i) {
            return _react2.default.createElement(
              'li',
              { role: 'presentation', className: active_class(i), onClick: setActiveItem.bind(this, i), key: i },
              _react2.default.createElement(
                'a',
                { href: '' },
                item.label
              )
            );
          }),
          this._toc()
        )
      );
    }
  }]);

  return OpenSeadragonNav;
}(_react2.default.Component);

exports.default = OpenSeadragonNav;


var propTypes = {
  items: _react2.default.PropTypes.array.isRequired,
  setActiveItem: _react2.default.PropTypes.func.isRequired,
  tocs: _react2.default.PropTypes.array,
  viewer: _react2.default.PropTypes.object
};

OpenSeadragonNav.propTypes = propTypes;