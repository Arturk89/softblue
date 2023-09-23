import { ServiceWithIcons } from '../offers-list/OffersList'
import './index.scss'

type Props = {
  service: ServiceWithIcons
}

export function Offer({ service }: Props) {
  return (
    <div className="listItem">
      <div className="listItem__icon">
        <img src={service.icon} alt="icon" />
      </div>
      <div className="listItem__title">{service.name}</div>
      <div className="listItem__text">{service.description}</div>
    </div>
  )
}
