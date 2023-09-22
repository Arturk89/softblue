import { ExperienceList } from './components/experience-list/ExperienceList'
import { SectionTitle } from 'features/Home/shared/SectionTitle'
import { SectionWrapper } from 'features/Home/shared/SectionWrapper'

export function Qualification() {
  return (
    <SectionWrapper>
      <SectionTitle
        title="qualification"
        subtitle="My experience"
        description="it is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has"
      />
      <ExperienceList />
    </SectionWrapper>
  )
}
