import React, {Children} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ListItemContent from './ListItemContent.es6.js'

const ListItem = props => {
  const {
    className,
    cardListItem,
    collectionListItem,
    listItemRef,
    dragStyles,
    onClick,
    md,
    clickable,
    ...otherProps} = props

  const classes = classnames({
    'card-list-item': cardListItem,
    'md': md,
    'collection-item': collectionListItem,
    'collection-item--clickable': clickable,
    'card-list-item--draggable': cardListItem && dragStyles,
    'collection-item--draggable': collectionListItem && dragStyles
  }, className)

  const children = Children.map(otherProps.children, child => {
    if (typeof child === 'string') {
      return <ListItemContent>{child}</ListItemContent>
    }
    return child
  })

  return (
    <div
      className={classes}
      ref={listItemRef}
      onClick={onClick}
      style={dragStyles}
    >
      {children}
    </div>
  )
}

ListItem.defaultProps = {
  md: false
}

ListItem.propTypes = {
  children: PropTypes.node,
  cardListItem: PropTypes.bool,
  collectionListItem: PropTypes.bool,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
  listItemRef: PropTypes.func,
  dragStyles: PropTypes.any,
  md: PropTypes.bool
}

export default ListItem
