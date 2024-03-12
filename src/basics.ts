//function def
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input!");
  // } typeof is js method
  //this is the way used in js and in js mostly we have to debug on runtime
  //that's the advantage of ts that we will get errors on development time
  const result = n1 + n2; //if I dont sum in seperate var, all vars will be considered as string
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}
//vars
const num1 = 2, //2.0 and 2 are same
  num2 = 2.5;
const printResult = true;
const resultPhrase = "Result is: ";
//function call
add(num1, num2, printResult, resultPhrase);
