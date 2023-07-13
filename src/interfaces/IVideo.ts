import { IUser } from './IUser'

export interface IVideo {
  id?: string
  title?: string
  vid?: string
  likeCount?: number
  dislikeCount?: number
  description?: string
  sharedBy?: IUser
}
