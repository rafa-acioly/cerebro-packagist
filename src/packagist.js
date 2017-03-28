const pack = (tagName) => {
  let url = `https://packagist.org/search.json?q=${tagName}&per_page=4`;
  return fetch(url).then(response => response.json());
}

module.exports = pack;
