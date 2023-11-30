'use client';

import {relative} from 'path';
import React from 'react';
import css from 'styled-jsx/css';

const style = css`
  footer {
    width: 100%;
    padding: 0 30px;
    height: 30px;
  }
`;

function Footer() {
  return (
    <>
      <footer>2023. Designed By yeong.</footer>
      <style jsx>{style}</style>
    </>
  );
}

export default Footer;
