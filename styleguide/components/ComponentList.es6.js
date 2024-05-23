import React, { Fragment } from 'react'


const ComponentListSection = ({
  href,
  visibleName,
  content,
  selected
}) => {
  return (
    <Fragment>
      {content
        ? (
          <Fragment>
            <li className="nav__header">{visibleName}</li>
            {content}
          </Fragment>
        )
        : (
          <li key={href}>
            <a href={href}>{visibleName}</a>
          </li>
        )}
    </Fragment>
  )
}


const ComponentList = ({
  items
}) => {
  return (
    <Fragment>
      {items.map((item, index) => (
        <ComponentListSection key={`${item.slug}-${index}`} {...item} />
      ))}
    </Fragment>
  )
}

export default ComponentList
