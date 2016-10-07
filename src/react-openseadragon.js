import React from 'react'
import OpenSeadragonControls from './react-openseadragon-controls'
export { OpenSeadragonControls } from './react-openseadragon-controls'
import OpenSeadragon from 'openseadragon'

export default class OpenSeadragonViewer extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        let { include_controls, include_navigator } = this.props
        let controls  = (include_controls)  ? <OpenSeadragonControls /> : ''
        return (
            <div className="container">
                <div className="osd-div col-md-12">
                    <div className="col-md-11">
                        {controls}
                        <div className="openseadragon" id="osd-viewer"></div>
                    </div>
                   </div>
            </div>
        )
    }

    initSeaDragon(){
      window.OpenSeadragon(this._config())
    }

    componentDidMount(){
        this.initSeaDragon()
    }
     shouldComponentUpdate(nextProps, nextState){
        return false
    }

    _config() {
      return Object.assign(this.props.config, this.props.default_config)
    }
}

OpenSeadragonViewer.defaultProps = {  include_navigator: true,
                                      include_controls: true,
                                      default_config: {
                                        showNavigator: true,
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
                                      }
                                    }

const propTypes = {
  include_controls: React.PropTypes.bool,
  include_navigator: React.PropTypes.bool,
  config: React.PropTypes.object.isRequired
}

OpenSeadragonViewer.propTypes = propTypes

