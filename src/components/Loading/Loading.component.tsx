import * as React from 'react';

export type LoadingSizes = 'xsmall' | 'small' | 'medium' | 'large';
const LoadingSizeNumbers: { [key in LoadingSizes]: number } = {
  xsmall: 46,
  small: 64,
  medium: 72,
  large: 86,
};

export interface ILoadingProps {
  progress?: number;

  size?: LoadingSizes;
}

export const Loading: React.FC<ILoadingProps> = props => {
  const size = LoadingSizeNumbers[props.size || 'medium'];
  return (
    <div>
      <div
        style={{
          width: size,
          height: size,
          borderWidth: 10,
          borderStyle: 'solid',
          borderColor: '#84bd00 transparent transparent transparent',
          borderRadius: '50%',
          animation: 'loading-spin 2s ease infinite',
        }}
      ></div>
      {props.progress !== undefined && <div>Loading {props.progress}%</div>}
    </div>
  );
};
