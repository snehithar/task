import { SET_DATA, RESET } from '../constants/questionConstants';

// make a action to set token create network
export const setData = (data) => ({
  type: SET_DATA,
  payload: data
});
export const reset = () => ({
  type: RESET,
  payload: {}
});