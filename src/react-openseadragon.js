import { Router, Route, IndexRedirect, browserHistory, useRouterHistory } from 'react-router';

import './index.css';

import createHashHistory from 'history/lib/createHashHistory'

import React from 'react';

import OpenSeadragonViewer from './react-openseadragon-viewer';

import ImageNav from './react-openseadragon-nav';

export { OpenSeadragonControls } from './react-openseadragon-controls';

class ReactOpenSeadragon extends React.Component {
  constructor(props) {
    super(props);
    this.pageHandler = this.pageHandler.bind(this);
    this._nav = this._nav.bind(this);
    this.state = { viewer: {}, id: 0 };
  }

  pageHandler(page, viewer) {
    this.setState({ viewer });
    this.setState({ id: parseInt(page, 10) });
    browserHistory.push(`${this.props.base_path}#/image/${page}`);
  }

  _viewer(pageHandler, config, children) {
    return React.cloneElement(
      children,
      { pageHandler, config },
    );
  }

  _nav() {
    const id = this.state.id;
    const tocs = this.props.config.tocs;
    const viewer = this.state.viewer;
    const pageHandler = this.pageHandler;
    if (viewer) {
      return <ImageNav id={id} pageHandler={pageHandler} viewer={viewer} tocs={tocs} />;
    }

    return '';
  }

  _app() {
    let pageHandler = this.pageHandler;
    let config = this.props.config;
    let viewer = this._viewer;
    let nav = this._nav;
    return React.createClass({
      render: function() {
        return  (
                  <div>
                    <div className="row">{nav()}</div>
                    {viewer(pageHandler, config, this.props.children)}
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
                <IndexRedirect to="image/0" />
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