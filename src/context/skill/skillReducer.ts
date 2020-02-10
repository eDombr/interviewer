import { ActionTypes } from '../actionTypes';
import { IAction, IHandler } from '../../interfaces/Context';
import { ISkillState } from './skillState';

const handlers: IHandler = {
  [ActionTypes.GET_SKILLS]: (state: ISkillState, action: IAction): ISkillState => ({...state, skills: action.payload, loading: false}),
  [ActionTypes.GET_SKILL_TOPIC]: (state: ISkillState, action: IAction): ISkillState => ({...state, skillTopic: action.payload, loading: false}),
  [ActionTypes.CLEAR_SKILL_TOPIC]: (state: ISkillState, action: IAction): ISkillState => ({...state, skillTopic: null}),
  DEFAULT: (state: ISkillState): ISkillState => state
}

export const skillReducer = (state: ISkillState, action: IAction): ISkillState => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}