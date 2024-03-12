function add(n1: number, n2: number, cb: (num: number) => void): void {
  //taking a function as parameter
  const res = n1 + n2;
  console.log(res);
  cb(res);
}
add(2, 3, (result) => {
  //sending a function in argument
  console.log(result);
});
