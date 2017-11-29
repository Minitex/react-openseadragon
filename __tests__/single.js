import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import ReactOpenSeadragon from '../src/react-openseadragon-route';

jest.mock('react-dom', () => ({
    findDOMNode: () => ({
      scrollIntoView: jest.fn(),
    }),
  }),
);

jest.mock('react-lazy-load', () => 'LazyLoad');

describe('OpenSeadragon', () => {
  document.body.innerHTML = '<div id="page-search" />';

  it('should render correctly', () => {
    window.OpenSeadragon = jest.fn();
    window.OPENSEADRAGONVIEWER = {
      addHandler: () => false,
    };

    const methods = {
      addHandler: () => false,
      goToPage: () => false,
    };

    Object.defineProperty(window, 'OpenSeadragon', {
      value: jest.fn(() => methods),
    });

    const config = {
      basename: 'example/image',
      getImageURL: 'http://cdm16022.contentdm.oclc.org/utils/ajaxhelper',
      osdConfig: {
        defaultZoomLevel: 0,
        tileSources: [
          'https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json',
        ],
      },
      pages: [
        {
          id: 0,
          title: 'MLK',
          sidebarThumbnail: 'https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/full/100,/0/default.jpg',
          transcript: 'MLK',
          viewer: 'OSD_VIEWER',
          cdmCollection: 'mpls',
          cdmIdentifier: '3188',
          infoURL: 'https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json',
        },
      ],
    };

  const component = renderer.create(
    <MemoryRouter initialEntries={['/0']} initialIndex={1} >
      <ReactOpenSeadragon {...config} />
    </MemoryRouter>);
    const jsonComponent = component.toJSON();
    expect(jsonComponent).toMatchSnapshot();
  });
});
