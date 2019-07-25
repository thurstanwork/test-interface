import * as React from 'react';
import * as ReactDOM from 'react-dom';

const defaultMagicTimeout = 10000;

export type MessageType = 'error' | 'information' | 'warning' | 'success';
function typeToLevel(x: MessageType) {
  switch (x) {
    case 'error':
      return 1;
    case 'warning':
      return 2;
    case 'success':
      return 3;
    case 'information':
      return 4;
  }
}

const nIds: { [key: string]: boolean } = {};
function generateNID() {
  const avail = 'QWERTYUIOPASDFGHJKLZXCVBNM123456789';
  let id = '';
  do {
    id = '';
    for (let i = 0; i < 10; i++) {
      id += avail.charAt(Math.floor(Math.random() * avail.length));
    }
  } while (nIds[id] === true);
  nIds[id] = true;
  return id;
}

export interface INotificationProps {
  type: MessageType;
  message: string;
  timeout?: number;
  date?: string;
  onClose?: () => void;
}

export const Notification: React.FC<INotificationProps> = props => {
  const [progress, setProgress] = React.useState<number>(0);

  React.useEffect(() => {
    let i: NodeJS.Timeout | undefined;
    let p = 0;
    if (props.timeout && props.onClose) {
      i = setInterval(() => {
        if (p >= 100 && props.onClose) {
          props.onClose();
        }
        if (p <= 100) setProgress(p++);
      }, props.timeout / 100) as any;
    }

    return () => {
      if (i !== undefined) clearTimeout(i);
    };
  }, []);

  return (
    <div className={props.type}>
      {props.message}
      {props.onClose && <div className="close" onClick={props.onClose}></div>}
      {props.date && <div className="date">{props.date}</div>}
      {progress !== undefined && (
        <div
          className="progress"
          style={{
            width: `calc(${progress}% + 20px)`,
          }}
        ></div>
      )}
    </div>
  );
};

export class NotificationHandler extends React.Component<
  {},
  {
    notifications: [string, JSX.Element][];
  }
> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      notifications: [],
    };
  }

  public handleSort(a: INotificationProps, b: INotificationProps) {
    return typeToLevel(a.type) - typeToLevel(b.type);
  }

  public toastNotification(
    type: MessageType,
    message: string,
    onDismiss?: () => void,
    timeoutMilliseconds = defaultMagicTimeout,
  ) {
    const i = this.state.notifications.length;
    const id = generateNID();
    this.setState({
      notifications: this.state.notifications.concat([
        [
          id,
          <Notification
            key={message.concat(`-${i}`)}
            type={type}
            message={message}
            timeout={timeoutMilliseconds}
            date={new Date().toISOString()}
            onClose={() => {
              this.handleClose(id);
              if (onDismiss) onDismiss();
            }}
          />,
        ],
      ]),
    });
  }

  public handleClose(id: string) {
    this.setState({
      notifications: this.state.notifications.filter(x => x[0] !== id),
    });
  }

  public render() {
    return this.state.notifications.map(x => x[1]);
  }
}

export class InlineNotificationHandler extends NotificationHandler {
  public toastNotification(
    type: MessageType,
    message: string,
    onDismiss?: () => void,
  ) {
    const i = this.state.notifications.length;
    const id = generateNID();
    this.setState({
      notifications: this.state.notifications.concat([
        [
          id,
          <Notification
            key={message.concat(`-${i}`)}
            type={type}
            message={message}
            onClose={() => {
              this.handleClose(id);
              if (onDismiss) onDismiss();
            }}
          />,
        ],
      ]),
    });
  }
}

let handler: NotificationHandler | undefined = undefined;
export const ToastNotification = (
  type: MessageType,
  message: string,
  onDismiss?: () => void,
  timeoutMilliseconds = defaultMagicTimeout,
) => {
  if (!handler) {
    const rootNotification = document.createElement('div');
    rootNotification.id = 'notificationAlert';
    rootNotification.className = 'toast';
    document.body.append(rootNotification);
    const el = React.createElement(NotificationHandler, {});
    handler = ReactDOM.render(el, document.getElementById('notificationAlert'));
  }

  handler.toastNotification(type, message, onDismiss, timeoutMilliseconds);
};
