import {  SET_DATA } from '../constants/reportConstants';

const initialState = {
  // token create network

};

// eslint-disable-next-line default-param-last
const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    // token create network
    case SET_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default reportReducer;
