import { useState, useEffect } from 'react'
import { Offer } from '../offer/Offer'
import { FlexWrapper } from 'features/Home/shared/flex-wrapper'
import { getAllServices, ServiceType } from '../../data-access/get-all-services'
import { Loader } from 'shared/ui/Loader/Loader'
import { staticIcons } from './data'
import { useLoader } from 'shared/hooks/useLoader'
import './index.scss'

export type ServiceWithIcons = ServiceType & { icon: string }

export function OffersList() {
  const [services, setServices] = useState<ServiceWithIcons[]>([])
  const { loading, stopLoading } = useLoader()

  useEffect(() => {
    async function getServices() {
      if (services.length) return
      const response = (await getAllServices()) as ServiceType[]
      const withIcon = response.map((item, i) =>
        Object.assign({}, item, { icon: staticIcons[i] })
      )
      setServices(withIcon)
      stopLoading()
    }
    getServices()
  }, [])

  return (
    <FlexWrapper>
      <div className="offersListWrapper">
        {loading ? (
          <Loader />
        ) : (
          services.map((service) => (
            <Offer key={service.id} service={service} />
          ))
        )}
      </div>
    </FlexWrapper>
  )
}
