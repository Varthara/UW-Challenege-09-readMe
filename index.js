// Global variables for packages
const inquirer = require('inquirer');
const fs = require('fs');
let licenseBadge = '';
// retrieves badges based on answer from .prompt
const badge = (answers) => {
  if (answers.license === 'MIT') {
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    console.log(answers.license)
  } else if (answers.license === 'GPL'){
      licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    console.log(answers.license)
  } else if (answers.license === 'Apache'){
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    console.log(answers.license)
  } else {
      licenseBadge = "No license selected";
  }
}


// Template to generate readMe
const generateReadMe = (answers) => {
  badge(answers);
  fs.writeFile('./README.md', 
`# ${answers.name}
${licenseBadge}
## Description
${answers.description}
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Licenses](#licenses)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
## Installation
Installation instructions: ${answers.install}.
## Usage
${answers.usage}
## Licenses
This project is licensed under the ${answers.license} license.
## Contributing
${answers.contribute}.
## Tests
${answers.tests}
## Questions
Questions can be directed to [email](${answers.email}). For the developer's Github please refer to: [Github](${answers.github}) or [LinkedIn](${answers.linkedin}).`,
(err) => err ? console.log(err) : console.log('Success'))}
// Inquirer questions to recieve user input. 
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the project name?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter a link to your Github account?'
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Please enter a link to you Linkedin account?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address.'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a project description',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Please enter installation instructions.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Please enter contribution guidelines',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter test instructions',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose your desired liscense.',
      choices: ['MIT', 'GPL', 'Apache'],
    },
  ]).then((answers) => {generateReadMe(answers);
  })