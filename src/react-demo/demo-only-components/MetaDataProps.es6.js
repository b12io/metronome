/* eslint-disable */
import React from 'react'

function MetaDataProps ({ children }) {
  return (
    <table className="ds-table">
      <thead>
        <tr>
          <th width="14%">Prop</th>
          <th width="14%">Values</th>
          <th width="14%">Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

function MetaDataPropsItem ({ property, value, defaultValue = '-', description}) {
  return (
    <tr>
      <td>{property}</td>
      <td>{value.split(',').map((v, i) => <div key={i}><code>{v}</code></div>)}</td>
      <td><code>{defaultValue}</code></td>
      <td>{description}</td>
    </tr>
  )
}

export { MetaDataProps, MetaDataPropsItem }
