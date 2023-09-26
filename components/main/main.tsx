'use client';

import css from 'styled-jsx/css';

const style = css`
  .img1 {
    background-image: url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
  }
  .img2 {
    background-image: url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
  }
  .img3 {
    background-image: url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
  }
  .img4 {
    background-image: url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
  }
`;

function Main() {
  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' />
      <div className='hero-section'>
        <div className='card-grid'>
          <a className='card' href='#'>
            <div className='card__background img1' />
            <div className='card__content'>
              <p className='card__category'>Category</p>
              <h3 className='card__heading'>Example Card Heading</h3>
            </div>
          </a>
          <a className='card' href='#'>
            <div className='card__background img2' />
            <div className='card__content'>
              <p className='card__category'>Category</p>
              <h3 className='card__heading'>Example Card Heading</h3>
            </div>
          </a>
          <a className='card' href='#'>
            <div className='card__background img3' />
            <div className='card__content'>
              <p className='card__category'>Category</p>
              <h3 className='card__heading'>Example Card Heading</h3>
            </div>
          </a>
          <a className='card' href='#'>
            <div className='card__background img4' />
            <div className='card__content'>
              <p className='card__category'>Category</p>
              <h3 className='card__heading'>Example Card Heading</h3>
            </div>
          </a>
        </div>
        <style>{style}</style>
      </div>
    </>
  );
}
export default Main;
