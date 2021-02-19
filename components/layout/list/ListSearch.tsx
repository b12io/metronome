import React from 'react'
import classnames from 'classnames'
import {Search} from '../../Icons'

const ListSearch = props => {
  const {
    className, placeholder, cardSearch, collectionSearch,
    onInputChange, onSearchFocus, onSearchBlur, value, focusSearch
  } = props
  const classes = classnames({
    'card-list__search': cardSearch && !collectionSearch,
    'collection__search': !cardSearch && collectionSearch,
    'collection__search--focused': focusSearch
  }, className)
  return (
    <div className={classes}>
      <Search color="#ccc"/>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onFocus={onSearchFocus}
        onBlur={onSearchBlur}
        onChange={(e) => {
          onInputChange(e.target.value)
        }}
      />
    </div>
  )
}

export default ListSearch
