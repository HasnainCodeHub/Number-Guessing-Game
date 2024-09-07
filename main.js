#! /usr/bin/env node          
import inquirer from "inquirer";
console.log("\n\t Welcome to Hasnain's Coding World\n");
let result = await inquirer.prompt([
    {
        message: "Please Guess Any Number Between 1-10 !!! ",
        type: "number",
        name: "GuessingNumberGame"
    }
]);
let randomNumber = Math.floor(Math.random() * 10 + 1);
if (result.GuessingNumberGame === randomNumber) {
    console.log("You Guessed Correctly Congratulations !!");
}
else {
    console.log("We are Sorry Your Gussed Is Wrong Please try Again !!");
}
