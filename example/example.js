import React from 'react';
import ReactDOM from 'react-dom';
import ReactOpenSeadragon from '../src/react-openseadragon';

const config =
  {
    type: 'image',
    label: 'Image',
    focus: true,
    include_controls: true,
    sequenceMode: true,
    showReferenceStrip: false,
    defaultZoomLevel: 0,
    containerColumns: 10,
    sidebarColumns: 2,
    tileSources: [
      'https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json',
      'https://ids.lib.harvard.edu/ids/iiif/25286610/info.json',
      'https://ids.lib.harvard.edu/ids/iiif/25286610/info.json',
      'https://ids.lib.harvard.edu/ids/iiif/25286610/info.json',
    ],
    transcripts: [
      'MLK at at thing',
      'A statue here, very statuey 1',
      'A statue here, very statuey 2',
      'A statue here, very statuey 3',
    ],
    thumbnails: [
      'https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/full/100,/0/default.jpg',
      'https://ids.lib.harvard.edu/ids/iiif/25286610/full/100,/0/native.jpg',
      'https://ids.lib.harvard.edu/ids/iiif/25286610/full/100,/0/native.jpg',
      'https://ids.lib.harvard.edu/ids/iiif/25286610/full/100,/0/native.jpg',
    ],
    pages: [
      'MLK',
      'Statue 1',
      'Statue 2',
      'Statue 3',
    ],
  };

const App = () => <ReactOpenSeadragon config={config} basename="/example" />;

ReactDOM.render(<App />, document.getElementById('app'));
