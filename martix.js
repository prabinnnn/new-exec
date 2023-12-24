function matrix(num) {
  let a = [];
  let i, j;

  // Creating a 3x3 matrix
  for (i = 0; i < num; i++) {
    a[i] = [];
    for (j = 0; j < num; j++) {
      a[i][j] = i * num + j + 1;
    }
  }

  // Displaying the matrix
  console.log("Matrix:");
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
      console.log(a[i][j]);
    }
  }

  // Calculating the sum of rows and columns
  let sr, sc;
  for (i = 0; i < num; i++) {
    sr = 0;
    sc = 0;
    for (j = 0; j < num; j++) {
      sr += a[i][j];
      sc += a[j][i];
    }
    console.log("Sum of row " + (i + 1) + ": " + sr);
    console.log("Sum of column " + (i + 1) + ": " + sc);
  }
}
matrix(3);
