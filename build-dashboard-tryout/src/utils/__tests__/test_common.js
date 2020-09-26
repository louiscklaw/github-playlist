import {combineStyles, helloworld} from '../common'

describe("test common.js", () => {
  it('test helloworld call', () => {
    expect(helloworld()).toBe('helloworld');
  })

  it('test combineStyles helloworld', () => {
    expect(combineStyles(['1','2'])).toBe('1 2')
  })
})
