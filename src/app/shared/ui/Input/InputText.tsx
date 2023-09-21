import { InputHTMLAttributes } from 'react'
import './index.scss'

export function InputText({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="inputText" {...props} />
}
