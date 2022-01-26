module.exports = {
  managerQuestions: [
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number?",
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
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the employee's github username?",
      when: (input) => input.role === "Engineer",
    },
    {
      type: "input",
      name: "school",
      message: "What is the employee's school?",
      when: (input) => input.role === "Intern",
    },
    {
      type: "confirm",
      name: "addAnotherEmployee",
      message: "Any other employees?",
      default: false,
    },
  ],
};
