import './listItem.scss'
import responsive from '../assets/responsive.png'
import { Services } from '../list'

type Props = {
  service: Services
}

export function ListItem({ service }: Props) {
  return (
    <div className="listItem">
      <div className="listItem__icon">
        <img src={responsive} alt="icon" />
      </div>
      <div className="listItem__title">{service.name}</div>
      <div className="listItem__text">{service.description}</div>
    </div>
  )
}
