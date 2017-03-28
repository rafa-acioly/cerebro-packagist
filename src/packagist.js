const pack = (tagName) => {
  let url = `https://packagist.org/search.json?q=${tagName}`;
  return fetch(url).then(response => response.json());
}

module.exports = pack;
