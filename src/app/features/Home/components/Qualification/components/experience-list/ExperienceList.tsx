import { useEffect, useState } from 'react'
import {
  getAllExperiences,
  ExperienceType
} from '../../data-access/get-all-experience'

import { FlexWrapper } from 'features/Home/shared/flex-wrapper'
import { ExperienceTile } from '../experience-tile/ExperienceTile'
import { experienceStaticData, ExperienceStatic } from './data'
import { getFormattedDate } from 'shared/utils/getFormattedDate'
import { useLoader } from 'shared/hooks/useLoader'
import { Loader } from 'shared/ui/Loader/Loader'
import './index.scss'

export type ExperienceWithStaticData = ExperienceType & ExperienceStatic

const options = {
  month: 'long',
  year: 'numeric'
} as const

const { formatDate } = getFormattedDate()

export function ExperienceList() {
  const [experience, setExperience] = useState<ExperienceWithStaticData[]>([])
  const { loading, stopLoading } = useLoader()

  useEffect(() => {
    async function getExperiences() {
      if (experience.length) return
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
      stopLoading()
    }
    getExperiences()
  }, [])

  return (
    <FlexWrapper>
      <div className="experience">
        {loading ? (
          <Loader />
        ) : (
          experience.map((el) => <ExperienceTile key={el.id} experience={el} />)
        )}
      </div>
    </FlexWrapper>
  )
}
