'use client';

import React, {useState} from 'react';
import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';
import NMmatch from '@/components/views/nmmatch/NMmatch';
import Result from '@/components/views/nmmatch/Result';

function NMmatchTask() {
  const [step, setStep] = useState(0); //* next step or prev step
  const [userList, setUserList] = useState<string[]>([]); //* selected users
  const [firstArr, setFirstArr] = useState<string[]>([]); //* random firstArr
  const [secondArr, setSecondArr] = useState<string[]>([]); //* random secondArr

  const onConfirmNMmatch = (selectUser: string[], first: string[], second: string[]): void => {
    setUserList(selectUser);
    setFirstArr(first);
    setSecondArr(second);
    setStep((prev) => prev + 1);
  };

  const onComfirmResult = (): void => {
    setStep((prev) => prev - 1);
  };

  return (
    <>
      <Header />
      {step === 0 && <NMmatch onConfirm={onConfirmNMmatch} />}
      {step === 1 && (
        <Result userList={userList} firstArr={firstArr} secondArr={secondArr} onConfirm={onComfirmResult} />
      )}
      <Footer />
    </>
  );
}

export default NMmatchTask;
