import { ErrorMessages, Comment } from '../CreateComment/CreateComment'
import { IS_VALID_EMAIL } from 'shared/regex'

export function validate(comment: Comment) {
  const messages: ErrorMessages[] = []
  if (!comment.name.length) {
    messages.push({ name: 'name', errorMsg: 'Field must be filled!' })
  }
  if (!comment.email.match(IS_VALID_EMAIL)) {
    messages.push({ name: 'email', errorMsg: 'Invalid e-mail address!' })
  }
  if (!comment.content.length) {
    messages.push({ name: 'content', errorMsg: 'Field must be filled!' })
  }
  return messages
}
