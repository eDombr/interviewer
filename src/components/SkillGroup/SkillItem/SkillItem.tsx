import React from 'react'
import { ISkill } from '../../../interfaces/Skill'

type SkillItemProps = {
  skill: ISkill
}

const SkillItem: React.FC<SkillItemProps> = (props) => {
  return (
    <li >{props.skill.name}</li>
  )
}

export default SkillItem
