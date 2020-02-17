import { createContext } from "react"
import { initialSkillState, ISkillState } from "./skillState"

export const SkillContext = createContext<ISkillState | any>(initialSkillState)