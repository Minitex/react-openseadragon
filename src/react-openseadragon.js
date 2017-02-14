import React from 'react'
export { OpenSeadragonControls } from './react-openseadragon-controls'
import OpenSeadragonViewer from './react-openseadragon-viewer'
import ImageNav from './react-openseadragon-nav'

import './index.css'


import { createHashHistory } from 'history'
import { Router, Route, IndexRedirect, browserHistory, useRouterHistory } from 'react-router'

class ReactOpenSeadragon extends React.Component {
    constructor(props) {
      super(props)
      this.page_handler = this.page_handler.bind(this)
      this._nav         = this._nav.bind(this)
      this.state        = {viewer: {}, id: 0}
    }

    page_handler(page, viewer) {
      this.setState({viewer: viewer})
      this.setState({id: parseInt(page)})
      browserHistory.push(this.props.base_path + '#/image/'+ page)
    }

    _viewer(page_handler, config, children) {
      return React.cloneElement(
        children,
        {page_handler: page_handler, config: config}
      )
    }

    _nav() {
      let id           = this.state.id
      let tocs         = this.props.config.tocs
      let viewer     = this.state.viewer
      let page_handler = this.page_handler
      if (viewer) {
        return <ImageNav id={id} page_handler={page_handler} viewer={viewer} tocs={tocs} />
      }
    }

    _app() {
      let page_handler = this.page_handler
      let config       = this.props.config
      let viewer       = this._viewer
      let nav          = this._nav
      return React.createClass({
        render: function() {
          return  (
                    <div>
                      <div className="row">{nav()}</div>
                      {viewer(page_handler, config, this.props.children)}
                    </div>
                  )
        }
      })
    }

    render() {
      //Allow this React App to exist at the end of a preexisiting path like:
      //localhost:3000/catalog/blaah:100 <-- base_path is 'catalog/blaah:100'
      const history = useRouterHistory(createHashHistory)({
        basename: this.props.base_path
      })
      return (
              <Router history={history}>
                <Route path="/" component={this._app()}>
                  <Route path="image/:id" component={OpenSeadragonViewer} />
                </Route>
              </Router>
            )

    }

}

const propTypes = {
  config: React.PropTypes.object.isRequired,
  base_path: React.PropTypes.string
}

ReactOpenSeadragon.propTypes = propTypes

export default ReactOpenSeadragon