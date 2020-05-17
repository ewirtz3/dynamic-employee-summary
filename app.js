const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require("./lib/htmlRenderer");

// and to create objects for each team member (using the correct classes as blueprints!)
//creating empty array for the team, defining function for manager prompts.
const team = [];
const mgrAsk = function () {
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
    .then(function (mgr) {
      //Creates a new instance of Manager, assigning it to manager. Passing in args from user input, calling getRole function, pushing manager to the team array, calling addTeamMember function.
      const manager = new Manager(
        mgr.name,
        mgr.id,
        mgr.email,
        mgr.officeNumber
      );
      team.push(manager);
      addTeamMember();
    });
};

mgrAsk();

//defining function addTeamMember, which prompts the user and reacts according to user input to call the appropriate prompts function.
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
    .then(function (teamMember) {
      switch (teamMember.team) {
        case "Engineer":
          engAsk();
          break;
        case "Intern":
          intAsk();
          break;
        case "I don't want to add anyone else":
          render(team);
          write();
          return team;
        default:
          return team;
      }
    });
};

//defining write function
const write = function () {
  const inputDir = path.resolve(__dirname, "templates");
  const inputPath = path.join(inputDir, "main.html");
  const OUTPUT_DIR = path.resolve(__dirname, "output");
  const outputPath = path.join(OUTPUT_DIR, "team.html");
  fs.readFile(inputPath, "utf-8", function (err, data) {
    if (err) throw err;
    fs.writeFile(outputPath, data, function (err) {
      if (err) throw err;
      console.log("Team page generated!");
    });
  });
};

//defining function engAsk, which prompts the engineer questions. Pushes engineer to the team array and calls addTeamMember.
const engAsk = function () {
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
    .then(function (eng) {
      const engineer = new Engineer(eng.name, eng.id, eng.email, eng.github);
      team.push(engineer);
      console.log(team);
      addTeamMember();
    });
};

//defining function to prompt intern questions. Adds intern to the team array and then calls addTeamMember.
const intAsk = function () {
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
    .then(function (int) {
      const intern = new Intern(int.name, int.id, int.email, int.school);
      team.push(intern);
      console.log(team);
      addTeamMember();
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
