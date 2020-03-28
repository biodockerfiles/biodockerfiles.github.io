/*
 * simple-instant-search-js v0.1.0 (https://github.com/gungorbudak/simple-instant-search-js)
 * Copyright 2020, Gungor Budak
 * Licensed under the MIT License.
*/

/*
 * @desc Function to compile tagged templates.
 * Taken from MDN at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * @param strings - positional tag values
 * @param keys - keyed tag values
 * @return string - compiled template
 */
function SISTemplate(strings, ...keys) {
  return (function(...values) {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function(key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

/*
 * Function to perform search.
 * Inspired by Christian Fei at https://github.com/christian-fei/Simple-Jekyll-Search
 * Adapted from Florin Pop at https://www.florin-pop.com/blog/2019/06/vanilla-javascript-instant-search/
 * @param options
 * @return nothing
 */
let SimpleInstantSearch = (options) => {
  let resultsContainer = options.resultsContainer;
  let searchInput = options.searchInput;
  let searchTerm = '';
  let items;

  const fetchItems = async () => {
    items = await fetch(options.json).then(res => res.json());
  }

  const showItems = async () => {
    resultsContainer.innerHTML = '';
    if (items === undefined) {
      await fetchItems();
    }
    const results = items.filter(
      item => item[options.searchedKey].toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (options.noResultsText !== undefined && results.length === 0) {
      const text = document.createTextNode(options.noResultsText);
      resultsContainer.appendChild(text);
    }
    if (results.length > 0) {
      results.forEach(item => {
        resultsContainer.insertAdjacentHTML('beforeend',
          options.searchResultTemplate(item));
      });
    }
  }

  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    showItems();
  });
};
