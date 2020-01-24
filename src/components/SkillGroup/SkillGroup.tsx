import React from 'react'
import { ISkillGroup } from '../../interfaces/Skill'
import SkillItem from './SkillItem/SkillItem'

type SkillGroupProps = {
  group: ISkillGroup;
}

const SkillGroup: React.FC<SkillGroupProps> = (props) => {
  const renderSkills = () => {
    return (
      <ul>
        {props.group.skills.map((skill => (
          <SkillItem key={skill.id} skill={skill}/>
        )))}
      </ul>
    )
  }

  return (
    <li>
      <div className="collapsible-header">
      <i className="material-icons">highlight</i>
        {props.group.name}
      </div>
      <div className="collapsible-body">
        {renderSkills()}
      </div>
    </li>
  )
}

export default SkillGroup
