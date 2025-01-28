import { describe, test, expect } from 'vitest'
import extract from './src'

describe('extract', () => {
  const user = {
    theme: 'light'
  }

  const settings = {
    theme: 'dark',
    notifications: {
      email: true
    }
  }

  test('extract', () => {
    const variables = {
      username: ['name'],
      theme: ['theme'],
      notification: ['notifications.sms', 'notifications.email']
    }

    const result = extract(variables, user, settings)

    expect(result).toStrictEqual({
      theme: 'light',
      notification: true
    })
  })
})