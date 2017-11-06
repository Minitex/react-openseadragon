
export default class Snippet {

  constructor(searchText, text, snipCount) {
    this.searchText = searchText;
    this.text = text;
    this.snipCount = snipCount;
    this.toString = this.toString.bind(this);
  }

  toString() {
    return '<ul>' + this.matchGroups().map(group => group.join('')).join(' ') + '</ul>';
  }

  snip(words, affix) {
    let start = 0;
    let end = 0;
    if (affix === 'prefix') {
      start = ((words.length - this.snipCount) > 0) ? words.length - this.snipCount : 0;
      end = words.length;
    } else {
      start = 0;
      end = this.snipCount;
    }
    return words.slice(start, end).join(' ');
  }

  matchGroups() {
    const matchList = this.text
      .toLowerCase()
      .replace(new RegExp(this.searchText, 'gi'), `|||<<<${this.searchText}|||`)
      .split('|||')
      .filter(match => match !== '');

    return matchList.reduce((matchGroups, words, i) => {
      const matchGroup = [];

      if (words.indexOf('<<<') === 0) {
        matchGroup.push('<li>...');
        // Snippet Prefix
        const first = matchList[i - 1];
        if (typeof first !== 'undefined') {
          matchGroup.push(this.snip(first.split(' '), 'prefix'));
        }
        // Snippet matched text
        matchGroup.push(
          words.replace(`<<<${this.searchText}`,
            `<span class="osd-search-highlight">${this.searchText}</span>`));
        // Snippet Suffix
        const last = matchList[i + 1];
        if (typeof last !== 'undefined') {
          matchGroup.push(this.snip(last.split(' '), 'suffix'));
        }
        matchGroup.push('...</li>');
      }
      matchGroups.push(matchGroup);
      return matchGroups;
    }, []);
  }
}
