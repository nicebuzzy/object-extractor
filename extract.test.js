import { describe, test, expect } from 'vitest'
import extract from './src'

describe('extract', () => {
  const source = {
    settings: {
      theme: 'dark',
      notifications: {
        email: true
      }
    }
  }

  test('extract', () => {
    const variables = [
      { username: ['user.name'] },
      { theme: ['settings.theme'] },
      { notification: ['settings.notifications.sms', 'settings.notifications.email'] }
    ]

    const result = extract(source, variables)

    expect(result).toStrictEqual({
      username: undefined,
      theme: 'dark',
      notification: true
    })
  })
})