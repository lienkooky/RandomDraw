'use client';

import {ReactElement} from 'react';
import Image from 'next/image';
import css from 'styled-jsx/css';
import RamdomDraw from 'assets/images/randomDrawLogo.png';

const style = css`
  header {
    display: flex;
    align-items: center;
    z-index: 1;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    border: 1px solid red;
  }
  .logo-header {
    padding: 20px;
  }
`;

function Header(): ReactElement {
  return (
    <header>
      <div className="logo-header">
        <Image src={RamdomDraw} alt="logo" />
      </div>
      <div>
        <span>1:N</span>
        <span>about</span>
        <span>more</span>
      </div>
      <style jsx>{style}</style>
    </header>
  );
}

export default Header;
