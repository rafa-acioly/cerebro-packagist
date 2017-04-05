'use strict';
import React from 'react'
import Preview from './preview'
import packagist from './packagist'

const icon = require('./icon.png');

const plugin = ({term, display, actions}) => {
  if (!term.match(/^packagist/)) { return; }
  let param = term.split(' ')[1]
  packagist(param).then((item) => {
    item.results.forEach(pack => {
      display({
        icon,
        title: pack.name,
        onSelect: () => {
          actions.open(pack.url)
          actions.copyToClipboard(`composer install ${pack.name}`)
          new Notification('Composer command copied!', {body: `composer require ${pack.name}`, icon: icon})
        },
        getPreview: () => <Preview packinfo={pack} />
      })
    })
  })
};

module.exports = {
  fn: plugin,
  name: 'Find package on packagist.org by tag',
  keyword: 'packagist'
}
