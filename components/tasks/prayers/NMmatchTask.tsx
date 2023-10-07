'use client';

import React, {useState} from 'react';
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';
import NMmatch from '@/components/views/nmmatch/NMmatch';
import Result from '@/components/views/nmmatch/Result';
interface ICount {
  [key: string]: number;
}
function NMmatchTask() {
  const [step, setStep] = useState(0); //* next step or prev step
  const [users, setUsers] = useState<string[]>([]); //* selected users
  const [nameCount, setNameCount] = useState<ICount>({}); //* name count

  const onConfirmNMmatch = (selectUser: string[], nameCount: ICount): void => {
    setUsers(selectUser);
    setNameCount(nameCount);
    setStep((prev) => prev + 1);
  };

  const onComfirmResult = (): void => {
    setStep((prev) => prev - 1);
  };

  return (
    <>
      <Header />
      {step === 0 && <NMmatch onConfirm={onConfirmNMmatch} />}
      {step === 1 && <Result data={users} count={nameCount} onConfirm={onComfirmResult} />}
      <Footer />
    </>
  );
}

export default NMmatchTask;
