import './index.scss'

export function CommentsView() {
  return (
    <div className="commentsView">
      <div className="commentsView__container">
        <div className="commentsView__container__header">
          <p className="commentsView__container__header__title">Comments</p>
          <div className="commentsView__container__header__sort">
            <p>
              <span>oldest</span> | <span>newest</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
//inne color: rgb(232, 225, 225);
