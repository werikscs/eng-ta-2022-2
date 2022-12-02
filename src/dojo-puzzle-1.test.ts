describe('', () => {
  test('should sum 2 vectors with 1 element each', () => {
    //setup
    const vectorA: number[] = [1]
    const vectorB: number[] = [1]
    const sut = new VectorOperations()
    //action
    const result = sut.scalarProduct(vectorA, vectorB)
    //expectation
    expect(result).toBe(2)
  })
})