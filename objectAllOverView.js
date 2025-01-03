// JavaScript Object Overview

// 1. Creating an Object
const person = {
      name: "John Doe",
      age: 30,
      isStudent: false
  };
  
  // 2. Adding Properties
  person.hobby = "Reading";
  
  // 3. Deleting Properties
  delete person.isStudent;
  
  // 4. Accessing Properties
  console.log(person.name); // Dot Notation
  console.log(person["age"]); // Bracket Notation
  
  // 5. Iterating Through Object
  for (let key in person) {
      console.log(`${key}: ${person[key]}`);
  }
  
  // 6. Checking for Properties
  console.log("name" in person); // true
  
  // 7. Methods in Object
  const car = {
      brand: "Toyota",
      start: function () {
          console.log("The car has started!");
      }
  };
  car.start();
  
  // 8. Nested Objects
  const student = {
      name: "John",
      subjects: {
          math: 90,
          science: 80
      }
  };
  console.log(student.subjects.math);
  
  // 9. Array of Objects
  const students = [
      { name: "John", age: 20 },
      { name: "Jane", age: 22 }
  ];
  console.log(students[1].name);
  
  // 10. Built-in Methods
  const keys = Object.keys(person);
  console.log(keys); // ["name", "age", "hobby"]
  
  const values = Object.values(person);
  console.log(values); // ["John Doe", 30, "Reading"]
  
  const entries = Object.entries(person);
  console.log(entries); // [["name", "John Doe"], ["age", 30], ["hobby", "Reading"]]
  
  const newPerson = Object.assign({}, person);
  Object.freeze(newPerson);
  
  // 11. Using Spread Operator
  const updatedPerson = { ...person, gender: "Male" };
  console.log(updatedPerson);
  
  // 12. Object Destructuring
  const { name, age } = person;
  console.log(name, age);
  
  // 13. Optional Chaining
  console.log(student?.subjects?.math); // 90
  console.log(student?.subjects?.history); // undefined
  