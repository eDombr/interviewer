import React from 'react'
import { ISkillGroup } from '../../interfaces/Skill'
import SkillItem from './SkillItem/SkillItem'

const SkillGroup: React.FC<ISkillGroup> = (props) => {
  const renderSkills = () => {
    return (
      <ul className="collection">
        {props.skills.map((skill => (
          <SkillItem key={skill.id} {...skill}/>
        )))}
      </ul>
    )
  }

  return (
    <li>
      <div className="collapsible-header">
      <i className="material-icons">highlight</i>
        {props.name}
      </div>
      <div className="collapsible-body p0">
        {renderSkills()}
      </div>
    </li>
  )
}

export default SkillGroup
