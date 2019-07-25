import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Sidebar Button', module)
  .addDecorator(withKnobs)
  .add('with light', () => (
    <div style={{ width: '200px', backgroundColor: 'red' }}>
      <div className="sidebar__button">
        <a href="https://www.google.com">Normal</a>
      </div>
      <div className="sidebar__button is-active">
        <a href="https://www.google.com">Normal Active</a>
      </div>
      <div className="sidebar__button">
        <a href="https://www.google.com">Normal Parent</a>
        <i className="fas fa-chevron-down" />
      </div>
      <div className="sidebar__button is-open is-active">
        <a href="https://www.google.com">Active Parent</a>
        <i className="fas fa-chevron-down" />
      </div>
      <div className="sidebar__button is-secondary">
        <a href="https://www.google.com">Child</a>
      </div>
      <div className="sidebar__button is-secondary is-active">
        <a href="https://www.google.com">Active Child</a>
      </div>
    </div>
  ))
  .add('with dark', () => (
    <div style={{ width: '200px', backgroundColor: 'red' }}>
      <div className="sidebar__button is-dark">
        <a href="https://www.google.com">Normal</a>
      </div>
      <div className="sidebar__button is-active is-dark">
        <a href="https://www.google.com">Normal Active</a>
      </div>
      <div className="sidebar__button is-dark">
        <a href="https://www.google.com">Normal Parent</a>
        <i className="fas fa-chevron-down" />
      </div>
      <div className="sidebar__button is-open is-active is-dark">
        <a href="https://www.google.com">Active Parent</a>
        <i className="fas fa-chevron-down" />
      </div>
      <div className="sidebar__button is-secondary is-dark">
        <a href="https://www.google.com">Child</a>
      </div>
      <div className="sidebar__button is-secondary is-active is-dark">
        <a href="https://www.google.com">Active Child</a>
      </div>
    </div>
  ));
