import {  SET_DATA,RESET } from '../constants/questionConstants';

const initialState = {
  // token create network

};

// eslint-disable-next-line default-param-last
const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    // token create network
    case SET_DATA:
      return {
        ...state,
        ...action.payload
      };

    case RESET:
      return initialState
    default:
      return state;
  }
};

export default questionReducer;
