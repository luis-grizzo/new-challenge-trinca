export interface IUser {
  id: number
  email: string
  password: string
  events: IEvent[]
}

export interface IEvent {
  id: number
  title: string
  date: Date
  description: string
  total_raised: number
  participants: IParticipant[]
}

export interface IParticipant {
  id: number
  name: string
  contribution_value: number
  drink_included: boolean
  paid: boolean
}
