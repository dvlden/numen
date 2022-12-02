import { describe, expect, it, vi } from 'vitest'
import { numen } from './index'

describe('test suite', () => {
  it('is a function type', () => {
    expect(numen).toBeTypeOf('function')
  })

  it('accepts a string as argument', () => {
    const instance = vi.fn(numen)
    instance('123')

    expect(instance).toHaveBeenCalledWith('123')
  })

  it('accepts a number as argument', () => {
    const instance = vi.fn(numen)
    instance(123)

    expect(instance).toHaveBeenCalledWith(123)
  })

  it('returns correct count', () => {
    const instance = vi.fn(numen)

    const cases = {
      123: 3,
      '12.5': 3,
      1e5: 6,
      '0001': 4,
      '1,000,000': 7,
      '0x123': 4,
    }

    for (const [input, expected] of Object.entries(cases)) {
      expect(instance(input)).toBe(expected)
    }
  })
})
