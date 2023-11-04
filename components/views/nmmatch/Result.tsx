'use client';

import {useEffect, useState} from 'react';

interface IProps {
  userList: string[];
  firstArr: string[];
  secondArr: string[];
  onConfirm(): void;
}

function Result({userList, firstArr, secondArr, onConfirm}: IProps) {
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    const resultArr: any = [];
    const shuffledList = [...userList];
    let j = 0;

    while (j < userList.length) {
      const findData = shuffledList.find((user: string) => {
        return user !== firstArr[j] && user !== secondArr[j];
      });
      if (findData) {
        const obj: any = {};
        const findIndex = shuffledList.indexOf(findData);
        obj[findData] = [firstArr[j], secondArr[j]];
        resultArr.push(obj);
        shuffledList.splice(findIndex, 1);
        j++;
      }
    }
  }, [userList]);

  const onClickConfirm = (): void => {
    onConfirm();
  };

  return (
    <section>
      <button onClick={onClickConfirm}>다시하기</button>
    </section>
  );
}

export default Result;

/*
const firstArr: string[] = [];
    const secondArr: string[] = [];
    const resultArr: string[] = [];

    const predecessor = async (): Promise<string> => {
      while (userList.length !== firstArr.length) {
        const randomIndex = Math.floor(Math.random() * userList.length);
        const findData = firstArr.find((user) => user === userList[randomIndex]);

        if (!findData) {
          firstArr.push(userList[randomIndex]);
        }
      }

      let i = 0;
      while (userList.length !== secondArr.length) {
        const randomIndex = Math.floor(Math.random() * userList.length);
        const findData = secondArr.find((user) => user === userList[randomIndex]);

        if (!findData) {
          if (firstArr[i] !== userList[randomIndex]) {
            secondArr.push(userList[randomIndex]);
            i++;
          }
        }
      }
      console.log('firstArr', firstArr);
      console.log('secondArr', secondArr);
      return 'ok';
    };
*/
