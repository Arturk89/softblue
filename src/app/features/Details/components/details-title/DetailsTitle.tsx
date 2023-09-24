import '../index.scss'

export function DetailsTitle({ title }: { title: string }) {
  return (
    <>
      <p className="detailsWrapper__title">{title}</p>
      <p className="detailsWrapper__subtitle">Lorem Ipsum</p>
    </>
  )
}
