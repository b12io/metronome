
import React from "react";
import { Node } from "react";

type Props = {
  children: Node;
  onClick?: (arg0: React.SyntheticEvent<HTMLDivElement>) => void;
};

function ListItemThumbnail({
  children,
  onClick
}: Props) {
  return <div className="card-list-item__thumbnail" onClick={onClick}>
      {children}
    </div>;
}

export default ListItemThumbnail;