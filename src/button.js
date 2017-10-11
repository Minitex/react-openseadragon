import React from 'react';
import PropTypes from 'prop-types';

function Button(WrappedComponent) {
  const ButtonComponent = (props) => {
    const active = (props.active === true) ? 'active' : '';
    return (<button
      className={` btn btn-link ${active}`}
      onClick={e => props.handler(e, props.pageId)}
    >
      <WrappedComponent {...props} />
    </button>);
  };
  ButtonComponent.propTypes = {
    pageId: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired,
  };
  return ButtonComponent;
}

export default Button;
