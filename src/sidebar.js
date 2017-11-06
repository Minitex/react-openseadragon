import React from 'react';
import PropTypes from 'prop-types';
import PrevNext from './prev_next';
import Title from './title';
import Thumbnail from './thumbnail';
import PageSearch from './page-search';
import ItemList from './item-list';

const TitleList = ItemList(Title);
const ThumbnailList = ItemList(Thumbnail);

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this._togglePages = this._togglePages.bind(this);
    this.state = {
      pageToggleClass: 'active',
      thumbToggleClass: '',
      pageListClass: '',
      thumbListClass: 'hide',
      currentPageId: props.currentPageId,
      pages: props.pages,
    };
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
    return (
      <div>
        <div className="osd-sidebar-header">
          <PageSearch
            {...this.props}
          />
          <PrevNext
            {...this.props}
          />
          <ul className="nav nav-tabs">
            <li className={this.state.pageToggleClass}>
              <a name="PagesToggle" onClick={this._togglePages} href="#">Titles</a>
            </li>
            <li className={this.state.thumbToggleClass}>
              <a name="ThumbsToggle" onClick={this._togglePages} href="#">Thumbnails</a>
            </li>
          </ul>
        </div>
        <div className="osd-sidebar">

        <ul className={this.state.pageListClass}>
          <TitleList
            {...this.props}
          />
        </ul>
        <ul className={this.state.thumbListClass}>
          <ThumbnailList
            {...this.props}
          />
        </ul>
      </div>
    </div>

    );
  }
}

Sidebar.propTypes = {
  currentPageId: PropTypes.number.isRequired,
  pages: PropTypes.array.isRequired,
  basename: PropTypes.string.isRequired,
  resizeHandler: PropTypes.func.isRequired,
  searchText: PropTypes.string,
};

export default Sidebar;
