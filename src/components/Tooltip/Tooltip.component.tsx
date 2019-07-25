import * as React from 'react';

const tooltipMaxWidth = 300;
const tooltipMaxHeight = 250;

export interface ITooltipProps {
  hoverItem: any;
  defaultUp?: boolean;
}

export const Tooltip: React.FC<ITooltipProps> = props => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [popupCoords, setPopupCoords] = React.useState<
    [number, number, number]
  >();
  const [isUp, setIsUp] = React.useState(false);
  const [height, setHeight] = React.useState(tooltipMaxHeight);
  const [width, setWidth] = React.useState(tooltipMaxWidth);
  const infoPoint = React.useRef<HTMLDivElement>(null);
  const popupBox = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (infoPoint.current && popupBox.current) {
      const height = popupBox.current.clientHeight;
      setHeight(height);
      const width = popupBox.current.clientWidth;
      setWidth(width);
      const bounds = infoPoint.current.getBoundingClientRect();

      let centerX = bounds.left + bounds.width / 2 - width / 2;
      if (centerX + width / 2 >= window.innerWidth) {
        centerX = window.innerWidth - width / 2;
      }
      if (centerX - width / 2 < 0) {
        centerX = width / 2;
      }

      let centerY = bounds.bottom;
      if (centerY + height >= window.innerHeight || props.defaultUp) {
        centerY = bounds.top - height;
        setIsUp(true);
      } else {
        setIsUp(false);
      }
      if (centerY < 0) {
        centerY = 15;
      }

      const infoOffset = centerX - (bounds.left + bounds.width / 2) + width;

      setPopupCoords([centerX, centerY, infoOffset]);
    }
  }, [showPopup]);

  const handleMouseEnter = () => setShowPopup(true);
  const handleMouseLeave = () => {
    setShowPopup(false);
    setPopupCoords(undefined);
  };

  const left = popupCoords ? popupCoords[0] : 0;
  const top = popupCoords ? popupCoords[1] : 0;
  const infoX = popupCoords ? popupCoords[2] : 0;

  return (
    <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span ref={infoPoint}>{props.hoverItem}</span>
      {showPopup && (
        <div
          ref={popupBox}
          style={{
            position: 'fixed',
            left,
            top,
            zIndex: 10000,
            maxWidth: tooltipMaxWidth,
          }}
        >
          <svg
            x={0}
            y={0}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            style={{
              position: 'absolute',
              zIndex: -1,
            }}
          >
            <defs>
              <filter id="f1" x="-50%" y="-50%" width="200%" height="200%">
                <feOffset result="offOut" in="SourceAlpha" dx={0} dy={0} />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation={2} />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
              </filter>
            </defs>
            <g>
              <rect
                width={width - 20}
                height={height - 20}
                x={10}
                y={10}
                rx={5}
                fill="white"
                filter="url(#f1)"
              />
              <g>
                {isUp === false && (
                  <polygon
                    points={`${infoX},4 ${infoX + 10},11 ${infoX - 10},11`}
                    fill="white"
                    filter="url(#f1)"
                  />
                )}
                {isUp === true && (
                  <polygon
                    points={`${infoX},${height - 4} ${infoX + 10},${height -
                      11} ${infoX - 10},${height - 11}`}
                    fill="white"
                    filter="url(#f1)"
                  />
                )}
                <rect
                  width={width - 20}
                  height={height - 20}
                  x={10}
                  y={10}
                  rx={5}
                  fill="white"
                />
              </g>
            </g>
          </svg>
          <div
            style={{
              padding: 20,
            }}
          >
            {props.children}
          </div>
        </div>
      )}
    </span>
  );
};

export interface IInfoTooltipProps {
  title?: string;
  text: string;
}

export const InfoTooltip: React.FC<IInfoTooltipProps> = props => {
  return (
    <Tooltip
      hoverItem={
        <i
          className="fas fa-info-circle"
          style={{
            color: '#14A4DE',
            cursor: 'pointer',
          }}
        ></i>
      }
    >
      <>
        {props.title && (
          <div
            style={{
              fontSize: '0.9em',
              fontWeight: 'bold',
              marginBottom: 14,
            }}
          >
            {props.title}
          </div>
        )}
        <div
          style={{
            fontSize: '0.8em',
          }}
        >
          {props.text}
        </div>
      </>
    </Tooltip>
  );
};

export interface ITextTooltipProps {
  hoverText: string;
  tooltipText: string;
}

export const TextTooltip: React.FC<ITextTooltipProps> = props => {
  return (
    <Tooltip
      defaultUp={true}
      hoverItem={
        <span
          style={{
            textDecoration: 'underline dotted',
          }}
        >
          {props.hoverText}
        </span>
      }
    >
      {props.tooltipText}
    </Tooltip>
  );
};
