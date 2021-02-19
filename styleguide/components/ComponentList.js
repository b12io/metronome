/* @flow */
import React, { Fragment } from 'react'
import type { Node } from 'react'

type ComponentListSectionProps = {|
  href: string,
  visibleName: string,
  selected: boolean,
  slug: string,
  content: Node
|}

const ComponentListSection = ({
  href, 
  visibleName,
  content,
  selected
}: ComponentListSectionProps) => {
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

type ComponentListProps = {|
  href: string,
  items: ComponentListSectionProps[]
|}

const ComponentList = ({
  items
}: ComponentListProps) => {
  return (
    <Fragment>
      {items.map(item => (
        <ComponentListSection key={item.slug} {...item} />
      ))}
    </Fragment>
  )
}

export default ComponentList
