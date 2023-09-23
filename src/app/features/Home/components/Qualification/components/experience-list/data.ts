import behancer from '../../assets/behancer.png'
import dribbble from '../../assets/dribbble.png'

type ExperienceStatic = {
  icon: string
  title: string
}

const experienceStaticData: ExperienceStatic[] = [
  {
    icon: behancer,
    title: 'Print & Web Designer'
  },
  {
    icon: dribbble,
    title: 'UI/UX Designer & Developer'
  },
  {
    icon: behancer,
    title: 'Web Designer & Developer'
  },
  {
    icon: behancer,
    title: 'Web Designer & Developer'
  }
]

export { experienceStaticData }

export type { ExperienceStatic }
