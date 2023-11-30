'use client';

import {ReactElement} from 'react';
import Image from 'next/image';
import css from 'styled-jsx/css';
import {useRouter} from 'next/navigation';
import RamdomDraw from 'assets/images/randomDrawLogo.png';

const style = css`
  header {
    display: flex;
    align-items: center;
    padding: 30px;
    margin: 0 auto;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: #ffffff;
  }
  header ::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    opacity: 0.1;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0, #000 100%);
    height: 7px;
  }
`;

function Header(): ReactElement {
  const router = useRouter();

  return (
    <header>
      <div style={{flex: 1}}>
        <Image src={RamdomDraw} alt="logo" />
      </div>
      <div style={{flex: 4}}>
        <span style={{cursor: 'pointer', margin: '0 30px'}} onClick={() => router.push('/')}>
          Home
        </span>
        <span style={{cursor: 'pointer', margin: '0 30px'}} onClick={() => router.push('/oneToMany')}>
          1:N
        </span>
      </div>
      <style jsx>{style}</style>
    </header>
  );
}

export default Header;
