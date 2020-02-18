export interface ISkillTopic {
    id?: number
    name: string
    questions: IQuestion[]
    isActive?: boolean
}

export interface IQuestion {
    id?: number
    name: string
    linkToResource?: string
}

export interface ISkill {
  id?: number
  name: string
  topics?: ISkillTopic[]
}