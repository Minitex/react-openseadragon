import React from 'react';
import PropTypes from 'prop-types';
import Snippet from './snippet';
import {Link} from 'react-router-dom';

class PageSearch extends React.Component {
  constructor(props) {
    super(props);
    this.searchAsYouType = this.searchAsYouType.bind(this);
    this.pageSearch = this.pageSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.clearSearchLink = this.clearSearchLink.bind(this);
    this.search = this.search.bind(this);
    this.firstMatch = this.firstMatch.bind(this);
  }

  componentDidMount() {
    this.searchInput.focus();
    this.search(this.props.searchText, false);
  }

  firstMatch(pages) {
    return pages.filter(page => page.numFound > 0, { id: -1 }).slice(0, 1)[0];
  }

  search(text, typing = true) {
    if (text.length === 1) {
      this.props.resizeHandler(this.props.viewerColumnsSmall, this.props.sidebarColumnsLarge);
    }
    const pages = this.pageSearch(text);
    const firstMatch = this.firstMatch(pages);
    this.props.setPagesHandler(pages);
    this.props.searchTextHandler(text);
    // If we get a "no match" result or have no search text, reset the search state
    if (firstMatch === { id: -1 } || text === '') {
      this.clearSearch();
    // Otherwise, if we are told to go to the first matching result by the
    // goToFirstMatch URL param, go to the first match and show the text viewer
    } else {
       if (typing !== true && this.props.goToPage === false) {
        this.props.setPagesHandler(pages.map(
          (page, i) => ((i === firstMatch.id) ? { ...page, viewer: 'TEXT_VIEWER' } : page),
        ));
        this.props.goToPageHandler(firstMatch.id, 'TEXT_VIEWER', text);
       }
    }
    return firstMatch;
  }

  searchAsYouType(e) {
    const searchText = e.target.value;
    this.props.showResultsOnlyHandler(true);
    e.preventDefault();
    const { id } = this.search(searchText, true);
    // Go to the first mathching record as you type

    if (searchText !== '' && id !== -1) {
      this.props.goToPageHandler(id, 'TEXT_VIEWER', searchText);
    }
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
      this.props.goToPageHandler(0, DEFAULT_VIEWER, '');
    }
  }

  pageSearch(searchText) {
    return this.props.pages.map((
      (page, i) => {
        const transcript = page.transcript;
        const search = new RegExp(searchText.trim(), 'ig');
        let match = transcript.match(search);
        const snippets = (hasMatches) => {
          if (hasMatches) {
            return new Snippet(searchText, transcript, 5).toString();
          }
          return '';
        };
        const highlightedTranscript = (hasMatches) => {
          if (hasMatches) {
            return transcript.replace(
              search,
              `<span class="osd-search-highlight">${searchText} </span>`);
          }
          return '';
        };
        match = (match === null) ? [] : match;
        return Object.assign(page, {
          id: i,
          numFound: match.length,
          snippets: snippets(match.length),
          highlightedTranscript: highlightedTranscript(match.length),
        });
      }
    ));
  }

  clearSearchLink() {
    return (this.props.searchText !== '') ? <Link to={'/0/OSD_VIEWER/'} >Clear Search</Link> : '';
  }

  render() {
    return (
      <div className="page-search form-group has-feedback">
        <span className="sr-only">Search:</span>
        <input
          ref={(input) => { this.searchInput = input; }}
          onChange={this.searchAsYouType}
          type="text"
          className="form-control"
          id="page-search"
          name="page-search"
          defaultValue={this.props.searchText}
        />
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
  searchText: PropTypes.string
};

export default PageSearch;
