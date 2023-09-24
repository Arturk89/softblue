import { useEffect } from 'react'
import { getAllComments, CommentType } from '../data-access/get-all-comments'
import { getFormattedDate } from 'shared/utils/getFormattedDate'
import { CommentsHeader } from '../comments-header/CommentsHeader'
import { CommentTile } from '../comment-tile/CommentTile'
import ReactPaginate from 'react-paginate'
import { Loader } from 'shared/ui/Loader/Loader'
import { usePaginate } from 'shared/hooks/usePaginate'
import { useLoader } from 'shared/hooks/useLoader'
import { useCommentAction, useComments } from '../context/CommentContext'
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

const { formatDate } = getFormattedDate()

export function CommentsView() {
  const dispatch = useCommentAction()
  const comments = useComments()
  const { loading, stopLoading } = useLoader()
  const { elements, pageCount, handlePageClick } =
    usePaginate<CommentType>(comments)

  useEffect(() => {
    async function getComments() {
      if (comments.length) return
      const response = (await getAllComments()) as CommentType[]
      const formatted = response.map((el) => ({
        ...el,
        createdAt: formatDate(el.createdAt, options)
      }))
      dispatch(formatted)
      stopLoading()
    }
    getComments()
  }, [])

  const sort = (type: SORT) => {
    if (type === SORT.ASC) {
      dispatch((comments) =>
        comments
          .slice()
          .sort((a, b) =>
            new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()
              ? -1
              : 1
          )
      )
      return
    }
    dispatch((comments) =>
      comments
        .slice()
        .sort((a, b) =>
          new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()
            ? -1
            : 1
        )
    )
  }

  return (
    <div className="commentsView">
      <div className="commentsView__container">
        <CommentsHeader sort={sort} />
        {loading ? (
          <Loader />
        ) : (
          <div className="commentView">
            {elements?.map((comment) => (
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
        )}
      </div>
    </div>
  )
}
