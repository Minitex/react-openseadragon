import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import './index.css';
import Viewer from './viewer';


class ReactOpenSeadragonRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewer: {}, id: 0 };
    this._app = this._app.bind(this);
    this.viewer = this.viewer.bind(this);
  }

  _app() {
    const osprops = this.props;
    const history = this.props.history;
    return () => (
      <div>
        <Route
          render={
            props => <Viewer
              history={history}
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
        <Switch>
          <Redirect exact from='/0' to='/0/OSD_VIEWER' />
        </Switch>
        <Route path="/:id/:viewer?/:searchText?/:goToPage?" component={App} />
      </div>
    );
  }

  render() {
    return (
      <div>{this.viewer()}</div>
    );
  }
}

export default ReactOpenSeadragonRoute;

