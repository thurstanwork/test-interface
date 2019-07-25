import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import ButtonReadme from './button.md';
import { Button } from './Button.component.tsx';
import { action } from '@storybook/addon-actions';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridGap: '10px 15px',
  width: '300px',
};

const label = 'Icon';
const options = {
  Search: 'fas fa-search',
  Check: 'fas fa-check',
  Car: 'fas fa-car',
  Carrot: 'fas fa-carrot',
  None: null,
};
const defaultValue = 'fas fa-search';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // content: ButtonReadme,
      sidebar: ButtonReadme,
    },
  })
  .add('with text', () => {
    const buttonLabel = text('Label', 'Nice Button');
    const iconSelect = select(label, options, defaultValue);

    return (
      <div style={gridLayout}>
        <h1>primary</h1>
        <div>
          <button type="button" className="button is-primary">
            {buttonLabel}
          </button>
        </div>

        <h1>icon</h1>
        <div>
          <button type="button" className="button is-primary">
            <span>{buttonLabel}</span>
            <span className="icon is-small">
              <i className={iconSelect} />
            </span>
          </button>
        </div>

        <h1>disabled</h1>
        <div>
          <button type="button" disabled className="button is-primary">
            {buttonLabel}
          </button>
        </div>

        <h1>small</h1>
        <div>
          <button type="button" className="button is-primary is-small">
            {buttonLabel}
          </button>
        </div>

        <h1>small icon</h1>
        <div>
          <button type="button" className="button is-primary is-small">
            <span>{buttonLabel}</span>
            <span className="icon is-small">
              <i className={iconSelect} />
            </span>
          </button>
        </div>
      </div>
    );
  })
  .add('Secondary', () => {
    const buttonLabel = text('Label', 'Nice Button');
    const iconSelect = select(label, options, defaultValue);

    return (
      <div style={gridLayout}>
        <h1>primary</h1>
        <div>
          <button type="button" className="button is-primary is-outlined">
            {buttonLabel}
          </button>
        </div>

        <h1>icon</h1>
        <div>
          <button type="button" className="button is-primary is-outlined">
            <span>{buttonLabel}</span>
            <span className="icon is-small">
              <i className={iconSelect} />
            </span>
          </button>
        </div>

        <h1>disabled</h1>
        <div>
          <button
            type="button"
            disabled
            className="button is-primary is-outlined"
          >
            {buttonLabel}
          </button>
        </div>

        <h1>small</h1>
        <div>
          <button
            type="button"
            className="button is-primary is-small is-outlined"
          >
            {buttonLabel}
          </button>
        </div>

        <h1>small icon</h1>
        <div>
          <button
            type="button"
            className="button is-primary is-small is-outlined"
          >
            <span>{buttonLabel}</span>
            <span className="icon is-small">
              <i className={iconSelect} />
            </span>
          </button>
        </div>
      </div>
    );
  })
  .add('React', () => (
    <div style={gridLayout}>
      <h1>primary</h1>
      <div>
        <Button primary onClick={action('primary')}>
          Primary Button
        </Button>
      </div>

      <h1>secondary</h1>
      <div>
        <Button secondary onClick={action('secondary')}>
          Secondary Button
        </Button>
      </div>

      <h1>icon</h1>
      <div>
        <Button icon="Car" onClick={action('icon')}>
          With Icon
        </Button>
      </div>

      <h1>disabled</h1>
      <div>
        <Button disabled onClick={action('disabled')}>
          Disabled
        </Button>
      </div>

      <h1>small</h1>
      <div>
        <Button small onClick={action('small')}>
          Small
        </Button>
      </div>

      <h1>small icon</h1>
      <div>
        <Button small icon="Search" onClick={action('small icon')}>
          Small Icon
        </Button>
      </div>
    </div>
  ));
