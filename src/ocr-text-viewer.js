import React from 'react';
import PropTypes from 'prop-types';

const OcrTextViewer = (props) => {
  const snippeter = (snippet) => { return({__html: snippet}) };
  return (
    <div>
      <div
        className="ocr-text col-md-4"
        dangerouslySetInnerHTML={snippeter(props.highlightedTranscript)}
      />
      <div className="ocr-text-image col-md-8">
        <img src={`${props.ajaxHelperURL}?CISOROOT=${props.collection}&CISOPTR=${props.identifier}&action=2&DMSCALE=15&DMWIDTH=512&DMHEIGHT=512&DMX=0&DMY=0&DMTEXT=${props.searchText}&DMROTATE=0`} />
      </div>
    </div>
  );
};

OcrTextViewer.propTypes = {
  highlightedTranscript: PropTypes.string.isRequired,
};
export default OcrTextViewer;
