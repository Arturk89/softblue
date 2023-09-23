import { useState, useEffect } from 'react'
import { Offer } from '../offer/Offer'
import { FlexWrapper } from 'features/Home/shared/FlexWrapper'
import { getAllServices, ServiceType } from '../../data-access/get-all-services'
import { staticIcons } from './data'
import './index.scss'

export type ServiceWithIcons = ServiceType & { icon: string }

export function OffersList() {
  const [services, setServices] = useState<ServiceWithIcons[]>([])

  useEffect(() => {
    async function getServices() {
      const response = (await getAllServices()) as ServiceType[]
      const withIcon = response.map((item, i) =>
        Object.assign({}, item, { icon: staticIcons[i] })
      )
      setServices(withIcon)
    }
    getServices()
  }, [])

  // const date = new Date('2017-01-11')
  // const options = {
  //   month: 'long',
  //   year: 'numeric'
  // }
  // console.log(date.toLocaleDateString('en-US', options))

  // const a = date.toLocaleDateString('PL-pl', { year: 'numeric', month: 'long' })
  // console.log('date ', a)
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
