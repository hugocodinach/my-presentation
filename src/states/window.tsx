
import { atom } from 'recoil';

import IDimensions from './Interfaces/IDimensions';

export const windowDimensionsState = atom<IDimensions>({
  key: 'windowDimensionsState',
  default: {
    width: 0,
    height: 0
  }
});