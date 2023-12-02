'use client';

import React from 'react';
import Image from 'next/image';
import css from 'styled-jsx/css';
import {useRecoilValue} from 'recoil';
import {loadingSpinnerState} from 'data/LoadingSpinner';
import loadingSpinner from 'assets/images/loading_spinner.gif';

function Spinner() {
  const isShow = useRecoilValue(loadingSpinnerState);

  if (isShow) {
    return (
      <div className="spinner">
        <h3>잠시만 기다려주세요.</h3>
        <Image src={loadingSpinner} priority alt="spinner" />
        <style jsx>{`
          .spinner {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #888;
            gap: 18px;
          }
        `}</style>
      </div>
    );
  }

  return undefined;
}

export default Spinner;
