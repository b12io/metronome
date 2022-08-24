import React from 'react'

import Title from '../panel/title/Title.es6.js'
import Button from '../../form/button/Button.es6.js'

const YES = 'yes'
const NO = 'no'

class CardListConfirmation extends React.Component {
  static defaultProps = {
    defaultAction: YES
  }

  handleSelectChoice = (choice) => {
    return () => {
      if (this.props.onClick) {
        this.props.onClick(choice)
      }
    }
  }

  render() {
    return (
      <div className="card-list__confirmation">
        <Title
          label={this.props.title}
          help={this.props.help}
          icon={this.props.icon}
        />

        <div className="card-list__confirmation-actions">
          {this.props.no && (
            <Button
              label={this.props.no}
              primary={this.props.defaultAction === NO}
              onClick={this.handleSelectChoice(false)}
            />
          )}
          {this.props.yes && (
            <Button
              label={this.props.yes}
              primary={this.props.defaultAction === YES}
              onClick={this.handleSelectChoice(true)}
            />
          )}
        </div>
      </div>
    )
  }
}

export default CardListConfirmation
