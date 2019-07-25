import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { List } from './List.component.tsx';

const listRows = [];
for (let i = 0; i < 5; i += 1) {
  listRows.push({
    key: i,
    name: 'City West',
    asset: 'Wet Well',
  });
}

const listHeaders = [
  { key: 'name', name: 'Name' },
  { key: 'asset', name: 'Asset' },
];

storiesOf('List', module)
  .add('basic', () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        gridGap: '10px 15px',
      }}
    >
      <h1>Standard</h1>
      <div>
        <div className="list">
          <div className="is-header">
            <div>Name</div>
            <div>Asset</div>
          </div>
          <div>
            <div>City West</div>
            <div>Wet Well</div>
          </div>
          <div className="is-selected">
            <div>City West</div>
            <div>Wet Well</div>
          </div>
          <div>
            <div>City West</div>
            <div>Wet Well</div>
          </div>
          <div>
            <div>City West</div>
            <div>Wet Well</div>
          </div>
          <div>
            <div>City West</div>
            <div>Wet Well</div>
          </div>
        </div>
      </div>
      <h1>Tall</h1>
      <div>
        <div className="list is-tall">
          <div className="is-header">
            <div>Name</div>
            <div>Asset</div>
          </div>
          <div>
            <div>City West</div>
            <div>Wet Well</div>
          </div>
          <div className="is-selected">
            <div>City West</div>
            <div>Wet Well</div>
          </div>
          <div>
            <div>City West</div>
            <div>Wet Well</div>
          </div>
          <div>
            <div>City West</div>
            <div>Wet Well</div>
          </div>
          <div>
            <div>City West</div>
            <div>Wet Well</div>
          </div>
        </div>
      </div>
      <h1>Selectable</h1>
      <div>
        <div className="list is-selectable">
          <div className="is-header">
            <div />
            <div>Name</div>
            <div>Asset</div>
          </div>
          <div>
            <div>
              <label htmlFor className="checkbox">
                <input type="checkbox" checked={false} />
              </label>
            </div>
            <div>City West</div>
            <div>Wet Well</div>
          </div>
          <div className="is-selected">
            <div>
              <label htmlFor className="checkbox">
                <input type="checkbox" checked />
              </label>
            </div>
            <div>City West</div>
            <div>Wet Well</div>
          </div>
          <div className="is-active">
            <div>
              <label htmlFor className="checkbox">
                <input type="checkbox" checked />
              </label>
            </div>
            <div>City West</div>
            <div>Wet Well</div>
          </div>
          <div>
            <div>
              <label htmlFor className="checkbox">
                <input type="checkbox" checked={false} />
              </label>
            </div>
            <div>City West</div>
            <div>Wet Well</div>
          </div>
          <div className="is-active">
            <div>
              <label htmlFor className="checkbox">
                <input type="checkbox" checked />
              </label>
            </div>
            <div>City West</div>
            <div>Wet Well</div>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('react', () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        gridGap: '10px 15px',
      }}
    >
      <h1>Standard</h1>
      <div>
        <List rows={listRows} headers={listHeaders} />
      </div>
      <h1>Tall</h1>
      <div>
        <List rows={listRows} headers={listHeaders} isTall />
      </div>
      <h1>Selectable</h1>
      <div>
        <List
          rows={listRows}
          headers={listHeaders}
          onRowsSelected={action('Rows Selected')}
        />
      </div>
    </div>
  ));
