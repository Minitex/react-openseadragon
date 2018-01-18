import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import Snippet from './snippet';
import Search from './search';
import SearchInput from './search-input';
import RedirectToPage from './redirect-to-page';

class PageSearch extends React.Component {
  static firstMatch(pages) {
    return pages.filter(page => page.numFound > 0).slice(0, 1)[0] || {};
  }
  constructor(props) {
    super(props);
    this.searchAsYouTypeHandler = this.searchAsYouTypeHandler.bind(this);
    this.pageSearch = this.pageSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.clearSearchLink = this.clearSearchLink.bind(this);
    this.search = this.search.bind(this);
    this.currentPageId = this.currentPageId.bind(this);
  }

  componentDidMount() {
    this.search(this.props.searchText, this.props.history, true);
  }

  currentPageId() {
    return this.props.history.location.pathname.replace('/', '');
  }

  search(text, history, justMounted = false) {
    if (text.length >= 1) {
      this.props.resizeHandler(this.props.viewerColumnsSmall, this.props.sidebarColumnsLarge);
    }
    const pages = this.pageSearch(text);
    const firstMatch = PageSearch.firstMatch(pages);
    this.props.setPagesHandler(pages);
    this.props.searchTextHandler(text);

    if (history && Object.keys(firstMatch).length > 0) {
      // If a redirect token has been issued
      // and the firstMatched page is different
      // than the one we are on, push a new
      // path to history
      RedirectToPage.init(
        history.push,
        history.location.search,
        this.currentPageId(),
        firstMatch.id);
      RedirectToPage.redirect();
      this.props.goToPageHandler(firstMatch.id, text, firstMatch.viewer);
    }
    // If we get a "no match" result or have no search text, reset the search state
    // and downsize
    if (text === '') {
      this.props.resizeHandler(this.props.viewerColumnsLarge, this.props.sidebarColumnsSmall);
      this.clearSearch();
      // no match searches should reset the page state
      // going back to the first page
    } else if (Object.keys(firstMatch).length === 0) {
      this.clearSearch();
    }
  }

  searchAsYouTypeHandler(history, e) {
    const searchText = e.target.value;
    e.preventDefault();
    this.props.showResultsOnlyHandler(true);
    this.search(searchText, history, true);
    this.forceUpdate();
  }

  clearSearch() {
    this.props.showResultsOnlyHandler(false);
    const DEFAULT_VIEWER = 'OSD_VIEWER';
    const pages = this.props.pages.map(
      page =>
        Object.assign(page, { numFound: 0, snippets: '', view: DEFAULT_VIEWER }),
    );
    this.props.setPagesHandler(pages);

    // Gah, another poke through the dom abstraction
    // scrol back to the top of the sidebar list when
    // a search has been cleared
    if (document.getElementById('osd-sidebar')) {
      document.getElementById('osd-sidebar').scrollTop = 0;
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
  viewer: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sidebarThumbnail: PropTypes.string.isRequired,
      transcript: PropTypes.string,
      numFound: PropTypes.number,
      snippets: PropTypes.string,
      highlightedTranscript: PropTypes.string,
    }),
  ).isRequired,
  setPagesHandler: PropTypes.func.isRequired,
  goToPageHandler: PropTypes.func.isRequired,
  resizeHandler: PropTypes.func.isRequired,
  searchTextHandler: PropTypes.func.isRequired,
  searchText: PropTypes.string,
  viewerColumnsLarge: PropTypes.string.isRequired,
  viewerColumnsSmall: PropTypes.string.isRequired,
  sidebarColumnsSmall: PropTypes.string.isRequired,
  sidebarColumnsLarge: PropTypes.string.isRequired,
  showResultsOnlyHandler: PropTypes.func.isRequired,
};

export default  withRouter(PageSearch);
