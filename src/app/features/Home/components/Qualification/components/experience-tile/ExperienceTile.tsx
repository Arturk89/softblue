import { ExperienceWithStaticData } from '../experience-list/ExperienceList'
import './index.scss'

type Props = {
  experience: ExperienceWithStaticData
}

export function ExperienceTile({ experience }: Props) {
  return (
    <div className="experienceTile">
      <div className="experienceTile__header">
        <div className="experienceTile__header__img">
          <img src={experience.icon} />
        </div>
        <div className="experienceTile__header__title">
          <p className="experienceTile__header__title__primary">
            {experience.company}
          </p>
          <p className="experienceTile__header__title__date">
            {experience.from} - {experience.to}
          </p>
        </div>
      </div>
      <div className="experienceTile__title">
        <p>{experience.title}</p>
      </div>
      <div className="experienceTile__text">
        <p>{experience.description}</p>
      </div>
    </div>
  )
}
