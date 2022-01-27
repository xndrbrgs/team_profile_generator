module.exports = {
  managerQuestions: [
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
      validate: (answer) => {
        if(answer === '' || isNaN(answer) === false) {
          console.log(`
          Please enter name!
          `)
          return false;
        }
        return true;
      }
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's ID?",
      validate: (answer) => {
        if(isNaN(answer)) {
          console.log(`
          Please enter ID number
          `) 
          return false
        } else {
          return true;
        }
      }
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email?",
      validate: (answer) => {
        if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(answer)) {
          return true
        } else {
          console.log(`
          Please enter valid email!
          `)
          return false
        }
      }
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number?",
      validate: (answer) => {
        if(isNaN(answer)) {
          console.log(`
          Please enter manager's office number!
          `) 
          return false
        } else {
          return true;
        }
      }
    },
  ],

  newEmployeeQuestions: [
    {
      type: "list",
      name: "role",
      message: "Select the new employee's role!",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
      validate: (answer) => {
        if(answer === '' || isNaN(answer) === false) {
          console.log(`
          Please enter name!
          `)
          return false;
        }
        return true;
      }
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's ID?",
      validate: (answer) => {
        if(isNaN(answer)) {
          console.log(`
          Please enter ID number!
          `) 
          return false
        } else {
          return true;
        }
      }
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email?",
      validate: (answer) => {
        if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(answer)) {
          return true
        } else {
          console.log(`
          Please enter valid email!
          `)
          return false
        }
      }
    },
    {
      type: "input",
      name: "github",
      message: "What is the employee's github username?",
      when: (input) => input.role === "Engineer",
      validate: (answer) => {
        if(answer === '') {
          console.log(`
          Please enter employee's GitHub username!
          `)
          return false;
        }
        return true;
      }
    },
    {
      type: "input",
      name: "school",
      message: "What is the employee's school?",
      when: (input) => input.role === "Intern",
      validate: (answer) => {
        if(answer === '' || isNaN(answer) === false) {
          console.log(`
          Please enter intern's school!
          `)
          return false;
        }
        return true;
      }
    },
    {
      type: "confirm",
      name: "addAnotherEmployee",
      message: "Any other employees?",
      default: false,
    },
  ],
};
