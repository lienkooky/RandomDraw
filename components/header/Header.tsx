'use client';

import React from 'react';
import css from 'styled-jsx/css';

const style = css`
  header {
    font-size: 50px;
    font-weight: bold;
    border: 1px solid red;
  }
`;

function Header() {
  return (
    <>
      <header>Yeong's</header>
      <style jsx>{style}</style>
    </>
  );
}

export default Header;
