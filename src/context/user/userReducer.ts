import { IUserState } from './userState';
import { IHandler, IAction } from './../../interfaces/Context';
import { ActionTypes } from './../actionTypes';

const handlers: IHandler = {
    [ActionTypes.GET_USERS]: (state: IUserState, action: IAction): IUserState => ({...state, users: action.payload, loading: false}),
    [ActionTypes.GET_USER]: (state: IUserState, action: IAction): IUserState => ({...state, user: action.payload, loading: false}),
    [ActionTypes.CLEAR_USER]: (state: IUserState, action: IAction): IUserState => ({...state, user: null}),
    [ActionTypes.SET_LOADING]: (state: IUserState): IUserState => ({...state, loading: true}),
    DEFAULT: (state: IUserState): IUserState => state
}

export const userReducer = (state: IUserState, action: IAction) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}