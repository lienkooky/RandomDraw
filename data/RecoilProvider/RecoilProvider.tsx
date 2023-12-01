'use client';

import {PropsWithChildren, ReactElement} from 'react';
import {RecoilRoot} from 'recoil';

function RecoilProvider({children}: PropsWithChildren): ReactElement {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilProvider;
