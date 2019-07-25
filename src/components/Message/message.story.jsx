import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { Message } from './Message.component.tsx';

import profilePic from './avatar.jpg';

const gridLayout = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto',
  gridGap: '15px 10px',
};

storiesOf('Message', module)
  .add('standard', () => (
    <div style={gridLayout}>
      <h1>Message / Conversation</h1>
      <div className="messageContainer">
        <div className="messageHeader">
          <img
            className="messageProfileImg"
            src={profilePic}
            alt="Profile Picture"
          />

          <div className="messageInfo">
            <div className="messageName">Petrov Chang</div>
            <div className="messageSentDateTime">18/04/2019 12:34 PM EST</div>
          </div>
        </div>
        <div className="messageText">
          This is a slightly longer message to show off the Message component
          for the Aurecon Style Library. The message area can be up to 600px
          wide, with a min width of 200px. Long names will also wrap nicely.
        </div>
      </div>
    </div>
  ))
  .add('react', () => (
    <div>
      <Message
        profileImgSrc={profilePic}
        name="Ali Donahue"
        sentDateTime="30 minutes ago"
      >
        This is a short message to test out the Message component
      </Message>
    </div>
  ));
