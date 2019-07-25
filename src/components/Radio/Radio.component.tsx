import * as React from 'react';

const radioNames: { [key: string]: boolean } = {};
function generateName() {
  let s = '';
  const possible = 'QWERTYUIOPASDFGHJKLZXCVBNM123456789';
  do {
    s = '';
    for (let i = 0; i < 10; i++) {
      s += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  } while (radioNames[s]);
  radioNames[s] = true;
  return s;
}

export interface IRadioItem {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface IRadioProps {
  items: IRadioItem[];

  horizontal?: boolean;

  selectedItem?: string;
  onItemSelect?: (x: string) => void;
}

export const Radio: React.FC<IRadioProps> = props => {
  const [name, setName] = React.useState('');

  const classes = ['radios'];
  if (props.horizontal) classes.push('horizontal');

  React.useEffect(() => {
    setName(generateName());
  }, []);

  return (
    <div>
      <form className={classes.join(' ')}>
        {props.items.map(x => {
          let checked = undefined;
          if (props.selectedItem !== undefined) {
            checked = false;
            if (props.selectedItem === x.id) checked = true;
          }

          return (
            <label key={x.id} htmlFor={`${name}_${x.id}`} className="radio">
              <input
                id={`${name}_${x.id}`}
                type="radio"
                name={name}
                disabled={x.disabled}
                checked={checked}
                onChange={e => props.onItemSelect && props.onItemSelect(x.id)}
              />
              {x.label}
            </label>
          );
        })}
      </form>
    </div>
  );
};
