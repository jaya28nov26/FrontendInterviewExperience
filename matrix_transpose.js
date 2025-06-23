const transposeMatrix=(matrix)=>{
    let row=matrix[0].length;
    let column=matrix.length;
    console.log(row, column);
    const transposedMatrix=new Array(column).fill(null).map(()=>new Array(row));
    for(let i=0;i<row;i++){
      for(j=0;j<column;j++){
        transposedMatrix[i][j]=matrix[j][i];
      }
    }
    return transposedMatrix;
    console.log(transposedMatrix);
  }
  // Example usage:
  const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
  ];
  
  console.log(transposeMatrix(matrix));

//   3 3
//   [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]