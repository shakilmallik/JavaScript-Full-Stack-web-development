//q6. You are developing a form validation system. write a program that takes user information (such as name, email, age) and used the type of operator to check the data type of each input. print approptiate messages like "Name should be a string", "Email should be a string", or "Age should be a number". if any field is not proper.
let name = "Mithun";
let email = "mithun.s@pw.live";
let age = 21;
let n=typeof age;
console.log(`Age should be a ${n}`);