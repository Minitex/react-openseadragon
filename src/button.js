import React from 'react';
import PropTypes from 'prop-types';

function Button(WrappedComponent) {
  const ButtonComponent = (props) => {
    return (<button
      type="button"
      className={props.cssClasses}
      onClick={e => props.goToPageHandler(props.id, props.viewer, props.searchText)}
    >
      <WrappedComponent {...props} />
    </button>);
  };
  ButtonComponent.propTypes = {
    id: PropTypes.number.isRequired,
    viewer: PropTypes.string.isRequired,
    goToPageHandler: PropTypes.func.isRequired,
    cssClasses: PropTypes.string.isRequired,
  };
  return ButtonComponent;
}

export default Button;
