import React from 'react';
import { withRouter } from 'react-router-dom';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById('page-search').focus();
  }

  render() {
    return (<input
      aria-label="Search OCR Text"
      onChange={this.props.searchAsYouTypeHandler.bind(this, this.props.history)}
      type="text"
      className="form-control"
      id="page-search"
      name="page-search"
      defaultValue={this.props.searchText}
    />);
  }
}

export default withRouter(Input);
