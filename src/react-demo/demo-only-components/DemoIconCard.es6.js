import React from 'react'
import PropTypes from 'prop-types'

// TODO(chyngyz): Add clipboard.js support

function DemoIconCard({ children, onCopyClick, label }) {
  return (
    <div className="icon-card">
      <div className="icon-card__icon">{children}</div>
      <div className="icon-card__title">{label}</div>
      {/* <button
        onClick={onCopyClick}
        className="icon-card__action js-copy-to-clipboard"
        title="Copy SVG code"
        data-clipboard-text="<svg width=&quot;16&quot; height=&quot;16&quot; viewBox=&quot;0 0 16 16&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><path d=&quot;M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z&quot; fill-rule=&quot;nonzero&quot; fill=&quot;#766CFF&quot;/></svg>">
        <span className="fa fa-clipboard"></span>
      </button> */}
    </div>
  )
}

DemoIconCard.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
  onCopyClick: PropTypes.func
}

export default DemoIconCard
