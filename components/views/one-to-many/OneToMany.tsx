'use client';

import {useState, ChangeEvent, MouseEvent, useEffect} from 'react';
import Image from 'next/image';
import {FaHome} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {FaCamera} from 'react-icons/fa';
import {useSetRecoilState} from 'recoil';
import {FaPortrait} from 'react-icons/fa';
import {alertModalState} from 'data/AlertModal';
import {defaultName} from 'components/types/mockup';
import CommonImages from 'assets/images/CommonImages';
import HaryboMain from 'assets/images/harybo_main.png';
import {loadingSpinnerState} from 'data/LoadingSpinner';
import {getUniqueKey} from 'components/utils/StringUtils';

interface IProps {
  onBack(): void;
  onConfirm(data: string[], first: string[], second: string[]): void;
}

function OneToMany({onBack, onConfirm}: IProps) {
  const [defaultUser, setDefaultUser] = useState<string[]>(defaultName.sort()); // * All User
  const [selectUser, setSelectUser] = useState<string[]>([]); // * selected User
  const [addUser, setAddUser] = useState<string>(''); // * add User
  const [firstArr, setFirstArr] = useState<string[]>([]); // * first random Array
  const setAlertModal = useSetRecoilState(alertModalState); // * alert
  const setIsLoading = useSetRecoilState(loadingSpinnerState); // * spinner

  // * loading
  useEffect(() => {
    setIsLoading(false);
  }, []);

  // * make firstArr
  useEffect(() => {
    const firstArrData: string[] = selectUser.slice(); // * copy arr

    for (let i = firstArrData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [firstArrData[i], firstArrData[j]] = [firstArrData[j], firstArrData[i]];
    }

    setFirstArr(firstArrData);
  }, [selectUser]);

  //* click default user name
  const onClickDefaultUser = (event: MouseEvent): void => {
    const {textContent} = event.currentTarget as HTMLButtonElement;

    if (textContent && selectUser.includes(textContent)) {
      setAlertModal({
        title: '알림',
        content: <>이미 선택되었습니다.</>,
        confirmLabel: '확인',
        onConfirm: () => {}
      });
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

    if (defaultUser.includes(addUser.trim())) {
      setAlertModal({
        title: '알림',
        content: <>이미 등록되어 있습니다.</>,
        confirmLabel: '확인',
        onConfirm: () => {}
      });
      setAddUser('');
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
      setAlertModal({
        title: '알림',
        content: <>3명 이상 선택해주세요.</>,
        confirmLabel: '확인',
        onConfirm: () => {}
      });
      return;
    }

    // * spinner
    setIsLoading(true);

    const result: string[] = [];
    const secondArrData: string[] = firstArr.slice();

    let j = 0;
    while (j < firstArr.length) {
      const findData = secondArrData.find((user: string) => {
        return user !== firstArr[j];
      });

      // * escape
      if (secondArrData.length === 0 || findData === undefined) {
        break;
      }

      if (findData) {
        // * push
        result.push(findData);

        // * delete secondArrData
        const findIndex = secondArrData.indexOf(findData);
        secondArrData.splice(findIndex, 1);
        j++;
      }

      // * shuffled secondArrData
      for (let i = secondArrData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [secondArrData[i], secondArrData[j]] = [secondArrData[j], secondArrData[i]];
      }
    }

    onConfirm(selectUser, firstArr, result);
  };

  return (
    <>
      <section className="oneToMany-first-section">
        <h1>1:N</h1>
        <p style={{whiteSpace: 'pre-line'}}>
          1:N은 한 사람당 2명과 매칭이 가능합니다.{'\n'}
          매칭되는 2명은 랜덤입니다.{'\n'}
          매칭될 사람과의 만남을 기대해주세요!
        </p>
      </section>
      <section className="oneToMany-second-section">
        <div className="oneToMany-add-name">
          <span>name</span>
          <input type="text" name="newInputName" value={addUser} onChange={onchangeWriteUserName} />
          <button onClick={onClickAddUserName}>추가</button>
        </div>
        <div className="oneToMany-select-name">
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
      <section className="oneToMany-third-section">
        {selectUser.length > 0 && (
          <span>
            총 <strong>{selectUser.length}</strong>명
          </span>
        )}
      </section>
      <div className="oneToMany-cards-wrap">
        {selectUser.map((selected) => (
          <div className="oneToMany-card" key={getUniqueKey()}>
            <article className="oneToMany-card-first-article">
              <span>R</span>
              <p>{selected}</p>
              <div className="oneToMany-card-image" onClick={() => onClickDeleteSelectedUser(selected)}>
                <img src={CommonImages.get('close')} alt="닫기" />
              </div>
            </article>
            <article className="oneToMany-card-second-article">
              <Image
                style={{objectFit: 'cover', width: '100%', height: '100%'}}
                src={HaryboMain}
                alt="harybo-main"
                priority
              />
            </article>
            <article className="oneToMany-card-third-article">
              <FaHome />
              <FaSearch />
              <FaCamera />
              <FaHeart />
              <FaPortrait />
            </article>
          </div>
        ))}
      </div>
      <section className="oneToMany-fourth-section">
        {selectUser.length > 0 && <button onClick={onClickConfirm}>결과보기</button>}
        <button onClick={() => onBack()}>뒤로가기</button>
      </section>
    </>
  );
}

export default OneToMany;
