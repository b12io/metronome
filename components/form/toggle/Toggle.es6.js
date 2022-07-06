import React from 'react'

class Toggle extends React.Component {
  state = { isOpen: this.props.isOpen }

  static defaultProps = {
    isOpen: false
  }

  handleBlur = () => {
    this.setState({ isOpen: false })
  }

  handleToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }))
  }

  render () {
    return this.props.children(
      this.state.isOpen,
      this.handleToggle,
      this.handleBlur
    )
  }
}

export default Toggle
