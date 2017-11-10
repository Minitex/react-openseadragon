import React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

class CdmImage extends React.Component {

  constructor(props) {
    super(props);
    this.dmScale = this.dmScale.bind(this);
    this.setInfo = this.setInfo.bind(this);
    this.state = { info: { width: 0} }
  }

  componentDidMount() {
    this.setInfo();
    this.forceUpdate();
  }

  setInfo() {
    const _this = this;
    fetch(this.props.infoURL)
      .then((response) => {
      return response.json();
    }).then((json) => {
      _this.setState({ info: json });
    });
  }

  dmScale() {
    if (this.state.info.width > 0) {
      return Math.floor((this.props.width / this.state.info.width) * 100);
    }
    return 10;
  }


  render() {
    if (this.state.info.width !== 0) {
      return(<img
        alt="image with highlighted matching terms"
        src={[
          `${this.props.getImageURL}`,
          `?CISOROOT=${this.props.collection}`,
          `&CISOPTR=${this.props.identifier}`,
          `&DMHEIGHT=${this.props.height}`,
          `&DMWIDTH=${this.props.width}`,
          `&action=2`,
          `&DMSCALE=${this.dmScale()}`,
          `&DMTEXT=${this.props.dmText}`,
          `&DMROTATE=${this.props.dmRotate}`,
        ].join('')}
      />);
    } else {
      return null;
    }
  }
}

CdmImage.defaultProps = {
  action: 2,
  dmRotate: 0,
  dmText: '',
  width: 400,
  height: 500,
};

CdmImage.propTypes = {
  getImageURL: PropTypes.string.isRequired,
  infoURL: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  dmRotate: PropTypes.number,
  dmText: PropTypes.string,
};
export default CdmImage;
