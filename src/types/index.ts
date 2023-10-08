export type User = {
  id: string
  name: string
  image: string
}

export type Comment = {
  id: string
  name: string
  comment: string
  timestamp: string
}

export type Post = {
  id: string
  images: string
  caption: string
  timestamp: string
  likes: string[]
  comments: Comment[]
  user: User
}
