import * as React from 'react';
import { Button } from '../Button/Button.component';
import { Checkbox } from '../Checkbox/Checkbox.component';

const defaultTableMaxRecords = 25;

export interface ITableHeader<T> {
  name: string;
  isRowHeader?: boolean;
  key: keyof T;
}

export type TableRow<T> = {
  key: string | number;
  selected?: boolean;
  active?: boolean;
} & T;

export interface ITableProps<T> {
  headers: ITableHeader<T>[];
  rows: TableRow<T>[];
  onRowSelected?: (x: string | number) => void;

  isCompact?: boolean;
  isStriped?: boolean;

  pageSize?: number;
  onLoadMore?: () => Promise<void>;
  isPaged?: boolean;

  multiselect?: boolean;
  selectedRows?: (a: (string | number)[]) => void;
}

export function Table<T>(props: ITableProps<T>): React.ReactElement {
  const classes = ['table'];
  if (props.isCompact) classes.push('is-compact');
  if (props.isStriped) classes.push('is-striped');

  let pageSize = defaultTableMaxRecords;
  if (props.pageSize !== undefined) pageSize = props.pageSize;
  if (props.isPaged === false) pageSize = 0;

  const generatePages = (): { [key: number]: TableRow<T>[] } => {
    const pages: { [key: number]: TableRow<T>[] } = {};
    let index = 0;
    let pageNum = 1;
    while (index < props.rows.length) {
      const currentGroup = [] as TableRow<T>[];
      if (pageSize === 0) {
        for (let i = 0; i < props.rows.length; i++) {
          currentGroup.push(props.rows[i]);
        }
      } else {
        for (let i = 0; i < pageSize; i++) {
          if (props.rows.length <= i + index) continue;
          currentGroup.push(props.rows[i + index]);
        }
      }
      index += currentGroup.length;
      pages[pageNum++] = currentGroup;
    }
    return pages;
  };

  const [loading, setLoading] = React.useState<boolean>(false);
  const onLoadMore = (): void => {
    if (props.onLoadMore) {
      setLoading(true);
      props
        .onLoadMore()
        .then((): void => setLoading(false))
        .catch((): void => setLoading(false));
    }
  };

  const [pages, setPages] = React.useState<{ [key: number]: TableRow<T>[] }>(
    {},
  );
  const [activePage, setActivePage] = React.useState(1);
  React.useEffect(() => {
    setPages(generatePages());
    if (pages && pages[activePage] === undefined) setActivePage(1);
  }, [props.rows]);

  const handlePrevClick = () => {
    if (activePage > 1) setActivePage(activePage - 1);
  };

  const handleNextClick = () => {
    if (activePage < Object.keys(pages).length) setActivePage(activePage + 1);
  };

  const [activeRows, setActiveRows] = React.useState<(number | string)[]>([]);
  React.useEffect(() => {
    if (props.selectedRows) props.selectedRows(activeRows);
  }, [activeRows]);

  return (
    <>
      <table className={classes.join(' ')}>
        <thead>
          <tr>
            {props.multiselect && <th></th>}
            {props.headers.map(x => (
              <th key={x.key.toString()}>{x.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pages &&
            pages[activePage] &&
            pages[activePage].map(x => {
              const classes = [];
              if (x.selected) classes.push('is-selected');
              if (x.active || activeRows.indexOf(x.key) !== -1)
                classes.push('is-active');

              const k = x.key;
              const handleClick = () => {
                if (props.onRowSelected) props.onRowSelected(k);
              };

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
                <tr
                  key={x.key}
                  className={classes.join(' ')}
                  onClick={handleClick}
                >
                  {props.multiselect && (
                    <td>
                      <Checkbox
                        label=""
                        onChange={handleActive}
                        value={x.active || activeRows.indexOf(x.key) !== -1}
                      />
                    </td>
                  )}
                  {props.headers.map(y => {
                    if (y.isRowHeader)
                      return <th key={y.key.toString()}>{x[y.key]}</th>;
                    return <td key={y.key.toString()}>{x[y.key]}</td>;
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
      {pages && Object.keys(pages).length > 1 && (
        <div className="pagination">
          {activePage} of {Object.keys(pages).length} pages
          <div className="prev" onClick={handlePrevClick}></div>
          <div className="next" onClick={handleNextClick}></div>
        </div>
      )}
      {props.onLoadMore && pages && activePage === Object.keys(pages).length && (
        <div className="lazy">
          <Button primary={true} onClick={onLoadMore} disabled={loading}>
            Load More
          </Button>
        </div>
      )}
    </>
  );
}

export interface ITableTallCellProps {
  primary: string;
  secondary: string;
}

export const TableTallCell: React.FC<ITableTallCellProps> = (
  props,
): React.ReactElement => {
  return (
    <>
      <div>{props.primary}</div>
      <div>{props.secondary}</div>
    </>
  );
};
