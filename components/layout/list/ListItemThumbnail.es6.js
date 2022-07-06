import React from 'react'

function ListItemThumbnail ({ children, onClick }) {
  return (
    <div className="card-list-item__thumbnail" onClick={onClick}>
      {children}
    </div>
  )
}

export default ListItemThumbnail
