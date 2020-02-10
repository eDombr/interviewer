import { ActionTypes } from '../actionTypes';
import { IAction, IHandler } from '../../interfaces/Context';
import { ISkillMatrixState } from './skillMatrixState';

const handlers: IHandler = {
  [ActionTypes.GET_SKILL_MATRIXES]: (state: ISkillMatrixState, action: IAction): ISkillMatrixState => ({...state, skillMatrixes: action.payload, loading: false}),
  DEFAULT: (state: ISkillMatrixState): ISkillMatrixState => state
}

export const skillMatrixReducer = (state: ISkillMatrixState, action: IAction): ISkillMatrixState => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}