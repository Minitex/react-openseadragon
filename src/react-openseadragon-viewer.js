import React from 'react';
import OpenSeadragon from 'openseadragon';
import OpenSeadragonControls from './react-openseadragon-controls';
import ImageNav from './react-openseadragon-nav';

export default class OpenSeadragonViewer extends React.Component {
  constructor(props) {
    super(props);
    this._config = this._config.bind(this);
    this._currentImage = this._currentImage.bind(this);
    this._updatePath = this._updatePath.bind(this);
    this._nav = this._nav.bind(this);
    this._id = this._id.bind(this);
  }

  componentDidMount() {
    const basename = this.props.basename;
    window.OPENSEADRAGONVIEWER = window.OpenSeadragon(this._config());
    const updatePath = this._updatePath;
    window.OPENSEADRAGONVIEWER.addHandler('page', function (viewer) {
      if (updatePath(viewer.page)) {
        window.history.pushState(null, null, `#${basename}/image/${viewer.page}`);
      }
    });
    // This allows us to keep the transcript/image toggle pills in sync
    // with what was clicked on the viewer nav strip
    OPENSEADRAGONVIEWER.goToPage(parseInt(this.props.match.params.id, 10));
    // Force a re-render to get the TOC drop-down
    this.forceUpdate();
  }

  _updatePath(page) {
    if (this._currentImage() !== page) {
      return true;
    }
    return false;
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

  _nav() {
    if (typeof OPENSEADRAGONVIEWER !== 'undefined') {
      return (<ImageNav id={this._id()}
        {...this.props}
        {...this.props.config}
        viewer={OPENSEADRAGONVIEWER}
      />);
    }
  }

  render() {
    const { include_controls } = this.props;
    const controls = (include_controls) ? <OpenSeadragonControls /> : '';
    return (
      <div>
        {this._nav()}
        <div className="osd col-md-12">
          <div className="openseadragon" id="osd-viewer">
            {controls}
          </div>
        </div>
      </div>
    );
  }
}

OpenSeadragonViewer.defaultProps = {  include_navigator: true,
                                      include_controls: true,
                                      default_config: {
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
                                        nextButton: 'next',
                                        previousButton: 'previous',
                                      }
                                    }

OpenSeadragonViewer.propTypes = {
  config: React.PropTypes.object,
  basename: React.PropTypes.string,
}