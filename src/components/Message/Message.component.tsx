import * as React from 'react';

export interface MessageProps {
  profileImgSrc?: string;
  name?: string;
  sentDateTime?: string;
}

export const Message: React.FC<MessageProps> = props => {
  return (
    <div className="messageContainer">
      <div className="messageHeader">
        {props.profileImgSrc && (
          <img
            className="messageProfileImg"
            src={props.profileImgSrc}
            alt="Profile"
          />
        )}
        <div className="messageInfo">
          {props.name && <div className="messageName">{props.name}</div>}
          {props.sentDateTime && (
            <div className="messageSentDateTime">{props.sentDateTime}</div>
          )}
        </div>
      </div>
      <div className="messageText">{props.children}</div>
    </div>
  );
};
