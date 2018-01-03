import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

const Thumbnail = props =>
  <div>
    <LazyLoad offsetVertical={0}>
      <img
        alt={`page thumbnail for page "${props.title}"`}
        src={props.sidebarThumbnail}
      />

  </LazyLoad>
    <div className="page-title">
      <div className="page-label">{props.title}</div>
    </div>
  </div>;

Thumbnail.propTypes = {

  title: PropTypes.string.isRequired,
  sidebarThumbnail: PropTypes.string.isRequired,
};
export default Thumbnail;
