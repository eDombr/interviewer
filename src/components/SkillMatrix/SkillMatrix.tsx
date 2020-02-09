import React, { useRef, useState, useEffect } from 'react'
import M from 'materialize-css';

import './SkillMatrix.scss'
import { ISkillGroup } from '../../interfaces/Skill';
import SkillGroup from './SkillGroup/SkillGroup';

const SkillMatrix: React.FC = () => {
  const [skillGroups, setSkillGroups] = useState<ISkillGroup[]>([
    {
      id: 1,
      name: 'Software Engineering Practices',
      skills: [
        {
          id: 1,
          name: 'Code Standarts',
        },
        {
          id: 2,
          name: 'Design Patterns',
        },
        {
          id: 3,
          name: 'Code Review Process',
        },
        {
          id: 4,
          name: 'Troubleshooting',
        },
      ]
    },
    {
      id: 2,
      name: 'Common',
      skills: [
        {
          id: 5,
          name: 'Algorithms / Data structures',
        },
        {
          id: 6,
          name: 'Web-common',
        },
        {
          id: 7,
          name: 'Authentication / Authorization',
        },
        {
          id: 8,
          name: 'Security basics',
        },
      ]
    },
    {
      id: 3,
      name: 'JavaScript MV* Frameworks',
      skills: [
        {
          id: 9,
          name: 'Angular',
          linkToResource: 'https://angular.io/'
        },
        {
          id: 10,
          name: 'React',
        },
        {
          id: 11,
          name: 'VueJs',
        },
      ]
    }
  ])

  const collapsibleRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    M.Collapsible.init(collapsibleRef.current!);
  }, [])

  const renderGroup = () => {
    return skillGroups.map((group) => 
      {
        return <SkillGroup
                  key={group.id}
                  {...group}/>
      })
  }

  return (
    <div>
      <h2>Skills</h2>

      <ul ref={collapsibleRef} className="collapsible">
        {renderGroup()}
      </ul>
    </div>
  )
}

export default SkillMatrix;