import { useCallback, useContext, useEffect } from 'react';

import { ModalState } from '../context';
import { actionTypes } from '../context/modal/action-types';
import { ModalPropsStateChangeProps } from '../context/modal/types';
import { initialState } from '../context/modal/context';
import { ModalProps } from '../context/modal/types';

export const useModal = (props?: ModalProps) => {
  const { title, show } = (props = initialState);
  const { ModalContext } = ModalState;
  const { dispatch, state } = useContext(ModalContext);

  const setModalState = useCallback(
    (payload: ModalPropsStateChangeProps) => {
      dispatch({ type: actionTypes.SET_STATE, payload });
    },
    [dispatch]
  );

  const clearModalState = useCallback(() => {
    dispatch({ type: actionTypes.CLEAR_STATE });
  }, [dispatch]);

  useEffect(() => {
    if (title && title !== initialState.title) {
      setModalState({ title });
    }
    if (show && show !== initialState.show) {
      setModalState({ show });
    }
    return () => {
      clearModalState();
    };
  }, [clearModalState, title, show, setModalState]);

  return { setModalState, clearModalState, ...state };
};
