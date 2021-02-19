
import React from "react";
import { pick, isEqual } from "lodash";

class BaseComponent<P extends Object, S extends Object | null | undefined = void> extends React.Component<P, S> {

  propsToTrack: Array<string> = [];

  shouldComponentUpdate(nextProps: P, nextState: S) {
    if (this.propsToTrack.length === 0) {
      return true;
    }

    const before = pick(this.props, this.propsToTrack);
    const after = pick(nextProps, this.propsToTrack);

    return !isEqual(before, after) || !isEqual(this.state, nextState);
  }
}

export default BaseComponent;