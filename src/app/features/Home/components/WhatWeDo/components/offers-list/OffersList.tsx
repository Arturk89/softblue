import { Offer } from '../offer/Offer'
import { services } from '../../list'
import { FlexWrapper } from 'features/Home/shared/FlexWrapper'
import './index.scss'

export function OffersList() {
  return (
    <FlexWrapper>
      <div className="offersListWrapper">
        {services.map((service) => (
          <Offer key={service.id} service={service} />
        ))}
      </div>
    </FlexWrapper>
  )
}
