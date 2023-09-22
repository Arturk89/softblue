import './index.scss'
import { ExperienceGrid } from './components/ExperienceGrid'

export function Qualification() {
  return (
    <section className="qualification">
      <p className="qualification__title">qualification</p>
      <p className="qualification__subtitle">my experience</p>
      <div className="qualification__textContainer">
        <p className="qualification__textContainer__text">
          it is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has
        </p>
      </div>
      <ExperienceGrid />
    </section>
  )
}
