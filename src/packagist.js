const package = (tagName) => {
  let url = `https://packagist.org/search.json?tags=${tagName}`;
  return fetch(url).then(response => {
    let mostPopular = response.filter((a, b) => {
      return (a.downloads > b.downloads) ? a.downloads : b.downloads;
    })
  });
}

module.exports = package;
