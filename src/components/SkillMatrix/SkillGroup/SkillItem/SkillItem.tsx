import React from 'react'
import { ISkill } from '../../../../interfaces/Skill'

const SkillItem: React.FC<ISkill> = (props) => {
  return (
    <li className="collection-item">
      <div>
        {props.name}
        {
          props.linkToResource ?
            <a href={props.linkToResource} target="_blank" rel="noopener noreferrer" className="secondary-content">
              <i className="material-icons">link</i>
            </a> :
            null
        }

      </div>
    </li>
  )
}

export default SkillItem
