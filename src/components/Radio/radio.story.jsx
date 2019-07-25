import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Radio } from './Radio.component.tsx';
import { action } from '@storybook/addon-actions';

storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const label1 = text('Label 1', 'Value');
    const label2 = text('Label 2', 'Value');
    const label3 = text('Label 3', 'Value');

    return (
      <div>
        <h1>Primary</h1>
        <div>
          <form className="radios">
            <label htmlFor="radio_1" className="radio">
              <input id="radio_1" type="radio" name="one" />
              {label1}
            </label>
            <label htmlFor="radio_2" className="radio">
              <input id="radio_2" type="radio" name="one" />
              {label2}
            </label>
            <label htmlFor="radio_3" className="radio">
              <input id="radio_3" type="radio" name="one" disabled />
              {label3}
            </label>
          </form>
        </div>
        <h1>Horizontal</h1>
        <div>
          <form className="radios horizontal">
            <label htmlFor="radio_1" className="radio">
              <input id="radio_1" type="radio" name="two" />
              Value
            </label>
            <label htmlFor="radio_1" className="radio">
              <input id="radio_1" type="radio" name="two" />
              Value
            </label>
            <label htmlFor="radio_1" className="radio">
              <input id="radio_1" type="radio" name="two" />
              Value
            </label>
          </form>
        </div>
      </div>
    );
  })
  .add('react', () => (
    <div>
      <h1>Primary</h1>
      <div>
        <Radio
          items={[
            { id: '1', label: 'Option One' },
            { id: '2', label: 'Option Two' },
            { id: '3', label: 'Option Three' },
            { id: '4', label: 'Option Four', disabled: true },
            { id: '5', label: 'Option Five' },
          ]}
          onItemSelect={action('primary')}
        />
      </div>
      <div>
        <Radio
          horizontal
          items={[
            { id: '1', label: 'Option One' },
            { id: '2', label: 'Option Two' },
            { id: '3', label: 'Option Three' },
            { id: '4', label: 'Option Four', disabled: true },
            { id: '5', label: 'Option Five' },
          ]}
          onItemSelect={action('horizontal')}
        />
      </div>
    </div>
  ));
