
import * as React from 'react'
import classnames from 'classnames'


class Nav extends React.Component {
  static defaultProps = {
    bordered: false,
    className: ''
  }

  render() {
    return (
      <div className={classnames({
        'ds-nav': true,
        'ds-nav--bordered': this.props.bordered
      }, this.props.className)}>
        {this.props.children}
      </div>
    )
  }
}

export default Nav
