import { createContext } from "react";
import { IUserState, initialUserState } from './userState';

export const UserContext = createContext<IUserState | any>(initialUserState)