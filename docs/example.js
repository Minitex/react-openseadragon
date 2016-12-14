require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactOpenseadragon = require('react-openseadragon');

var _reactOpenseadragon2 = _interopRequireDefault(_reactOpenseadragon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var App = _react2.default.createClass({
  displayName: 'App',
  render: function render() {
    return _react2.default.createElement(_reactOpenseadragon2.default, { items: items });
  }
});

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-openseadragon":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUksUUFBUSxDQUNKO0FBQ0UsVUFBUSxPQURWO0FBRUUsV0FBUyxPQUZYO0FBR0UsV0FBUyxJQUhYO0FBSUUsc0JBQW9CLElBSnRCO0FBS0Usa0JBQWlCLElBTG5CO0FBTUUsd0JBQXNCLElBTnhCO0FBT0Usc0JBQW9CLENBUHRCO0FBUUUsaUJBQWlCLENBQ2IsNEVBRGEsRUFFYix5REFGYTtBQVJuQixDQURJLEVBY0o7QUFDRSxVQUFRLFlBRFY7QUFFRSxXQUFTLFlBRlg7QUFHRSxXQUFTLENBQUMsWUFBRCxFQUFlLGFBQWYsQ0FIWDtBQUlFLFdBQVM7QUFKWCxDQWRJLENBQVo7O0FBc0JBLElBQUksTUFBTSxnQkFBTSxXQUFOLENBQWtCO0FBQUE7QUFDM0IsUUFEMkIsb0JBQ2pCO0FBQ1QsV0FBUSw4REFBZSxPQUFPLEtBQXRCLEdBQVI7QUFDQTtBQUgwQixDQUFsQixDQUFWOztBQU1BLG1CQUFTLE1BQVQsQ0FBZ0IsOEJBQUMsR0FBRCxPQUFoQixFQUF5QixTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NICBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgT3BlblNlYWRyYWdvbiBmcm9tICdyZWFjdC1vcGVuc2VhZHJhZ29uJ1xuXG52YXIgaXRlbXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJJbWFnZVwiLFxuICAgICAgICAgIFwiZm9jdXNcIjogdHJ1ZSxcbiAgICAgICAgICBcImluY2x1ZGVfY29udHJvbHNcIjogdHJ1ZSxcbiAgICAgICAgICBcInNlcXVlbmNlTW9kZVwiOiAgdHJ1ZSxcbiAgICAgICAgICBcInNob3dSZWZlcmVuY2VTdHJpcFwiOiB0cnVlLFxuICAgICAgICAgIFwiZGVmYXVsdFpvb21MZXZlbFwiOiAwLFxuICAgICAgICAgIFwidGlsZVNvdXJjZXNcIjogICBbXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly9zdGFja3Muc3RhbmZvcmQuZWR1L2ltYWdlL2lpaWYvaGc2NzZqYjQ5NjQlMkYwMzgwXzc5Ni00NC9pbmZvLmpzb25cIixcbiAgICAgICAgICAgICAgXCJodHRwczovL2lkcy5saWIuaGFydmFyZC5lZHUvaWRzL2lpaWYvMjUyODY2MTAvaW5mby5qc29uXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0cmFuc2NyaXB0XCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIlRyYW5zY3JpcHRcIixcbiAgICAgICAgICBcInRleHRzXCI6IFtcIkZpcnN0IEl0ZW1cIiwgXCJTZWNvbmQgSXRlbVwiXSxcbiAgICAgICAgICBcImZvY3VzXCI6IGZhbHNlICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIF1cblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKDxPcGVuU2VhZHJhZ29uIGl0ZW1zPXtpdGVtc30gLz4pXG5cdH1cbn0pXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpIl19
