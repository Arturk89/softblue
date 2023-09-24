import './header.scss'

export function HeaderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="headerWrapper">
      <div className="headerWrapper__container">{children}</div>
    </section>
  )
}
