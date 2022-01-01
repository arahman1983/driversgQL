import Results from './index'

describe('Results', () => {
  it('should have input', () => {
    expect(Results).toHaveTextContent('Top Matching Drivers')
  })
})