'use client';

import React from 'react';
import css from 'styled-jsx/css';

const style = css`
  footer {
    font-size: large;
    border: 1px solid red;
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
