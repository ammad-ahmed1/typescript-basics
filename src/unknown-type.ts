//unknown is bit strict than any data type. We can  give at any value anytime but we can assign it to a value of whoich datatype is declared

let userInput: unknown;
let userName: string; //unknown can't be assigned to it

userInput = 5;
userInput = "Ammad";

userName = userInput;

function generateError(message: string, code: number) {
  //this function will never produce a value. so, it wont return anything
  throw { message: message, errorCode: code };
}

generateError("An error occured", 500);
