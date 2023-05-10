// 13 Functions and parameters

// Task 1

// const persons = {
//   name: "Mark",
//   surname: "Fedorov",
//   age: "25",
// };

// // Task 2

// persons.country = "Belarus";
// persons.town = "Mogilev";
// console.log(persons);

// // Task 3

// function introduction() {
//   console.log("My name is " + persons.name);
// }

// const prof = "accountant";
// function profession() {
//   console.log("I am a/an " + prof);
// }

// persons.introduction = introduction;
// persons.profession = profession;

// console.log(persons);
// persons.introduction();
// persons.profession();

// Task 4

// const obj = { name: "Jorge", surname: "Luis", secondSurname: " Borges" };

// function objStr(obj) {
//   for (prop in obj) {
//     console.log(prop + ":" + obj[prop]);
//   }
// }
// objStr(obj);

// Task 5

// const obj = { name: "Jorge", age: 12 };
// const obj = {
//   name: "Luis",
//   age: 42,
//   specialty: {
//     developer: true,
//     technology: "React",
//   },
// };
// const obj = {
//   name: "Luis",
//   age: 42,
//   specialty: null,
// };

// function ifisObj(obj) {
//   let value;
//   for (prop in obj) {
//     typeof obj[prop] === "object" && obj[prop] !== null
//       ? (value = true)
//       : (value = false);
//   }
//   return value;
// }

// console.log(ifisObj(obj));
