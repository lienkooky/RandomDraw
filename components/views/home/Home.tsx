'use client';

import React from 'react';
import css from 'styled-jsx/css';
import {useSetRecoilState} from 'recoil';
import {useRouter} from 'next/navigation';
import Header from 'components/layouts/Header';
import {loadingSpinnerState} from 'data/LoadingSpinner';

const style = css`
  .first-section {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    height: 1000px;
    > h1 {
      font-size: 100px;
    }
    > button {
      margin: 0 auto;
      margin-top: 100px;
      padding: 50px;
      font-size: 80px;
      font-weight: bold;
      outline: none;
      border-radius: 15px;
      border: 1px solid #2f4858;
      background-color: #2f4858;
      color: #fff;
      cursor: pointer;
      transition: all 0.4s;
      &:hover {
        background-color: #fff;
        border: 1px solid #2f4858;
        outline: auto;
        color: #2f4858;
      }
    }
  }
`;

function Home() {
  const router = useRouter(); // * router
  const setIsLoading = useSetRecoilState(loadingSpinnerState); // * spinner

  return (
    <>
      <Header />
      <section className="first-section">
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
      <style jsx>{style}</style>
    </>
  );
}

export default Home;

/*
 <div
            style={{
              whiteSpace: 'pre-line',
              backgroundColor: 'red'
            }}
          >
            <strong style={{color: 'black', fontSize: 50}}>If</strong> you want to draw randomly, {'\n'} press the start
            button.
            <strong style={{color: 'black', fontSize: 50}}>If</strong> you want to draw randomly, {'\n'} press the start
            button.
            <strong style={{color: 'black', fontSize: 50}}>If</strong> you want to draw randomly, {'\n'} press the start
            button.
          </div>
          <Image src={onToManyFrontImage} alt="onToManyFrontImage" />
          <Image src={onToManyBackImage} alt="onToManyBackImage" />
*/
