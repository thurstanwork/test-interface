import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { Loading } from './Loading.component.tsx';

const DemoLoading = () => {
  const [progress, setProgress] = useState(0);
  const [i, setI] = useState();

  useEffect(() => {
    let p = 0;
    setI(
      setInterval(() => {
        if (p >= 100) {
          p = 0;
        } else {
          p += 1;
        }
        setProgress(p);
      }, 100),
    );
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div>
      <Loading progress={progress} />
    </div>
  );
};

storiesOf('Loading', module)
  .addDecorator(withKnobs)
  .add('basic', () => (
    <div className="loading">
      <div className="spinner" />
    </div>
  ))
  .add('with text', () => {
    const loadingPercent = number('Loading Percent', 0, {
      range: true,
      min: 0,
      max: 100,
      step: 1,
    });

    return (
      <div className="loading">
        <div className="spinner" />
        <div className="text">{`Loading ${loadingPercent}%`}</div>
      </div>
    );
  })
  .add('react', () => (
    <div>
      <Loading />
      <DemoLoading />
    </div>
  ));
