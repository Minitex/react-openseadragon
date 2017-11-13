import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Snippet from './snippet';
import Search from './search';
import SearchInput from './search-input';
class PageSearch extends React.Component {
  constructor(props) {
    super(props);
    this.searchAsYouTypeHandler = this.searchAsYouTypeHandler.bind(this);
    this.pageSearch = this.pageSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.clearSearchLink = this.clearSearchLink.bind(this);
    this.search = this.search.bind(this);
    this.firstMatch = this.firstMatch.bind(this);
  }
  componentDidMount() {
    this.search(this.props.searchText, false, false);
  }
  firstMatch(pages) {
    return pages.filter(page => page.numFound > 0).slice(0, 1)[0] || {};
  }
  search(text, history, typing = true) {
    if (text.length === 1) {
      this.props.resizeHandler(this.props.viewerColumnsSmall, this.props.sidebarColumnsLarge);
    }
    const pages = this.pageSearch(text);
    const firstMatch = this.firstMatch(pages);
    this.props.setPagesHandler(pages);
    this.props.searchTextHandler(text);
    if (history && Object.keys(firstMatch).length > 0) {
      this.props.goToPageHandler(firstMatch.id, text, firstMatch.viewer);
    }
    // If we get a "no match" result or have no search text, reset the search state
    if (Object.keys(firstMatch).length === 0 || text === '') {
      this.clearSearch();
    }
  }

  searchAsYouTypeHandler(history, e) {
    const searchText = e.target.value;
    e.preventDefault();
    this.props.showResultsOnlyHandler(true);
    this.search(searchText, history, true);
  }

  clearSearch() {
    this.props.resizeHandler(this.props.viewerColumnsLarge, this.props.sidebarColumnsSmall);
    this.props.showResultsOnlyHandler(false);
    const DEFAULT_VIEWER = 'OSD_VIEWER';
    let pages = this.props.pages.map(
      page =>
        Object.assign(page, { numFound: 0, snippets: '', view: DEFAULT_VIEWER }),
    );
    this.props.setPagesHandler(pages);

    // If the user is currently viewing the OSD_VIEWER it signifies
    // that we have not automatically seeked to the first matching
    // page and set the TEXT_VIEWER. That is, the user has manually
    // clicked on an OSD_VIEWER / hi res image subsequent to search
    // or they have simply navigated to the viewer with no default
    // search. Bottom line, only redirect if the user is seeing the
    // TEXT_VIEWER subsequent to an actual search
    if (this.props.viewer !== DEFAULT_VIEWER) {
      this.props.goToPageHandler(0, '', DEFAULT_VIEWER);
    }
  }

  pageSearch(searchText) {
    return this.props.pages.map(page =>
      Object.assign(Object.create(Search), {
        page,
        searchText,
        snippet() {
          return new Snippet(searchText, page.transcript, 5).toString();
        },
        highlightWrapper: text => `<span class="osd-search-highlight">${text}</span>`,
      }).result(),
    );
  }

  clearSearchLink() {
    return (this.props.searchText !== '') ? <Link to={'/0'} >Clear Search</Link> : '';
  }

  render() {
    return (
      <div className="page-search form-group has-feedback">
        <span className="sr-only">Search:</span>
        <SearchInput {...this.props} searchAsYouTypeHandler={this.searchAsYouTypeHandler} />
        {this.clearSearchLink()}
        <span className="glyphicon glyphicon-search form-control-feedback" aria-hidden="true" />
      </div>
    );
  }
}

PageSearch.defaultProps = {
  searchText: '',
};

PageSearch.propTypes = {
  pages: PropTypes.array.isRequired,
  setPagesHandler: PropTypes.func.isRequired,
  resizeHandler: PropTypes.func.isRequired,
  searchTextHandler: PropTypes.func.isRequired,
  searchText: PropTypes.string,
};

export default PageSearch;
