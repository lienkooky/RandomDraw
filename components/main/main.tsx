'use client';

import Image from 'next/image';
import photo1 from '@/assets/images/photo1.png';
import photo2 from '@/assets/images/photo2.png';
import photo3 from '@/assets/images/photo3.png';
import photo4 from '@/assets/images/photo4.png';

function Main() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
      <div className="hero-section">
        <div className="card-grid">
          <a className="card" href="#">
            <Image className="card__background" src={photo1} alt="photo1" />
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Image className="card__background" src={photo2} alt="photo2" />
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Image className="card__background" src={photo3} alt="photo3" />
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </a>
          <a className="card" href="#">
            <Image className="card__background" src={photo4} alt="photo4" />
            <div className="card__content">
              <p className="card__category">Category</p>
              <h3 className="card__heading">Example Card Heading</h3>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default Main;
