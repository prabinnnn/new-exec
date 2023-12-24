function matrix(num) {
  // Creating a num x num matrix
  const a = Array.from({ length: num }, (_, i) =>
    Array.from({ length: num }, (_, j) => i * num + j + 1)
  );

  // Displaying the matrix
  console.log("Matrix:");
  a.forEach((row) => console.log(row));

  // Calculating the sum of rows and columns
  for (let i = 0; i < num; i++) {
    const rowSum = a[i].reduce((sum, element) => sum + element, 0);
    const colSum = a.reduce((sum, row) => sum + row[i], 0);
    console.log(`Sum of row ${i + 1}: ${rowSum}`);
    console.log(`Sum of column ${i + 1}: ${colSum}`);
  }
}

matrix(3);
