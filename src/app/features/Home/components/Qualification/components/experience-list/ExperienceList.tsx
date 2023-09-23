import { useEffect, useState } from 'react'
import {
  getAllExperiences,
  ExperienceType
} from '../../data-access/get-all-experience'

import { FlexWrapper } from 'features/Home/shared/FlexWrapper'
import { ExperienceTile } from '../experience-tile/ExperienceTile'
import { experienceStaticData, ExperienceStatic } from './data'
import { getFormattedDate } from 'shared/utils/getFormattedDate'
import './index.scss'

export type ExperienceWithStaticData = ExperienceType & ExperienceStatic

const options = {
  month: 'long',
  year: 'numeric'
} as const

const { formatDate } = getFormattedDate()

export function ExperienceList() {
  const [experience, setExperience] = useState<ExperienceWithStaticData[]>([])

  useEffect(() => {
    async function getExperiences() {
      const response = (await getAllExperiences()) as ExperienceType[]
      const completeExperienceData = response
        .map((el, i) =>
          Object.assign({}, el, {
            icon: experienceStaticData[i].icon,
            title: experienceStaticData[i].title
          })
        )
        .map((el) => ({
          ...el,
          from: formatDate(el.from, options),
          to: formatDate(el.to, options)
        }))
      setExperience(completeExperienceData)
    }
    getExperiences()
  }, [])

  return (
    <FlexWrapper>
      <div className="experience">
        {experience.map((el) => (
          <ExperienceTile key={el.id} experience={el} />
        ))}
      </div>
    </FlexWrapper>
  )
}
