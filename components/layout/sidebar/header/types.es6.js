/* @flow */
import type { Element, Node } from 'react'

export type HeaderQuickAction = {
  icon?: Element<'svg'>,
  action?: Node,
  actionLabel?: string,
  text?: string,
  hidden?: boolean,
  divider?: boolean,
  disabled?: boolean,
  onActionSelect?: () => any
}
