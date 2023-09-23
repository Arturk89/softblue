import { useEffect, useState } from 'react'
import { getAllComments, CommentType } from '../data-access/get-all-comments'
import { getFormattedDate } from 'shared/utils/getFormattedDate'
import { CommentsHeader } from '../comments-header/CommentsHeader'
import { CommentTile } from '../comment-tile/CommentTile'
import ReactPaginate from 'react-paginate'
import './index.scss'

const options = {
  month: 'long',
  day: '2-digit',
  year: 'numeric'
} as const

export enum SORT {
  DESC = 'desc',
  ASC = 'asc'
}

const COMMENTS_PER_PAGE = 4

const { formatDate } = getFormattedDate()

export function CommentsView() {
  const [comments, setComments] = useState<CommentType[]>([])

  const [currentDisplayedComments, setCurrentDisplayedComments] = useState<
    CommentType[] | null
  >(null)
  const [pageCount, setPageCount] = useState(0)
  const [commentOffset, setCommentOffset] = useState(0)

  useEffect(() => {
    const endOffset = commentOffset + COMMENTS_PER_PAGE
    setCurrentDisplayedComments(comments.slice(commentOffset, endOffset))
    setPageCount(Math.ceil(comments.length / COMMENTS_PER_PAGE))
  }, [commentOffset, comments])

  useEffect(() => {
    async function getComments() {
      if (comments.length) return
      const response = (await getAllComments()) as CommentType[]
      const formatted = response.map((el) => ({
        ...el,
        createdAt: formatDate(el.createdAt, options)
      }))
      setComments(formatted)
    }
    getComments()
  }, [])

  const sort = (type: SORT) => {
    if (type === SORT.ASC) {
      setComments((com) => com.slice().sort((a, b) => (a.id > b.id ? -1 : 1)))
      return
    }
    setComments((com) => com.slice().sort((a, b) => (a.id < b.id ? -1 : 1)))
  }

  const handlePageClick = (event: unknown) => {
    const newOffset = (event?.selected * COMMENTS_PER_PAGE) % comments.length
    console.log('new offset ', newOffset)
    setCommentOffset(newOffset)
  }

  return (
    <div className="commentsView">
      <div className="commentsView__container">
        <CommentsHeader sort={sort} />
        <div className="commentView">
          {currentDisplayedComments?.map((comment) => (
            <CommentTile key={comment.id} comment={comment} />
          ))}
          <ReactPaginate
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item-prev"
            previousLinkClassName="page-link"
            nextClassName="page-item-next"
            breakLabel="..."
            breakClassName="page-item-break"
            breakLinkClassName="page-link-breaklink"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  )
}
