import React from 'react'
import renderer from 'react-test-renderer'
import OpenSeadragon from '../src/react-openseadragon'

jest.mock('../src/react-openseadragon-viewer', () => 'ReactOpenSeadragonViewer')

describe('OpenSeadragon', () => {
  it('should render correctly', () => {

      var items = [
        {
          "type": "image",
          "label": "Image",
          "focus": true,
          "include_controls": true,
          "sequenceMode":  true,
          "showReferenceStrip": true,
          "defaultZoomLevel": 0,
          "tileSources":   [
              "https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json",
              "https://ids.lib.harvard.edu/ids/iiif/25286610/info.json"
          ]
        },
        {
          "type": "transcript",
          "label": "Transcript",
          "texts": ["First Item", "Second Item"],
          "focus": false            
        }
      ]

      var tocs = [
        "MLK"
      ]

    const component = renderer.create(
      <OpenSeadragon tocs={tocs} items={items} />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
