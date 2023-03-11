
import { atom } from 'recoil';
import IHobby from '../components/Hobby/Interfaces/IHobby';

export const getIsHoverState = (hobby: IHobby) => atom<boolean>({
  key: `isHoverState-${hobby.title}`,
  default: false
});