import {atom} from 'recoil';
import {ReactNode} from 'react';

export interface IAlertModal {
  title: string;
  content: string | ReactNode | ReactNode[];
  confirmLabel?: string;
  onConfirm(): void;
}

export const alertModalState = atom<IAlertModal | undefined>({
  key: 'ALERT_MODAL_STATE',
  default: undefined
});
