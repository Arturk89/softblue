import icon from '../assets/behancer.png'

export function Single() {
  return (
    <div className="experience__tile">
      <div className="experience__tile__header">
        <div className="experience__tile__header__img">
          <img src={icon} />
        </div>
        <div className="experience__tile__header__title">
          <p className="experience__tile__header__title__primary">Header</p>
          <p className="experience__tile__header__title__date">date - date</p>
        </div>
      </div>
      <div className="experience__tile__title">
        <p>Title</p>
      </div>
      <div className="experience__tile__text">
        <p>asdasdasdasdasdasdasdasdasdasd</p>
      </div>
    </div>
  )
}
