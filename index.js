// HTML Generator
const getEmployees = require("./src/getEmployees");

// Employees classes

const Manager = require("./classes/Manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");

// Node Constants

const fs = require("fs");
const inquirer = require("inquirer");

// Questions Constants

const { managerQuestions, newEmployeeQuestions } = require("./questions");
const entireTeam = [];

// Creates the manager

createManager = async () => {
  const answers = await inquirer.prompt(managerQuestions);
  const manager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.officeNumber
  );
  entireTeam.push(manager);
};

// Creates the incoming employee 

newEmployee = async () => {
  console.log(`

  Time to select employees!

  `);
  const answers = await inquirer.prompt(newEmployeeQuestions);
  if (answers.role === "Engineer") {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );

    entireTeam.push(engineer);
  }

  if (answers.role === "Intern") {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );

    entireTeam.push(intern);
  }

// Makes sure that the function can verify if more employees are being added 
  if (answers.addAnotherEmployee === true) {
    return newEmployee();
  } else {
    return entireTeam;
  }
};

// Function to create HTML

const createHTML = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(`
            
            Your team profile has been created succesfully. Check the dist folder and run the HTML in browser.
            
            `);
        }
    });
}

// Initiator function

createManager()
.then(newEmployee)
.then(entireTeam => {
    return employeeCards(entireTeam);
})
.then(finishedHTML => {
    return createHTML(finishedHTML);
})

