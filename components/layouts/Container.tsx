'use client';

import {ReactElement, ReactNode} from 'react';
import css from 'styled-jsx/css';

const style = css`
  .root-container {
    display: flex;
    flex-direction: column;
  }
`;

interface IProps {
  children: ReactNode | ReactNode[];
}

function Container({children}: IProps): ReactElement {
  return (
    <div className="root-container">
      {children}
      <style jsx>{style}</style>
    </div>
  );
}

export default Container;
