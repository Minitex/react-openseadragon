import React from 'react';
import PropTypes from 'prop-types';
import Snippet from './snippet';


class Search {


result() {
  return {
    id: i,
    numFound: match.length,
    snippets: snippets(match.length),
    highlightedTranscript: transcript.replace(
      search,
      `<span class="osd-search-highlight">${searchText} </span>`),
  }
}
