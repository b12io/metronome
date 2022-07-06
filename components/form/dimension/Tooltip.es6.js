import React from 'react'

import Info from '../../../components/layout/info/Info.es6.js'
import { InfoCircle } from '../../../components/Icons.es6.js'

export default function Tooltip ({ help }) {
  if (!help) {
    return null
  }

  return (
    <div className="ds-form-input-dimension__tooltip">
      <Info icon={InfoCircle} text={help} />
    </div>
  )
}
