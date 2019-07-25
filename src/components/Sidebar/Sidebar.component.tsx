import * as React from 'react';
import classNames from 'classnames';

import { ISidebarHeaderProps, SidebarFooter } from './index';

export interface ISidebarProps {
  isDark?: boolean;
  footerCallback?: () => {};
  header?: React.FunctionComponent<ISidebarHeaderProps>;
}

export const Sidebar: React.FunctionComponent<ISidebarProps> = ({
  isDark = false,
  header = () => null,
  footerCallback = () => {},
  children,
}) => {
  const sidebarClass = classNames({
    sidebar: true,
    'is-dark': isDark,
  });

  return (
    <div className={sidebarClass}>
      {header}

      {children}

      <SidebarFooter footerCallback={footerCallback} />
    </div>
  );
};
