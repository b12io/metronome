import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ListItemAction = ({children, className, cardListItemAction, collectionListItemAction, clickable, ...otherProps}) => {
  const classes = classnames({
    'card-list-item__action': cardListItemAction,
    'collection-item__action': collectionListItemAction,
    'card-list-item__action--clickable': clickable,
  }, className)
  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  )
}

ListItemAction.propTypes = {
  children: PropTypes.node,
  cardListItemAction: PropTypes.bool,
  collectionListItemAction: PropTypes.bool,
  clickable: PropTypes.bool
}

export default ListItemAction
