import { createContext, Dispatch } from 'react';
import { Action, ModalProps } from './types';

export const initialState: ModalProps = {
  show: false,
  title: '',
  body: () => null,
};

export const ModalContext = createContext<{
  state: ModalProps;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => undefined });
