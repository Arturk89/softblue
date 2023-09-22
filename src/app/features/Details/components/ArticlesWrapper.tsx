import './index.scss'

export function ArticlesWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="articlesWrapper">
      <div className="articlesWrapper__container">{children}</div>
    </section>
  )
}
