'use client';

import {ReactElement} from 'react';
import css from 'styled-jsx/css';

const style = css`
  header {
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 12px;
    height: 48px;
    font-size: 50px;
    font-weight: bold;
    border: 1px solid red;
  }
`;

function Header(): ReactElement {
  return (
    <>
      <header>Yeong's</header>
      <div>
        <span>N:M</span>
        <span>about</span>
        <span>more</span>
      </div>
      <style jsx>{style}</style>
    </>
  );
}

export default Header;
