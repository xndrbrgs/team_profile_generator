// Employees classes

const Employee = require('./classes/Employee');
const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');

// Node Constants

const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// Qeustions Constants

const {managerQuestions, engineerQuestions, internQuestions} = require('./questions');
// const entireTeam = [];


menu = () => {
    createManager = async () => {
        const answers = await inquirer.prompt(managerQuestions);
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        // entireTeam.push(manager);
        console.log(manager);
    };
    createManager()
}

// Function to create HTML

// const createHTML = data => {
//     fs.writeFile("./dist/index.html", data, err => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log("Your team profile has been created succesfully.");
//         }
//     }); 
// }

// Initiator function

menu();