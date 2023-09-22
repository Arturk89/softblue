import responsive from '../../assets/responsive.png'
import { Services } from '../../list'
import './index.scss'

type Props = {
  service: Services
}

export function Offer({ service }: Props) {
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
