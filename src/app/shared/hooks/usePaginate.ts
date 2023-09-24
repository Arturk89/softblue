import { useEffect, useState } from 'react'

const COMMENTS_PER_PAGE = 4

export const usePaginate = <T>(data: T[]) => {
  const [elements, setElements] = useState<T[] | null>(null)

  const [pageCount, setPageCount] = useState(0)
  const [commentOffset, setCommentOffset] = useState(0)

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * COMMENTS_PER_PAGE) % data.length
    setCommentOffset(newOffset)
  }

  useEffect(() => {
    const endOffset = commentOffset + COMMENTS_PER_PAGE
    setElements(data.slice(commentOffset, endOffset))
    setPageCount(Math.ceil(data.length / COMMENTS_PER_PAGE))
  }, [commentOffset, data])

  return {
    elements,
    pageCount,
    handlePageClick
  }
}
