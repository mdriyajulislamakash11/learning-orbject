JavaScript Object কী?
Object হল একটি ডেটা স্ট্রাকচার যেখানে ডেটা key-value pair আকারে সঞ্চিত থাকে। এটি এমনভাবে ডিজাইন করা হয়েছে যাতে বিভিন্ন ধরনের ডেটাকে একত্রে সংগঠিত এবং ম্যানেজ করা যায়।

Object তৈরির পদ্ধতি:
১. Object Literal Syntax:
javascript
Copy code
const person = {
  name: "John Doe",
  age: 30,
  isStudent: false
};
২. Object Constructor:
javascript
Copy code
const person = new Object();
person.name = "John Doe";
person.age = 30;
person.isStudent = false;
Object এর উপাদান:
Property (Key-Value Pair):
প্রতিটি property একটি key (string বা symbol) এবং একটি value (যে কোনো ধরনের ডেটা) ধারণ করে।
উদাহরণ:

javascript
Copy code
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};
Methods (Function):
Object এর মধ্যে function ডিফাইন করলে তাকে method বলা হয়।
উদাহরণ:

javascript
Copy code
const car = {
  brand: "Toyota",
  start: function() {
    console.log("The car has started!");
  }
};
car.start(); // Output: The car has started!
Object এর বিভিন্ন অপারেশন:
১. Property Access:
Dot Notation:
javascript
Copy code
console.log(car.brand); // Output: Toyota
Bracket Notation:
javascript
Copy code
console.log(car["brand"]); // Output: Toyota
২. Property যোগ করা:
javascript
Copy code
car.color = "Red";
৩. Property মুছে ফেলা:
javascript
Copy code
delete car.year;
৪. Object Iteration (প্রত্যেকটি property একবার করে দেখানো):
javascript
Copy code
for (let key in car) {
  console.log(key, ":", car[key]);
}
৫. Property Check:
javascript
Copy code
console.log("brand" in car); // Output: true
Object এর Built-in Methods:
১. Object.keys()
Object এর সব key গুলো return করে:

javascript
Copy code
const keys = Object.keys(car);
console.log(keys); // Output: ["brand", "model", "color"]
২. Object.values()
Object এর সব value গুলো return করে:

javascript
Copy code
const values = Object.values(car);
console.log(values); // Output: ["Toyota", "Corolla", "Red"]
৩. Object.entries()
Object এর key-value pair return করে:

javascript
Copy code
const entries = Object.entries(car);
console.log(entries);
// Output: [["brand", "Toyota"], ["model", "Corolla"], ["color", "Red"]]
৪. Object.assign()
একটি Object থেকে আরেকটি Object এ কপি করা:

javascript
Copy code
const newCar = Object.assign({}, car);
৫. Object.freeze()
Object কে immutable (পরিবর্তনযোগ্য নয়) করে:

javascript
Copy code
Object.freeze(car);
car.brand = "Honda"; // No effect
৬. Object.seal()
Property মুছে ফেলা বন্ধ করে, কিন্তু পরিবর্তন করা যায়:

javascript
Copy code
Object.seal(car);
delete car.model; // No effect
car.brand = "Honda"; // Works
Object এর বিভিন্ন Use-Case:
১. Nested Object (Object এর মধ্যে Object):
javascript
Copy code
const student = {
  name: "John",
  subjects: {
    math: 90,
    science: 80
  }
};
console.log(student.subjects.math); // Output: 90
২. Array of Objects:
javascript
Copy code
const students = [
  { name: "John", age: 20 },
  { name: "Jane", age: 22 }
];
console.log(students[1].name); // Output: Jane
৩. Object as Function Parameter:
javascript
Copy code
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}
greet({ name: "John", age: 30 });
৪. Object Destructuring:
javascript
Copy code
const { name, age } = student;
console.log(name); // Output: John
Object এর Limitations:
Key সবসময় string বা symbol হয়।
যদি অনেক ডেটা রাখতে হয় তবে Object এর বদলে Map ব্যবহার করা ভালো।
Object vs Array:
Aspect	Object	Array
Structure	Key-Value Pair	Indexed List
Access Time	Fast for Known Keys	Fast for Sequential Access
Use Cases	Heterogeneous Data	Homogeneous Data
Object in Modern JavaScript:
ES6 এবং পরবর্তী সংস্করণে object নিয়ে অনেক নতুন feature এসেছে:

Spread Operator:
javascript
Copy code
const newCar = { ...car, color: "Blue" };
Computed Property Names:
javascript
Copy code
const key = "brand";
const car = { [key]: "Toyota" };
Optional Chaining:
javascript
Copy code
console.log(student?.subjects?.math); // Output: 90
শেষ কথা:
Object হল JavaScript এর একটি ভিত্তি। এটি জটিল ডেটা মডেল তৈরি করতে এবং বিভিন্ন ডেটা একত্রে সংরক্ষণ করতে অপরিহার্য। Object সম্পর্কে ভালোভাবে বোঝা মানে JavaScript এর একটি শক্তিশালী অংশ আয়ত্ত করা। 😊