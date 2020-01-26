import React, { Component, createRef } from 'react'
import M from 'materialize-css';

import './SkillMatrix.scss'
import { ISkillGroup } from '../../interfaces/Skill';
import SkillGroup from '../../components/SkillGroup/SkillGroup';

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
            significance: 1
          },
          {
            id: 2,
            name: 'Design Patterns',
            significance: 1
          },
          {
            id: 3,
            name: 'Code Review Process',
            significance: 1
          },
          {
            id: 4,
            name: 'Troubleshooting',
            significance: 1
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
            significance: 1
          },
          {
            id: 6,
            name: 'Web-common',
            significance: 1
          },
          {
            id: 7,
            name: 'Authentication / Authorization',
            significance: 1
          },
          {
            id: 8,
            name: 'Security basics',
            significance: 1
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
            significance: 1
          },
          {
            id: 10,
            name: 'React',
            significance: 1
          },
          {
            id: 11,
            name: 'VueJs',
            significance: 1
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