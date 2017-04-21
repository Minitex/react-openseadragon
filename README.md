# react-openseadragon

An **EXPERIMENTAL** React component to wrap the [OpenSeadragon](https://openseadragon.github.io/) image viewer.

To build the examples locally, run:

```
git clone https://github.com/UMNLibraries/react-openseadragon.git
cd react-openseadragon
npm install
npm start
```

Then open [`localhost:3000/example/image/0`](http://localhost:3000/example/image/0) in a browser.

## Installation

The easiest way to use react-react-openseadragon is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-react-openseadragon.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.


To install via NPM, add react-openseadragon to your application package.js dependencies:

```JSON
  ...
  "dependencies": {
    "react": "^0.14.0",
    "react-dom": "^0.14.0",
    "react-openseadragon": "git+https://github.com/UMNLibraries/react-openseadragon.git"
  }
  ...
```
Or install it directly.

```
npm install https://github.com/UMNLibraries/react-openseadragon.git
```

## Quickstart

Include the OpenSeadragon library
```
  <script src="https://openseadragon.github.io/openseadragon/openseadragon.min.js"></script>
```

Include the React and OpenSeadrangon dependencies in your script (below example is in ES6) and inject an OpenSeadragon configuration object into the viewer.

```JavaScript
import React from 'react'
import ReactDOM  from 'react-dom'
import OpenseadragonViewer from 'react-openseadragon'

var seadragon_conf = {
    type: 'image',
    label: 'Image',
    focus: true,
    include_controls: true,
    sequenceMode: true,
    showReferenceStrip: true,
    defaultZoomLevel: 0,
    tileSources: [
      'https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json',
      'https://ids.lib.harvard.edu/ids/iiif/25286610/info.json',
    ],
    tocs: [
      'MLK',
      'A Statue',
    ],
  };

var App = React.createClass({
  render () {
    return (
      <div>
        <OpenseadragonViewer config={seadragon_conf} />
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
```

The following default OpenSeadragon configuration may be overriden with values that you provide in the `config` property:

```JavaScript
{
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
  previousButton: 'previous',
  navigatorId: 'navigator',
  showNavigator: true
}
```

### Properties

```JavaScript
const propTypes = {
  include_controls: React.PropTypes.bool,
  include_navigator: React.PropTypes.bool,
  config: React.PropTypes.object.isRequired
}
```

| Property  | Description  |
|--:|---|
| include_controls  | Setting this to "false" allows you to manually place the `<OpenSeadragonControls />` component (Zoom In, Zoom Out, Home, Next, etc) in your layout.  |
| include_navigator  | Setting this to "false" allows to to manually place the `<OpenSeadragonNavigator />` component in your layout. |
| config| An OpenSeadragon viewer configuration object   |


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

University of Minnesota (MIT Pending)

