import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

const Thumbnail = props =>
  <LazyLoad offsetVertical={0}>
    <img
      alt={`page thumbnail for page "${props.title}"`}
      src={props.sidebarThumbnail}
    />
  </LazyLoad>;

Thumbnail.propTypes = {

  title: PropTypes.string.isRequired,
  sidebarThumbnail: PropTypes.string.isRequired,
};
export default Thumbnail;
