
import * as React from "react";
import { get } from "lodash";
import Sidebar from "./Sidebar.es6";

type HandleScroll = (e: Object) => void;
type Props = {
  breakpoint: number;
  children(arg0: {isScrollingDown: boolean;handleScroll: HandleScroll;}): React$Element<typeof Sidebar>;
};

type State = {
  isScrollingDown: boolean;
  lastKnownScrollPosition: number;
};

class SidebarScroll extends React.Component<Props, State> {

  state = {
    isScrollingDown: false,
    lastKnownScrollPosition: 0
  };

  static defaultProps = {
    breakpoint: 55
  };

  // TODO(bryan): Figure out better way to type event.
  handleScroll = (e: Object) => {
    if (get(e, 'target.scrollTop') === undefined) {
      return;
    }

    const {
      scrollTop
    } = e.target;
    this.setState(state => ({
      isScrollingDown: scrollTop > this.props.breakpoint && scrollTop > state.lastKnownScrollPosition,
      lastKnownScrollPosition: scrollTop
    }));
  };

  render() {
    return this.props.children({
      isScrollingDown: this.state.isScrollingDown,
      handleScroll: this.handleScroll
    });
  }
}

export default SidebarScroll;