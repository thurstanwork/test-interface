import * as React from 'react';

export interface ISliderProps {
  label: string;

  disabled?: boolean;

  min?: number;
  max?: number;

  value?: number;
  onValueChange?: (v: number) => void;
}

function positionMap(
  x: number,
  min: number,
  max: number,
  newMin: number,
  newMax: number,
) {
  const frac = (newMax - newMin) / (max - min);
  const newVal = frac * (x - min) + newMin;
  if (newVal >= newMax) return newMax;
  else if (newVal <= newMin) return newMin;
  return newVal;
}

export const Slider: React.FC<ISliderProps> = props => {
  const min = props.min !== undefined ? props.min : 0;
  const max = props.max !== undefined ? props.max : 100;

  const sliderBack = React.useRef<HTMLDivElement>(null);
  const [value, setValue] = React.useState(
    positionMap(props.value || 50, 0, 100, min, max),
  );
  const [dotLeft, setDotLeft] = React.useState(-10);
  const [barWidth, setBarWidth] = React.useState(0);
  const [lastTimeout, setLastTimeout] = React.useState<number | null>();

  React.useEffect(() => {
    if (props.value) setValue(props.value);
  }, [props.value]);

  React.useEffect(() => {
    if (sliderBack.current) {
      const bounds = sliderBack.current.getBoundingClientRect();
      const left = positionMap(value, min, max, -10, bounds.width - 10);
      setDotLeft(left);
      const width = positionMap(value, min, max, 0, bounds.width);
      setBarWidth(width);
    }
    if (lastTimeout) window.clearTimeout(lastTimeout);
    setLastTimeout(
      window.setTimeout(() => {
        if (props.onValueChange) props.onValueChange(value);
        setLastTimeout(null);
      }, 250),
    );
  }, [value, props.min, props.max, props.value, sliderBack]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const bounding = e.currentTarget.getBoundingClientRect();
    const val = positionMap(e.clientX, bounding.left, bounding.right, min, max);
    setValue(Math.round(val));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (sliderBack.current) {
      const bounds = sliderBack.current.getBoundingClientRect();
      const val = positionMap(e.clientX, bounds.left, bounds.right, min, max);
      setValue(Math.round(val));
    }
  };

  const handleMouseUp = (e: MouseEvent) => {
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
  };

  return (
    <div>
      <div
        style={{
          fontWeight: 'bold',
        }}
      >
        {props.label}
      </div>
      <div
        style={{
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
        }}
      >
        <div
          style={{
            flex: 0,
            padding: 10,
          }}
        >
          {min}
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            ref={sliderBack}
            style={{
              backgroundColor: '#999',
              height: 5,
              flex: 1,
              position: 'relative',
              marginLeft: 10,
              marginRight: 10,
            }}
            onClick={handleClick}
          >
            <div
              style={{
                backgroundColor: '#84bd00',
                height: 5,
                position: 'absolute',
                width: barWidth,
              }}
            ></div>
            <div
              style={{
                backgroundColor: '#84bd00',
                width: 20,
                height: 20,
                borderRadius: '50%',
                position: 'absolute',
                top: -8,
                left: dotLeft,
              }}
              onMouseDown={handleMouseDown}
            ></div>
          </div>
        </div>
        <div
          style={{
            flex: 0,
            padding: 10,
          }}
        >
          {max}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#84bd00',
              padding: '4px 7px',
              flex: 0,
              marginLeft: 10,
            }}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};
