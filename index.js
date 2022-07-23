const inquirer = require('inquirer');
const fs = require('fs');
let licenseBadge = '';



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
A link to the deployed site can be found [here](${answers.run}). A screenshot of the site is shown below: 
![screenshot of deployed site for ${answers.name}](${answers.url})
## Usage
${answers.usage}
## Licenses
This project uses the ${answers.license} license. More info about licenses can be found [here](https://choosealicense.com/).
## Contributing
This project is open for contribution but please initiate an issue for any significant changes. 
## Tests
${answers.tests}
## Questions
The developer can be reached through [email](${answers.email}) or contacted through [Github](https://github.com/${answers.github}) or [LinkedIn](https://linkedin.com/in/${answers.linkedin}).`,
(err) => err ? console.log(err) : console.log('nice'))}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the project name?'
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
  ])
  .then((data) => {
    const content = generateHTML(answers);

    fs.writeFile('index.html', content, (err) => err ? console.log(err) : console.log('Success!')
    );
  });