// const person: {
//   name: string;
//   age: number;
//hobbies: string[]
//role: [number, string]
// } = {
//   name: "Ammad",
//   age: 30,
// };
//it's just the way to represent the objects in TS

//const ADMIN = 0, READ_ONLY = 1, AUTHOR = 2; we can do this by enums
enum Role {
  ADMIN = 0,
  READ_ONLY = 1,
  AUTHOR = 2,
}
const person = {
  name: "Ammad",
  age: 30,
  hobbies: ["Sports", "Politics"],
  roleInTuple: [2, "author"], //role in tuple
  role: Role.ADMIN,
};

let favoriteActivities: string[];
//favoriteActivities = "Sports"; it should be in array as declared the array of string
//favoriteActivities = ["Sports", 1]; mixed array is not supported, give type any but that will make you loose benefit of TS
//if we want to
favoriteActivities = ["Sports"];
for (const hobby of person.hobbies) {
  console.log(hobby);
}
if (person.role === Role.ADMIN) {
  console.log("Person is: ", person.role);
}
console.log(person.name);
