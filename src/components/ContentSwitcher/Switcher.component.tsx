import * as React from 'react';

export interface ISwitcherProps<T> {
  items: (keyof T)[];

  selectedItem?: keyof T;
  onSelectItem: (t: keyof T) => void;
}

export function Switcher<T>(props: ISwitcherProps<T>) {
  const [selected, setSelected] = React.useState<keyof T>();

  let realSelected = selected;
  if (props.selectedItem !== undefined) realSelected = props.selectedItem;

  const handleSelectItem = (x: keyof T) => {
    if (props.onSelectItem) props.onSelectItem(x);
    setSelected(x);
  };

  return (
    <div className="switcher">
      {props.items.map(x => {
        if (realSelected === x)
          return (
            <div
              key={x.toString()}
              className="selected"
              onClick={() => handleSelectItem(x)}
            >
              {x}
            </div>
          );
        return (
          <div key={x.toString()} onClick={() => handleSelectItem(x)}>
            {x}
          </div>
        );
      })}
    </div>
  );
}
