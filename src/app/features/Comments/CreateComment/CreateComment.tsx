import './index.scss'
import { InputText } from '../../../shared/ui/Input/InputText'
import { TextArea } from '../../../shared/ui/TextArea/TextArea'
import { Button } from '../../../shared/ui/Button/Button'

export function CreateComment() {
  return (
    <section className="createComment">
      <div className="createComment__container">
        <p className="createComment__container__title">Add comment</p>
        <div className="createComment__form">
          <div>
            <InputText placeholder="Your Name" />
            <InputText placeholder="Your Email" />
          </div>
          <div className="createComment__form__text">
            <TextArea placeholder="Your Messages" />
          </div>
          <div className="createComment__form__button">
            <Button label="Send" />
          </div>
        </div>
      </div>
    </section>
  )
}
