const Matcher = {
  match() {
    return (this.result() === null) ? [] : this.result();
  },
  result() {
    return this.matched = this.matched || this.text.match(this.search);
  },
};

const Search = {
  search() {
    return new RegExp(this.searchText.trim(), 'ig');
  },
  match() {
    return Object.assign(Object.create(Matcher), {
      text: this.page.transcript,
      search: this.search(),
    }).match();
  },
  numFound() {
    return this.match().length;
  },
  hasMatches() {
    return this.numFound() > 0;
  },
  snippets() {
    if (this.hasMatches()) {
      return this.snippet(this.searchText, this.page.transcript, 5).toString();
    }
    return '';
  },
  highlightedTranscript() {
    if (this.hasMatches()) {
      return this.page.transcript.replace(
        this.search(),
        this.highlightWrapper(this.searchText),
      );
    }
    return '';
  },
  result() {
    return { ...this.page,
      numFound: this.numFound(),
      snippets: this.snippets(),
      highlightedTranscript: this.highlightedTranscript(),
    };
  },
};

export default Search;
