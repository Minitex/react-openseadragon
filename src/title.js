import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
  const found = (props.numFound > 0) ? `${props.numFound} found`: '';
  return (
    <div className="page-title">
      <div className="page-label">{props.title}</div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;
