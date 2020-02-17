import * as _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react'
import { FormControlCollection } from '../../../interfaces/Form'
import { formBuilder } from '../../../lib/formBuilder'
import { InputType } from '../../../constants/Form'
import Form from '../../UI/Form/Form'
import { useParams } from 'react-router-dom'
import { SkillContext } from '../../../context/skill/skillContext'
import { ISkillTopic, IQuestion } from '../../../interfaces/Skill'

const createFormControls = (): FormControlCollection => ({
  name: formBuilder.createControl(
    { label: 'Name' },
    { required: true }
  ),
  questions: formBuilder.createControl(
    { label: 'Questions', type: InputType.GROUP, groups: [] }
  )
})

const createQuestionGroup = (): FormControlCollection => ({
  name: formBuilder.createControl(
    { label: 'Question' }, { required: true }
  ),
  linkToResource: formBuilder.createControl(
    { label: 'Link' }
  )
})

const SkillTopicEdit: React.FC = () => {
  const [formControls, setFormControls] = useState(createFormControls())
  const { topicId, skillId } = useParams()
  const { skillTopic, getSkillTopic, clearSkillTopic } = useContext(SkillContext)

  useEffect(() => {
    if (topicId && skillId) {
      getSkillTopic(topicId, skillId)
    }

    return () => {
      clearSkillTopic()
    }
    // eslint-disable-next-line
  }, [topicId, skillId])

  useEffect(() => {
    if (skillTopic) {
      fillFormControls(skillTopic)
    } else {
      setFormControls(createFormControls())
    }
    // eslint-disable-next-line
  }, [skillTopic])

  const onChangeHandler = (formControls: FormControlCollection) => {
    setFormControls(formControls)
  }

  const onAddFormGroupHandler = (groupName: string): void => {
    const controls: FormControlCollection = _.cloneDeep(formControls)
    const control = controls[groupName]

    control.groups!.push(createQuestionGroup())

    setFormControls(controls)
  }

  const fillFormControls = (skillTopic: ISkillTopic): void => {
    const controls: any = _.cloneDeep(formControls)

    _.forEach(skillTopic, (value, key) => {
      if (key !== 'questions') {
        if (controls[key]) {
          const control = controls[key]
          control.value = value
          control.valid = formBuilder.validate(control.value, control.validation)
        }
      } else {
        _.forEach(value as IQuestion[], (question: IQuestion, index: string | number) => {
          controls[key].groups.push(createQuestionGroup())

          _.forEach(question as IQuestion, (questionValue: string | number | undefined, questionKey: string) => {
            const groupKeys = _.keys(controls[key].groups[index])
            if (!_.includes(groupKeys, questionKey)) {
              return
            }

            const control = controls[key].groups[index][questionKey]
            control.value = questionValue
            control.valid = formBuilder.validate(control.value, control.validation)
          })
        })
      }
    })

    setFormControls(controls)
  }
  
  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <h2 className="center-align">
          Edit Skill Topic
        </h2>

        <Form 
          formControls={formControls}
          onAddGroup={onAddFormGroupHandler}
          onChange={onChangeHandler}/>
      </div>
    </div>
  )
}

export default SkillTopicEdit
