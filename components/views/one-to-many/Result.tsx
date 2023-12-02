'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {FaHome} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {FaCamera} from 'react-icons/fa';
import {useSetRecoilState} from 'recoil';
import {FaPortrait} from 'react-icons/fa';
import CommonImages from 'assets/images/CommonImages';
import resultHeart from 'assets/images/result_heart.png';
import {loadingSpinnerState} from 'data/LoadingSpinner';
import {getUniqueKey} from 'components/utils/StringUtils';

interface IProps {
  userList: string[];
  firstArr: string[];
  secondArr: string[];
  onConfirm(): void;
}

function Result({userList, firstArr, secondArr, onConfirm}: IProps) {
  const [resultList, setResultList] = useState([]);
  const setIsLoading = useSetRecoilState(loadingSpinnerState);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    // * shuffled data

    const resultArr: any = [];
    const shuffledList = [...userList];
    let j = 0;

    while (j < userList.length) {
      const findData = shuffledList.find((user: string) => {
        return user !== firstArr[j] && user !== secondArr[j];
      });

      // * escape
      if (shuffledList.length === 0) {
        break;
      }

      if (findData) {
        const obj: any = {};
        const findIndex = shuffledList.indexOf(findData);
        obj[findData] = [firstArr[j], secondArr[j]];
        resultArr.push(obj);
        shuffledList.splice(findIndex, 1);
        j++;
      }
    }

    setResultList(resultArr);
  }, [userList]);

  // * image load
  const onLoadImage = (): void => {
    setIsLoading(false);
  };

  const onClickConfirm = (): void => {
    onConfirm();
  };

  return (
    <>
      <section className="oneToMany-result-first-section">
        <div className="oneToMany-result-first-title">
          <strong>Matching Result</strong>
        </div>
      </section>
      <section className="oneToMany-result-second-section">
        <div className="oneToMany-result-matching-result">
          <span>Result</span>
          <div className="oneToMany-result-cards-wrap">
            {resultList.map((result) => {
              return (
                <div className="oneToMany-result-card" key={getUniqueKey()}>
                  <article className="oneToMany-result-card-first-article">
                    <span>R</span>
                    <p>{Object.keys(result)}</p>
                  </article>
                  <article className="oneToMany-result-card-second-article">
                    {Object.values(result)
                      .flat()
                      .map((user) => (
                        <div className="oneToMany-result-card-second-user" key={getUniqueKey()}>
                          <span>{user as unknown as string}</span>
                          <Image src={resultHeart} width={170} height={170} alt="heart" onLoad={onLoadImage} priority />
                        </div>
                      ))}
                  </article>
                  <article className="oneToMany-result-card-third-article">
                    <FaHome />
                    <FaSearch />
                    <FaCamera />
                    <FaHeart />
                    <FaPortrait />
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="oneToMany-result-third-section">
        <button onClick={onClickConfirm}>다시하기</button>
      </section>
    </>
  );
}

export default Result;
