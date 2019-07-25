import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from '../Button/Button.component.tsx';
import {
  ToastNotification,
  InlineNotificationHandler,
} from './Notification.component.tsx';

const NotificationHandlerDemo = () => {
  const handler = useRef();

  const handleInfo = () => {
    handler.current.toastNotification(
      'information',
      'your account priviledges have been elevated',
      action('info-dismiss'),
    );
  };

  const handleWarning = () => {
    handler.current.toastNotification(
      'warning',
      'your password needs to be renewed in 3 days',
      action('warning-dismiss'),
    );
  };

  const handleError = () => {
    handler.current.toastNotification(
      'error',
      'your account has been locked for too many failed login attempts',
      action('error-dismiss'),
    );
  };

  const handleSuccess = () => {
    handler.current.toastNotification(
      'success',
      'your password has been successfully updated',
      action('success-dismiss'),
    );
  };

  return (
    <div>
      <InlineNotificationHandler ref={handler} />
      <div>
        <Button label="Information" onClick={handleInfo} />
        <Button label="warning" onClick={handleWarning} />
        <Button label="error" onClick={handleError} />
        <Button label="success" onClick={handleSuccess} />
      </div>
    </div>
  );
};

storiesOf('Notification', module)
  .addDecorator(withKnobs)
  .add('single line', () => {
    const message = text('Message', 'Clear explanation or direction');

    return (
      <div>
        <div>
          <div className="error">
            {message}
            <div className="close" />
          </div>
          <div className="information">
            {message}
            <div className="close" />
          </div>
          <div className="warning">
            {message}
            <div className="close" />
          </div>
          <div className="success">
            {message}
            <div className="close" />
          </div>
        </div>
      </div>
    );
  })
  .add('multi line', () => {
    const message = text(
      'Message',
      'Clear explanation or direction, continues on next line if required and so on so forth. Basically this should just keep wrapping around and around to allow for a massive notification such as this long piece of text',
    );

    return (
      <div>
        <div className="error">
          {message}
          <div className="close" />
        </div>
        <div className="information">
          {message}
          <div className="close" />
        </div>
        <div className="warning">
          {message}
          <div className="close" />
        </div>
        <div className="success">
          {message}
          <div className="close" />
        </div>
      </div>
    );
  })
  .add('toast', () => {
    const message = text('Message', 'Clear explanation or direction');

    return (
      <div>
        <div className="toast">
          <div className="error">
            {message}
            <div className="close" />
            <div className="date">06/08/2018 12:55:23PM</div>
          </div>
          <div className="information">
            {message}
            <div className="close" />
            <div className="date">06/08/2018 12:55:23PM</div>
          </div>
          <div className="warning">
            {message}
            <div className="close" />
            <div className="date">06/08/2018 12:55:23PM</div>
          </div>
          <div className="success">
            {message}
            <div className="close" />
            <div className="date">06/08/2018 12:55:23PM</div>
          </div>
        </div>
      </div>
    );
  })
  .add('react', () => (
    <div>
      <div>
        <Button
          label="Toast Notification"
          onClick={() =>
            ToastNotification(
              'success',
              'this is from the button',
              action('toast-success'),
            )
          }
        />
        <Button
          label="Toast Info"
          onClick={() =>
            ToastNotification(
              'information',
              'this is some more from the button',
              action('toast-info'),
              1000,
            )
          }
        />
        <Button
          label="Toast Warning"
          onClick={() =>
            ToastNotification(
              'warning',
              'this is a warning that the user should attend to',
              action('toast-warn'),
            )
          }
        />
        <Button
          label="Toast Error"
          onClick={() =>
            ToastNotification(
              'error',
              'this is a critical error and should appear at the top',
              action('toast-error'),
            )
          }
        />
      </div>
      <div>
        <NotificationHandlerDemo />
      </div>
    </div>
  ));
