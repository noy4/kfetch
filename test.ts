import { describe, expect, it } from 'vitest'
import { kfetch } from './src'

describe('kfetch', () => {
  it('ok', () => {
    expect(kfetch()).toBe('kfetch')
  })
  it('fail', () => {
    expect(kfetch()).not.toBe('hello world')
  })
})
