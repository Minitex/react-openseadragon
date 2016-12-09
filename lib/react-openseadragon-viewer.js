'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _openseadragon = require('openseadragon');

var _openseadragon2 = _interopRequireDefault(_openseadragon);

var _reactOpenseadragonControls = require('./react-openseadragon-controls');

var _reactOpenseadragonControls2 = _interopRequireDefault(_reactOpenseadragonControls);

var OpenSeadragonViewer = (function (_React$Component) {
  _inherits(OpenSeadragonViewer, _React$Component);

  function OpenSeadragonViewer(props) {
    _classCallCheck(this, OpenSeadragonViewer);

    _get(Object.getPrototypeOf(OpenSeadragonViewer.prototype), 'constructor', this).call(this, props);
    this._config = this._config.bind(this);
  }

  _createClass(OpenSeadragonViewer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var page_handler = this.props.page_handler;

      window.OPENSEADRAGONVIEWER = window.OpenSeadragon(this._config());
      this.setState({ viewer: OPENSEADRAGONVIEWER });
      OPENSEADRAGONVIEWER.addHandler('page', function (viewer) {
        page_handler(viewer);
      });
    }
  }, {
    key: '_config',
    value: function _config() {
      return _extends(this.props.default_config, this.props.config);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var text = _props.text;
      var include_controls = _props.include_controls;

      var controls = include_controls ? _react2['default'].createElement(_reactOpenseadragonControls2['default'], null) : '';
      return _react2['default'].createElement(
        'div',
        { className: 'osd col-md-12' },
        _react2['default'].createElement(
          'div',
          { className: 'openseadragon', id: 'osd-viewer' },
          controls
        )
      );
    }
  }]);

  return OpenSeadragonViewer;
})(_react2['default'].Component);

exports['default'] = OpenSeadragonViewer;

OpenSeadragonViewer.defaultProps = { include_navigator: true,
  include_controls: true,
  default_config: {
    showNavigator: true,
    id: 'osd-viewer',
    visibilityRatio: 1.0,
    constrainDuringPan: false,
    defaultZoomLevel: 1,
    minZoomLevel: 1,
    maxZoomLevel: 10,
    zoomInButton: 'zoom-in',
    zoomOutButton: 'zoom-out',
    homeButton: 'reset',
    fullPageButton: 'full-page',
    nextButton: 'next',
    previousButton: 'previous'
  }
};

var propTypes = {
  page_handler: _react2['default'].PropTypes.func,
  config: _react2['default'].PropTypes.object.isRequired
};

OpenSeadragonViewer.propTypes = propTypes;
module.exports = exports['default'];