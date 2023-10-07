'use client';

import {useState, ChangeEvent, MouseEvent} from 'react';
import {defaultName} from '@/components/types/mockup';
import {getUniqueKey} from '@/components/utils/StringUtils';
interface ICount {
  [key: string]: number;
}
interface IProps {
  onConfirm(data: string[], nameCount: ICount): void;
}

function NMmatch({onConfirm}: IProps) {
  const [defaultUser, setDefaultUser] = useState<string[]>(defaultName); // * All User
  const [addUser, setAddUser] = useState<string>(''); // * add User
  const [selectUser, setSelectUser] = useState<string[]>([]); // * selected User

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
    setDefaultUser((prev) => [...prev, addUser]);
    setAddUser('');
  };

  //* result
  const onClickConfirm = (): void => {
    if (selectUser.length < 3) {
      alert('3명 이상 선택해주세요.');
      return;
    }

    const nameCount: ICount = {};
    selectUser.forEach((name) => {
      if (!nameCount[name]) {
        nameCount[name] = 2;
      }
    });

    onConfirm(selectUser, nameCount);
  };

  return (
    <>
      <article>
        <div>이름을 선택해주세요</div>
        <div>
          <span>
            총 <strong>{defaultUser.length}</strong>명
          </span>
          {defaultUser?.map((name) => (
            <button key={getUniqueKey()} onClick={onClickDefaultUser}>
              {name}
            </button>
          ))}
          <input type="text" name="newInputName" value={addUser} onChange={onchangeWriteUserName} />
          <button onClick={onClickAddUserName}>추가</button>
        </div>
      </article>
      <div>
        {selectUser.map((selected) => (
          <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
            <div
              key={getUniqueKey()}
              style={{
                width: 100,
                height: 100,
                textAlign: 'center',
                backgroundColor: 'red'
              }}
            >
              {selected}
            </div>
          </div>
        ))}
      </div>
      <section>
        <button onClick={onClickConfirm}>결과보기</button>
      </section>
    </>
  );
}

export default NMmatch;
