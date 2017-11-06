import React from 'react';
import PropTypes from 'prop-types';
import PageLink from './page-link';
import Title from './title';
import TextToggleLink from './text-toggle-link';
import ReactDOM from 'react-dom';

function itemList(PageComponent) {
  const Page = PageLink(PageComponent);
  const TextToggle = PageLink(TextToggleLink);
  class ItemList extends React.Component {

    static found(num) {
      return (num > 0) ? `${num} found` : '';
    }

    static snippets(snippet) { return {__html: snippet}; };

    constructor(props) {
      super(props);
      this.items = this.items.bind(this);
      this.resultsPages = this.resultsPages.bind(this);
      this.item = this.item.bind(this);
      this._textViewButton = this._textViewButton.bind(this);
      this.ensureActiveItemVisible = this.ensureActiveItemVisible.bind(this);
      this.activeItem = this.activeItem.bind(this);
    }

    componentDidUpdate(prevProps) {
      this.ensureActiveItemVisible();
    }

    resultsPages() {
      return this.props.pages.filter((item) => {
        if (this.props.showResultsOnly) {
          if (item.numFound > 0) {
            return true;
          }
        } else if (this.props.showResultsOnly === false) {
          return true;
        }
        return false;
      });
    }

    items() {
      return this.resultsPages().map((page, i) => this.item(page, i));
    }

    _textViewButton(page, key) {
      const hasMatch = page.numFound > 0;
      const viewer = (page.viewer === 'OSD_VIEWER') ? 'TEXT_VIEWER' : 'OSD_VIEWER';
      const glyph = (page.viewer === 'OSD_VIEWER') ? 'icon-text' : 'glyphicon glyphicon-picture';
      // console.log(`${viewer}-${key} === ${page.viewer}`);
      if (hasMatch) {
        return (
          <TextToggle
            cssClasses={`btn btn-info ${this.activeItem(key)}`}
            glyph={`glyphicon ${glyph}`}
            {...page}
            {...this.props}
            viewer={viewer}
          />
        );
      }
      return '';
    }

    activeItem(id) {
      return (this.props.currentPageId === id) ? 'active' : '';
    }

  ensureActiveItemVisible() {
    let itemComponent = this.refs.activeItem;
    if (itemComponent) {
      ReactDOM.findDOMNode(itemComponent).scrollIntoView();
    }
  }

    item(page, key) {
      const active = this.activeItem(key);
      const refs = {};
      if (active === 'active') {
        refs.ref = 'activeItem';
      }
      return (
        <li className="sidebar-list-item" key={`sidebar-page-button-${key}`}>
          <Page
            cssClasses={` btn btn-link ${ active}`}
            {...page}
            {...this.props}
            {...refs}
            viewer="OSD_VIEWER"
            active={active}
          />
          &nbsp; <span className="badge">{ItemList.found(page.numFound)}</span>
          <ul><li className="num-found" key={`sidebar-page-text-button-${key}`}>
            <div dangerouslySetInnerHTML={ItemList.snippets(page.snippets)} />
            {this._textViewButton(page, key)}
          </li></ul>
        </li>
      );
    }

    render() {
      return (
        <div className="page-titles">
          {this.items()}
        </div>
      );
    }
  }

  ItemList.defaultProps = {
    showResultsOnly: false,
  };

  ItemList.propTypes = {
    pages: PropTypes.array.isRequired,
    currentPageId: PropTypes.number.isRequired,
    showResultsOnly: PropTypes.bool,
  };

  return ItemList;
}

export default itemList;
