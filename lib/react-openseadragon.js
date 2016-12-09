'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactActiveItem = require('react-active-item');

var _reactActiveItem2 = _interopRequireDefault(_reactActiveItem);

var _reactOpenseadragonNav = require('./react-openseadragon-nav');

var _reactOpenseadragonNav2 = _interopRequireDefault(_reactOpenseadragonNav);

var _reactOpenseadragonViewer = require('./react-openseadragon-viewer');

var _reactOpenseadragonViewer2 = _interopRequireDefault(_reactOpenseadragonViewer);

var _reactOpenseadragonControls = require('./react-openseadragon-controls');

Object.defineProperty(exports, 'OpenSeadragonControls', {
  enumerable: true,
  get: function get() {
    return _reactOpenseadragonControls.OpenSeadragonControls;
  }
});

var OpenSeadragon = (function (_React$Component) {
  _inherits(OpenSeadragon, _React$Component);

  function OpenSeadragon(props) {
    _classCallCheck(this, OpenSeadragon);

    _get(Object.getPrototypeOf(OpenSeadragon.prototype), 'constructor', this).call(this, props);
    this.viewer = this.viewer.bind(this);
    this.page_handler = this.page_handler.bind(this);
    this.state = { text: this.text(0) };
  }

  _createClass(OpenSeadragon, [{
    key: 'text',
    value: function text(i) {
      return this.props.items[1]['texts'][i];
    }
  }, {
    key: 'page_handler',
    value: function page_handler(p) {
      this.setState({ text: this.text(p.page) });
    }
  }, {
    key: 'viewer',
    value: function viewer() {
      var _props$getActiveItem = this.props.getActiveItem();

      var type = _props$getActiveItem.type;
      var text = _props$getActiveItem.text;

      switch (type) {
        case 'image':
          return _react2['default'].createElement(_reactOpenseadragonViewer2['default'], { page_handler: this.page_handler, config: this.props.getActiveItem() });
          break;
        case 'transcript':
          return _react2['default'].createElement(
            'div',
            null,
            this.state.text
          );
          break;
        default:
          return _react2['default'].createElement(
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

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'row' },
            _react2['default'].createElement(_reactOpenseadragonNav2['default'], this.props)
          ),
          _react2['default'].createElement(
            'div',
            { className: 'row' },
            this.viewer()
          )
        );
      } else {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'row' },
            _react2['default'].createElement(_reactOpenseadragonNav2['default'], this.props)
          ),
          _react2['default'].createElement(
            'div',
            { className: 'row' },
            this.viewer()
          )
        );
      }
    }
  }]);

  return OpenSeadragon;
})(_react2['default'].Component);

var propTypes = {
  items: _react2['default'].PropTypes.array.isRequired
};

OpenSeadragon.propTypes = propTypes;

exports['default'] = (0, _reactActiveItem2['default'])(OpenSeadragon);