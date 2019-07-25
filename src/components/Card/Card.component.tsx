import * as React from 'react';
import Status, { Statuses } from './Status.component';

export interface ICardProps {
  title: string;
  subtitle?: string;

  imgSrc?: string;

  status?: Statuses;
}

export const Card: React.FC<ICardProps> = props => {
  return (
    <div className="card">
      <div className="menu"></div>
      {props.imgSrc && (
        <img
          className="profile"
          src={props.imgSrc}
          alt="Card Profile Picture"
        />
      )}
      <div className="title">{props.title}</div>
      {props.subtitle && <div className="subtitle">{props.subtitle}</div>}
      {props.status && (
        <div className="footer">
          <Status status={props.status} />
        </div>
      )}
      {props.children && <div className="footer">{props.children}</div>}
    </div>
  );
};
