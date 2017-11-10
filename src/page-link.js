import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import queryString from 'query-string';

function pageLink(WrappedComponent) {
  class PageLink extends React.Component {
    render() {
      const active = (this.props.active === true) ? 'active' : '';
      return (<Link
        to={{
          pathname: `/${this.props.id}`,
          search: queryString.stringify({
            searchText: this.props.searchText,
            viewer: this.props.viewer,
            showThumbnail: this.props.showThumbnail,
          }),
        }}
        type="button"
        className={this.props.cssClasses}
      >
        <WrappedComponent {...this.props} />
      </Link>);
    }
  }

  PageLink.defaultProps = {
    searchText: '',
  };

  PageLink.propTypes = {
    id: PropTypes.number.isRequired,
    viewer: PropTypes.string.isRequired,
    cssClasses: PropTypes.string.isRequired,
    searchText: PropTypes.string,
    showThumbnail: PropTypes.bool.isRequired,
  };
  return PageLink;
}

export default pageLink;
