import * as React from 'react';
import classNames from 'classnames';

type ChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

const unwrapEvent = (f: Function) => (e: ChangeEvent) => f(e.target.value);

const Input = ({ multiline = false, ...props }) =>
  multiline ? <textarea {...props} /> : <input {...props} />;

export interface ITextFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  multiline?: boolean;
  optional?: boolean;
  password?: boolean;
  required?: boolean;
  verified?: boolean;
  label?: string;
}

export const TextField: React.FunctionComponent<ITextFieldProps> = ({
  label,
  multiline,
  optional,
  password,
  required,
  type = 'text',
  verified,
  onChange = () => {},
  ...props
}) => {
  const fieldClass = classNames({
    field: true,
    'is-optional': optional,
    'is-verified': verified,
  });

  const unwrapOnChange = unwrapEvent(onChange);

  return (
    <div className={fieldClass}>
      <label>
        {label}
        <Input
          type={password ? 'password' : type}
          multiline={multiline}
          onChange={unwrapOnChange}
          {...props}
        />
        {required && <div className="required"></div>}
      </label>
    </div>
  );
};
