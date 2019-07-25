import * as React from 'react';
import classNames from 'classnames';

export interface ISidebarHeaderProps {
  isDark?: boolean;
  imgSrc?: string;
  imgAlt?: string;
  title?: string;
  subtitle?: string;
}

export const SidebarHeader: React.FunctionComponent<ISidebarHeaderProps> = ({
  isDark = false,
  imgSrc = 'https://bulma.io/images/placeholders/96x96.png',
  imgAlt = 'Sidebar Avatar',
  title,
  subtitle,
}) => {
  const sidebarHeaderClass = classNames('sidebar__header', {
    'is-dark': isDark,
  });

  return (
    <div className={sidebarHeaderClass}>
      <figure className="image is-48x48">
        <img className="is-rounded" src={imgSrc} alt={imgAlt} />
      </figure>
      <div className="media-content">
        {title && <p className="title is-6 overflow-elipsis">{title}</p>}
        {subtitle && (
          <p className="subtitle is-7 overflow-elipsis">{subtitle}</p>
        )}
      </div>
    </div>
  );
};
