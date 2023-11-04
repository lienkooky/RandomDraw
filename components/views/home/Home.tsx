'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import css from 'styled-jsx/css';
import onToManyBackImage from 'assets/images/oneToManyBack.png';
import onToManyFrontImage from 'assets/images/oneToManyFront.png';
import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const style = css`
  h1 {
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 100px;
    padding: 100px 30px 0px 30px;
  }
  .first-article {
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 100px 30px 0px 30px;
    height: 700px;
  }
`;

function Home() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <Header />
      <main>
        <h1>Random Draw</h1>
        <article className="first-article">
          <div style={{whiteSpace: 'pre-line', width: '50%', height: 'auto', backgroundColor: 'red'}}>
            <strong style={{color: 'black', fontSize: 50}}>If</strong> you want to draw randomly, {'\n'} press the start
            button.
          </div>
          <div style={{width: '30%', height: 'auto'}}>
            <Slider {...settings}>
              <Image src={onToManyFrontImage} alt="onToManyFrontImage" />
              <Image src={onToManyBackImage} alt="onToManyBackImage" />
            </Slider>
          </div>
        </article>
      </main>
      <Footer />
      <style jsx>{style}</style>
    </>
  );
}

export default Home;
