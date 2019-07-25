import * as React from 'react';

export interface ISidebarFooterProps {
  footerCallback?: () => void;
}

export const SidebarFooter: React.FunctionComponent<ISidebarFooterProps> = ({
  footerCallback = () => {},
}) => {
  return (
    <div className="sidebar__footer">
      <div onClick={footerCallback} className="sidebar__button_collapse">
        <i className="fas fa-chevron-left" />
      </div>
    </div>
  );
};
