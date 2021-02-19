
import * as React from "react";

type Props = {
  children: React.ReactNode;
  handleScroll?: (e: Object) => void;
};

function SidebarBody({
  children,
  handleScroll
}: Props) {
  return <div className="ds-sidebar__body" onScroll={e => handleScroll && handleScroll(e)}>
      {children}
    </div>;
}

SidebarBody.defaultProps = {
  children: []
};

export default SidebarBody;