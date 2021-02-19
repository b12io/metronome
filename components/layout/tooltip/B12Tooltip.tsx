
import React from "react";
import { Tooltip, UncontrolledTooltip } from "reactstrap";

import { Element, Node } from "react";

type children = Element<any> | (arg0: {tooltip: Element<typeof UncontrolledTooltip | typeof Tooltip>;target: string;}) => Node;

type Props = {
  children: children;
  innerClassName: string;
  modifiers: {offset: {offset: string;};};
  onClick?: (event: React.SyntheticEvent<HTMLDivElement>) => void;
  placement: string;
  showTapToDismissText: boolean;
  tapToDismiss: boolean;
  target: string;
  text: string | React$Element<"ul" | "ol">;
  controlled: boolean;
  // Optional props for controlled Tooltip:
  // boolean to control the state of the tooltip
  isOpen?: boolean;
  hideArrow?: boolean;
  // callback for toggling isOpen in the controlling component
  toggle?: () => void;
  // Where to inject the popper DOM node, default to body
  container?: string | () => void | Element;
  // optionally override show/hide delays - default { show: 0, hide: 250 }
  delay?: number | {show: number;hide: number;};
  className?: string;
  // Apply class to the inner-tooltip
  innerClassName?: string;
  // optionally hide tooltip when hovering over tooltip content - default true
  autohide?: boolean;
  // use a simplified css-based tooltip (useful when used within a button)
  simple?: boolean;
};

type State = {
  hasError: boolean;
};

class B12Tooltip extends React.Component<Props, State> {

  static defaultProps = {
    controlled: false,
    innerClassName: 'ds-tooltip',
    modifiers: { offset: { offset: '0, 7' } },
    placement: 'top',
    showTapToDismissText: false,
    tapToDismiss: false
  };

  state = {
    hasError: false
  };

  currentAttempts = 0;

  componentDidCatch() {
    this.setState({ hasError: true }, () => {
      if (this.currentAttempts < 5) {
        this.currentAttempts++;
        this.setState({ hasError: false });
      }
    });
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    const {
      children,
      target,
      text,
      controlled,
      showTapToDismissText,
      tapToDismiss,
      onClick,
      ...tooltipOptions
    } = this.props;
    if (this.props.simple) {
      /**
       * B12Tooltip is constructed using `div`s and thus cannot be used inside buttons.
       * This span with its class is created to address that issue.
      */
      const innerClass = `ds-tooltip__simple--${this.props.placement}`;
      return <span className="ds-tooltip__simple">
          {children}
          <span className={innerClass}>{text}</span>
        </span>;
    }
    const tapHelper = showTapToDismissText && <div className="ds-tooltip__tap-help">
        tap to dismiss
      </div>;
    const content = tapToDismiss ? <div onClick={onClick}>
        {text}
        {tapHelper}
      </div> : text;

    const tooltip = controlled ? <Tooltip {...tooltipOptions} target={target}>
        {content}
      </Tooltip> : <UncontrolledTooltip {...tooltipOptions} target={target}>
        {content}
      </UncontrolledTooltip>;

    return children({ tooltip, target });
  }
}

export default B12Tooltip;