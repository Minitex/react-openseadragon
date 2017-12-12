import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
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
    const showThumbnail = props.showThumbnail;
    this.css = {
      pageToggleClass: (showThumbnail === true) ? '' : 'active',
      thumbToggleClass: (showThumbnail === true) ? 'active' : '',
      pageListClass: (showThumbnail === true) ? 'hide' : 'show',
      thumbListClass: (showThumbnail === true) ? 'show' : 'hide',
    };
    this.prevNext = this.prevNext.bind(this);
  }

  prevNext() {
    if (this.props.searchText == '')
      return (
        <PrevNext
          {...this.props}
          pageCount={this.props.pages.length}
        />
      );
    return '';
  }

  render() {
    return (
      <div>
        <div className="osd-sidebar-header">
          <PageSearch
            {...this.props}
          />
          { this.prevNext() }
          <ul className="nav nav-tabs">
            <li className={this.css.pageToggleClass}>
              <Link
                to={{
                  pathname: '/0',
                  search: queryString.stringify({
                    searchText: this.props.searchText,
                    viewer: this.props.viewer,
                    showThumbnail: false,
                  }),
                }}
                type="button"
              >
                Titles
              </Link>
            </li>
            <li className={this.css.thumbToggleClass}>
              <Link
                to={{
                  pathname: '/0',
                  search: queryString.stringify({
                    searchText: this.props.searchText,
                    viewer: this.props.viewer,
                    showThumbnail: true,
                  }),
                }}
                type="button"
              >
                Thumbnails
              </Link>
            </li>
          </ul>
        </div>
        <div id="osd-sidebar" className="osd-sidebar">
        <div className={`${this.css.pageListClass}`}>
          <TitleList
            {...this.props}
            showThumbnail={false}
          />
        </div>
        <div className={this.css.thumbListClass}>
          <ThumbnailList
            {...this.props}
            showThumbnail={true}
          />
        </div>
        <div className="osd-sidebar-footer" />
      </div>
    </div>

    );
  }
}

Sidebar.defaultProps = {
    searchText: '',
};

Sidebar.propTypes = {
  pages: PropTypes.array.isRequired,
  basename: PropTypes.string.isRequired,
  resizeHandler: PropTypes.func.isRequired,
  searchText: PropTypes.string,
  showThumbnail: PropTypes.bool.isRequired,
  showThumbnailHandler: PropTypes.func.isRequired,
};

export default Sidebar;
