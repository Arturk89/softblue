import './header.scss'

export function HeaderWrapper({ children }: { children: React.ReactNode }) {
  return <section className="headerWrapper">{children}</section>
}
