import { useReducer } from 'react';
import { initialState, BlockContext } from './context';
import reducer from './reducer';
import { actionTypes } from './action-types';
import { BasicComponentProps } from '../../components/types';

const API_URL = process.env.API_URL || 'http://localhost:9000/api/block';

const BlockProvider = ({ children }: Pick<BasicComponentProps, 'children'>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getBlock = async (block: string) => {
    dispatch({ type: actionTypes.BLOCK_PENDING });
    try {
      const response = await fetch(`${API_URL}/${block}`);
      if (response.status === 200) {
        let data = await response.json();

        if (data?.error) {
          dispatch({
            type: actionTypes.BLOCK_ERROR,
          });
        } else if (!data.result) {
          dispatch({
            type: actionTypes.BLOCK_SUCCESS,
            payload: {
              number: '',
              hash: '',
              transactions: [],
            },
          });
        } else {
          dispatch({
            type: actionTypes.BLOCK_SUCCESS,
            payload: data.result,
          });
        }
      }
    } catch (err) {
      dispatch({ type: actionTypes.BLOCK_ERROR });
    }
  };

  return (
    <BlockContext.Provider value={{ state: { ...state, getBlock }, dispatch }}>
      {children}
    </BlockContext.Provider>
  );
};
export { BlockProvider, BlockContext };
