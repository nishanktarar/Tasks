
// Level 1 – Pure Beginner Practice

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age=prompt("Enter your age");
// age=Number(age);
// if(age>=18){
//     console.log("You can vote");
// }else{
//     console.log("You cannot vote");
// };



// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// for(let i=1;i<=10;i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }



// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
// let count=0;
// for(let i=1;i<=15;i++){
//     if(i>8){
//         count++;
//     }
// }
// console.log(`Count of numbers greater than 8 between 1 and 15 is ${count}`); 




// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

//  const correctPassword="admin123";
//  let userPassword=prompt("Enter your password:");
//  if(userPassword===correctPassword){
//      console.log("Access granted");
//  }else{
//      console.log("Access denied");
//  }  




// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// const correctPassword="admin123";
// let attempts=0;
// while(attempts<3){
//     let userPassword=prompt("Enter your password:");
//     if(userPassword===correctPassword){
//         console.log("Access granted");
//         break;
//     }else{      
//         attempts++;
//         if(attempts<3){
//             console.log("Incorrect password. Try again.");
//         }
//         else if(attempts===3){
//             console.log("Account locked");
//         }   
//     }
// }




// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let yesCnt=0;
// while(true){
//     let userInput=prompt("Enter a word (type 'stop' to end):");
//     if(userInput.toLowerCase()==="stop"){
//         break;
//     }
//     if(userInput.toLowerCase()==="yes"){
//         yesCnt++;
//     }   
// }
// console.log(`You typed "yes" ${yesCnt} times.`);    



// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// console.log("Numbers divisible by 7 from 1 to 50:");
// for(let i=1;i<=50;i++){
//     if (i%7===0){
//         console.log(i);
//     }
// }





// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

//  let sum=0;
//  for(let i=0;i<=30;i++){
//        if(i%2!==0){
//            sum+=i;
//        }
//     }
//  console.log(`Sum of all odd numbers from 1 to 30 is ${sum}`);




// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

//  while(true){
//     let userNum=prompt("Enter a number (even number to stop):");
//     userNum=Number(userNum);
//     if(userNum%2===0){
//         console.log("You entered an even number. Stopping.");
//         break;
//     }
//     }   
  


// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start=prompt("Enter the start number:");
// let end=prompt("Enter the end number:");
// start=Number(start);
// end=Number(end);
// for(let i=start;i<=end;i++){
//     console.log(i);
// }


// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let oddCnt=0;
// for( let i=1;i<=20;i++){
//     if(i%2!==0){
//         console.log(i);
//         oddCnt++;
//         if(oddCnt===3){
//             break;
//         }
//     }
// }


// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let posCnt=0;
// for(let i=1;i<=5;i++){
//     let userNum=prompt(`Enter number ${i}:`);
//     userNum=Number(userNum);
//     if(userNum>0){
//         posCnt++;
//     }   
// }
// console.log(`You entered ${posCnt} positive numbers.`);



// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let balanace=1000;
// for(let i=1;i<=3;i++){
//      if (balanace<=0){
//         console.log("No balance left in account.");
//         break;
//     }
//     let withdrawAmt=prompt(`Enter withdrawal amount ${i}:`);
//     withdrawAmt=Number(withdrawAmt);
//     if(withdrawAmt<=balanace){
//         balanace-=withdrawAmt;
//         console.log(`Withdrawal of ₹${withdrawAmt} successful. Remaining balance: ₹${balanace}`);
//     }
//     else{
//         console.log("Insufficient balance");
//     }   
// }