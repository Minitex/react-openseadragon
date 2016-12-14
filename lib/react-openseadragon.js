'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenSeadragonControls = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactOpenseadragonControls = require('./react-openseadragon-controls');

Object.defineProperty(exports, 'OpenSeadragonControls', {
  enumerable: true,
  get: function get() {
    return _reactOpenseadragonControls.OpenSeadragonControls;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactActiveItem = require('react-active-item');

var _reactActiveItem2 = _interopRequireDefault(_reactActiveItem);

var _reactOpenseadragonNav = require('./react-openseadragon-nav');

var _reactOpenseadragonNav2 = _interopRequireDefault(_reactOpenseadragonNav);

var _reactOpenseadragonViewer = require('./react-openseadragon-viewer');

var _reactOpenseadragonViewer2 = _interopRequireDefault(_reactOpenseadragonViewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenSeadragon = function (_React$Component) {
  _inherits(OpenSeadragon, _React$Component);

  function OpenSeadragon(props) {
    _classCallCheck(this, OpenSeadragon);

    var _this = _possibleConstructorReturn(this, (OpenSeadragon.__proto__ || Object.getPrototypeOf(OpenSeadragon)).call(this, props));

    _this.viewer = _this.viewer.bind(_this);
    _this.page_handler = _this.page_handler.bind(_this);
    _this.state = { text: _this.text(0), viewer: {}, last_page: 0 };
    return _this;
  }

  _createClass(OpenSeadragon, [{
    key: 'text',
    value: function text(i) {
      return this.props.items[1]['texts'][i];
    }
  }, {
    key: 'page_handler',
    value: function page_handler(p, viewer) {
      this.setState({ last_page: p.page });
      this.setState({ text: this.text(p.page) });
      this.setState({ viewer: viewer });
    }
  }, {
    key: 'viewer',
    value: function viewer() {
      var _props$getActiveItem = this.props.getActiveItem(),
          type = _props$getActiveItem.type,
          text = _props$getActiveItem.text;

      switch (type) {
        case 'image':
          return _react2.default.createElement(_reactOpenseadragonViewer2.default, { last_page: this.state.last_page, page_handler: this.page_handler, config: this.props.getActiveItem() });
          break;
        case 'transcript':
          return _react2.default.createElement(
            'div',
            null,
            this.state.text
          );
          break;
        default:
          return _react2.default.createElement(
            'div',
            null,
            'No Viewer Avaialable for type: "',
            type,
            '"'
          );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var include_controls = this.props.include_controls;

      if (this.state != null) {
        var viewer = this.state.viewer;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(_reactOpenseadragonNav2.default, _extends({ viewer: this.state.viewer }, this.props))
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.viewer()
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(_reactOpenseadragonNav2.default, _extends({ viewer: this.state.viewer }, this.props))
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.viewer()
          )
        );
      }
    }
  }]);

  return OpenSeadragon;
}(_react2.default.Component);

var propTypes = {
  items: _react2.default.PropTypes.array.isRequired
};

OpenSeadragon.propTypes = propTypes;

exports.default = (0, _reactActiveItem2.default)(OpenSeadragon);