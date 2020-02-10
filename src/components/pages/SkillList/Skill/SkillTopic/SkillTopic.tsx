import React from 'react'
import { Link } from 'react-router-dom'

import { ISkillTopic } from '../../../../../interfaces/Skill'
import Question from './Question/Question'

type SkillTopicProps = {
  topic: ISkillTopic
  skillId: number
}

const SkillTopic: React.FC<SkillTopicProps> = ({topic, skillId}) => {
  const {questions, id, name} = topic;

  const renderSkills = () => {
    return (
      <ul className="collection">
        {questions.map((question => (
          <Question key={question.id} {...question} />
        )))}
      </ul>
    )
  }

  return (
    <li>
      <div className="collapsible-header">
        <Link to={`/skills/${skillId}/topic/${id}/edit`}>
          <i className="material-icons black-text">edit</i>
        </Link>
        {name}
      </div>
      <div className="collapsible-body p0">
        {renderSkills()}
      </div>
    </li>
  )
}

export default SkillTopic
