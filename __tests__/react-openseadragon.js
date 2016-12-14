import React from 'react'
import renderer from 'react-test-renderer'
import ReactOpenSeadragon from '../src/react-openseadragon'

describe('ReactOpenSeadragon Tests', () => {

  it("renders an audio", function(){  
    const items = 
          [
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
    const component = renderer.create(
      <ReactOpenSeadragon items={items} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})