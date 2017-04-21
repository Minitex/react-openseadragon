import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './index.css';
import OpenSeadragonViewer from './react-openseadragon-viewer';

export { OpenSeadragonControls } from './react-openseadragon-controls';

class ReactOpenSeadragonRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewer: {}, id: 0 };
    this._app = this._app.bind(this);
    this.viewer = this.viewer.bind(this);
  }

  _app() {
    const osprops = this.props;
    return () => (
      <div>
        <Route
          render={
            props => <OpenSeadragonViewer
              {...osprops}
              {...props}
            />
           }
        />
      </div>
    );
  }

  viewer() {
    const App = this._app();
    return (
      <div>
        <Route path="/image/:id" component={App} />
      </div>
    );
  }

  render() {
    return (
      <div>{this.viewer()}</div>
    );
  }
}

ReactOpenSeadragonRoute.propTypes = {
  config: React.PropTypes.object.isRequired,
};

export default ReactOpenSeadragonRoute;

