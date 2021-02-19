

import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

function BlockContent(props: Props) {
  return <div className="ds-content-block__body">
      {props.children}
    </div>;
}

export default BlockContent;