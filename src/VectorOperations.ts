class VectorOperations {
  scalarProduct(vectorA: number[], vectorB: number[]): number{
    let result = 0
    
    for(let i=0; i<vectorA.length; i++)
      result += ( vectorA[i] || 0) * (vectorB[i] || 0)

    return result
  }
}

export {VectorOperations};