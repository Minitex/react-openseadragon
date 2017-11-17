import React from 'react';
import PropTypes from 'prop-types';

function Button(WrappedComponent) {
  const ButtonComponent = props =>
    <button
      type="button"
      className={props.cssClasses}
      onClick={() => props.goToPageHandler(props.id, props.viewer, props.searchText)}
    >
      <WrappedComponent {...props} />
    </button>;

  ButtonComponent.defaultProps = {
    searchText: '',
  };

  ButtonComponent.propTypes = {
    id: PropTypes.number.isRequired,
    searchText: PropTypes.string,
    viewer: PropTypes.string.isRequired,
    goToPageHandler: PropTypes.func.isRequired,
    cssClasses: PropTypes.string.isRequired,
  };
  return ButtonComponent;
}

export default Button;
