import { resolvers } from './resolvers'

describe('resolvers', () => {
  describe('getNearestDrivers', () => {
    it('should return array of drivers', () => {
      expect(resolvers.Query.getNearestDrivers(undefined, { longLoc: 28.1988, latLoc: 50.5847 })).toHaveLength(10)
    })
  })
})
