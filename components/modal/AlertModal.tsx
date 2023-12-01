'use client';

import {ReactElement, useEffect} from 'react';
import css from 'styled-jsx/css';
import {useRecoilState} from 'recoil';
import {alertModalState} from 'data/AlertModal';

function AlertModal(): ReactElement {
  const [alertModal, setAlertModal] = useRecoilState(alertModalState);

  const onClick = (): void => {
    alertModal?.onConfirm?.();
    setAlertModal(undefined);
  };

  if (alertModal === undefined) {
    return <></>;
  }

  return (
    <div className="modalContainer">
      <div className="modalWrap">
        <span>{alertModal.title}</span>
        <p>{alertModal.content}</p>
        <button onClick={onClick}>{alertModal?.confirmLabel || '확인'}</button>
      </div>
      <style jsx>{`
        .modalContainer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modalWrap {
          position: absolute;
          width: 500px;
          height: 400px;
          padding: 40px;
          text-align: center;
          border-radius: 15px;
          background-color: rgb(255, 255, 255);
          box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
          > span {
            width: 100%;
            position: absolute;
            top: 10%;
            left: 0;
          }
          > p {
            width: 100%;
            position: absolute;
            top: 35%;
            left: 0;
          }
          > button {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 30px;
            border: 1px solid #201e33;
            border-radius: 0 0 15px 15px;
            color: #201e33;
            background-color: transparent;
            font-size: 50px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.4s;
            &:hover {
              background-color: #201e33;
              color: #fff;
            }
          }
        }
      `}</style>
    </div>
  );
}

export default AlertModal;
