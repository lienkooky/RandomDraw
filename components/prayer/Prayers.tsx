'use client';

import {useState, ChangeEvent, MouseEvent} from 'react';

const defaultName = ['해원', '정혁', '길연', '건', '건영', '여진', '희주', '상흠', '예림', '신웅', '채은', '유정'];

function Prayers() {
  const [option, setOption] = useState<string[]>(defaultName);
  const [userName, setUserName] = useState<string>('');
  const [selectOption, setSelectOption] = useState<string[]>([]);

  const onchangeUserName = (event: ChangeEvent) => {
    const {value} = event.target as HTMLInputElement;
    setUserName(value);
  };

  const onClickAddUserName = () => {
    setOption((prev) => [...prev, userName]);
    setUserName('');
  };

  return (
    <>
      <section>
        <article>
          <div>이름을 선택해주세요</div>
          <div>
            <span>
              총 <strong>{option.length}</strong>명
            </span>
            {option?.map((name, index) => (
              <button
                id={index.toString()}
                onClick={(event: MouseEvent) => {
                  const {textContent} = event.currentTarget as HTMLButtonElement;
                  setSelectOption((prev) => [...prev, textContent ?? '']);
                }}
              >
                {name}
              </button>
            ))}
            <input type="text" name="newInputName" value={userName} onChange={onchangeUserName} />
            <button onClick={onClickAddUserName}>추가</button>
          </div>
        </article>
      </section>
      <section>
        {selectOption.map((selected, index) => (
          <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
            <div id={index.toString()} style={{width: 200, height: 300, textAlign: 'center', backgroundColor: 'red'}}>
              {selected}
            </div>
          </div>
        ))}
      </section>
      <section>
        <button>결과보기</button>
      </section>
    </>
  );
}

export default Prayers;
