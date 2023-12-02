'use client';

import React, {useState} from 'react';
import {useRouter} from 'next/navigation';
import Result from 'components/views/one-to-many/Result';
import OneToMany from 'components/views/one-to-many/OneToMany';

function OneToManyTask() {
  const [step, setStep] = useState(0); // * next step or prev step
  const [userList, setUserList] = useState<string[]>([]); // * selected users
  const [firstArr, setFirstArr] = useState<string[]>([]); // * random firstArr
  const [secondArr, setSecondArr] = useState<string[]>([]); // * random secondArr
  const router = useRouter(); // * router

  // * bypass
  const onConfirmOneToMany = (selectUser: string[], first: string[], second: string[]): void => {
    setUserList(selectUser);
    setFirstArr(first);
    setSecondArr(second);
    setStep((prev) => prev + 1);
  };

  // * back
  const onComfirmResult = (): void => {
    setStep((prev) => prev - 1);
  };

  return (
    <>
      {step === 0 && (
        <OneToMany
          onConfirm={onConfirmOneToMany}
          onBack={() => {
            router.push('/');
          }}
        />
      )}
      {step === 1 && (
        <Result userList={userList} firstArr={firstArr} secondArr={secondArr} onConfirm={onComfirmResult} />
      )}
    </>
  );
}

export default OneToManyTask;
