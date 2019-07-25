import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Slider } from './Slider.component.tsx';

storiesOf('Slider', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const label = text('Slider Label', 'Slider Label');
    const val = number('Value', 25);

    return (
      <div>
        <h1>Primary</h1>
        <div>
          <div className="slider">
            <div className="slider-label">{label}</div>
            <div className="bar">
              <div className={`value-${val}`} />
            </div>
            <div className="bar-label">{val}</div>
          </div>
        </div>
        <h1>Disabled</h1>
        <div>
          <div className="slider disabled">
            <div className="slider-label">{label}</div>
            <div className="bar">
              <div className={`value-${val}`} />
            </div>
            <div className="bar-label">{val}</div>
          </div>
        </div>
      </div>
    );
  })
  .add('input', () => (
    <div>
      <h1>Primary</h1>
      <div>
        <div className="input-slider" data-min="0" data-max="100">
          <input type="range" step="1" min="0" max="100" />
        </div>
      </div>
    </div>
  ))
  .add('react', () => (
    <div>
      <h1>Primary</h1>
      <div>
        <Slider label="Slider Label" onValueChange={action('Value Changed')} />
      </div>
    </div>
  ));
