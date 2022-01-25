const Employee = require('./classes/Employee');
const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const {managerQuestions, engineerQuestions, internQuestions} = require('./questions');
const entireTeam = [];


menu = () => {
    createManager = async () => {
        const answers = await inquirer.prompt(managerQuestions);
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        console.log(manager);
        entireTeam.push(manager);
    };
    createEngineer = async () => {
        const answers = await inquirer.prompt(engineerQuestions);
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        console.log(engineer);
    };
    createIntern = async () => {
        const answers = await inquirer.prompt(internQuestions);
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        console.log(intern);
    };

    createManager()
    .then((answers) => fs.writeFile())
}

menu();