import React from 'react'
import ReactDOM  from 'react-dom'
import OpenseadragonViewer from 'react-openseadragon'
import OpenSeadragonControls from 'react-openseadragon'
import OpenSeadragonNavigator from 'react-openseadragon'

var seadragon_conf = {
      sequenceMode:  true,
      showReferenceStrip: true,
      defaultZoomLevel: 0,
      tileSources:   [
          "https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json",
          "https://ids.lib.harvard.edu/ids/iiif/25286610/info.json"
      ]
  }


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
