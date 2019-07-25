import * as React from 'react';

export type Statuses = 'success' | 'warning' | 'error';
function statusToText(s: Statuses) {
  switch (s) {
    case 'success':
      return 'Running';
    case 'warning':
      return 'Degraded';
    case 'error':
      return 'Failed';
  }
}

export interface IStatusProps {
  status: Statuses;
  statusText?: string;
}

const Status: React.FC<IStatusProps> = props => {
  let sText = 'Unknown';
  if (props.statusText) sText = props.statusText;
  else if (props.status) sText = statusToText(props.status);
  return <div className={`status-${props.status}`}>{sText}</div>;
};

export default Status;
