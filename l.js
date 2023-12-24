let myarr = [1, 2, 3, 4, 5];
function secondnumber(num) {
  console.log("the second samllest elemet is:", myarr.sort()[1]);
  console.log("the second samllest elemet is:", myarr.sort()[myarr.length - 2]);
}
secondnumber("[1,2,3,4,5]");
