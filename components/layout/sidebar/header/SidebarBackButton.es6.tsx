
import React from "react";

import { HEADER_BACK_ICON_COLOR } from "./constants.es6";
import { Back } from "../../../Icons.es6";

type Props = {
  onClick(): void;
  hideText: boolean;
  text: string;
};

class SidebarBackButton extends React.Component<Props> {

  backButtonRef = React.createRef<HTMLDivElement>();

  static defaultProps = {
    hideText: false,
    text: 'Back'
  };

  handleClick = () => {
    if (this.backButtonRef.current) {
      this.backButtonRef.current.focus();
    }
    this.props.onClick();
  };

  render() {
    return <div className="ds-sidebar__header-back-button-container" onClick={this.handleClick} ref={this.backButtonRef} tabIndex="-1">
        <button type="button">
          <Back color={HEADER_BACK_ICON_COLOR} />
          {!this.props.hideText && <span className="ds-sidebar__header-back-text">{this.props.text}</span>}
        </button>
      </div>;
  }
}

export default SidebarBackButton;