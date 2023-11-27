'use client';

import {useState, ChangeEvent, MouseEvent} from 'react';
import Image from 'next/image';
import css from 'styled-jsx/css';
import {defaultName} from 'components/types/mockup';
import CommonImages from 'assets/images/CommonImages';
import HaryboMain from 'assets/images/harybo_main.png';
import {getUniqueKey} from 'components/utils/StringUtils';
import {FaHome} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {FaCamera} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import {FaPortrait} from 'react-icons/fa';

interface IProps {
  onBack(): void;
  onConfirm(data: string[], first: string[], second: string[]): void;
}

function OneToMany({onBack, onConfirm}: IProps) {
  const [defaultUser, setDefaultUser] = useState<string[]>(defaultName.sort()); // * All User
  const [selectUser, setSelectUser] = useState<string[]>([]); // * selected User
  const [addUser, setAddUser] = useState<string>(''); // * add User

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

    const firstArr: string[] = [];
    const secondArr: string[] = [];

    while (selectUser.length !== firstArr.length) {
      const randomIndex = Math.floor(Math.random() * selectUser.length);
      const findData = firstArr.find((user) => user === selectUser[randomIndex]);

      if (!findData) {
        firstArr.push(selectUser[randomIndex]);
      }
    }

    let i = 0;
    while (selectUser.length !== secondArr.length) {
      const randomIndex = Math.floor(Math.random() * selectUser.length);
      const findData = secondArr.find((user) => user === selectUser[randomIndex]);

      if (!findData) {
        if (firstArr[i] !== selectUser[randomIndex]) {
          secondArr.push(selectUser[randomIndex]);
          i++;
        }
      }
    }
    console.log('firstArr', firstArr);
    console.log('secondArr', secondArr);

    onConfirm(selectUser, firstArr, secondArr);
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
          flex-direction: column;
          justify-content: center;
          padding: 0 30px;
          gap: 20px;
        }
        .add-name {
          display: flex;
          alien-items: center;
          justify-content: flex-start;
          width: 400px;
          position: relative;
          border: 1px solid red;
          border-radius: 15px;
          > span {
            display: inline-block;
            position: absolute;
            padding: 10px;
            font-size: 20px;
            font-weight: bold;
            top: -20px;
            left: 14px;
            background-color: rgb(233, 233, 233);
            color: #888;
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
            border: 0;
            border-radius: 15px;
            background-color: rgb(233, 233, 233);
            color: #888;
            cursor: pointer;
          }
        }
        .select-name {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          position: relative;
          border: 1px solid red;
          border-radius: 15px;
          padding: 20px;
          gap: 10px;
          > .active {
            background-color: orange;
          }
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
            > img {
              width: 20px;
              heigth: 20px;
              background-color: white;
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
            border: 0;
            border-radius: 15px;
            font-size: 40px;
            font-weight: bold;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
}

export default OneToMany;
