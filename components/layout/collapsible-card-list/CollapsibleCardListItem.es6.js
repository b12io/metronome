// @flow
import * as React from 'react'
import classnames from 'classnames'

import ListItem from '../list/ListItem.es6.js'
import ListItemContent from '../list/ListItemContent.es6.js'

type Props = {
  collapsedLayout: string | React.Node,
  isActive?: boolean,
  className?: string | Object,
  children?: React.Node,
  onSelect: () => void
}

class CollapsibleCardListItem extends React.Component<Props> {
  static defaultProps = {
    isActive: false,
    onSelect: () => {}
  }
  render () {
    const { collapsedLayout, className, children, isActive, onSelect } = this.props
    return (
      <ListItem
        cardListItem
        className={classnames('collapsible-card-list__item', className)}
      >
        <ListItemContent onClick={onSelect}>
          <React.Fragment>
            <div className="collapsible-card-list__item-label">
              {collapsedLayout}
            </div>
            {isActive && (
              <div className="collapsible-card-list__item-content">
                {children}
              </div>
            )}
          </React.Fragment>
        </ListItemContent>
      </ListItem>
    )
  }
}

export default CollapsibleCardListItem
