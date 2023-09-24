import person from '../../assets/person.png'

import './image.scss'

export function PersonImage() {
  return (
    <section className="imageContainer">
      <img src={person} alt="person" />
    </section>
  )
}
