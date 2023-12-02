import {atom} from 'recoil';

export const loadingSpinnerState = atom<boolean | false>({
  key: 'LOADING_SPINNER_STATE',
  default: false
});
