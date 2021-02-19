
import { Element } from "react";

export type HeaderQuickAction = {
  icon: Element<"svg">;
  text: string;
  hidden?: boolean;
  divider?: boolean;
  disabled?: boolean;
  onActionSelect?: () => any;
};