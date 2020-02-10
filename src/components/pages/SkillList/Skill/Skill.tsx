import * as _ from 'lodash'
import React, { useRef, useEffect } from 'react'
import { ISkill, ISkillTopic } from '../../../../interfaces/Skill'
import SkillTopic from './SkillTopic/SkillTopic'

type SkillProps = {
  skill: ISkill
}

const Skill: React.FC<SkillProps> = ({ skill }) => {
  const collapsibleRef = useRef<HTMLUListElement>(null);

  const renderTopic = (topics: ISkillTopic[]) => {
    return _.map(topics, (topic) => 
      {
        return <SkillTopic
                  key={topic.id}
                  topic={topic}
                  skillId={skill.id!}/>
      })
  }

  useEffect(() => {
    M.Collapsible.init(collapsibleRef.current!, {
      accordion: false
    });
  }, [])

  return (
    <>
      <h3>{skill.name}</h3>
      <ul ref={collapsibleRef} className="collapsible">
        {renderTopic(skill.topics)}
      </ul>
    </>
  )
}

export default Skill
