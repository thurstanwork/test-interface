import * as React from 'react';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import classNames from 'classnames';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  small?: boolean;
  icon?: IconName;
  iconPrefix?: IconPrefix;
}

export const Button: React.FunctionComponent<IButtonProps> = ({
  primary,
  secondary,
  small,
  icon,
  iconPrefix = 'fas',
  children,
  ...props
}) => {
  const buttonClass = classNames({
    button: true,
    'is-primary': primary || !secondary,
    'is-outlined': secondary,
    'is-small': small,
  });

  const iconClass = classNames(icon, {
    [iconPrefix]: !!icon,
  });

  return (
    <button className={buttonClass} {...props}>
      <span>{children}</span>
      {icon && (
        <span className="icon is-small">
          <i className={iconClass}></i>
        </span>
      )}
    </button>
  );
};
