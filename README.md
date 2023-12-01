# 12 SQL: Employee Tracker

## Description

The purpose of this challenge is to create a database where an employer can keep track of their employees and/or make any updates to a current employee or new employee if needed. The database will store an employee's name, role, title, and salary and to access these information, an employer will need to answer the prompt in the command line.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Mock-Up

The video below demonstrates the application being used on the terminal:

[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./assets/12-sql-homework-video-thumbnail.png)](https://drive.google.com/file/d/1OI2EMTfk00B57O7i9tplckosAC5PkbBs/view?usp=sharing)


## Usage

When a employer answers the prompt, they will be directed to view all departments view all roles, view all employees, add a department, add a role, add an employee, or update an employee role.
![Alt text](<assets/Screenshot 2023-11-30 at 10.46.27 PM.png>)

## Tests
Type "npm test" in the command line to run a test that renders an expected outcome of each shape class (Circle, Triangle, Square).

© 2023 Bao Xiong. All Rights Reserved.