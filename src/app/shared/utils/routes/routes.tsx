import { lazy, ComponentType } from 'react'
import {
  PathStructure,
  Paths,
  URL,
  CreateRoute,
  RouteObject
} from './routes.model'

export const paths: PathStructure = {
  [Paths.HOME]: {
    path: URL.HOME
  },
  [Paths.EXPERIENCE]: {
    path: URL.EXPERIENCE
  },
  [Paths.SERVICES]: {
    path: URL.SERVICES
  }
}

const Home = lazy(() =>
  import('features/Home').then((module) => ({ default: module.Home }))
)
const Experience = lazy(() =>
  import('features/Details/Experience').then((module) => ({
    default: module.Experience
  }))
)
const Services = lazy(() =>
  import('features/Details/Services').then((module) => ({
    default: module.Services
  }))
)

function createRoute(
  key: string,
  path: URL,
  component: ComponentType
): CreateRoute {
  return { key, path, component }
}

export const routes: RouteObject = {
  [Paths.HOME]: createRoute('key-home', paths.HOME.path, Home),
  [Paths.EXPERIENCE]: createRoute(
    'key-experience',
    paths.EXPERIENCE.path,
    Experience
  ),
  [Paths.SERVICES]: createRoute('key-services', paths.SERVICES.path, Services)
}
