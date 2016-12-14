import React from 'react'
import ReactDOM  from 'react-dom'
import OpenSeadragon from 'react-openseadragon'

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
        "MLK",
        "A Statue"
      ]

var App = React.createClass({
	render () {
		return (<OpenSeadragon tocs={tocs} items={items} />)
	}
})

ReactDOM.render(<App />, document.getElementById('app'))