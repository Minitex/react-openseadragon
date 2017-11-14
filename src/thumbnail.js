import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = props =>
  <img
    alt={`page thumbnail for page "${props.title}"`}
    src={props.sidebarThumbnail}
  />;

Thumbnail.propTypes = {

  title: PropTypes.string.isRequired,
  sidebarThumbnail: PropTypes.string.isRequired,
};
export default Thumbnail;
