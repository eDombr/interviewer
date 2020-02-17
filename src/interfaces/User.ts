export interface IUser {
  id?: number
  firstName: string
  lastName: string
  email: string
  password?: string
  level?: string
  education?: string
  description?: string
  currentPosition?: string
  workHistory?: IWorkHistoryItem[]
}

export interface IWorkHistoryItem {
  company: string
  startDate: Date
  endDate?: Date
  position: string
}