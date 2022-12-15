import { VectorOperations } from "./VectorOperations"

describe('vector operation - scalar product', () => {
  test('should sum 2 vectors with 1 element each', () => {
    //setup
    const vectorA: number[] = [1]
    const vectorB: number[] = [1]
    const sut = new VectorOperations()
    //action
    const result = sut.scalarProduct(vectorA, vectorB)
    //expectation
    expect(result).toBe(1)
  })

  test('should sum 2 vectors with 2 element each', () => {
    //setup
    const vectorA: number[] = [1,2]
    const vectorB: number[] = [1,2]
    const sut = new VectorOperations()
    //action
    const result = sut.scalarProduct(vectorA, vectorB)
    //expectation
    expect(result).toBe(5)
  })

  test('should sum 2 vectors with different sizes', () => {
    //setup
    const vectorA: number[] = [1,2,3]
    const vectorB: number[] = [1,2]
    const sut = new VectorOperations()
    //action
    const result = sut.scalarProduct(vectorA, vectorB)
    //expectation
    expect(result).toBe(5)
  })

  test('should sum 2 empty vectors', () => {
    //setup
    const vectorA: number[] = []
    const vectorB: number[] = []
    const sut = new VectorOperations()
    //action
    const result = sut.scalarProduct(vectorA, vectorB)
    //expectation
    expect(result).toBe(0)
  })
})