CREATE DATABASE employee_db

USE employee_db

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    
);


INSERT INTO department (name)
VALUES ('Sales'),('HR');

INSERT INTO role(title, salary, department_id)
VALUES ('Sales Manager', 120000, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Bart', 'Simpson', 1, NULL)