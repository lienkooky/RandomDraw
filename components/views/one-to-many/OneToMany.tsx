'use client';

import {useState, ChangeEvent, MouseEvent, useEffect} from 'react';
import Image from 'next/image';
import css from 'styled-jsx/css';
import {FaHome} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {FaCamera} from 'react-icons/fa';
import {FaPortrait} from 'react-icons/fa';
import {defaultName} from 'components/types/mockup';
import CommonImages from 'assets/images/CommonImages';
import HaryboMain from 'assets/images/harybo_main.png';
import {getUniqueKey} from 'components/utils/StringUtils';

interface IProps {
  onBack(): void;
  onConfirm(data: string[], first: string[], second: string[]): void;
}

function OneToMany({onBack, onConfirm}: IProps) {
  const [defaultUser, setDefaultUser] = useState<string[]>(defaultName.sort()); // * All User
  const [selectUser, setSelectUser] = useState<string[]>([]); // * selected User
  const [addUser, setAddUser] = useState<string>(''); // * add User
  const [firstArr, setFirstArr] = useState<string[]>([]);
  const [secondArr, setSecondArr] = useState<string[]>([]);

  useEffect(() => {
    const firstArrData: string[] = selectUser.slice(); // * copy arr

    for (let i = firstArrData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [firstArrData[i], firstArrData[j]] = [firstArrData[j], firstArrData[i]];
    }

    console.log('firstArrData', firstArrData);
    setFirstArr(firstArrData);
  }, [selectUser]);

  //* click default user name
  const onClickDefaultUser = (event: MouseEvent): void => {
    const {textContent} = event.currentTarget as HTMLButtonElement;

    if (textContent && selectUser.includes(textContent)) {
      alert('이미 선택되었습니다.');
      return;
    }

    setSelectUser((prev) => [...prev, textContent ?? '']);
  };

  //* write user name
  const onchangeWriteUserName = (event: ChangeEvent): void => {
    const {value} = event.target as HTMLInputElement;
    setAddUser(value);
  };

  //* add user name
  const onClickAddUserName = (): void => {
    if (addUser.trim() === '') {
      return;
    }
    setDefaultUser((prev) => [...prev, addUser]);
    setAddUser('');
  };

  //* delete user name
  const onClickDeleteSelectedUser = (selected: string) => {
    setSelectUser((prev) => prev.filter((el) => el !== selected));
  };

  //* result
  const onClickConfirm = (): void => {
    if (selectUser.length < 3) {
      alert('3명 이상 선택해주세요.');
      return;
    }

    const secondArrData: string[] = firstArr.slice();

    for (let i = secondArrData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [secondArrData[i], secondArrData[j]] = [secondArrData[j], secondArrData[i]];
    }

    const result: string[] = [];
    for (let i = 0; i < firstArr.length; i++) {
      let user = secondArrData[i];
      while (firstArr[i] === user) {
        user = secondArrData[Math.floor(Math.random() * firstArr.length)];
      }
      result.push(user);
    }

    console.log('result', result);

    onConfirm(selectUser, firstArr, result);
  };

  return (
    <>
      <section className="first-section">
        <h1>1:N</h1>
        <p style={{whiteSpace: 'pre-line'}}>
          1:N은 한 사람당 2명과 매칭이 가능합니다.{'\n'}
          매칭되는 2명은 랜덤입니다.{'\n'}
          매칭될 사람과의 만남을 기대해주세요!
        </p>
      </section>
      <section className="second-section">
        <div className="add-name">
          <span>이름</span>
          <input type="text" name="newInputName" value={addUser} onChange={onchangeWriteUserName} />
          <button onClick={onClickAddUserName}>추가</button>
        </div>
        <div className="select-name">
          <span>Select</span>
          {defaultUser?.map((name) => (
            <button
              className={selectUser.find((el) => el === name) ? 'active' : ''}
              key={getUniqueKey()}
              onClick={onClickDefaultUser}
            >
              {name}
            </button>
          ))}
        </div>
      </section>
      <section className="third-section">
        <span>
          총 <strong>{selectUser.length}</strong>명
        </span>
      </section>
      <div className="cards-wrap">
        {selectUser.map((selected) => (
          <div className="card" key={getUniqueKey()}>
            <article className="card-first-article">
              <span>R</span>
              <p>{selected}</p>
              <div className="card-image" onClick={() => onClickDeleteSelectedUser(selected)}>
                <img src={CommonImages.get('close')} alt="닫기" />
              </div>
            </article>
            <article>
              <Image style={{objectFit: 'cover'}} src={HaryboMain} alt="harybo-main" layout="responsive" priority />
            </article>
            <article className="card-third-article">
              <FaHome />
              <FaSearch />
              <FaCamera />
              <FaHeart />
              <FaPortrait />
            </article>
          </div>
        ))}
      </div>
      <section className="fourth-section">
        {selectUser.length > 0 && <button onClick={onClickConfirm}>결과보기</button>}
        <button onClick={() => onBack()}>뒤로가기</button>
      </section>
      <style jsx>{`
        .first-section {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          text-align: center;
          padding: 0 30px;
          width: 100%;
          height: 500px;
        }
        .second-section {
          box-sizing: border-box;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0 30px;
          gap: 20px;
        }
        .add-name {
          display: flex;
          alien-items: center;
          justify-content: flex-start;
          width: 400px;
          position: relative;
          border: 1px solid #201e33;
          border-radius: 15px;
          padding: 10px 10px;
          gap: 10px;
          > span {
            display: inline-block;
            position: absolute;
            padding: 10px;
            font-size: 20px;
            font-weight: bold;
            top: -20px;
            left: 14px;
            background-color: #fff;
            color: #888;
            width: auto;
          }
          > input {
            padding-left: 10px;
            min-width: 100px;
            max-width: 300px;
            font-size: 30px;
            border: 0;
            border-radius: 15px;
            outline: none;
            background-color: rgb(233, 233, 233);
            margin: 20px auto;
          }
          > button {
            margin: 20px auto;
            padding: 10px;
            font-size: 20px;
            font-weight: bold;
            outline: none;
            border-radius: 15px;
            border: 1px solid #2f4858;
            background-color: #2f4858;
            color: #fff;
            cursor: pointer;
            transition: all 0.4s;
            &:hover {
              background-color: #fff;
              border: 1px solid #2f4858;
              color: #2f4858;
            }
          }
        }
        .select-name {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          position: relative;
          border: 1px solid #201e33;
          border-radius: 15px;
          padding: 23px;
          gap: 10px;
          > .active {
            background-color: #2f4858;
            color: #fff;
          }
          > span {
            display: inline-block;
            position: absolute;
            top: -20px;
            left: 14px;
            padding: 10px;
            background: #ffffff;
            font-size: 20px;
            font-weight: bold;
            color: #888;
          }
          > button {
            position: relative;
            text-align: center;
            padding: 15px 25px;
            border: 0;
            border-radius: 15px;
            font-size: 25px;
            font-weight: bold;
            cursor: pointer;
          }
        }
        .third-section {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          padding: 0 30px;
          > span {
            display: inline-block;
            justify-content: flex-start;
            margin: 30px 0;
          }
        }
        .cards-wrap {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: row;
          padding: 0 30px;
          gap: 10px;
        }
        .card {
          max-width: 350px;
          height: 500;
          border: 1px solid black;
          border-radius: 10px;
          gap: 10px;
        }
        .card-first-article {
          display: flex;
          align-items: center;
          justify-content: space-between;
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
          .card-image {
            width: 40px;
            height: 40px;
            border: 1px solid black;
            border-radius: 10px;
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background-color: white;
            transition: all 0.4s;
            > img {
              width: 20px;
              heigth: 20px;
            }
          }
        }
        .card-third-article {
          display: inline-flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
        }
        .fourth-section {
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
            cursor: pointer;
            background-color: #2f4858;
            color: #fff;
            transition: all 0.4s;
            &:hover {
              background-color: #fff;
              border: 1px solid #2f4858;
              color: #2f4858;
            }
          }
        }
      `}</style>
    </>
  );
}

export default OneToMany;
