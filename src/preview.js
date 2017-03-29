import React, { Component, PropTypes } from 'react'
import style from 'bulma/css/bulma.css'

export default class Preview extends Component {
  render() {
    let cardContent = 'card-content'
    let cardFooterItem = 'card-footer-item'
    let cardFooter = 'card-footer'
    return (
      <div className={style.card}>
        <div className={cardContent}>
          <p className={style.title}>
            {this.props.packinfo.description}
          </p>
          <p className={style.subtitle}>
            {this.props.packinfo.name}
          </p>
          <small>Downloads: {this.props.packinfo.downloads}</small>
        </div>
        <footer className={cardFooter}>
          <p className={cardFooterItem}>
            <span>
              View on <a href="{this.props.packinfo.url}">Packagist</a>
            </span>
          </p>
        </footer>
      </div>
    )
  }
}

Preview.PropTypes = {
  packinfo: PropTypes.object.isRequired
}