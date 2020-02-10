import * as _ from 'lodash'
import React, { useRef, useEffect } from 'react'
import { ISkillMatrix, ISkillGroup } from '../../../interfaces/Skill'
import SkillGroup from './SkillGroup/SkillGroup';

type SkillMatrixProps = {
  matrix: ISkillMatrix
}

const SkillMatrix: React.FC<SkillMatrixProps> = ({ matrix }) => {
  const collapsibleRef = useRef<HTMLUListElement>(null);

  const renderGroup = (groups: ISkillGroup[]) => {
    return _.map(groups, (group) => 
      {
        return <SkillGroup
                  key={group.id}
                  {...group}/>
      })
  }

  useEffect(() => {
    M.Collapsible.init(collapsibleRef.current!);
  }, [])

  return (
    <>
      <h3>{matrix.name}</h3>
      <ul ref={collapsibleRef} className="collapsible">
        {renderGroup(matrix.groups)}
      </ul>
    </>
  )
}

export default SkillMatrix
