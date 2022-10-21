const {shuffleArray} = require('./utils')
const thisArray = [1, 2, 3]

describe('shuffleArray should', () => {
    test('Is a function', () => {
        expect(typeof shuffleArray).toBe('function')
    })

    it('returns an array', () => {
        let returnedValue = shuffleArray(thisArray)
        expect(returnedValue instanceof Array).toEqual(true)
    })
})