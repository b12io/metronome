import React from 'react'
import PropTypes from 'prop-types'
import { isNumber } from 'lodash'

/*
 * Using Collapse component as children inside another
 * Collapse may not give the expected results, as right
 * now it lacks the communication between parent and children
 * Collapse components.
 */
class Collapse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCollapsed: false,
      contentHeight: 'auto'
    }

    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  componentDidMount() {
    const { isCollapsed } = this.props
    this.setState({
      contentHeight: this.contentElement.clientHeight,
      isCollapsed
    })
  }

  toggleCollapse() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }

  render() {
    const { children, collapseLabel, expandLabel, collapseHeight } = this.props
    const collapseBodyHeight = {
      height: this.state.isCollapsed ? collapseHeight : this.state.contentHeight
    }
    if (!children) {
      return null
    }
    const longEnoughToCollapse =
      this.state.contentHeight === 'auto' ||
      (isNumber(this.state.contentHeight) &&
        this.state.contentHeight > collapseHeight)
    return (
      <div className="ds-collapse">
        <div
          className="ds-collapse__body"
          style={collapseBodyHeight}
          ref={(node) => {
            this.contentElement = node
          }}
        >
          {children}
        </div>
        {longEnoughToCollapse && (
          <div className="ds-collapse__action" onClick={this.toggleCollapse}>
            {this.state.isCollapsed ? expandLabel : collapseLabel}
          </div>
        )}
      </div>
    )
  }
}

Collapse.defaultProps = {
  collapseLabel: 'View less',
  expandLabel: 'View more',
  collapseHeight: 'auto',
  isCollapsed: false
}

Collapse.propTypes = {
  children: PropTypes.node,
  collapseLabel: PropTypes.string,
  expandLabel: PropTypes.string,
  isCollapsed: PropTypes.bool,
  collapseHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Collapse
