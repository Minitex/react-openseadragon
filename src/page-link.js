import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

function pageLink(WrappedComponent) {
  class PageLink extends React.Component {
    render() {
      const active = (this.props.active === true) ? 'active' : '';
      return (<Link
        to={`/${this.props.id}/${this.props.viewer}/${this.props.searchText}/goToPage`}
        type="button"
        className={this.props.cssClasses}
      >
        <WrappedComponent {...this.props} />
      </Link>);
    }

   componentDidMount() {
      this.ensureVisible();
    }

    componentDidUpdate() {
      this.ensureVisible();
    }

    ensureVisible() {
      if (this.props.active) {
         ReactDOM.findDOMNode(this).scrollIntoView();
      }
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
  };
  return PageLink;
}

export default pageLink;
