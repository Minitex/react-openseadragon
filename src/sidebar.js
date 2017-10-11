import React from 'react';
import PropTypes from 'prop-types';
import PrevNext from './prev_next';
import Button from './button';
import Title from './title';
import Thumbnail from './thumbnail';

const TitleButton = Button(Title);
const ThumbButton = Button(Thumbnail);

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.goToPage = this.goToPage.bind(this);
    this._titleButton = this._titleButton.bind(this);
    this._titles = this._titles.bind(this);
    this._updateURL = this._updateURL.bind(this);
    this._nav = this._nav.bind(this);
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

  _titleButton(title, key) {
    return (
      <li key={`sidebar-page-${key}`}>
        <TitleButton
          active={this.state.page === key}
          pageId={key}
          value={title}
          handler={this._nav}
        />
      </li>);
  }

  _titles() {
    return this.props.pages.map((title, i) => this._titleButton(title, i));
  }

  _thumbnail(src, key) {
    return (
      <li key={`sidebar-page-${key}`}>
        <ThumbButton
          active={this.state.page === key}
          pageId={key}
          handler={this._nav}
          alt={`page thumbnail for page "${this.props.pages[key]}"`}
          src={src}
        />
      </li>);
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
        {this._titles()}
      </ul>
      <ul className={this.state.thumbListClass}>
        {this._thumbnails()}
      </ul>
    </div>);
  }
}

Sidebar.propTypes = {
  startPage: PropTypes.number.isRequired,
  viewer:  PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired,
  basename: PropTypes.string.isRequired,
};

export default Sidebar;
