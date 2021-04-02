import React from 'react'
import classnames from 'classnames'

class Switch extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: props.selected,
      buttons: this.updateButtons(props.children, props.selected)
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      selected: nextProps.selected,
      buttons: this.updateButtons(nextProps.children, nextProps.selected)
    })
  }

  updateButtons (children, selected) {
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        active: index === selected,
        onClick: () => {
          this.props.onChange(index)
        }
      })
    })
  }

  render () {
    return (
      <div className={classnames({
        'buttons-group': true,
        'buttons-group--block': this.props.block
      })}
      >
        {this.state.buttons}
      </div>)
  }
}

Switch.defaultProps = {
  children: [],
  block: false,
  selected: -1,
  onChange: () => {}
}

export default Switch
