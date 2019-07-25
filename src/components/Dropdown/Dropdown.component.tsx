import * as React from 'react';

const mobileRegex = new RegExp(
  'Android|webOS|iPhone|iPad|iPod|Blackberry|IEMobile|Opera Mini',
  'i',
);
function isMobile() {
  return mobileRegex.test(navigator.userAgent);
}

export interface IDropdownProps<T> {
  label: string;
  items: (keyof T)[];
  required?: boolean;

  selectedItem?: keyof T;
  onSelectItem: (t: keyof T) => void;
}

function MobileDropdown<T>(props: IDropdownProps<T>) {
  const [selected, setSelected] = React.useState<keyof T>();

  let realSelected = selected;
  if (props.selectedItem !== undefined) realSelected = props.selectedItem;

  const handleSelectItem = (x: keyof T) => {
    if (props.onSelectItem) props.onSelectItem(x);
    setSelected(x);
  };

  const handleSelectChange = (
    e: React.SyntheticEvent<HTMLSelectElement, Event>,
  ) => {
    handleSelectItem(e.currentTarget.value as keyof T);
  };

  return (
    <div className="dropdown">
      <label>
        {props.label}
        <select
          onSelect={handleSelectChange}
          required={props.required}
          value={realSelected && realSelected.toString()}
        >
          {props.items.map(x => (
            <option key={x.toString()} value={x.toString()}>
              {x}
            </option>
          ))}
        </select>
      </label>
      {props.required && <div className="required"></div>}
    </div>
  );
}

export function Dropdown<T>(props: IDropdownProps<T>) {
  const [selected, setSelected] = React.useState<keyof T>(props.items[0]);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (props.onSelectItem) props.onSelectItem(selected);
  }, [selected]);

  const handleWindowClick = () => {
    if (isOpen) setIsOpen(false);
  };

  React.useEffect(() => {
    window.addEventListener('click', handleWindowClick);
    return () => window.removeEventListener('click', handleWindowClick);
  });

  if (isMobile()) {
    return <MobileDropdown {...props} />;
  }

  const handleDropdownDrop = () => {
    setIsOpen(true);
  };

  const handleDropChange = (s: keyof T) => {
    setSelected(s);
  };

  if (isOpen) {
    return (
      <div className="desktop-dropdown is-open">
        {props.items.map(x => (
          <div key={x.toString()} onClick={() => handleDropChange(x)}>
            {x}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="desktop-dropdown" onClick={handleDropdownDrop}>
      <div className="closed">{selected}</div>
      <div className="arrow"></div>
    </div>
  );
}
