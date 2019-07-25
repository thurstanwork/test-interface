import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  CriticalPill,
  WarningPill,
  FairPill,
  GoodPill,
} from './Pills.components.tsx';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridGap: '10px 15px',
};

storiesOf('Pills', module)
  .add('standard', () => (
    <div style={gridLayout}>
      <h1>Error</h1>
      <div>
        <span className="pill-error">Critical</span>
      </div>
      <h1>Warning</h1>
      <div>
        <span className="pill-warning">Warning</span>
      </div>
      <h1>Ok</h1>
      <div>
        <span className="pill-ok">Fair</span>
      </div>
      <h1>Good</h1>
      <div>
        <span className="pill-good">Good</span>
      </div>
      <h1>Selected Error</h1>
      <div>
        <div className="selected">
          <span className="pill-error">Error</span>
        </div>
      </div>
    </div>
  ))
  .add('react', () => (
    <div>
      <CriticalPill />
      <WarningPill />
      <FairPill />
      <GoodPill />
    </div>
  ));
