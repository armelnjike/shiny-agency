import { formatJobList } from './'
import {formatQueryParams} from './'

describe("Ma fonction formatJobList",() =>{
it("Ceci est mon premier test", () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
})

it("Ceci est mon 2e test", () => {
    const expectedState = 'item2'
    expect(formatJobList('item2', 3, 2)).toEqual(expectedState)
})

it("Formats de parametres", () => {
    const expectedState = 'item2'
    expect(formatJobList('item2', 3, 2)).toEqual(expectedState)
})

})

describe('The formatQueryParams function', () => {
    it('should use the right format for param', () => {
      const expectedState = 'a1=answer1'
      expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
    })
    it('should concatenate params with an &', () => {
      const expectedState = 'a1=answer1&a2=answer2'
      expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
        expectedState
      )
    })
  })