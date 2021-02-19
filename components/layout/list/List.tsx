import React from 'react'
import classnames from 'classnames'

const List = props => {
  const {className, children, cardList, collectionList, listRef} = props
  const classes = classnames({
    'card-list__items': cardList && !collectionList,
    'collection__items': !cardList && collectionList
  }, className)
  return (
    <div
      className={classes}
      ref={listRef}>
      {children}
    </div>
  )
}

export default List
