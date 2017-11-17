import React from 'react';
import PropTypes from 'prop-types';
import screenfull from 'screenfull';
import ReactDOM from 'react-dom';
import CdmImage from './cdm-image';

class OcrTextViewer extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
    this.state = {
      fullScreenCss: '',
      isFullScreen: false,
      matchImageWidth: 400,
      matchImageHeight: 5000,
    };
  }

  componentWillMount() {
    if (screenfull.enabled) {
      screenfull.on('change', () => {
        if (screenfull.isFullscreen === false) {
          this.setState({
            fullScreenCss: '',
            isFullScreen: false,
            matchImageWidth: 400,
          });
        } else {
          this.setState({
            fullScreenCss: 'fullscreen',
            isFullScreen: true,
            matchImageWidth: 800,
          });
        }
      });
    }
  }

  toggleFullScreen() {
    if (screenfull.enabled) {
      const textViewer = document.getElementById('textView');
      if (this.state.isFullScreen === false) {
        screenfull.request(textViewer);
      } else {
        screenfull.exit(textViewer);
      }
    }
  }

  render() {
    const snippeter = snippet => ({ __html: snippet });
    return (
      <div id="textView" className="ocr-text-viewer">
        <div className={`ocr-text col-md-4 ${this.state.fullScreenCss}`}>
          <button
            className={`full-screen-button ${this.state.fullScreenCss}`}
            aria-label="Full Screen"
            onClick={this.toggleFullScreen}
            title="Toggle Full Screen"
            alt="Toggle Full Screen"
          >
            <span className="glyphicon glyphicon-resize-full" />
          </button>
          <div
            className="highlighted-text"
            dangerouslySetInnerHTML={snippeter(this.props.highlightedTranscript)}
          />
        </div>
        <div className={`ocr-text-image col-md-8 ${this.state.fullScreenCss}`}>
          <CdmImage
            {...this.props}
            width={this.state.matchImageWidth}
            height={this.state.matchImageHeight}
            dmText={this.props.searchText}
          />
        </div>
      </div>
    );
  }
}

OcrTextViewer.defaultProps = {
  searchText: '',
};

OcrTextViewer.propTypes = {
  highlightedTranscript: PropTypes.string.isRequired,
  searchText: PropTypes.string,
};
export default OcrTextViewer;
