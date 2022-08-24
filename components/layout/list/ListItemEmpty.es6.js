import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ListItemEmpty = (props) => {
  const { label, className } = props
  const classes = classnames('collection__items-empty', className)
  return <div className={classes}>{label}</div>
}

ListItemEmpty.propTypes = {
  label: PropTypes.string
}

export default ListItemEmpty
