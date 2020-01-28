import React, { Component, createRef } from 'react'
import M from 'materialize-css';

import './SkillMatrix.scss'
import { ISkillGroup } from '../../interfaces/Skill';
import SkillGroup from './SkillGroup/SkillGroup';

type SkillMatrixState = {
  skillGroups: ISkillGroup[] 
}

class SkillMatrix extends Component<SkillMatrixState> {
  state: SkillMatrixState = {
    skillGroups: [
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
    ]
  }

  private collapsibleRef = createRef<HTMLUListElement>();

  componentDidMount() {
    M.Collapsible.init(this.collapsibleRef.current!);
  }

  renderGroup() {
    return this.state.skillGroups.map((group) => 
      {
        return <SkillGroup
                  key={group.id}
                  {...group}/>
      })
  }

  render() {
    return (
      <div>
        <h2>Skills</h2>

        <ul ref={this.collapsibleRef} className="collapsible">
          {this.renderGroup()}
        </ul>
      </div>
    )
  }
}

export default SkillMatrix;