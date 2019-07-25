import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Card } from './Card.component.tsx';

import profilePic from './conor.png';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto',
  gridGap: '15px 10px',
};

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const title = text('Title', 'Card Name');
    const subtitle = text('SubTitle', 'Secondary information');

    return (
      <div style={gridLayout}>
        <h1>Footer Buttons</h1>
        <div>
          <div className="card">
            <div className="menu" />
            <img className="profile" src={profilePic} alt="Profile Pic" />
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
            <div className="footer">
              <button type="button" className="button is-primary">
                Ok
              </button>
              <a href="https://aurecongroup.com">Link</a>
            </div>
          </div>
        </div>
        <h1>Footer Status</h1>
        <div>
          <div className="card">
            <div className="menu" />
            <img className="profile" src={profilePic} alt="Profile Pic" />
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
            <div className="footer">
              <div className="status-success">Running</div>
              <div className="share" />
            </div>
          </div>
        </div>
        <h1>Footer Status Warning</h1>
        <div>
          <div className="card">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
            <div className="footer">
              <div className="status-warning">Degraded</div>
            </div>
          </div>
        </div>
        <h1>Footer Status Failed</h1>
        <div>
          <div className="card">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
            <div className="footer">
              <div className="status-error">Failed</div>
            </div>
          </div>
        </div>
        <h1>No Footer</h1>
        <div>
          <div className="card">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
          </div>
        </div>
        <h1>Simple Card</h1>
        <div>
          <div className="card">
            <div className="menu" />
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
          </div>
        </div>
        <h1>Expanded Card</h1>
        <div className="card">
          <div className="menu" />
          <img className="profile" src={profilePic} alt="Profile Pic" />
          <div className="title">Expanded Card</div>
          <div className="subtitle">Some subtitle here</div>
        </div>
      </div>
    );
  })
  .add('react', () => {
    const title = text('Title', 'Card Name');
    const subtitle = text('SubTitle', 'Secondary information');
    const cardStatus = select(
      'Status',
      {
        Success: 'success',
        Warning: 'warning',
        Error: 'error',
      },
      'success',
    );

    return (
      <div style={gridLayout}>
        <h1>Footer Buttons</h1>
        <div>
          <Card title={title} subtitle={subtitle} imgSrc={profilePic}>
            <button type="button" className="button is-primary">
              Ok
            </button>
            <a href="https://aurecongroup.com">Link</a>
          </Card>
        </div>
        <h1>Footer Status</h1>
        <div>
          <Card
            title={title}
            subtitle={subtitle}
            imgSrc={profilePic}
            status={cardStatus}
          />
        </div>
        <h1>No Footer</h1>
        <div>
          <Card title={title} subtitle={subtitle} imgSrc={profilePic} />
        </div>
        <h1>Simple Card</h1>
        <div>
          <Card title={title} subtitle={subtitle} />
        </div>
      </div>
    );
  });
