// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const setOption = require('./employee-database/lib/setOption');
const fileName = './examples/database';


console.log('Welcome to the Employee Database!');

//prompt to create logo
const question = [
    {
      type: 'list',
      message: 'Choose one of the following options:',
      name: "text",
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an emplyee role']
    },
  ];

//function to create logo
function createDatabase(input) {
    const option = setOption(input);
    fs.writeFile(fileName, option, "UTF-8", () => {
        console.log('View Database.');
    })
}

//function to initialize app
function init() {
    inquirer.prompt(question)
   .then((input) => {
        createDatabase (input);
   })
   .catch(err =>{
        console.log(err);
   });
}

init();