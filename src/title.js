import React from 'react';
import PropTypes from 'prop-types';

const Title = props => <p>{props.value}</p>;
Title.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Title;
