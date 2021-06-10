import { actionTypes } from './action-types';

export interface ModalProps {
  show: boolean;
  title: string;
  body: () => JSX.Element | null;
}

export type ModalPropsStateChangeProps = { show: boolean } | { title: string };

export interface SetState {
  type: actionTypes.SET_STATE;
  payload: ModalPropsStateChangeProps;
}

export interface ClearState {
  type: actionTypes.CLEAR_STATE;
}

export type Action = SetState | ClearState;
