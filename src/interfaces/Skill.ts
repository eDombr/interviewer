export interface ISkillGroup {
    id?: number
    name: string
    skills: ISkill[]
    isActive?: boolean
}

export interface ISkill {
    id?: number
    name: string
    linkToResource?: string
}

export interface ISkillMatrix {
  id?: number
  name: string;
  groups: ISkillGroup[]
}