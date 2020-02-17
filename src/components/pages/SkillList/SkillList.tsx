import * as _ from 'lodash'
import React, { useEffect, useContext } from 'react'

import { SkillContext } from '../../../context/skill/skillContext'
import Loading from '../../UI/Loading/Loading'
import Skill from './Skill/Skill'

const SkillList: React.FC = () => {
  const {skills, getSkills, loading} = useContext(SkillContext)

  useEffect(() => {
    getSkills()
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <h2>Skills</h2>

      {
        skills.length && _.map(skills, (skill) => (
          <Skill key={skill.id} skill={skill}></Skill>
        ))
      }
    </>
  )
}

export default SkillList