import React from 'react'
import classnames from 'classnames'

const ListAction = props => {
  const {className, children, cardListAction, collectionAction, onClick} = props
  const classes = classnames({
    'card-list__actions': cardListAction && !collectionAction,
    'collection__actions': !cardListAction && collectionAction
  }, className)
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}

ListAction.defaultProps = {
  onClick: () => {}
}

export default ListAction
