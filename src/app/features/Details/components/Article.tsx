import './index.scss'

export function Article({ text }: { text: string }) {
  return <article className="articlesWrapper__container__text">{text}</article>
}
