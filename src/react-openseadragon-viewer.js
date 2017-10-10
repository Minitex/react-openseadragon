import React from 'react';
import OpenSeadragon from 'openseadragon';
import OpenSeadragonControls from './react-openseadragon-controls';
import Sidebar from './sidebar';


var OPENSEADRAGONVIEWER = undefined;

export default class OpenSeadragonViewer extends React.Component {
  // Hack to override full page styling of OpenSeadragon.
  static init(cols) {
    const osdContainer = document.getElementsByClassName('openseadragon-container');
    osdContainer[0].className = `openseadragon-container col-md-${cols}`;
    osdContainer[0].style.cssText = OpenSeadragonViewer.osdStyle();
    const viewer = document.getElementById('osd-viewer');
    viewer.insertBefore(osdContainer[0], viewer.childNodes[0]);
  }

  static osdStyle() {
    return `background: none transparent; border: none; margin: 0px;
            padding: 0px; overflow: hidden; left: 0px; top: 0px;
            text-align: left; height: 100%;`;
  }

  constructor(props) {
    super(props);
    this._config = this._config.bind(this);
    this._id = this._id.bind(this);
    this._sidebar = this._sidebar.bind(this);
    this._currentImage = this._currentImage.bind(this);
  }

  componentDidMount() {
    if (typeof window.OpenSeadragon !== 'undefined') {
      OPENSEADRAGONVIEWER = window.OpenSeadragon(this._config());
    } else {
      OPENSEADRAGONVIEWER = OpenSeadragon(this._config());
    }

    // Start at the image specified in the URL
    OPENSEADRAGONVIEWER.goToPage(this._currentImage());

    // Force a re-render to get the TOC drop-down
    OpenSeadragonViewer.init(this.props.config.containerColumns);
    this.forceUpdate();
  }

  _currentImage() {
    return parseInt(window.location.href.split('/').reverse()[0], 10);
  }  

  _config() {
    return Object.assign(this.props.default_config, this.props.config);
  }

  _id(){
    return parseInt(this.props.match.params.id, 10);
  }

  _sidebar() {
    if (typeof OPENSEADRAGONVIEWER !== 'undefined') {
      return (<Sidebar
        basename={this.props.basename}
        viewer={OPENSEADRAGONVIEWER}
        pages={this.props.config.pages}
        thumbnails={this.props.config.thumbnails}
        startPage={this._currentImage()}
      />);
    }
  }

  render() {
    const { include_controls } = this.props;
    const controls = (include_controls) ? <OpenSeadragonControls /> : '';
    return (
      <div>
        <div className="osd col-md-12">
         <div className="row">
            <div className="openseadragon col-md-12" id="osd-viewer">
              {controls}
              <div className={`osd-sidebar col-md-${this.props.config.sidebarColumns}`}>
                {this._sidebar()}
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

OpenSeadragonViewer.defaultProps = {  include_navigator: true,
                                      include_controls: true,
                                      default_config: {
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
                                      }
                                    }

OpenSeadragonViewer.propTypes = {
  config: React.PropTypes.object,
  basename: React.PropTypes.string,
}
