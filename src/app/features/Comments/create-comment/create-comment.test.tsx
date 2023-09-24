import { render, screen, fireEvent } from '@testing-library/react'
import { CreateComment } from './CreateComment'
import { describe, it } from 'node:test'

describe('create comment', () => {
  it('renders Create Comment', () => {
    render(<CreateComment />)
    const name = screen.getByPlaceholderText('Your Name')
    const email = screen.getByPlaceholderText('Your Email')
    const message = screen.getByPlaceholderText('Your Messages')

    fireEvent.change(name, {
      target: { value: 'testName' }
    })
    expect(name.value).toMatch('testName')

    fireEvent.change(email, {
      target: { value: 'test@wp.pl' }
    })
    expect(email.value).toMatch('test@wp.pl')

    fireEvent.change(message, {
      target: { value: 'test message' }
    })
    expect(message.value).toMatch('test message')
  })
})
