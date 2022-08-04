export type IQuestion = {
  score: number
  title: string
  owner: {
    display_name: string
    reputation: number
    profile_image: string
  },
  view_count: number
  is_answered: boolean
  question_id: number
  tags: string[]
}
