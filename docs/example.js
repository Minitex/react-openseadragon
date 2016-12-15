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

var tocs = ["MLK", "A Statue"];

var App = _react2.default.createClass({
  displayName: 'App',
  render: function render() {
    return _react2.default.createElement(_reactOpenseadragon2.default, { tocs: tocs, items: items });
  }
});

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-openseadragon":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUksUUFBUSxDQUNKO0FBQ0UsVUFBUSxPQURWO0FBRUUsV0FBUyxPQUZYO0FBR0UsV0FBUyxJQUhYO0FBSUUsc0JBQW9CLElBSnRCO0FBS0Usa0JBQWlCLElBTG5CO0FBTUUsd0JBQXNCLElBTnhCO0FBT0Usc0JBQW9CLENBUHRCO0FBUUUsaUJBQWlCLENBQ2IsNEVBRGEsRUFFYix5REFGYTtBQVJuQixDQURJLEVBY0o7QUFDRSxVQUFRLFlBRFY7QUFFRSxXQUFTLFlBRlg7QUFHRSxXQUFTLENBQUMsWUFBRCxFQUFlLGFBQWYsQ0FIWDtBQUlFLFdBQVM7QUFKWCxDQWRJLENBQVo7O0FBc0JFLElBQUksT0FBTyxDQUNMLEtBREssRUFFTCxVQUZLLENBQVg7O0FBS0YsSUFBSSxNQUFNLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUMzQixRQUQyQixvQkFDakI7QUFDVCxXQUFRLDhEQUFlLE1BQU0sSUFBckIsRUFBMkIsT0FBTyxLQUFsQyxHQUFSO0FBQ0E7QUFIMEIsQ0FBbEIsQ0FBVjs7QUFNQSxtQkFBUyxNQUFULENBQWdCLDhCQUFDLEdBQUQsT0FBaEIsRUFBeUIsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSAgZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IE9wZW5TZWFkcmFnb24gZnJvbSAncmVhY3Qtb3BlbnNlYWRyYWdvbidcblxudmFyIGl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiSW1hZ2VcIixcbiAgICAgICAgICBcImZvY3VzXCI6IHRydWUsXG4gICAgICAgICAgXCJpbmNsdWRlX2NvbnRyb2xzXCI6IHRydWUsXG4gICAgICAgICAgXCJzZXF1ZW5jZU1vZGVcIjogIHRydWUsXG4gICAgICAgICAgXCJzaG93UmVmZXJlbmNlU3RyaXBcIjogdHJ1ZSxcbiAgICAgICAgICBcImRlZmF1bHRab29tTGV2ZWxcIjogMCxcbiAgICAgICAgICBcInRpbGVTb3VyY2VzXCI6ICAgW1xuICAgICAgICAgICAgICBcImh0dHBzOi8vc3RhY2tzLnN0YW5mb3JkLmVkdS9pbWFnZS9paWlmL2hnNjc2amI0OTY0JTJGMDM4MF83OTYtNDQvaW5mby5qc29uXCIsXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly9pZHMubGliLmhhcnZhcmQuZWR1L2lkcy9paWlmLzI1Mjg2NjEwL2luZm8uanNvblwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidHJhbnNjcmlwdFwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJUcmFuc2NyaXB0XCIsXG4gICAgICAgICAgXCJ0ZXh0c1wiOiBbXCJGaXJzdCBJdGVtXCIsIFwiU2Vjb25kIEl0ZW1cIl0sXG4gICAgICAgICAgXCJmb2N1c1wiOiBmYWxzZSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICBdXG5cbiAgdmFyIHRvY3MgPSBbXG4gICAgICAgIFwiTUxLXCIsXG4gICAgICAgIFwiQSBTdGF0dWVcIlxuICAgICAgXVxuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoPE9wZW5TZWFkcmFnb24gdG9jcz17dG9jc30gaXRlbXM9e2l0ZW1zfSAvPilcblx0fVxufSlcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSkiXX0=
