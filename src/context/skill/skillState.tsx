import * as _ from 'lodash'
import React, { useReducer } from 'react'
import { SkillContext } from './skillContext'
import { ISkill, ISkillTopic } from '../../interfaces/Skill'
import { skillReducer } from './skillReducer'
import { ActionTypes } from '../actionTypes'

export interface ISkillState {
  skills: ISkill[]
  skillTopic: ISkillTopic | null
  loading: boolean
}

const skillData = {
  skills: [
    {
      id: 1,
      name: 'Native JavaScript',
      topics: [
        {
          id: 1,
          name: 'This',
          questions: [
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
          questions: [
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
      topics: [
        {
          id: 1,
          name: 'Parts of Angular',
          questions: [
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
          questions: [
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

export const initialSkillState: ISkillState = {
  skills: [],
  skillTopic: null,
  loading: false
}

export const SkillState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(skillReducer, initialSkillState)

  const setLoading = () => dispatch({type: ActionTypes.SET_SKILL_LOADING})

  const getSkills = () => {
    setLoading()

    dispatch({
      type: ActionTypes.GET_SKILLS,
      payload: skillData.skills
    })
  }

  const getSkillTopic = (topicId: number, skillId: number) => {
    setLoading()

    const skill = _.find(skillData.skills, ['id', +skillId])
    const topic = _.find(skill!.topics, ['id', +topicId])

    dispatch({
      type: ActionTypes.GET_SKILL_TOPIC,
      payload: topic
    })
  }

  const clearSkillTopic = () => {
    dispatch({
      type: ActionTypes.CLEAR_SKILL_TOPIC
    })
  }

  const { skills, skillTopic, loading } = state

  return (
    <SkillContext.Provider value={{
      skills, getSkills, skillTopic, getSkillTopic, clearSkillTopic, loading, setLoading
    }}>
      {children}
    </SkillContext.Provider>
  )
}