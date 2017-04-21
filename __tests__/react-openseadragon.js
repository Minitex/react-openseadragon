import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import ReactOpenSeadragon from '../src/react-openseadragon-route';

describe('OpenSeadragon', () => {
  it('should render correctly', () => {
    window.OpenSeadragon = jest.fn();
    window.OPENSEADRAGONVIEWER = {
      addHandler: () => { return false }
    }

    const methods = {
      addHandler: () => false,
      goToPage: () => false,
    };

    Object.defineProperty(window, 'OpenSeadragon', {
      value: jest.fn(() => methods),
    });

    const config = {
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

const component = renderer.create(
  <MemoryRouter initialEntries={['/image/0']} initialIndex={1} >
    <ReactOpenSeadragon config={config} />
  </MemoryRouter>);

    const jsonComponent = component.toJSON();
    expect(jsonComponent).toMatchSnapshot();

  });
});
