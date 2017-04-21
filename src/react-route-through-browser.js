import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default function routeThroughBrowser(WrappedComponent) {
  return class RouteThroughBrowser extends React.Component {
    render() {
      return (
        <BrowserRouter basename={this.props.basename}>
          <WrappedComponent {...this.props} {...this.state} />
        </BrowserRouter>
      );
    }
  };
}