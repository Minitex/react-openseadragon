import React from 'react';
import { withRouter } from 'react-router-dom';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.searchInput !== null) {
      this.searchInput.focus();
      this.searchInput.selectionStart =
        this.searchInput.selectionEnd = this.searchInput.value.length;
    }
  }

  render() {
    return (<input
      aria-label="Search OCR Text"
      ref={(input) => { this.searchInput = input; }}
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
