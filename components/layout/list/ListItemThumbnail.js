/* @flow */
import React from 'react'
import type { Node } from 'react'

type Props = {|
  children: Node,
  onClick?: SyntheticEvent<HTMLDivElement> => void
|}

function ListItemThumbnail ({ children, onClick }: Props) {
  return (
    <div
      className="card-list-item__thumbnail"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default ListItemThumbnail
