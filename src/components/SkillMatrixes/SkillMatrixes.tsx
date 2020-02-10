import * as _ from 'lodash'
import React, { useEffect, useContext } from 'react'

import { SkillMatrixContext } from '../../context/skiiMatrix/skillMartixContext';
import Loading from '../UI/Loading/Loading';
import SkillMatrix from './SkillMatrix/SkillMatrix';

const SkillMatrixes: React.FC = () => {
  const {skillMatrixes, getSkillMatrixes, loading} = useContext(SkillMatrixContext)

  useEffect(() => {
    getSkillMatrixes()
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <h2>Skills</h2>

      {
        skillMatrixes.length && _.map(skillMatrixes, (matrix) => (
          <SkillMatrix key={matrix.id} matrix={matrix}></SkillMatrix>
        ))
      }

      
    </div>
  )
}

export default SkillMatrixes;