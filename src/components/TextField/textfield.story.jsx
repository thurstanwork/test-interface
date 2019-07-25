import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { TextField } from './TextField.component.tsx';
import { action } from '@storybook/addon-actions';

storiesOf('TextField', module)
  .addDecorator(withKnobs)
  .add('single line', () => {
    const inputLabel = text('Label', 'Text input label');
    const optional = boolean('Optional', true);
    const required = boolean('Required', true);

    const classes = ['field'];
    if (optional) classes.push('is-optional');

    return (
      <div>
        <h1>Primary</h1>
        <div>
          <div className={classes.join(' ')}>
            <label htmlFor>
              {inputLabel}
              <input type="text" required={required} placeholder="hint text" />
              {required && <div className="required" />}
            </label>
          </div>
          <div className="field">
            <label htmlFor>
              Password
              <input type="password" required />
              {required && <div className="required" />}
            </label>
          </div>
        </div>

        <h1>Verified</h1>
        <div>
          <div className={classes.concat('is-verified').join(' ')}>
            <label htmlFor>
              {inputLabel}
              <input type="text" required={required} placeholder="hint text" />
              {required && <div className="required" />}
            </label>
          </div>
        </div>
      </div>
    );
  })
  .add('textarea', () => {
    const inputLabel = text('Label', 'Text input label');
    const optional = boolean('Optional', true);
    const required = boolean('Required', true);

    const classes = ['field'];
    if (optional) classes.push('is-optional');

    return (
      <div>
        <h1>Primary</h1>
        <div>
          <div className={classes.join(' ')}>
            <label htmlFor>
              {inputLabel}
              <textarea required={required} />
              {required && <div className="required" />}
            </label>
          </div>
        </div>
      </div>
    );
  })
  .add('react', () => (
    <div>
      <h1>Primary</h1>
      <TextField label="Text input label" onChange={action('primary')} />
      <h1>Required</h1>
      <TextField
        label="Text input label"
        required
        onChange={action('required')}
      />
      <h1>Optional</h1>
      <TextField
        label="Text input label"
        optional
        onChange={action('optional')}
      />
      <h1>Required Optional</h1>
      <TextField
        label="Text input label"
        required
        optional
        placeholder="hint text"
        onChange={action('required optional')}
      />
      <h1>Password</h1>
      <TextField
        label="Text input label"
        required
        optional
        password
        onChange={action('password')}
      />
      <h1>Verified</h1>
      <TextField
        label="Text input label"
        required
        optional
        verified
        placeholder="verified"
        value="Forced Value"
        onChange={action('verified')}
      />
      <h1>Multiline</h1>
      <TextField
        label="Text input label"
        required
        optional
        multiline
        onChange={action('multiline')}
      />
    </div>
  ));
