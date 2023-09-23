import { memo } from 'react'
import { CommentType } from '../data-access/get-all-comments'
import './index.scss'

type Props = {
  comment: CommentType
}

export const CommentTile = memo(({ comment }: Props) => {
  console.log('comment ', comment)
  return (
    <div className="commentTile">
      <p className="commentTile__date">{comment.createdAt}</p>
      <div className="commentTile__title">
        <p className="commentTile__title__author">{comment.name}</p>
        <p className="commentTile__title__email">{comment.email}</p>
      </div>
      <p className="commentTile__text">{comment.content}</p>
    </div>
  )
})
