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

var OpenSeadragonNav = (function (_React$Component) {
  _inherits(OpenSeadragonNav, _React$Component);

  function OpenSeadragonNav(props) {
    _classCallCheck(this, OpenSeadragonNav);

    _get(Object.getPrototypeOf(OpenSeadragonNav.prototype), 'constructor', this).call(this, props);
    this.active_index = this.active_index.bind(this);
    this.active_class = this.active_class.bind(this);
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
    key: 'render',
    value: function render() {
      var _props = this.props;
      var items = _props.items;
      var class_name = _props.class_name;
      var setActiveItem = _props.setActiveItem;
      var getActiveItem = _props.getActiveItem;

      var active_class = this.active_class;
      return _react2['default'].createElement(
        'div',
        { className: 'row image-nav' },
        _react2['default'].createElement(
          'ul',
          { className: 'nav nav-pills' },
          items.map(function (item, i) {
            return _react2['default'].createElement(
              'li',
              { role: 'presentation', className: active_class(i), onClick: setActiveItem.bind(this, i), key: i },
              _react2['default'].createElement(
                'a',
                { href: '' },
                item.label
              )
            );
          })
        )
      );
    }
  }]);

  return OpenSeadragonNav;
})(_react2['default'].Component);

exports['default'] = OpenSeadragonNav;

var propTypes = {
  items: _react2['default'].PropTypes.array.isRequired,
  setActiveItem: _react2['default'].PropTypes.func.isRequired
};

OpenSeadragonNav.propTypes = propTypes;
module.exports = exports['default'];