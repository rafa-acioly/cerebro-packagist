'use strict';
var packagist = require('./packagist');
const icon = require('./icon.png');

const plugin = ({term, display, actions}) => {
  if (!term.match(/^packagist/)) { return; }
  let param = term.split(' ')[1]
  packagist(param).then((item) => {
    item.results.forEach(pack => {
      display({
        icon,
        title: pack.name,
        subtitle: pack.description,
        onSelect: () => {
          actions.open(pack.url)
          actions.copyToClipboard(`composer install ${pack.name}`)
          new Notification('Composer command copied!', {body: `composer install ${pack.name}`, icon: icon})
        },
        getPreview: () => {
          return `<h1>${pack.name}</h1>
          <h2>${pack.description}</h2>
          <small>Downloads: ${pack.downloads}</small>`
        }
      })
    })
  })
};

module.exports = {
  fn: plugin,
  name: 'Find package on packagist.org by tag',
  keyword: 'packagist'
}
