import { ComponentType } from 'react'

enum Paths {
  HOME = 'HOME',
  EXPERIENCE = 'EXPERIENCE',
  SERVICES = 'SERVICES'
}

enum URL {
  HOME = '/',
  EXPERIENCE = '/experience',
  SERVICES = '/services'
}

type PathName = Paths.HOME | Paths.EXPERIENCE | Paths.SERVICES

type PathStructure = {
  [name in PathName]: {
    path: URL
  }
}

type CreateRoute = {
  key: string
  path: URL
  component: ComponentType
}

type RouteObject = {
  [name in PathName]: CreateRoute
}

export type { PathName, PathStructure, CreateRoute, RouteObject }

export { Paths, URL }
