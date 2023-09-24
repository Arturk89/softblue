import './index.scss'

type Props = {
  title: string
  subtitle: string
  description: string
}

export function SectionTitle({ title, subtitle, description }: Props) {
  return (
    <div className="sectionHome">
      <p className="sectionHome__title">{title}</p>
      <p className="sectionHome__subtitle">{subtitle}</p>
      <div className="sectionHome__description">
        <p className="sectionHome__description__text">{description}</p>
      </div>
    </div>
  )
}
