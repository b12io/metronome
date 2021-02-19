/* @flow */
import React from 'react'
import classnames from 'classnames'

type Props = {|
  blurAction: () => void,
  selectAction: () => void,
  isOpen: boolean,
  onClick: () => void,
  value?: string
|}

class DropdownStyles extends React.Component<Props> {
  static defaultProps = {
    blurAction: () => {},
    isOpen: false,
    onClick: () => {}
  }

  render () {
    const { blurAction, isOpen, onClick, selectAction, value } = this.props

    return (
      <div className={classnames({
        'ds-form-control-select': true,
        'ds-form-control-select--focused': isOpen
      })}>
        <div
          className={classnames({
            'ds-form-control': true,
            'ds-form-control-select__toggle': true,
            'ds-form-control-select__toggle--empty': !value
          })}
          tabIndex="-1"
          onClick={() => { selectAction(); onClick() }}
          onBlur={blurAction}
        >
          {value || 'Choose date'}
        </div>
      </div>
    )
  }
}

export default DropdownStyles
