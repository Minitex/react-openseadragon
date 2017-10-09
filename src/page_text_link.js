import React from 'react';
export default class PageTextLink extends React.Component {

  constructor(props) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this._prevPage = this._prevPage.bind(this);
    this._nextPage = this._nextPage.bind(this);
    this.goToPage = props.goToPage;
  }

  prev(e) {
    e.preventDefault();
    this.goToPage(this._prevPage());
  }

  next(e) {
    e.preventDefault();
    this.goToPage(this._nextPage());
  }

  _prevPage() {
    return (this.props.page - 1 >= 0) ? this.props.page - 1 : 0;
  }

  _nextPage() {
    return this.props.page + 1;
  }

  render() {
    return (<div>
      <ul className="prev-next">
        <li>
          <a onClick={this.prev} id="sidebar-previous" href="/#">
            <i className="glyphicon glyphicon-arrow-left"></i>
          </a>
        </li>
        <li>
         <a onClick={this.next} id="sidebar-next" href="/#">
           <i className="glyphicon glyphicon-arrow-right"></i>
         </a>
        </li>
      </ul>
  </div>);
  }
}
