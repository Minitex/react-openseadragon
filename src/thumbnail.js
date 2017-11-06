import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = props =>
  <img
    alt={`page thumbnail for page "${props.title}"`}
    src={props.thumbnail}
  />;

Thumbnail.propTypes = {

  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
export default Thumbnail;
