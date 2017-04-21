import React from 'react';
import { HashRouter } from 'react-router-dom';

export default function routeThroughBrowser(WrappedComponent) {
  return class RouteThroughBrowser extends React.Component {
    render() {
      return (
        <HashRouter basename={this.props.basename}>
          <WrappedComponent {...this.props} {...this.state} />
        </HashRouter>
      );
    }
  };
}