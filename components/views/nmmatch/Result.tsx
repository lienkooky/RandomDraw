'use client';

import React, {useState, useEffect} from 'react';

interface IProps {
  data: string[];
  count: ICount;
  onConfirm(): void;
}

interface ICount {
  [key: string]: number;
}

function Result({data, count, onConfirm}: IProps) {
  const test: ICount = {
    김유정: 2,
    손건영: 2,
    윤여진: 2,
    이해원: 2,
    임정혁: 2
  };

  useEffect(() => {
    for (const key in test) {
      console.log('key', key);
      console.log('key', test[key]);
    }
  }, []);

  const onClickConfirm = (): void => {
    onConfirm();
  };
  return (
    <section>
      <button onClick={onClickConfirm}>다시하기</button>
    </section>
  );
}

export default Result;
