import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { InfoTooltip, TextTooltip } from './Tooltip.component.tsx';

const mainLayout = {
  display: 'grid',
  gridGap: '15px',
  gridTemplateColumns: 'auto auto',
};

storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const title = text('Title', 'Tooltip title');
    const body = text(
      'Body',
      'This Tooltip field demonstrates the maximum amount of text that should appear in this type of component. If more content is required, consider using a dialogue component.',
    );
    return (
      <div style={mainLayout}>
        <h1>Basic Large</h1>
        <div>
          Some predefined text and an info tooltip{' '}
          <div className="tooltip-info">
            <div className="tooltip">
              <div className="title">{title}</div>
              <div className="body">{body}</div>
            </div>
          </div>
        </div>
        <h1>Basic Small</h1>
        <div>
          Some predefined text and an info tooltip{' '}
          <div className="tooltip-info">
            <div className="tooltip is-small">
              <div className="body">This is a short Tooltip</div>
            </div>
          </div>
        </div>
        <h1>Right Small</h1>
        <div>
          Some predefined text and an info tooltip{' '}
          <div className="tooltip-info">
            <div className="tooltip is-right">
              <div className="body">This is a short tooltip</div>
            </div>
          </div>
        </div>
        <h1>Data Tooltips</h1>
        <div>
          The recent marginal success of the implementation of the style guide
          has equated to approximately{' '}
          <div className="tooltip-text">
            $1.3M
            <div className="tooltip is-data">$1.9M AUD</div>
          </div>
        </div>
      </div>
    );
  })
  .add('react', () => (
    <div style={mainLayout}>
      <h1>Text</h1>
      <div>
        <div style={{ height: 1000 }} />
      </div>
      <h1>Basic Large</h1>
      <div>
        Some predefined text and an info tooltip{' '}
        <InfoTooltip
          title="Tooltip Title"
          text="This tooltip field demonstrates the maximum amount of text that should appear in this type of the component. If more content is required, consider using a dialogue component."
        />
      </div>
      <h1>Less Content</h1>
      <div>
        Some predefined text and an info tooltip{' '}
        <InfoTooltip text="This is a short tooltip" />
      </div>
      <h1>Text Tooltip</h1>
      <div>
        The recent marginal success of the implementation fo the style guide has
        equated to approximately
        <TextTooltip hoverText="$1.3M" tooltipText="$1.9M AUD" />
      </div>
      <h1>Text</h1>
      <div>
        <div style={{ height: 1000 }} />
      </div>
    </div>
  ));
