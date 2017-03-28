'use strict';
var packagist = require('./packagist');
const icon = require('./icon.png');

const plugin = ({term, display, actions}) => {
  if (term.match('/^packagist/')) {
    let param = term.split(' ');
    packagist(term[1]).then(response => {
      response.each((item) => {
        display({
          icon,
          title: item.name,
          subtitle: item.description,
          onSelect: () => {
            actions.copyToClipboard(`composer install ${item.name}`)
            new Notification('Composer command copied!', {body: item.name, icon: icon})
          }
        })
      })
    })
  }
};

module.exports = {
  fn: plugin,
  name: 'Find package on packagist.org by tag',
  keyword: 'packagist'
}
