import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

const Thumbnail = props => (
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
    {props.subtitle && (
      <div className="page-title page-mdl-identifier">
        <div className="page-label">{props.subtitle}</div>
      </div>
    )}
  </div>
);

Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  sidebarThumbnail: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
export default Thumbnail;
