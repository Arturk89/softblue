import { OffersList } from './components/offers-list/OffersList'
import { SectionTitle } from 'features/Home/shared/section-title'
import { SectionWrapper } from 'features/Home/shared/section-wrapper'

export function WhatWeDo() {
  return (
    <SectionWrapper isDark>
      <SectionTitle
        title="what we do"
        subtitle="better services for you"
        description="it is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has"
      />
      <OffersList />
    </SectionWrapper>
  )
}
