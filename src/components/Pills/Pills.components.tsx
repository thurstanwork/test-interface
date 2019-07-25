import * as React from 'react';

export type PillType = 'error' | 'warning' | 'ok' | 'good';
export interface IPillsProps {
  status: PillType;
}

export const Pill: React.FC<IPillsProps> = props => {
  return <span className={`pill-${props.status}`}>{props.children}</span>;
};

export const CriticalPill = () => <Pill status="error">Critical</Pill>;
export const WarningPill = () => <Pill status="warning">Warning</Pill>;
export const FairPill = () => <Pill status="ok">Fair</Pill>;
export const GoodPill = () => <Pill status="good">Good</Pill>;
