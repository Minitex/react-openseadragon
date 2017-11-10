import React from 'react';
import PropTypes from 'prop-types';

class PrevNext extends React.Component {
  constructor(props) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this._prevPage = this._prevPage.bind(this);
    this._nextPage = this._nextPage.bind(this);
    this._prevDisabled = this._prevDisabled.bind(this);
    this._nextDisabled = this._nextDisabled.bind(this);
    this.goToPageHandler = props.goToPageHandler;
  }

  prev(e) {
    e.preventDefault();
    if (!this._prevDisabled()) {
      this.goToPageHandler(this._prevPage(), this.props.viewer);
      this.setState({ page: this._prevPage() });
    }
  }

  next(e) {
    e.preventDefault();
    if (!this._nextDisabled()) {
      this.goToPageHandler(this._nextPage(), this.props.viewer);
      this.setState({ page: this._nextPage() });
    }
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

  render() {
    const prevClass = (this._prevDisabled()) ? 'disabled' : '';
    const nextClass = (this._nextDisabled()) ? 'disabled' : '';
    return (<div>
      <ul className="prev-next list-inline">
        <li>
          <button
            className={`btn btn-link ${prevClass}`}
            onClick={this.prev}
            id="sidebar-previous"
            aria-label="Previous Image"
          >
            <i className="glyphicon glyphicon-arrow-left" />
          </button>
        </li>
        <li>
          <button
            className={`btn btn-link  ${nextClass}`}
            onClick={this.next} id="sidebar-next"
            aria-label="Next Image"
          >
            <i className="glyphicon glyphicon-arrow-right" />
          </button>
        </li>
      </ul>
    </div>);
  }
}

PrevNext.propTypes = {
  goToPageHandler: PropTypes.func.isRequired,
  currentPageId: PropTypes.number.isRequired,
  viewer: PropTypes.string.isRequired,
};

export default PrevNext;
