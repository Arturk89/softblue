import { SORT } from '../comments-view/CommentsView'
import './index.scss'

type Props = {
  sort: (sortBy: SORT) => void
}

export function CommentsHeader({ sort }: Props) {
  return (
    <div className="commentsHeader">
      <p className="commentsHeader__title">Comments</p>
      <div className="commentsHeader__sort">
        <span
          className="commentsHeader__sort--desc"
          onClick={() => sort(SORT.DESC)}
        >
          oldest
        </span>
        |
        <span
          className="commentsHeader__sort--asc"
          onClick={() => sort(SORT.ASC)}
        >
          newest
        </span>
      </div>
    </div>
  )
}
