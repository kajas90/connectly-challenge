import { Communicators } from '../../../enums/communicators'
import { calculateUrl } from '../Widget'

describe('#calculateUrl', () => {
  test('prepares output  for provided data', () => {
    expect(calculateUrl(Communicators.SMS, '123123123', false)).toEqual(
      'sms:/123123123'
    )
  })

  test('prepares output for provided data: fb messenger', () => {
    expect(calculateUrl(Communicators.FB, 'kasia', false)).toEqual(
      'http://m.me/kasia'
    )
  })

  test('prepares output for provided data: instagram', () => {
    expect(calculateUrl(Communicators.IN, 'kasia', false)).toEqual(
      'https://instagram.com/kasia'
    )
  })
})
