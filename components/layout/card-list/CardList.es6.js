// 

import React from 'react'
import classnames from 'classnames'



class CardList extends React.Component {
  static defaultProps = {
    bordered: false,
    clickable: true
  }

  render () {
    const styles = classnames({
      'card-list': true,
      'card-list--bordered': this.props.bordered,
      'card-list--is-clickable': this.props.clickable
    }, this.props.className)

    return (<div className={styles}>{this.props.children}</div>)
  }
}

export default CardList
