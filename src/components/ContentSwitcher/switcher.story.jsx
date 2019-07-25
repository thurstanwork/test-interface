import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Switcher } from './Switcher.component.tsx';
import { action } from '@storybook/addon-actions';

storiesOf('Content Switcher', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const item1 = text('Item One', 'Option One');
    const item2 = text('Item Two', 'Option Two');
    const item3 = text('Item Three', 'Option Three');

    return (
      <div>
        <h1>Primary</h1>
        <div>
          <div className="switcher">
            <div className="selected">{item1}</div>
            <div>{item2}</div>
            <div>{item3}</div>
          </div>
        </div>
        <h1>Disabled</h1>
        <div>
          <div className="switcher disabled">
            <div className="selected">{item1}</div>
            <div>{item2}</div>
            <div>{item3}</div>
          </div>
        </div>
      </div>
    );
  })
  .add('react', () => (
    <div>
      <h1>Primary</h1>
      <Switcher
        items={['Option One', 'Option Two', 'Option Three']}
        onSelectItem={action('switcher')}
      />
    </div>
  ));
