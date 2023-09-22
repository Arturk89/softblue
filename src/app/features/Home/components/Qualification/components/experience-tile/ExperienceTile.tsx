import icon from '../../assets/behancer.png'
import './index.scss'

export function ExperienceTile() {
  return (
    <div className="experienceTile">
      <div className="experienceTile__header">
        <div className="experienceTile__header__img">
          <img src={icon} />
        </div>
        <div className="experienceTile__header__title">
          <p className="experienceTile__header__title__primary">Header</p>
          <p className="experienceTile__header__title__date">date - date</p>
        </div>
      </div>
      <div className="experienceTile__title">
        <p>Title</p>
      </div>
      <div className="experienceTile__text">
        <p>asdasdasdasdasdasdasdasdasd sdasdasdasda sdasdasdasdasdasdasda</p>
      </div>
    </div>
  )
}
