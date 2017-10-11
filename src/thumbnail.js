import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = props =>
  <img
    alt={`page thumbnail for page "${props.alt}"`}
    src={props.src}
  />;

Thumbnail.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
export default Thumbnail;
