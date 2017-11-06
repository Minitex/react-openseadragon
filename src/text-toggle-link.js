import React from 'react';
import PropTypes from 'prop-types';

const TextToggle = (props) => {
  const text = (props.viewer === 'TEXT_VIEWER') ? 'View Text Matches' : 'View High Resolution Image';
  return (
    <span>
      <span className={props.glyph} aria-hidden="true" />
      <span> {text}</span>
    </span>
    );
};

TextToggle.propTypes = {
  viewer: PropTypes.string.isRequired,
  glyph: PropTypes.string.isRequired,
};

export default TextToggle;
