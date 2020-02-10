import React, { useReducer } from 'react';
import { SkillMatrixContext } from './skillMartixContext';
import { ISkillMatrix } from '../../interfaces/Skill';
import { skillMatrixReducer } from './skillMatrixReducer';
import { ActionTypes } from '../actionTypes';

export interface ISkillMatrixState {
  skillMatrixes: ISkillMatrix[]
  loading: boolean
}

const skillMatrixData = {
  skillMatrixes: [
    {
      id: 1,
      name: 'Native JavaScript',
      groups: [
        {
          id: 1,
          name: 'This',
          skills: [
            {
              id: 1,
              name: 'What is `this`?'
            },
            {
              id: 2,
              name: 'How to change the context?'
            },
            {
              id: 3,
              name: 'What is difference between `call` and `apply`?'
            },
            {
              id: 4,
              name: 'What is difference between `call` and `bind`?'
            }
          ]
        },
        {
          id: 2,
          name: 'Closure',
          skills: [
            {
              id: 1,
              name: 'What is the closure?'
            },
            {
              id: 2,
              name: 'Task with callbacks array'
            },
            {
              id: 3,
              name: 'Practical use?'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Angular',
      groups: [
        {
          id: 1,
          name: 'Parts of Angular',
          skills: [
            {
              id: 1,
              name: 'Which parts of Angular do you know?'
            },
            {
              id: 2,
              name: 'What differences between component and directive?'
            },
            {
              id: 3,
              name: 'What are stuctural directives?'
            },
            {
              id: 4,
              name: 'Which types of pipes do you know?'
            }
          ]
        },
        {
          id: 2,
          name: 'Lifecycle',
          skills: [
            {
              id: 1,
              name: 'What is ngOnInit?'
            },
            {
              id: 2,
              name: 'What do you do in ngOnDestroy?'
            },
            {
              id: 3,
              name: 'Call order of hooks'
            }
          ]
        }
      ]
    }
  ]
}

export const initialSkillMatrixState: ISkillMatrixState = {
  skillMatrixes: [],
  loading: false
}

export const SkillMatrixState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(skillMatrixReducer, initialSkillMatrixState)

  const setLoading = () => dispatch({type: ActionTypes.SET_SKILL_MATRIX_LOADING})

  const getSkillMatrixes = () => {
    setLoading()

    dispatch({
      type: ActionTypes.GET_SKILL_MATRIXES,
      payload: skillMatrixData.skillMatrixes
    })
  }

  const { skillMatrixes, loading } = state

  return (
    <SkillMatrixContext.Provider value={{
      skillMatrixes, getSkillMatrixes, loading, setLoading
    }}>
      {children}
    </SkillMatrixContext.Provider>
  )
}