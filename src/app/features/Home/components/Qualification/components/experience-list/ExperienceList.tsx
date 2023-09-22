import { FlexWrapper } from 'features/Home/shared/FlexWrapper'
import { ExperienceTile } from '../experience-tile/ExperienceTile'
import './index.scss'

export function ExperienceList() {
  return (
    <FlexWrapper>
      <div className="experience">
        <ExperienceTile />
        <ExperienceTile />
        <ExperienceTile />
        <ExperienceTile />
      </div>
    </FlexWrapper>
  )
}
