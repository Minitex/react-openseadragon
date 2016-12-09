require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactOpenseadragon = require('react-openseadragon');

var _reactOpenseadragon2 = _interopRequireDefault(_reactOpenseadragon);

var items = [{
  "type": "image",
  "label": "Image",
  "focus": true,
  "include_controls": true,
  "sequenceMode": true,
  "showReferenceStrip": true,
  "defaultZoomLevel": 0,
  "tileSources": ["https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json", "https://ids.lib.harvard.edu/ids/iiif/25286610/info.json"]
}, {
  "type": "transcript",
  "label": "Transcript",
  "texts": ["First Item", "Second Item"],
  "focus": false
}];

var App = _react2['default'].createClass({
  displayName: 'App',

  render: function render() {
    return _react2['default'].createElement(_reactOpenseadragon2['default'], { items: items });
  }
});

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-openseadragon":undefined}]},{},[1]);
