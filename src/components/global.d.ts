type InputFieldValueTypes = string | number | boolean;

export type HTMLInput<T, S> = IInputField<T> &
  Omit<React.InputHTMLAttributes<S>, keyof IInputField>;

export interface IInputField<T = InputFieldValueTypes> {
  label?: string;
  value: T;
  onChange: (newValue: T) => void;
}
