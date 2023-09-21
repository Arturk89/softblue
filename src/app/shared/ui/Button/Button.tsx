import { ButtonHTMLAttributes } from 'react'
import './index.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export function Button({ label, ...props }: ButtonProps) {
  return (
    <button className="button" {...props}>
      {label}
    </button>
  )
}
