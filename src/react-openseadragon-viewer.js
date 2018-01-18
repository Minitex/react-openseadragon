import React from 'react';
import PropTypes from 'prop-types';
import OpenSeadragon from 'openseadragon';
import OpenSeadragonControls from './react-openseadragon-controls';

var OPENSEADRAGONVIEWER = undefined;

export default class OpenSeadragonViewer extends React.Component {
  static defaultConfig() {
    return {
      sequenceMode: true,
      showReferenceStrip: false,
      showNavigator: true,
      id: 'osd-viewer',
      visibilityRatio: 1.0,
      constrainDuringPan: false,
      defaultZoomLevel: 1,
      minZoomLevel: 1,
      maxZoomLevel: 10,
      zoomInButton: 'zoom-in',
      zoomOutButton: 'zoom-out',
      homeButton: 'reset',
      fullPageButton: 'full-page',
      previousButton: 'sidebar-previous',
      nextButton: 'sidebar-next',
    };
  }

  constructor(props) {
    super(props);
    this._config = this._config.bind(this);
    this._id = this._id.bind(this);
    this._currentPageIndex = this._currentPageIndex.bind(this);
    this._osdViewer = this._osdViewer.bind(this);
    this.setStrings = this.setStrings.bind(this);
    this.setStringsItems = this.setStringsItems.bind(this);
    this.state = {
      pages: props.pages,
      showSearchText: props.showSearchText,
      osdDisplay: {},
      textDisplay: { display: 'none' },
    };
  }

  componentDidMount() {
    this.setStrings();

    if (typeof window.OpenSeadragon !== 'undefined') {
      OPENSEADRAGONVIEWER = window.OpenSeadragon(this._config());
    } else {
      OPENSEADRAGONVIEWER = OpenSeadragon(this._config());
    }
    // Start at the image specified in the URL
    OPENSEADRAGONVIEWER.goToPage(this.props.currentPageId);
    // Force a re-render to get the sidebar etc after OSD mounts
    this.forceUpdate();
  }

  setStringsItems() {
    return (typeof this.props.osdConfig.setStrings !== 'undefined') ? this.props.osdConfig.setStrings : [];
  }

  // Allow users to overright UI strings in OpenSeadragon
  // See: http://openseadragon.github.io/examples/ui-customize-tooltips/
  setStrings() {
    this.setStringsItems().map(
      item => OpenSeadragon.setString(item.name, `${item.value}`));
  }

  _currentPageIndex() {
    let urlParts = window.location.href.split('/');
    return parseInt(urlParts.map(
      (part, i) => {
        if (part === 'image') {
          return urlParts[i + 1];
        }
        return '';
      }).join('').trim(), [0], 10);
  };

  _currentPage() {
    return this.state.pages[this._currentPageIndex()];
  }

  _config() {
    return Object.assign(OpenSeadragonViewer.defaultConfig(), this.props.osdConfig);
  }

  _id(){
    return parseInt(this.props.match.params.id, 10);
  }

  _osdViewer() {
    return (
      <div className="openseadragon" id="osd-viewer">
        <OpenSeadragonControls />
      </div>
    );
  }

  render() {
    if (typeof OPENSEADRAGONVIEWER !== 'undefined') {
      OPENSEADRAGONVIEWER.goToPage(this.props.currentPageId);
    }
    return (<div>{this._osdViewer()}</div>);
  }
}

OpenSeadragonViewer.defaultProps = {
  viewSearchText: '',
  osdConfig: {
    defaultZoomLevel: 0,
    tileSources: [],
    setStrings: [],
  },
};

OpenSeadragonViewer.propTypes = {
  osdConfig: PropTypes.shape({
    defaultZoomLevel: PropTypes.number,
    tileSources: PropTypes.arrayOf(PropTypes.string),
    setStrings: PropTypes.arrayOf(PropTypes.object),
  }),
  viewSearchText: PropTypes.string,
};
