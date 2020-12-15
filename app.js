var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Kaoiap60!",
  database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    start() 
  });

  function start() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "Add a department",
          "Add a role",
          "Add a employee",
          "View departments",
          "View roles",
          "View employees"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Add a department":
          addDepartment();
          break;
  
        case "Add a role":
          addRole();
          break;
  
        case "Add a employee":
          addEmployee();
          break;
  
        case "View departments":
          allDepartments();
          break;
  
        case "View roles":
          allRoles();
          break;

         case "View employees":
           allEmployees()

        }
      });
  }


  // would be in a inquirer function
  function addRole(){
    inquirer
    .prompt([{
        name: 'title',
        type: 'input',
        message: 'Employee title?'
    },
    {
        name: 'salary',
        type: 'input',
        message: 'What is the Salary?'
    },
    {
        name: 'department_id',
        type: 'input',
        message: 'Department Number?'
    }
        
    ])
  
  .then(function(answers){
    connection.query('INSERT INTO role SET ?', {
        title: answers.title,
        salary: answers.salary, 
        department_id: answers.department_id}, function(err){
         console.log('Success');
         start()
     })
  })
}

function addEmployee(){
  inquirer
  .prompt([{
      name: 'first_name',
      type: 'input',
      message: 'Employee first name?'
  },
  {
      name: 'last_name',
      type: 'input',
      message: 'Employee last name?'
  },
  {
      name: 'role_id',
      type: 'input',
      message: 'Role number?'
  }
      
  ])

.then(function(answers){
  connection.query('INSERT INTO employee SET ?', {
      first_name: answers.first_name,
      last_name: answers.last_name, 
      role_id: answers.role_id}, function(err){
      if (err) console.error(err)
       console.log('Success');
       start()
   })
})
}

function addDepartment(){
  inquirer
  .prompt([{
      name: 'department',
      type: 'input',
      message: 'Department name?'
  },
    
  ])

.then(function(answers){
  connection.query('INSERT INTO department SET ?', {
      Name: answers.department
     }, function(err){
       console.log('Success');
       start()
   })
})
}

// addRole()
  
  
  // make these functions that call be called when needed.


function allEmployees() {
  connection.query("SELECT * FROM employee", function(err, res) {
      console.table(res)
      start()
  });
}

function allRoles() {
  connection.query("SELECT * FROM role", function(err, res) {
      console.table(res)
      start()
  })
};

  function allDepartments() {
  connection.query("SELECT * FROM department", function(err, res) {
      console.table(res)
      start()
  });
}




// for setting up switchboard look at activity 14 or GreatBay for simplar version




