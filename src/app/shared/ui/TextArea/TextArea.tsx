import { InputHTMLAttributes } from 'react'
import './index.scss'

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  errorMsg: string
}

export function TextArea({ errorMsg, ...props }: TextAreaProps) {
  return (
    <div className="textarea">
      <textarea {...props} className="textarea__input" />
      {errorMsg ? (
        <span className="textarea__message">{errorMsg}</span>
      ) : (
        <span className="textarea__message--empty"></span>
      )}
    </div>
  )
}
