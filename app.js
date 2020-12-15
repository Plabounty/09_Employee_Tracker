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
  });


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
    connection.query('INSERT INTO role SET ?', {title: answers.title,
        salary: answers.salary, 
        department_id: answers.department_id}, function(err){
         console.log('Success');
     })
  })
}

// addRole()
  
  
  // make these functions that call be called when needed.



//   connection.query("SELECT * FROM employee", function(err, res) {
//       console.table(res)
//   });
function allRole()
  connection.query("SELECT * FROM role", function(err, res) {
      console.table(res)
  });

  function allDepartments()
//   connection.query("SELECT * FROM deparment", function(err, res) {
//       console.table(res)
//   });




// for setting up switchboard look at activity 14 or GreatBay for simplar version




