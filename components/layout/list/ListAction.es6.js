import React from 'react'
import PropTypes from 'prop-types'
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

ListAction.propTypes = {
  children: PropTypes.node,
  cardListAction: PropTypes.bool,
  collectionAction: PropTypes.bool,
  onClick: PropTypes.func
}

export default ListAction
