import qs from 'query-string';

const RedirectToPage = {
  init: function(pushFunction, queryString, currentPageId, nextPageId) {
    this.pushFunction = pushFunction;
    this.queryString = queryString;
    this.currentPageId = parseInt(currentPageId, 10);
    this.nextPageId = parseInt(nextPageId, 10);
  },
  query: function() {
    return qs.parse(this.queryString);
  },
  canRedirect: function() {
    return (typeof this.query().redirect !== 'undefined' && !this.samePage());
  },
  samePage: function() {
    return this.currentPageId === this.nextPageId;
  },
  unRedirectedQuery: function() {
    const query = this.query();
    delete query.redirect;
    return qs.stringify(query);
  },
  redirect: function() {
    if (this.canRedirect()) {
      this.pushFunction(`${this.nextPageId}?${this.unRedirectedQuery()}`);
    }
  }
}

export default RedirectToPage;