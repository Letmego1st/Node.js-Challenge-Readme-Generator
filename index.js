// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const genMD = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'enter brief description of project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'how to install the project',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'how to use the project',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'how to contribute to this project',
  },
  {
    type: 'input',
    name: 'test',
    message: 'how to run the test product',
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your email? ',
  },
  {
    type: 'list',
    name: 'license',
    message: 'choose a license for your project ',
    choices: ['MIT','Apache_2.0,"BSD 3',"BSD 2", "GPL 3.0", "none"]
  o},

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt (questions).then((userResponse) => {
    console.log("userResponse = ", userResponse);
    writeToFile("README.md", genMD(userResponse));

  });
}

// Function call to initialize app
init();
