import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Sidebar Header', module)
  .addDecorator(withKnobs)
  .add('with light', () => (
    <div style={{ width: '200px' }}>
      <div className="sidebar__header">
        <figure className="image is-48x48">
          <img
            className="is-rounded"
            src="https://bulma.io/images/placeholders/96x96.png"
            alt="Placeholder"
          />
        </figure>

        <div className="media-content">
          <p className="title is-6 overflow-elipsis">John Smith</p>
        </div>
      </div>
    </div>
  ))
  .add('with long subtitle', () => (
    <div style={{ width: '200px' }}>
      <div className="sidebar__header">
        <figure className="image is-48x48">
          <img
            className="is-rounded"
            src="https://bulma.io/images/placeholders/96x96.png"
            alt="Placeholder"
          />
        </figure>

        <div className="media-content">
          <p className="title is-6 overflow-elipsis">John Smith Or Something</p>
          <p className="subtitle is-7 overflow-elipsis">
            @johnsmithblablablabalababla
          </p>
        </div>
      </div>
    </div>
  ))
  .add('with dark', () => (
    <div style={{ width: '200px' }}>
      <div className="sidebar__header is-dark">
        <figure className="image is-48x48">
          <img
            className="is-rounded"
            src="https://bulma.io/images/placeholders/96x96.png"
            alt="Placeholder"
          />
        </figure>

        <div className="media-content">
          <p className="title is-6 overflow-elipsis">John Smith</p>
          <p className="subtitle is-7 overflow-elipsis">
            @johnsmithblablablabalababla
          </p>
        </div>
      </div>
    </div>
  ));
