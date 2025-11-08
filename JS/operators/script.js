// 29th oct assignment js operators

// Arithmetic Operators
// let a = 10;
// let b = 3;
// console.log("Addition:", a + b); // 13
// console.log("Subtraction:", a - b); // 7
// console.log("Multiplication:", a * b); // 30
// console.log("Division:", a / b); // 3.3333
// console.log("Modulus:", a % b); //1

// Assignment Operators
// let x = 5;
// x = x + 3;
// console.log("Assignment (x = x + 3):", x); 
// x += 2;
// console.log("Addition Assignment (x += 2):", x);       
// x *= 2;
// console.log("Multiplication Assignment (x *= 2):", x); 
// x -= 5;
// console.log("Subtraction Assignment (x -= 5):", x);
// x /= 3;
// console.log("Division Assignment (x /= 3):", x);

// let count=5;
// console.log("Initial count:", count); // 5
// console.log("Post-increment (count++):", count++); // 5
// console.log("After Post-increment:", count); // 6
// count = 5; // reset count
// count--;
// console.log("Pre-decrement (--count):", --count); // 4  
// console.log("After Pre-decrement:", count); // 4

// Comparison Operators
// console.log( 5 == '5');
// console.log( 5 === '5');

// let p = 10;
// if(p > 5 && p<20 && p===10){
//     console.log("p is between 5 and 20 and equals 10");
// }

//     f. Try logical AND and OR:
// true && false  => false
// true || false => true
// !(true) => false
//      g. Predict the result of:
// (5 > 3 && 10 > 8),  true
// (5 > 3 || 10 < 8)    true
//     h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).



// 2. Variable Hoisting in JavaScript

// a. Predict output of:
// console.log(a);  result is undefined
// var a = 10



// b. Predict output of:
// console.log(b); result is ReferenceError: b is not defined
// let b = 10



// c. Predict output of:
// test()
// function test() { console.log(“Hello”) }   it will print Hello



// d. Try writing a function expression before initialization and call it:
// hello()
// var hello = function() { console.log(“Hi”) }
// Write what happened and why. it will give TypeError: hello is not a function because function expression is not hoisted


// e. Write one sentence:
// What gets hoisted?  variable declarations using var and function declarations get hoisted.
// What does not get hoisted fully? Variables declared using let and const do not get hoisted fully bcz they are in a temporal dead zone until their declaration is evaluated.




// 3. Conditional Operators (if, else, else-if, ternary, switch)
// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.
// let age = prompt("Enter your age:");
// age = Number(age);
// if (age > 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }


// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

// let marks = prompt("Enter your marks:");
// marks = Number(marks);
// if (marks >= 90) {   
//     console.log("A grade");
// } else if (marks >= 75) {
//     console.log("B grade");
// } else if (marks >= 50) {
//     console.log("C grade");
// } else {
//     console.log("Fail");
// }


// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

// var city = "Bhopal";
// if (city === "Bhopal") {
//     console.log("MP");
// } else if (city === "Delhi") {       
//     console.log("Capital");
// } else {
//     console.log("Unknown City");
// }

// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

// score>35 ? console.log("Pass") : console.log("Fail");


// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

// temerature>30 ? "Hot" : "Pleasant";

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.
// let day = prompt("Enter day number (1-7):");
// day = Number(day);
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;   
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;   
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day");
//         break;
// }



// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

// let country = "India";
// if (age > 18 && country === "India") {
//     console.log("Eligible for Vote");        
// } else {
//     console.log("Not Eligible");
// }