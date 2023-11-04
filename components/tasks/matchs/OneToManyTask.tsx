'use client';

import React, {useState} from 'react';
import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';
import OneToMany from 'components/views/one-to-many/OneToMany';
import Result from 'components/views/one-to-many/Result';

function OneToManyTask() {
  const [step, setStep] = useState(0); //* next step or prev step
  const [userList, setUserList] = useState<string[]>([]); //* selected users
  const [firstArr, setFirstArr] = useState<string[]>([]); //* random firstArr
  const [secondArr, setSecondArr] = useState<string[]>([]); //* random secondArr

  const onConfirmOneToMany = (selectUser: string[], first: string[], second: string[]): void => {
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
      {step === 0 && <OneToMany onConfirm={onConfirmOneToMany} onBack={() => {}} />}
      {step === 1 && (
        <Result userList={userList} firstArr={firstArr} secondArr={secondArr} onConfirm={onComfirmResult} />
      )}
      <Footer />
    </>
  );
}

export default OneToManyTask;
