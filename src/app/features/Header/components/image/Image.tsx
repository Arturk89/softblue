import person from '../../../../../assets/Header/person.png'

import './image.scss'

export function Image() {
  return (
    <section className="imageContainer">
      <img src={person} alt="person" />
    </section>
  )
}
