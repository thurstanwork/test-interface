import * as React from 'react';

export interface ICheckboxProps {
  label: string;

  disabled?: boolean;

  value?: boolean;
  onChange?: (b: boolean) => void;
}

export const Checkbox: React.FC<ICheckboxProps> = props => {
  const [checked, setChecked] = React.useState(false);

  let realValue = checked;
  if (props.value !== undefined) realValue = props.value;

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const b = e.currentTarget.checked;

    if (props.disabled) return;

    if (props.onChange) props.onChange(b);
    setChecked(b);
  };

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={realValue}
        onChange={handleClick}
        disabled={props.disabled}
      />
      {props.label}
    </label>
  );
};
