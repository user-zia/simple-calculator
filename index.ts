import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter Frist Number", type: "number", name: "fristNumber" },
  { message: "Enter Second Number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional statement
if (answer.operator === "Addition")
{
  console.log(answer.fristNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction")
{
  console.log(answer.fristNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication")
{
  console.log(answer.fristNumber * answer.SecondNumber);
} 
else if (answer.operator === "Division")
{
  console.log(answer.fristNumber / answer.SecondNumber);
}