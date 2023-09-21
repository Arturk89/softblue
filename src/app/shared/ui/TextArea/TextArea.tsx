import { InputHTMLAttributes } from 'react'
import './index.scss'

export function TextArea({
  ...props
}: InputHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className="textarea" />
}
