'use client';

import {ReactElement} from 'react';
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
    </div>
  );
}

export default AlertModal;
