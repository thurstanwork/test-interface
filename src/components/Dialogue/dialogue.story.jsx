import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Dialogue } from './Dialogue.component.tsx';
import { Button } from '../Button/Button.component.tsx';

storiesOf('Dialogue', module)
  .addDecorator(withKnobs)
  .add('passive', () => {
    const label = text('Label', 'Optional Label');
    const title = text('Title', 'Passive Dialogue');
    const content = text(
      'Content',
      'Passive dialogues should only appear if there is an action the user needs to address immediately. Passive dialogues are persistent on screen.',
    );
    const footer = text('Footer', 'Clear directions');

    return (
      <div>
        <div className="dialogue">
          <div className="close" />
          <div className="label">{label}</div>
          <div className="title">{title}</div>
          <div className="content">{content}</div>
          <div className="footer">{footer}</div>
        </div>
      </div>
    );
  })
  .add('active', () => {
    const label = text('Label', 'Optional Label');
    const title = text('Title', 'Dialogue');
    const content = text(
      'Content',
      'Active dialogues should only appear if there is an action the user needs to address immediately. Active dialogues are persistent on screen.',
    );

    return (
      <div>
        <div className="dialogue">
          <div className="close" />
          <div className="label">{label}</div>
          <div className="title">{title}</div>
          <div className="content">{content}</div>
          <div className="actions">
            <button type="button" className="button is-primary is-outlined">
              Cancel
            </button>
            <button type="button" className="button is-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  })
  .add('react', () => (
    <div>
      <Dialogue
        title="Passive Dialogue"
        label="Optional Label"
        passive="Clear Directions"
      >
        Passive dialogues should only appear if there is an action the user
        needs to address immediately. Passive dialogues are persistent on
        screen.
      </Dialogue>
      <Dialogue
        title="Dialogue"
        label="Optional Label"
        actions={
          <>
            <Button primary>Save</Button>
            <Button secondary>Cancel</Button>
          </>
        }
      >
        Active dialogues should only appear if there is an action the user needs
        to address immediately. Active dialogues are persistent on screen.
      </Dialogue>
    </div>
  ));
