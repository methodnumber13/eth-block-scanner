import { useReducer } from 'react';
import { BasicComponentProps } from '../../components/types';
import { initialState, ModalContext } from './context';
import reducer from './reducer';

const ModalProvider = ({ children }: Pick<BasicComponentProps, 'children'>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={{ state: { ...state }, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};
export { ModalProvider, ModalContext };
