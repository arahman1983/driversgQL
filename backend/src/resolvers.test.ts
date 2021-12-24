import { resolvers } from './resolvers'

describe('resolvers', () => {
  describe('helloWorld', () => {
    it('should return Hello World!', () => {
      expect(resolvers.Query.helloWorld()).toEqual('Hello World!')
    })
  })
})
