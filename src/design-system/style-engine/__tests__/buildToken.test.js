import buildToken from '../buildToken'

describe('Tokens are created with success', () => {
  it('should work as basic', () => {
    const y = {
      values: {
        sm: '1rem',
        md: '2rem',
      },
      propName: {
        margin: 'm',
        padding: 'm',
      },
    }
    const res = buildToken(y)
    const solvedResults = res.map(x => x({ m: 'sm' }))
    expect(solvedResults).toEqual([{ margin: '1rem' }, { padding: '1rem' }])
  })
})
