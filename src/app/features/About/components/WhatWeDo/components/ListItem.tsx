import './list.scss'
import responsive from '../assets/responsive.png'

export function ListItem() {
  return (
    <div className="list">
      <div className="list__icon">
        <img src={responsive} alt="icon" />
      </div>
      <div className="list__title">fully responsive</div>
      <div className="list__text">asd</div>
    </div>
  )
}
