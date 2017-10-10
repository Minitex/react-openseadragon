import React from 'react';
export default class PrevNext extends React.Component {

  constructor(props) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this._prevPage = this._prevPage.bind(this);
    this._nextPage = this._nextPage.bind(this);
    this._prevDisabled = this._prevDisabled.bind(this);
    this._nextDisabled = this._nextDisabled.bind(this);
    this.goToPage = props.goToPage;
  }

  prev(e) {
    e.preventDefault();
    if (!this._prevDisabled()) {
      this.goToPage(this._prevPage());
      this.setState({ page: this._prevPage() });
    }
  }

  next(e) {
    e.preventDefault();
    if (!this._nextDisabled()) {
      this.goToPage(this._nextPage());
      this.setState({ page: this._nextPage() });
    }
  }

  _prevPage() {
    return this.props.page - 1;
  }

  _nextPage() {
    return this.props.page + 1;
  }

  _prevDisabled() {
    return this._prevPage() < 0;
  }

  _nextDisabled() {
    return this._nextPage() + 1 > this.props.pageCount;
  }

  render() {
    let prevClass = (this._prevDisabled()) ? 'disabled' : '';
    let nextClass = (this._nextDisabled()) ? 'disabled' : '';
    return (<div>
      <ul className="prev-next list-inline">
        <li>
          <button
            className={`btn btn-link ${prevClass}`}
            onClick={this.prev}
            id="sidebar-previous"
          >
            <i className="glyphicon glyphicon-arrow-left" />
          </button>
        </li>
        <li>
          <button
            className={`btn btn-link  ${nextClass}`}
            onClick={this.next} id="sidebar-next"
          >
            <i className="glyphicon glyphicon-arrow-right" />
          </button>
        </li>
      </ul>
  </div>);
  }
}
