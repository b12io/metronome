import * as React from 'react'
import classnames from 'classnames'
import CardList from '../card-list/CardList.es6.js'
import { isNumber } from 'lodash'

class CollapsibleCardList extends React.Component {
  state = {
    activeIndex: -1
  }

  static defaultProps = {
    bordered: true
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (isNumber(nextProps.activeIndex) && nextProps.activeIndex >= 0) {
      return {
        activeIndex: nextProps.activeIndex
      }
    }
    return null
  }

  selectCardListIndex = (activeIndex) => {
    this.setState({
      activeIndex: activeIndex === this.state.activeIndex ? -1 : activeIndex
    })
  }

  render() {
    const { className, bordered, children } = this.props
    const { activeIndex } = this.state
    const childrenElements = React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        isActive: index === activeIndex,
        onSelect: () => this.selectCardListIndex(index)
      })
    })
    return (
      <div className={classnames('collapsible-card-list', className)}>
        <CardList bordered={bordered}>{childrenElements}</CardList>
      </div>
    )
  }
}

export default CollapsibleCardList
