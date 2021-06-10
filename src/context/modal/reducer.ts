import { actionTypes } from './action-types';
import { initialState } from './context';
import { Action } from './types';

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.CLEAR_STATE:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default reducer;
