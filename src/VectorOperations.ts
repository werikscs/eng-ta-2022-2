class VectorOperations {
  scalarProduct(vectorA: number[], vectorB: number[]): number{
    let result = 0
    
    for(let i=0; i<vectorA.length; i++)
      result += vectorA[i] * vectorB[i]

    return result
  }
}

export {VectorOperations};