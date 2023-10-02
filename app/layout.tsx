import {PropsWithChildren} from 'react';
import StyledJsxRegistry from './registry';
import Head from 'next/head';
import 'assets/styles/reset.scss';

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="ko">
      <Head>
        <title>good</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
