import { Communicators } from '../enums/communicators'

export interface Communicator {
  type: Communicators
  value: string
}
