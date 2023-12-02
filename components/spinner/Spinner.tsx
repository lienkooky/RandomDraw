'use client';

import React from 'react';
import Image from 'next/image';
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
      </div>
    );
  }

  return undefined;
}

export default Spinner;
