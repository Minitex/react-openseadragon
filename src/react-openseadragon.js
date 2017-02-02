import React from 'react'
import ActiveItem from 'react-active-item'
export { OpenSeadragonControls } from './react-openseadragon-controls'
import ImageNav from './react-openseadragon-nav'
import OpenSeadragonViewer from './react-openseadragon-viewer'

import './index.css'

class ReactOpenSeadragon extends React.Component {
    constructor(props) {
      super(props)
      this.viewer       = this.viewer.bind(this)
      this.page_handler = this.page_handler.bind(this)
      this.state   = {text: this.text(0), viewer: {}, last_page: 0}
    }

   text(i) {
    return this.props.items[1]['texts'][i]
   }

    page_handler(p, viewer) {
      this.setState({last_page: p.page})
      this.setState({text: this.text(p.page)})
      this.setState({viewer: viewer})
    }
    
    viewer() {
      let { type, text } = this.props.getActiveItem()
      switch(type) {
        case 'image':
          return <OpenSeadragonViewer last_page={this.state.last_page} page_handler={this.page_handler} config={this.props.getActiveItem()} />
          break
        case 'transcript':
          return <div>{this.state.text}</div>
          break
        default:
          return <div>No Viewer Avaialable for type: "{type}"</div>
      }
    }

    render() {
        let { include_controls } = this.props
        if (this.state != null) {
           let { viewer } = this.state
           return (
                    <div>
                      <div className="row"><ImageNav viewer={this.state.viewer} {...this.props} /></div>
                      <div className="row">{this.viewer()}</div>
                    </div>
                  )
         } else {
           return (
                    <div>
                      <div className="row"><ImageNav viewer={this.state.viewer} {...this.props} /></div>
                      <div className="row">{this.viewer()}</div>
                    </div>
                  )
         }

    }

}

const propTypes = {
  items: React.PropTypes.array.isRequired
}

ReactOpenSeadragon.propTypes = propTypes

export default ActiveItem(ReactOpenSeadragon)