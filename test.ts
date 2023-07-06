import { describe, expect, it } from 'vitest'
import { kfetch } from '.'

describe('kfetch', () => {
  it('ok', () => {
    expect(kfetch()).toBe('kfetch')
  })
  it('fail', () => {
    expect(kfetch()).toBe('hello world')
  })
})
