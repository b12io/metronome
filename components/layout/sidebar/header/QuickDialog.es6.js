import React from 'react'
import classnames from 'classnames'

function QuickDialog ({ title, body, buttons, onButtonClicked }) {
  return (<div className="ds-quick-actions ds-quick-actions--controls">
    <div className="ds-quick-actions__header">{title}</div>
    {body}
    {buttons.length > 0 && <div className="ds-quick-actions__actions">
      {buttons.map((button, index) => <button
        disabled={button.disabled}
        className={classnames({
          button: true,
          'button--sm': true,
          'button--primary': button.primary
        })}
        onClick={() => {
          onButtonClicked(index)
        }}
        key={button.label}
      >{button.label}</button>)}
    </div>}
  </div>)
}

QuickDialog.defaultProps = {
  title: '',
  body: null,
  buttons: [],
  onButtonClicked: () => {}
}

export default QuickDialog
