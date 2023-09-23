import { InputHTMLAttributes } from 'react'
import './index.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMsg: string
}

export function InputText({ errorMsg, ...props }: InputProps) {
  return (
    <div className="inputText">
      <input className="inputText__input" {...props} />
      {errorMsg ? (
        <span className="inputText__message">{errorMsg}</span>
      ) : (
        <span className="inputText__message--empty"></span>
      )}
    </div>
  )
}
