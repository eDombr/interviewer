import React from 'react'
import { ISkill } from '../../../interfaces/Skill'

const SkillItem: React.FC<ISkill> = (props) => {
  return (
    <li className="collection-item">
      <div>
        {props.name}
        <a href="#!" className="secondary-content">
          <i className="material-icons">send</i>
        </a>
      </div>
    </li>
  )
}

export default SkillItem
