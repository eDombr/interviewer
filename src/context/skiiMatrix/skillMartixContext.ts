import { createContext } from "react";
import { initialSkillMatrixState, ISkillMatrixState } from "./skillMatrixState";

export const SkillMatrixContext = createContext<ISkillMatrixState | any>(initialSkillMatrixState)