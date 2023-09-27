import {PropsWithChildren} from 'react';
import StyledJsxRegistry from './registry';
import 'assets/styles/reset.scss';
import Link from 'next/link';

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="ko">
      <Link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
