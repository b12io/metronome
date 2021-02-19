
import React from "react";
import classnames from "classnames";

type Props = {
  className?: string | {
    [key: string]: any;
  };
  imgSrc?: string;
  primaryText: string;
  secondaryText?: string;
  hasHover?: boolean;
  showIconOnly?: boolean;
  isActive?: boolean;
  onClick?: () => void;
};

function parseInitials(name) {
  const names = name.split(' ');
  let initials = names[0].substring(0, 1);

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1);
  }

  return initials;
}

export default function AvatarItem({
  className,
  imgSrc,
  primaryText,
  secondaryText,
  hasHover,
  showIconOnly,
  isActive,
  onClick
}: Props) {
  const avatarItemClasses = classnames('ds-avatar', {
    'ds-avatar--has-hover': hasHover,
    'ds-avatar--is-active': isActive
  }, className);

  const avatarItemAvatarClasses = classnames('ds-avatar__avatar', { 'ds-avatar__avatar--has-image': imgSrc });

  return <div className={avatarItemClasses} onClick={onClick}>
      <div className={avatarItemAvatarClasses} title={primaryText} style={imgSrc ? { backgroundImage: `url(${imgSrc})` } : null}>
        {!imgSrc && parseInitials(primaryText)}
      </div>
      {!showIconOnly && <div className="ds-avatar__text">
          <div className="ds-avatar__text-primary">{primaryText}</div>
          {secondaryText && <div className="ds-avatar__text-secondary">{secondaryText}</div>}
        </div>}
    </div>;
}