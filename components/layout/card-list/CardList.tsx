

import React from "react";
import classnames from "classnames";

import { Node } from "react";

type Props = {
  bordered: boolean;
  clickable: boolean;
  children?: Node;
  className?: string | {
    [key: string]: any;
  };
};

class CardList extends React.Component<Props> {

  static defaultProps = {
    bordered: false,
    clickable: true
  };

  render() {
    const styles = classnames({
      'card-list': true,
      'card-list--bordered': this.props.bordered,
      'card-list--is-clickable': this.props.clickable
    }, this.props.className);

    return <div className={styles}>{this.props.children}</div>;
  }
}

export default CardList;