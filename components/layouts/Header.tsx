'use client';

import {ReactElement} from 'react';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import RamdomDraw from 'assets/images/randomDrawLogo.png';


function Header(): ReactElement {
  const router = useRouter();

  return (
    <header className="header">
      <div className="mainLogo">
        <Image src={RamdomDraw} priority alt="logo" />
      </div>
      <div className="mainNav">
        <span style={{cursor: 'pointer', margin: '0 30px'}} onClick={() => router.push('/')}>
          Home
        </span>
        <span style={{cursor: 'pointer', margin: '0 30px'}} onClick={() => router.push('/oneToMany')}>
          1:N
        </span>
      </div>
    </header>
  );
}

export default Header;
