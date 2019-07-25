import * as React from 'react';
import classNames from 'classnames';

export interface ISidebarButtonProps {
  label: string;
  isDark?: boolean;
  isActive?: boolean;
  isOpen?: boolean;
  isSecondary?: boolean;
  onLinkClick?: () => void;
  children?: React.ReactElement<ISidebarButtonProps>[];
}

export const SidebarButton: React.FunctionComponent<ISidebarButtonProps> = ({
  label,
  isDark = false,
  isActive = false,
  isOpen = false,
  isSecondary = false,
  onLinkClick = () => {},
  children = [],
}) => {
  const [open, setOpen] = React.useState(isOpen);

  const sidebarButtonClass = classNames('sidebar__button', {
    'is-dark': isDark,
    'is-active': isActive,
    'is-open': open,
    'is-secondary': isSecondary,
  });

  return (
    <>
      <div className={sidebarButtonClass}>
        <span onClick={onLinkClick}>{label}</span>
        {children.length > 0 && !isSecondary && (
          <i onClick={() => setOpen(!open)} className="fas fa-chevron-down" />
        )}
      </div>
      {open && children}
    </>
  );
};
