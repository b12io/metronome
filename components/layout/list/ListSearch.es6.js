import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Search } from '../../Icons.es6.js'

const ListSearch = (props) => {
  const {
    className,
    placeholder,
    cardSearch,
    collectionSearch,
    onInputChange,
    onSearchFocus,
    onSearchBlur,
    value,
    focusSearch
  } = props
  const classes = classnames(
    {
      'card-list__search': cardSearch && !collectionSearch,
      collection__search: !cardSearch && collectionSearch,
      'collection__search--focused': focusSearch
    },
    className
  )
  return (
    <div className={classes}>
      <Search color="#ccc" />
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

ListSearch.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  cardSearch: PropTypes.bool,
  collectionSearch: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
  onSearchFocus: PropTypes.func,
  onSearchBlur: PropTypes.func,
  focusSearch: PropTypes.bool
}

export default ListSearch
