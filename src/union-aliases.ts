type Combinable = number | string; //type alias
//function def
function combine(input1: Combinable, input2: Combinable) {
  //that was input1 = number|string, input2 = number|string ---- before Combinebale
  //these are union type parameters
  const result = input1 + input2;
  return result;
}
//vars
const num1 = 2,
  num2 = 2.3;
const name1 = "Ammad",
  name2 = "Ahmed";
//function call
const combinedAges = combine(num1, num2);
const combineNames = combine(name1, name2);
console.log(combinedAges);
console.log(combineNames);
