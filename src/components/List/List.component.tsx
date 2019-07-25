import * as React from 'react';
import { ITableHeader, TableRow } from '../Table/Table.component';
import { Checkbox } from '../Checkbox/Checkbox.component';

export interface IListProps<T> {
  headers: ITableHeader<T>[];
  rows: TableRow<T>[];

  isTall?: boolean;
  onRowsSelected?: (a: (number | string)[]) => void;
}

export function List<T>(props: IListProps<T>) {
  const classes = ['list'];
  if (props.isTall) classes.push('is-tall');
  if (props.onRowsSelected) classes.push('is-selectable');

  const [activeRows, setActiveRows] = React.useState<(number | string)[]>([]);

  React.useEffect(() => {
    if (props.onRowsSelected) props.onRowsSelected(activeRows);
  }, [activeRows]);

  return (
    <div className={classes.join(' ')}>
      <div className="is-header">
        {props.onRowsSelected && <div></div>}
        {props.headers.map(x => (
          <div key={x.key.toString()}>{x.name}</div>
        ))}
      </div>
      {props.rows.map(x => {
        const classes = [] as string[];
        if (activeRows.indexOf(x.key) !== -1) classes.push('is-selected');

        const k = x.key;
        const handleActive = (b: boolean) => {
          if (b) {
            if (activeRows.indexOf(k) === -1)
              setActiveRows(activeRows.concat(k));
          } else {
            if (activeRows.indexOf(k) !== -1) {
              setActiveRows(activeRows.filter(x => x !== k));
            }
          }
        };

        return (
          <div key={x.key} className={classes.join(' ')}>
            {props.onRowsSelected && (
              <div>
                <Checkbox
                  label=""
                  value={x.active || activeRows.indexOf(k) !== -1}
                  onChange={handleActive}
                />
              </div>
            )}
            {props.headers.map(y => (
              <div key={y.key.toString()}>{x[y.key]}</div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
