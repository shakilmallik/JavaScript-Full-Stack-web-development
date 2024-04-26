//q2. you are building a simple login system. Implement the login feature that has two variables: username and password . you should check if the username is "admin" and the passwors is "12345" . if both conditions are true, print "login successful"; otherwise, print "invalid credentials".
let username = "admin";
let password = "12345";
let n= prompt("Enter the username:");
let m= prompt("Enter the password:");
if(n===username && m===password){
console.log("log in succesful");}
else{
    console.log("Invalid credentials");
}