import * as React from 'react';

export interface IDialogueProps {
  title: string;
  label?: string;

  passive?: string;
  actions?: JSX.Element[] | JSX.Element;

  onClose?: () => void;
}

export const Dialogue: React.FC<IDialogueProps> = props => {
  return (
    <div className="dialogue">
      {props.onClose && <div className="close"></div>}
      {props.label && <div className="label">{props.label}</div>}
      <div className="title">{props.title}</div>
      <div className="content">{props.children}</div>
      {props.passive && <div className="footer">{props.passive}</div>}
      {props.actions && <div className="actions">{props.actions}</div>}
    </div>
  );
};
