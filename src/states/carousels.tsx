
import { atom, selector } from 'recoil';

export const activeIndexState = atom<number>({
  key: 'activeIndexState',
  default: 0
});