import {PropsWithChildren} from 'react';
import StyledJsxRegistry from './registry';
// import 'assets/styles/reset.scss';

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
