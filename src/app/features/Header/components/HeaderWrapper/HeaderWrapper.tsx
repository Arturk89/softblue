import './header.scss'

export function HeaderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="testt">
        <div className="headerWrapper">{children}</div>
      </section>
    </>
  )
}
