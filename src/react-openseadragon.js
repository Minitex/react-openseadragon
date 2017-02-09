import React from 'react'
import ActiveItem from 'react-active-item'
export { OpenSeadragonControls } from './react-openseadragon-controls'
import ImageNav from './react-openseadragon-nav'
import OpenSeadragonViewer from './react-openseadragon-viewer'

import './index.css'

import { createHistory } from 'history'
import { Router, Route, IndexRoute, browserHistory, useRouterHistory } from 'react-router'

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
      browserHistory.push('/' + p.page)
    }

    _id() {
      return this._path().split( '/' )
                         .slice(-1)
                         .pop()
                         .replace(/^\s+|\s+$/g, '')
    }
  
    id() {
      return (this._id() != '' && this._id() != 'blank') ? this._id() : 0
    }

    _path() {
      return window.location.pathname
    }

    viewer() {
      return <OpenSeadragonViewer last_page={this.id()} page_handler={this.page_handler} config={this.props.getActiveItem()} />
    }

    render() {
        let { include_controls } = this.props
        if (this.state != null) {
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