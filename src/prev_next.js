import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import queryString from 'query-string';


class PrevNext extends React.Component {
  constructor(props) {
    super(props);
    this._prevPage = this._prevPage.bind(this);
    this._nextPage = this._nextPage.bind(this);
    this._prevDisabled = this._prevDisabled.bind(this);
    this._nextDisabled = this._nextDisabled.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }


  _prevPage() {
    return this.props.currentPageId - 1;
  }

  _nextPage() {
    return this.props.currentPageId + 1;
  }

  _prevDisabled() {
    return this._prevPage() < 0;
  }

  _nextDisabled() {
    return this._nextPage() + 1 > this.props.pageCount;
  }

  _handleClick(preventNav, e) {
    if (preventNav) {
      e.preventDefault();
    }
  }



  render() {
    const handleClick = this._handleClick;
    return (<div>
      <ul className="prev-next list-inline">
        <li>
          <Link
            to={{
              pathname: `/${this._prevPage()}`,
              search: queryString.stringify({
                searchText: this.props.searchText,
                viewer: this.props.viewer,
              }),
            }}
            onClick={handleClick.bind(this, this._prevDisabled())}
            id="sidebar-previous"
            aria-label="Previous Image"
            type="button"
            className="glyphicon glyphicon-arrow-left"
          />
        </li>
        <li>
          <Link
            to={{
              pathname: `/${this._nextPage()}`,
              search: queryString.stringify({
                searchText: this.props.searchText,
                viewer: this.props.viewer,
              }),
            }}
            onClick={handleClick.bind(this, this._nextDisabled())}
            id="sidebar-next"
            aria-label="Next Image"
            type="button"
            className="glyphicon glyphicon-arrow-right"
          />
        </li>
      </ul>
    </div>);
  }
}

PrevNext.defaultProps = {
  searchText: '',
}

PrevNext.propTypes = {
  pageCount: PropTypes.number.isRequired,
  searchText: PropTypes.string,
  goToPageHandler: PropTypes.func.isRequired,
  currentPageId: PropTypes.number.isRequired,
  viewer: PropTypes.string.isRequired,
};

export default PrevNext;
