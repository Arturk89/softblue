import './index.scss'

export function NavigationWrapper({ children }: { children: React.ReactNode }) {
  return <nav className="navWrapper">{children}</nav>
}
