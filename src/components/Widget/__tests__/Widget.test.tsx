import { fireEvent, render, screen } from '@testing-library/react'
import { Widget } from '../Widget'

describe('#Widget', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })
  test('renders full size message by default', () => {
    render(<Widget accounts={{ sms: '+48123123123' }} />)
    expect(screen.queryByText('Message us')).toBeInTheDocument()
  })

  test('Shows messaging options on click', () => {
    render(<Widget accounts={{ sms: '+48123123123' }} />)

    fireEvent.click(screen.getByText('Message us'))
    expect(screen.queryByText('sms')).toBeInTheDocument()
  })
})
