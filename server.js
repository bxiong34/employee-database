// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
const PORT = 3001;
const app = express();
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Welcome14*',
  database: 'employeelist_db'
});

//connect to mysql
db.connect(function (err) {
  if (err) throw err;
  console.log('Welcome to the Employee Database!');
  init();
});

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(PORT, () => {
  console.log('Now Listening.');
});

//prompt
const question = [
    {
      type: 'list',
      message: 'What would you like to do?',
      name: "text",
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an emplyee role']
    },
  ];

// initialize prompt
function init() {
    inquirer.prompt(question)
   .then((input) => {
      switch (input) {
        case 0: 
          input = "View all departments";
          viewDepartments();
          break;
        case 1: 
        input = "View all roles";
        viewRoles();
        break;
      }
   })
   .catch(err =>{
        console.log(err);
   });
}

function viewDepartments () {
  console.log('Viewing all departments.');
  init();
}

function viewRoles () {
  console.log('Viewing all roles.');
  init();
}
