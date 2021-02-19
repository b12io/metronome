
import React from "react";
import { Node } from "react";

type Props = {
  children: (isOpen: boolean, onToggle: () => void, onBlur: () => void) => Node;
  isOpen: boolean;
};

type State = {
  isOpen: boolean;
};

class Toggle extends React.Component<Props, State> {

  state = { isOpen: this.props.isOpen };

  static defaultProps = {
    isOpen: false
  };

  handleBlur = () => {
    this.setState({ isOpen: false });
  };

  handleToggle = () => {
    this.setState(({
      isOpen
    }) => ({
      isOpen: !isOpen
    }));
  };

  render() {
    return this.props.children(this.state.isOpen, this.handleToggle, this.handleBlur);
  }
}

export default Toggle;