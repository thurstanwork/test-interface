import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Dropdown } from './Dropdown.component.tsx';
import { action } from '@storybook/addon-actions';

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const label = text('Label', 'Security question');
    const item1 = text('Item One', 'Option One');
    const item2 = text('Item Two', 'Option Two');
    const item3 = text('Item Three', 'Option Three');
    const item4 = text('Item Four', 'Option Four');

    return (
      <div>
        <h1>Primary</h1>
        <div>
          <div className="dropdown">
            <label htmlFor>
              {label}
              <select required="true">
                <option value="one">{item1}</option>
                <option value="two">{item2}</option>
                <option value="three">{item3}</option>
                <option value="four">{item4}</option>
              </select>
            </label>
            <div className="required" />
          </div>
        </div>
      </div>
    );
  })
  .add('react', () => (
    <div>
      <h1>Primary</h1>
      <div>
        <Dropdown
          label="Dropdown Label"
          items={['Option One', 'Option Two', 'Option Three']}
          onSelectItem={action('Dropdown')}
        />
      </div>
    </div>
  ));
