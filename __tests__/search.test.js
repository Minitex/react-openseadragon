import Search from '../src/search';
var page = {
  id: 99,
  transcript: 'blah',
};
const TestPageSearch =
  Object.assign(Object.create(Search), {
    page,
    searchText: 'bl',
    highlightWrapper: searchText => `<foo>${searchText}</foo>`,
    snippet() {
      return '';
    },
  },
);
describe('Search', () => {
  it('should run a search and return a page result', () => {
    expect(TestPageSearch.result()).toEqual(
      { highlightedTranscript: '<foo>bl</foo>ah',
        id: 99,
        numFound: 1,
        snippets: '',
        transcript: 'blah',
      },
    );
  });
});
