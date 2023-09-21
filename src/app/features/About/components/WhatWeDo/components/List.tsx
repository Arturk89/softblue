import { ListItem } from './ListItem'
import { services } from '../list'
import './list.scss'

export function List() {
  return (
    <div className="WhatWeDoList">
      {services.map((service) => (
        <ListItem key={service.id} service={service} />
      ))}
    </div>
  )
}
