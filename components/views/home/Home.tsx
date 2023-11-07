'use client';

import React from 'react';
import css from 'styled-jsx/css';
import {useRouter} from 'next/navigation';
import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';

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
    > p {
      margin-top: 100px;
    }
    > button {
      margin-top: 100px;
      padding: 50px;
      font-size: 80px;
    }
  }
`;

function Home() {
  const router = useRouter();

  return (
    <>
      <Header />
      <section className="first-section">
        <h1>Random Draw</h1>
        <p style={{whiteSpace: 'pre-line'}}>
          <strong>If</strong> you would like to participate in the random draw, {'\n'} please click the button below.
        </p>
        <button onClick={() => router.push('/oneToMany')}>start</button>
      </section>
      <Footer />
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
