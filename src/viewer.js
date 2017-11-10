import React from 'react';
import viewerContainer from './containers/viewer';
import OpenSeadragonViewer from './react-openseadragon-viewer';
import OcrTextViewer from './ocr-text-viewer';
import Sidebar from './sidebar';

class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this._sidebar = this._sidebar.bind(this);
    this._showSidebar = this._showSidebar.bind(this);
  }

  _textViewer() {
    const currentPage = this.props.pages[this.props.currentPageId];
    console.log(this.props.currentPageId);
    if (typeof currentPage.highlightedTranscript !== 'undefined') {
      return (<OcrTextViewer
                highlightedTranscript={currentPage.highlightedTranscript}
                collection={currentPage.cdmCollection}
                identifier={currentPage.cdmIdentifier}
                infoURL={currentPage.infoURL}
                {...this.props}
              />);
    }
    return null;
  }

  _showSidebar() {
    return this.props.pages.length > 1;
  }

  _sidebar() {
    return (
      <Sidebar {...this.props} />);
  }

  render() {
    return (
      <div className="osd">
        <div className="row osd-row">
          <div className={`easer ${this.props.osdDisplay} ${this.props.viewerColumns}`}>
            <OpenSeadragonViewer {...this.props} currentPageId={this.props.currentPageId} />
          </div>
          <div className={` easer ${this.props.textDisplay} ${this.props.viewerColumns}`} id="text-viewer">
            {this._textViewer()}
          </div>
          <div className={`${this.props.sidebarColumns} easer`}>
            {this._sidebar()}
          </div>
        </div>
      </div>
    );
  }

}

export default viewerContainer(Viewer);
