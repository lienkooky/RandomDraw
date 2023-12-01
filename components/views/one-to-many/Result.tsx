'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import css from 'styled-jsx/css';
import {FaHome} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {FaCamera} from 'react-icons/fa';
import {FaPortrait} from 'react-icons/fa';
import CommonImages from 'assets/images/CommonImages';
import {getUniqueKey} from 'components/utils/StringUtils';
import resultHeart from 'assets/images/result_heart.png';

interface IProps {
  userList: string[];
  firstArr: string[];
  secondArr: string[];
  onConfirm(): void;
}

function Result({userList, firstArr, secondArr, onConfirm}: IProps) {
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    // * shuffled data

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

    setResultList(resultArr);
  }, [userList]);

  const onClickConfirm = (): void => {
    onConfirm();
  };

  return (
    <>
      <section className="first-section">
        <div className="first-title">
          <strong>Matching Result</strong>
        </div>
      </section>
      <section className="second-section">
        <div className="matching-result">
          <span>Result</span>
          <div className="cards-wrap">
            {resultList.map((result) => {
              return (
                <div className="card" key={getUniqueKey()}>
                  <article className="card-first-article">
                    <span>R</span>
                    <p>{Object.keys(result)}</p>
                  </article>
                  <article className="card-second-article">
                    {Object.values(result)
                      .flat()
                      .map((user) => (
                        <div className="card-second-user" key={getUniqueKey()}>
                          <span>{user as unknown as string}</span>
                          <Image src={resultHeart} width={170} height={170} alt="heart" priority />
                        </div>
                      ))}
                  </article>
                  <article className="card-third-article">
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
      <section className="third-section">
        <button onClick={onClickConfirm}>다시하기</button>
      </section>
      <style jsx>{`
        .first-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          text-align: center;
          padding: 0 30px;
          width: 100%;
          height: 300px;
          > .first-title {
            font-size: 50px;
          }
        }
        .second-section {
          padding: 0 30px;
          > .matching-result {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            position: relative;
            border: 1px solid #2f4858;
            border-radius: 15px;
            padding: 30px;
            > span {
              display: inline-block;
              position: absolute;
              top: -20px;
              left: 14px;
              padding: 10px;
              background: white;
              font-size: 20px;
              font-weight: bold;
              color: #888;
            }
          }
        }
        .third-section {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 30px;
          margin: 30px 0;
          height: 300px;
          gap: 50px;
          > button {
            position: relative;
            text-align: center;
            padding: 25px 45px;
            border: 1px solid #2f4858;
            border-radius: 15px;
            font-size: 40px;
            font-weight: bold;
            background-color: #2f4858;
            color: #fff;
            cursor: pointer;
          }
        }
        .cards-wrap {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          gap: 10px;
        }
        .card {
          max-width: 350px;
          min-width: 350px;
          width: 350px;
          height: 500px;
          border: 1px solid black;
          border-radius: 10px;
          gap: 10px;
        }
        .card-first-article {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          box-sizing: border-box;
          padding: 0 20px;
          height: 80px;
          border-bottom: 1px solid black;
          > span {
            width: 60px;
            height: 60px;
            border: 1px solid black;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          > p {
            margin-top: 5px;
            margin-left: 10px;
          }
        }
        .card-second-article {
          width: 100%;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 10px;
        }
        .card-second-user {
          box-sizing: border-box;
          position: relative;
          > span {
            position: absolute;
            top: 50px;
            left: 25px;
            color: #201e33;
          }
        }
        .card-third-article {
          display: inline-flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
          border-top: 1px solid #2f4858;
          height: 70px;
        }
      `}</style>
    </>
  );
}

export default Result;
