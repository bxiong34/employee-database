USE employeelist_db;

-- inserts id and name into department table
INSERT INTO department (id, name)
VALUES
    (1, 'management'),
    (2, 'sales'),
    (3, 'training');

-- select rows in employees table
SELECT * FROM department;

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, 'manager', 200000, 1),
    (2, 'cashier', 70000, 2),
    (3, 'groomer', 100000, 2)
    (4, 'trainer', 160000, 3);

-- select rows in employees table
SELECT * FROM role;

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, 'curious', 'george', 1, 1),
    (2, 'sid', 'iceage', 2, 2),
    (3, 'mike', 'wazowski', 2, 3),
    (4, 'rafiki', 'baboon', 1, 4);

-- select rows in employees table
SELECT * FROM employee;


    
