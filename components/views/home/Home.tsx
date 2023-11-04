'use client';

import React from 'react';
import css from 'styled-jsx/css';
import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';

const style = css`
  main {
    flex: 1;
    height: calc(100% - 48px);
  }
`;

function Home() {
  return (
    <>
      <Header />
      <main>
        <div>
          good<button onClick={() => {}}>click me!</button>
        </div>
      </main>
      <Footer />
      <style jsx>{style}</style>
    </>
  );
}

export default Home;
