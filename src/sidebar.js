import React from 'react';
import PrevNext from './prev_next';
import PageTextLink from './page_text_link';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.goToPage = this.goToPage.bind(this);
    this._pageButton = this._pageButton.bind(this);
    this._updateURL = this._updateURL.bind(this);
    this._nav = this._nav.bind(this);
    this._pages = this._pages.bind(this);
    this._thumbnails = this._thumbnails.bind(this);
    this._togglePages = this._togglePages.bind(this);
    this.state = {
      pageToggleClass: 'active',
      thumbToggleClass: '',
      pageListClass: '',
      thumbListClass: 'hide',
      page: this.props.startPage,
    };
  }

  goToPage(page) {
    this.props.viewer.goToPage(page);
    this._updateURL(page);
    this.setState({ page });
  }

  _nav(e, page) {
    e.preventDefault();
    this.goToPage(page);
  }

  _updateURL(page) {
    window.history.pushState(`Page${page}`,
                             `Page ${page}`,
                             `#${this.props.basename}/image/${page}`);
  }

  _pageButton(page, key) {
    return (
      <li key={`sidebar-page-${key}`}>
        <button
          className={`page-button btn btn-link ${(this.state.page === key) ? 'active' : ''}`}
          onClick={e => this._nav(e, key)}
        >
          {page}
        </button>
      </li>);
  }

  _pages() {
    return this.props.pages.map((page, i) => this._pageButton(page, i));
  }

  _thumbnail(thumb, key) {
    return (
      <button
        key={`sidebar-thumb-${key}`}
        className={`page-button btn btn-link ${(this.state.page == key) ? 'active' : ''}`}
        onClick={e => this._nav(e, key)}
      >
        <img
          alt={`page thumbnail for page "${this.props.pages[key]}"`}
          src={thumb}
        />
      </button>);
  }


  _thumbnails() {
    return this.props.thumbnails.map((thumb, i) => this._thumbnail(thumb, i));
  }

  _togglePages(e) {
    e.preventDefault();
    if (e.target.name === 'PagesToggle') {
      this.setState({
        pageToggleClass: 'active',
        thumbToggleClass: '',
        pageListClass: '',
        thumbListClass: 'hide',
      });
    } else {
      this.setState({
        pageToggleClass: '',
        thumbToggleClass: 'active',
        pageListClass: 'hide',
        thumbListClass: '',
      });
    }
  }

  render() {
    return (<div className="viewer-sidebar col-md-12">
      <PrevNext
        page={this.state.page}
        goToPage={this.goToPage}
        pageCount={this.props.pages.length}
      />
      <ul className="nav nav-tabs">
        <li className={this.state.pageToggleClass}>
          <a name="PagesToggle" onClick={this._togglePages} href="#">Titles</a>
        </li>
        <li className={this.state.thumbToggleClass}>
          <a name="ThumbsToggle" onClick={this._togglePages} href="#">Thumbnails</a>
        </li>
      </ul>

      <ul className={this.state.pageListClass}>
        {this._pages()}
      </ul>
      <ul className={this.state.thumbListClass}>
        {this._thumbnails()}
      </ul>
    </div>);
  }
}
