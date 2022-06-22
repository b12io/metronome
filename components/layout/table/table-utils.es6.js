import * as React from 'react'
import TableRow from './TableRow.es6.js'



const TABLE_HEAD_TAG = 'thead'

// Creates table `thead`, `tbody` or `tfoot` elements component.
// If partName is `thead` it passes extra property `partOf` to child component,
// so it could distinguish whether to use `th` or `td` tags.
export const makeTablePartComponent = (partName) => {
  const Component = partName
  return function TablePartComponent ({ children, ...otherProps }) {
    let newChildren
    if (partName === TABLE_HEAD_TAG) {
      newChildren = React.Children.map(children, child => {
        return React.cloneElement(child, {
          isInTableHeader: true
        })
      })
    }
    return (
      <Component {...otherProps}>
        {partName === TABLE_HEAD_TAG ? newChildren : children}
      </Component>
    )
  }
}
