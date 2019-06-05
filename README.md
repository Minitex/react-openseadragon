# react-openseadragon

An **EXPERIMENTAL** React component to wrap the [OpenSeadragon](https://openseadragon.github.io/) image viewer.

To build the examples locally, run:

```
git clone https://github.com/UMNLibraries/react-openseadragon.git
cd react-openseadragon
npm install
npm start
```

Then open [`http://localhost:3000/#/example/image/0`](http://localhost:3000/#/example/image/0) in a browser.

## Building for Production

After making some changes to your react components, create a new minified build of the project:

```
$ npm install;
$ npm run build;
$ git add dist;
$ git push origin master;
```

## Installation

The easiest way to use react-react-openseadragon is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-react-openseadragon.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.


To install via NPM, add react-openseadragon to your application package.js dependencies:

```JSON
  ...
  "dependencies": {
    "react": "^15.4.1",
    "react-dom": "^15.4.1",
    "react-openseadragon": "git+https://github.com/UMNLibraries/react-openseadragon.git"
  }
  ...
```
Or install it directly.

```
$ npm install https://github.com/UMNLibraries/react-openseadragon.git
```

## Development (`src` and the build process)

**NOTE:** The source code for the component is in `src`. A UMD bundle is built to `dist`, which can be included without the need for any build system.

## License

University of Minnesota (MIT Pending)

