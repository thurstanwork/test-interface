import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Tile } from './Tiles.component.tsx';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridGap: '15px 10px',
};

const tileStyle = {
  width: 300,
  height: 300,
};

const expandTile = {
  width: 300,
  height: 600,
};

storiesOf('Tiles', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const expanded = boolean('Expanded', false);
    const selected = boolean('Selected', false);

    const expandedClass = ['tile', 'is-expandable'];
    if (expanded) expandedClass.push('is-expanded');

    const selectedClass = ['tile', 'is-selectable'];
    if (selected) selectedClass.push('is-selected');

    return (
      <div style={gridLayout}>
        <h1>Active</h1>
        <div>
          <div className="tile">
            <div style={tileStyle} />
          </div>
        </div>
        <h1>Expandable</h1>
        <div>
          <div className={expandedClass.join(' ')}>
            <div style={expandTile} />
          </div>
        </div>
        <h1>Selectable</h1>
        <div>
          <div className={selectedClass.join(' ')}>
            <div style={tileStyle} />
          </div>
        </div>
      </div>
    );
  })
  .add('react', () => (
    <div style={gridLayout}>
      <h1>Normal</h1>
      <div>
        <Tile>
          <div style={tileStyle} />
        </Tile>
      </div>
      <h1>Expandable</h1>
      <div>
        <Tile type="expandable">
          <div style={tileStyle} />
        </Tile>
      </div>
      <h1>Selectable</h1>
      <div>
        <Tile type="selectable">
          <div style={tileStyle} />
        </Tile>
      </div>
    </div>
  ));
