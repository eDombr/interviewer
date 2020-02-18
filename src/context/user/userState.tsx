import * as _ from 'lodash'
import React, { useReducer } from 'react'
import { UserContext } from './userContext'
import { userReducer } from './userReducer'
import { IUser } from '../../interfaces/User'
import { ActionTypes } from '../actionTypes'

export interface IUserState {
  users: IUser[],
  user: IUser | any,
  loading: boolean
}

const usersData = {
  users: [
    {
      id: 1,
      firstName: 'Eugene',
      lastName: 'Dombrovski',
      email: 'eugene.dombrowsky@gmail.com',
      level: 'middle',
      education: 'Brest university named after A.S.Pushkin',
      description: `Software developer specialized in WEB applications development. Talented at devising appropriate goals,knowledgeable in people management. Highly adaptable in quickly changing technical environments, alsohas strong technical, organizational, communication and analytical skills. Always ready for mastering ofnew technologies.Plodding, balanced, hardworking. I don't have bad habbits.Good health. I love outdoor activities and intellectual games.`,
      currentPosition: 'Frontend Developer',
      workHistory: [
        {
          company: 'SmartexLab',
          startDate: new Date(2016, 11, 12),
          position: 'Frontend Developer'
        },
        {
          company: 'SmartexLab',
          startDate: new Date(2016, 11, 12),
          position: 'Frontend Developer'
        },
      ],
      skills: [
        { id: 1, name: 'Angular' },
        { id: 2, name: 'Javascript' },
        { id: 3, name: 'NodeJs' },
        { id: 4, name: 'React' },
        { id: 5, name: 'Mongo' },
      ]
    },
    {
      id: 2,
      firstName: 'Eugene',
      lastName: 'Dombrovski',
      email: 'eugene.dombrowsky@gmail.com',
      level: 'middle'
    },
    {
      id: 3,
      firstName: 'Eugene',
      lastName: 'Dombrovski',
      email: 'eugene.dombrowsky@gmail.com',
      level: 'middle'
    },
    {
      id: 4,
      firstName: 'Eugene',
      lastName: 'Dombrovski',
      email: 'eugene.dombrowsky@gmail.com',
      level: 'middle'
    },
  ]
}

export const initialUserState: IUserState = {
  users: [],
  user: null,
  loading: false
}

export const UserState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState)

  const getUsers = () => {
    setLoading()

    dispatch({
      type: ActionTypes.GET_USERS,
      payload: usersData.users
    })
  }

  const getUser = (id: number) => {
    setLoading()

    const user = _.find(usersData.users, ['id', id])

    dispatch({
      type: ActionTypes.GET_USER,
      payload: user
    })
  }

  const clearUser = () => {
    dispatch({
      type: ActionTypes.CLEAR_USER
    })
  }

  const setLoading = () => dispatch({type: ActionTypes.SET_USER_LOADING})

  const { users, user, loading } = state

  return (
    <UserContext.Provider value={{
      users, user, loading, getUsers, getUser, setLoading, clearUser
    }}>
      {children}
    </UserContext.Provider>
  )
}