import { SyntheticEvent, useState } from 'react'
import { InputText } from 'shared/ui/Input/InputText'
import { TextArea } from 'shared/ui/TextArea/TextArea'
import { Button } from 'shared/ui/Button/Button'
import { config } from 'shared/utils/config/app-config'
import { createComment } from '../data-access/create-comment'
import { validate } from '../utils/validate'
import './index.scss'

export type Comment = {
  name: string
  email: string
  content: string
}

export type ErrorMessages = {
  name: string
  errorMsg: string
}

const initialState = {
  name: '',
  email: '',
  content: ''
}

export function CreateComment() {
  const [comment, setComment] = useState<Comment>(initialState)
  const [error, setError] = useState<Comment>(initialState)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setError((err) => ({ ...err, [e.target.name]: '' }))
    setComment((c) => ({ ...c, [e.target.name]: e.target.value }))
  }

  const sendComment = async (e: SyntheticEvent) => {
    e.preventDefault()
    const isValidate = validate(comment)
    if (isValidate.length) {
      isValidate.forEach((el) =>
        setError((error) => ({ ...error, [el.name]: el.errorMsg }))
      )
      return
    }
    const response = await createComment(comment)
    setComment(initialState)
    console.log('e ', e)
  }

  return (
    <section id={config.addingCommentsSection} className="createComment">
      <div className="createComment__container">
        <p className="createComment__container__title">Add comment</p>
        <div className="createComment__form">
          <form onSubmit={sendComment}>
            <div>
              <div>
                <InputText
                  onChange={handleChange}
                  value={comment.name}
                  name="name"
                  placeholder="Your Name"
                  type="text"
                  errorMsg={error.name}
                  minLength={2}
                />
              </div>
              <InputText
                onChange={handleChange}
                value={comment.email}
                name="email"
                placeholder="Your Email"
                type="email"
                errorMsg={error.email}
              />
            </div>
            <div className="createComment__form__text">
              <TextArea
                onChange={handleChange}
                value={comment.content}
                name="content"
                placeholder="Your Messages"
                errorMsg={error.content}
                min={2}
              />
            </div>
            <div className="createComment__form__button">
              <Button type="submit" label="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
