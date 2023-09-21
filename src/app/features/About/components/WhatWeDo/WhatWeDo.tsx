import './index.scss'
import { ListItem } from './components/ListItem'

export function WhatWeDo() {
  return (
    <section className="whatWeDo">
      <p className="whatWeDo__title">what we do</p>
      <p className="whatWeDo__subtitle">better services for you</p>
      <p className="whatWeDo__text">
        it is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has
      </p>
      <ListItem />
    </section>
  )
}
