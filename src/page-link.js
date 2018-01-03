import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import queryString from 'query-string';

function pageLink(WrappedComponent) {
  class PageLink extends React.Component {
    componentDidMount() {
      this.ensureVisible();
    }

    ensureVisible() {
      if (this.props.active) {
        const offset = ReactDOM.findDOMNode(this).offsetTop;
        if (offset > 200) {
          document.getElementById('osd-sidebar').scrollTop = offset - 200;
        }
      }
    }

    render() {
      return (<Link
        to={{
          pathname: `/${this.props.id}`,
          search: queryString.stringify({
            searchText: this.props.searchText,
            viewer: this.props.viewer,
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
    active: '',
  };

  PageLink.propTypes = {
    id: PropTypes.number.isRequired,
    active: PropTypes.string,
    viewer: PropTypes.string.isRequired,
    cssClasses: PropTypes.string.isRequired,
    searchText: PropTypes.string,
  };
  return PageLink;
}

export default pageLink;
