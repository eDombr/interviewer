export interface IHandler {
    [key: string]: Function
}

export interface IAction {
    type: string,
    payload?: any;
}