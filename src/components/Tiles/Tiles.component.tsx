import * as React from 'react';

export type TilesType = 'selectable' | 'expandable';
export interface ITilesProps {
  type?: TilesType;
  onActive?: () => void;
}

export const Tile: React.FC<ITilesProps> = props => {
  const [active, setActive] = React.useState(false);

  const classes = ['tile'];
  if (props.type === 'expandable') {
    classes.push('is-expandable');
    if (active) classes.push('is-expanded');
  }
  if (props.type === 'selectable') {
    classes.push('is-selectable');
    if (active) classes.push('is-selected');
  }

  const handleClick = () => {
    setActive(!active);
    if (props.onActive) props.onActive();
  };

  return (
    <div className={classes.join(' ')} onClick={handleClick}>
      {props.children}
    </div>
  );
};
