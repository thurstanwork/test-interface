import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Table, TableTallCell } from './Table.component.tsx';
import {
  CriticalPill,
  WarningPill,
  FairPill,
  GoodPill,
} from '../Pills/Pills.components.tsx';

function generateRow(i) {
  let name = 'City West';
  if (Math.random() < 0.3) {
    name = (
      <TableTallCell
        primary="City West"
        secondary="Some additional secondary information here"
      />
    );
  }

  let condition = <CriticalPill />;
  const conditionRand = Math.random();
  if (conditionRand < 0.3) condition = <GoodPill />;
  else if (conditionRand < 0.6) condition = <FairPill />;
  else if (conditionRand < 0.9) condition = <WarningPill />;

  return {
    key: i,
    name,
    number: `SP${Math.floor(Math.random() * 20)}`,
    type: 'Sewage pump station',
    asset: 'Wet Well',
    condition,
    status: Math.random() < 0.5 ? 'Published' : 'Pending',
  };
}

const tableRows = [];
for (let i = 0; i < 110; i += 1) {
  tableRows.push(generateRow(i));
}

const tableSmallRows = [];
for (let i = 0; i < 10; i += 1) {
  tableSmallRows.push(generateRow(i));
}

const tableHeaders = [
  { key: 'name', name: 'Name' },
  { key: 'number', name: 'Number' },
  { key: 'type', name: 'Type' },
  { key: 'asset', name: 'Asset' },
  { key: 'condition', name: 'Condition' },
  { key: 'status', name: 'Status' },
];

function loadMoreData() {
  return new Promise(resolve => {
    action('Load More Triggered')();
    setTimeout(() => resolve(), 2000);
  });
}

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .add('standard', () => (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Type</th>
            <th>Asset</th>
            <th>Condition</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-error">Critical</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr className="is-selected">
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-good">Good</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-warning">Poor</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-good">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('compact', () => (
    <div>
      <table className="table is-compact">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Type</th>
            <th>Asset</th>
            <th>Condition</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-error">Critical</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr className="is-selected">
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-good">Good</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-warning">Poor</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-good">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('tall', () => (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Type</th>
            <th>Asset</th>
            <th>Condition</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-error">Critical</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr className="is-selected">
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-good">Good</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-warning">Poor</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-good">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('striped', () => (
    <div>
      <table className="table is-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Type</th>
            <th>Asset</th>
            <th>Condition</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-error">Critical</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr className="is-selected">
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-good">Good</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-warning">Poor</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-good">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('multiselect', () => (
    <div>
      <table className="table is-striped">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Number</th>
            <th>Type</th>
            <th>Asset</th>
            <th>Condition</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label htmlFor="chk12" className="checkbox">
                <input id="chk11" type="checkbox" />
              </label>
            </td>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-error">Critical</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="chk11" className="checkbox">
                <input id="chk11" type="checkbox" />
              </label>
            </td>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr className="is-selected">
            <td>
              <label htmlFor="chk10" className="checkbox">
                <input id="chk10" type="checkbox" />
              </label>
            </td>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr className="is-active">
            <td>
              <label htmlFor="chk9" className="checkbox">
                <input id="chk9" type="checkbox" checked />
              </label>
            </td>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-good">Good</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="chk8" className="checkbox">
                <input id="chk8" type="checkbox" />
              </label>
            </td>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-warning">Poor</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="chk7" className="checkbox">
                <input id="chk7" type="checkbox" />
              </label>
            </td>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr className="is-active">
            <td>
              <label htmlFor="chk6" className="checkbox">
                <input id="chk6" type="checkbox" checked />
              </label>
            </td>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-good">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="chk5" className="checkbox">
                <input id="chk5" type="checkbox" />
              </label>
            </td>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="chk4" className="checkbox">
                <input id="chk4" type="checkbox" />
              </label>
            </td>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr className="is-active">
            <td>
              <label htmlFor="chk3" className="checkbox">
                <input id="chk3" type="checkbox" checked />
              </label>
            </td>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr className="is-active">
            <td>
              <label htmlFor="chk2" className="checkbox">
                <input id="chk2" type="checkbox" checked />
              </label>
            </td>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="chk1" className="checkbox">
                <input id="chk1" type="checkbox" />
              </label>
            </td>
            <td>
              <div>City West</div>
              <div>Secondary Information</div>
            </td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .add('pagination', () => (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Type</th>
            <th>Asset</th>
            <th>Condition</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-error">Critical</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr className="is-selected">
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-good">Good</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-warning">Poor</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-good">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        1 of 4 pages
        <div className="prev" />
        <div className="next" />
      </div>
    </div>
  ))
  .add('lazy load', () => (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Type</th>
            <th>Asset</th>
            <th>Condition</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-error">Critical</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr className="is-selected">
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-good">Good</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-warning">Poor</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-good">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
          <tr>
            <td>City West</td>
            <td>SP19</td>
            <td>Sewage pump station</td>
            <td>Wet Well</td>
            <td>
              <span className="pill-ok">Fair</span>
            </td>
            <td>Published</td>
          </tr>
        </tbody>
      </table>
      <div className="lazy">
        <button type="button" className="button is-primary">
          Load More
        </button>
      </div>
    </div>
  ))
  .add('react', () => {
    const striped = boolean('Striped');
    const compact = boolean('Compact');
    return (
      <div>
        <h1>Pagination</h1>
        <Table
          rows={tableRows}
          headers={tableHeaders}
          isCompact={compact}
          isStriped={striped}
          pageSize={5}
          onRowSelected={action('Row Selected')}
        />
        <h1>Load More</h1>
        <Table
          rows={tableSmallRows}
          headers={tableHeaders}
          isCompact={compact}
          isStriped={striped}
          onRowSelected={action('Row Selected')}
          onLoadMore={loadMoreData}
        />
        <h1>Multiselect</h1>
        <Table
          rows={tableRows}
          headers={tableHeaders}
          isCompact={compact}
          isStriped={striped}
          onRowSelected={action('Row Selected')}
          multiselect
          selectedRows={action('Selected Rows')}
        />
      </div>
    );
  });
