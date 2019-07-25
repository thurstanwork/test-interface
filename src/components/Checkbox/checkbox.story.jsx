import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import { Checkbox } from './Checkbox.component.tsx';
import { action } from '@storybook/addon-actions';

const store = new Store({
  checked: true,
});

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const label = text('Label', 'Hello There');
    const value = text('Value', 'Foo');

    return (
      <State store={store}>
        {state => (
          <div>
            <h1>Primary</h1>
            <div>
              <label htmlFor="checkbox" className="checkbox">
                <input
                  id="checkbox"
                  type="checkbox"
                  value={value}
                  checked={state.checked}
                  onChange={({ target: { checked } }) => {
                    store.set({ checked });
                  }}
                />
                {label}
              </label>
            </div>
            <h1>Disabled</h1>
            <div>
              <label htmlFor="checkbox" className="checkbox" disabled>
                <input
                  id="checkbox"
                  type="checkbox"
                  value={value}
                  checked={state.checked}
                  disabled
                />
                {label}
              </label>
            </div>
          </div>
        )}
      </State>
    );
  })
  .add('react', () => {
    const label = text('Label', 'Hello There');

    return (
      <div>
        <h1>Primary</h1>
        <div>
          <Checkbox label={label} onChange={action('Checkbox')} />
        </div>
      </div>
    );
  });
