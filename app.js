const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const manager = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please build your team. What is your manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your manager's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your manager's office number?",
        name: "officeNumber",
      },
    ])
    .then(function (managerInput) {
      const name = managerInput.name;
      const id = managerInput.id;
      const email = managerInput.email;
      const officeNumber = managerInput.officeNumber;
    });
};

const engineer = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your engineer's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your engineer's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your engineer's GitHub?",
        name: "github",
      },
    ])
    .then(function (engineerInput) {
      const name = engineerInput.name;
      const id = engineerInput.id;
      const email = engineerInput.email;
      const github = engineerInput.github;
    });
};

const intern = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your intern's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your intern's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your intern's school?",
        name: "school",
      },
    ])
    .then(function (internInput) {
      const name = internInput.name;
      const id = internInput.id;
      const email = internInput.email;
      const school = internInput.school;
    });
};

const addTeamMember = function () {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which type of team member do you want to add?",
        name: "team",
        choices: ["Engineer", "Intern", "I don't want to add anyone else"],
      },
    ])
    .then(function () {
      switch (teamMember) {
        case "Engineer":
          engineer();
          break;
        case "Intern":
          intern();
          break;
        default:
          return;
          break;
      }
    });
};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
