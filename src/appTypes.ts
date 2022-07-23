export type CommentsType = {
  id: number,
  avatar: string,
  message: string,
  name: string
}
export type ResponseItem = {
  id: number,
  url: string,
  likes: number,
  comments: CommentsType[]
}
export type ResponseType = ResponseItem[]

