DROP DATABASE IF EXISTS employeelist_db;

-- create employeelist_db
CREATE DATABASE employeelist_db;

-- use employeelist_db
USE employeelist_db;

-- Creates the table "department" within database
CREATE TABLE department (
  -- Creates a numeric column called "id" which will automatically increment its default value
 id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  -- Makes string columns called 'name' which cannot contain null
  name VARCHAR(30) NOT NULL,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT NOT NULL,
    date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
);