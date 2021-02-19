
import * as React from "react";
import classnames from "classnames";

import ListItem from "../list/ListItem.es6";
import ListItemContent from "../list/ListItemContent.es6";

type Props = {
  collapsedLayout: string | React.ReactNode;
  isActive?: boolean;
  className?: string | {
    [key: string]: any;
  };
  children?: React.ReactNode;
  onSelect: () => void;
};

class CollapsibleCardListItem extends React.Component<Props> {

  static defaultProps = {
    isActive: false,
    onSelect: () => {}
  };
  render() {
    const {
      collapsedLayout,
      className,
      children,
      isActive,
      onSelect
    } = this.props;
    return <ListItem cardListItem className={classnames('collapsible-card-list__item', className)}>
        <ListItemContent onClick={onSelect}>
          <React.Fragment>
            <div className="collapsible-card-list__item-label">
              {collapsedLayout}
            </div>
            {isActive && <div className="collapsible-card-list__item-content">
                {children}
              </div>}
          </React.Fragment>
        </ListItemContent>
      </ListItem>;
  }
}

export default CollapsibleCardListItem;