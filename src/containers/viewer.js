import React from 'react';
import PropTypes from 'prop-types';


const OSD_VIEWER = 'OSD_VIEWER';
const TEXT_VIEWER = 'TEXT_VIEWER';

export default function viewerContainer(Component) {
  class ViewerContainer extends React.Component {
    static setPageViewer(pages, pageId, viewer) {
      return pages.map((page, i) => {
        if (i === pageId) {
          return { ...page, viewer };
        }
        return page;
      });
    }
    constructor(props) {
      super(props);
      this.resizeHandler = this.resizeHandler.bind(this);
      this.activateViewerHandler = this.switchViewerHandler.bind(this);
      this.setPagesHandler = this.setPagesHandler.bind(this);
      this.goToPageHandler = this.goToPageHandler.bind(this);
      this.switchViewerHandler = this.switchViewerHandler.bind(this);
      this.setPageViewerHandler = this.setPageViewerHandler.bind(this);
      this.searchTextHandler = this.searchTextHandler.bind(this);
      this.showResultsOnlyHandler = this.showResultsOnlyHandler.bind(this);
      let viewer = props.match.params.viewer;
      let id = props.match.params.id;
      const osdDisplay = (viewer === OSD_VIEWER) ? 'showViewer' : 'hideViewer';
      const textDisplay = (viewer === TEXT_VIEWER) ? 'showViewer' : 'hideViewer';
      const goToPage = (typeof props.match.params.goToPage === 'undefined') ? false : true;
      let searchText = props.match.params.searchText;
      if (typeof searchText === 'undefined') {
        searchText = '';
      }

      

      this.state = {
        viewerColumns: (searchText === '') ? props.viewerColumnsLarge : props.viewerColumnsSmall,
        sidebarColumns: (searchText === '') ? props.sidebarColumnsSmall : props.sidebarColumnsLarge,
        viewerColumnsLarge:  props.viewerColumnsLarge,
        sidebarColumnsSmall: props.sidebarColumnsSmall,
        viewerColumnsSmall:  props.viewerColumnsSmall,
        sidebarColumnsLarge: props.sidebarColumnsLarge,
        pages: ViewerContainer.setPageViewer(this.props.pages, parseInt(id, 10), viewer),
        osdDisplay: osdDisplay,
        textDisplay: textDisplay,
        viewer: viewer,
        currentPageId: parseInt(props.match.params.id, 10),
        searchText: searchText,
        goToPage: goToPage,
        showResultsOnly: false,
      };
    }

    setPageViewerHandler(pageId, viewer) {
      const pages = ViewerContainer.setPageViewer(this.props.pages, pageId, viewer);
      this.setState({ pages });
    }

    switchViewerHandler(viewer = OSD_VIEWER) {
      if (viewer === OSD_VIEWER) {
        this.setState({ osdDisplay: 'show', textDisplay: 'hideViewer' });
      } else if (viewer === TEXT_VIEWER) {
        this.setState({ osdDisplay: 'hideViewer', textDisplay: 'show' });
      }
      this.setState({ viewer });
    }

    resizeHandler(viewerColumns, sidebarColumns) {
      this.setState({ viewerColumns, sidebarColumns });
    }

    searchTextHandler(searchText) {
      this.setState({ searchText });
    }

    showResultsOnlyHandler(showResultsOnly) {
      this.setState({ showResultsOnly });
    }

    setPagesHandler(pages) {
      this.setState({ pages });
    }

    goToPageHandler(currentPageId, viewer, searchText = '') {
      this.setState({ currentPageId, searchText });
      this._updateURL(currentPageId, viewer, searchText);
      this.switchViewerHandler(viewer);
    }

    _updateURL(page, viewer, searchText) {
      window.history.pushState(`Page${page}`,
                               `Page ${page}`,
                               `#${this.props.basename}/${page}/${viewer}/${searchText}`);
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          resizeHandler={this.resizeHandler}
          setPagesHandler={this.setPagesHandler}
          switchViewerHandler={this.switchViewerHandler}
          goToPageHandler={this.goToPageHandler}
          searchTextHandler={this.searchTextHandler}
          toggleViewerHandler={this.toggleViewerHandler}
          goToPageHandler={this.goToPageHandler}
          setPageViewerHandler={this.setPageViewerHandler}
          showResultsOnlyHandler={this.showResultsOnlyHandler}
        />
      );
    }
  }

  ViewerContainer.defaultProps = {
    basename: '/',
    showResultsOnly: false,
    viewerColumnsSmall: 'col-md-9',
    sidebarColumnsLarge: 'col-md-3',
    viewerColumnsLarge: 'col-md-10',
    sidebarColumnsSmall: 'col-md-2',
    currentPageId: 0,
    showSearchText: false,
    searchText: '',
  };
  ViewerContainer.propTypes = {
    showResultsOnly: PropTypes.bool,
    searchText: PropTypes.string,
    basename: PropTypes.string,
    viewerColumnsLarge: PropTypes.string,
    sidebarColumnsSmall: PropTypes.string,
    viewerColumnsSmall: PropTypes.string,
    sidebarColumnsLarge: PropTypes.string,
    currentPageId: PropTypes.number,
    showSearchText: PropTypes.bool,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
        searchText: PropTypes.string,
        showSearchText: PropTypes.string,
      }),
    }),
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        transcript: PropTypes.string,
        numFound: PropTypes.number,
        snippets: PropTypes.string,
        highlightedTranscript: PropTypes.string,
      }),
    ).isRequired,
  };
  return ViewerContainer;
}
