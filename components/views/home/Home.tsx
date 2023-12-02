'use client';

import React from 'react';
import {useSetRecoilState} from 'recoil';
import {useRouter} from 'next/navigation';
import {loadingSpinnerState} from 'data/LoadingSpinner';

function Home() {
  const router = useRouter(); // * router
  const setIsLoading = useSetRecoilState(loadingSpinnerState); // * spinner

  return (
    <>
      <section className="home-first-section">
        <h1>Random Draw</h1>
        <p style={{whiteSpace: 'pre-line', textAlign: 'center'}}>
          <strong>If</strong> you would like to participate in the random draw, {'\n'} please click the button below.
        </p>
        <button
          onClick={() => {
            setIsLoading(true);
            router.push('/oneToMany');
          }}
        >
          start
        </button>
      </section>
    </>
  );
}

export default Home;
