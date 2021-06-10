import { actionTypes } from './action-types';
import { initialState } from './context';
import { Action } from './types';

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.BLOCK_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.BLOCK_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        ...action.payload,
      };
    case actionTypes.BLOCK_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
