const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Ent er installation procedure:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Enter your credits:',
  },
  {
    type: 'input',
    name: 'features',
    message: 'Provide features:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide project contributions:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter tests:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license:',
    choices: [
      'None',
      'MIT',
      'Apache',
      'Boost_Software',
      'GNU_GPL_v3',
      'Mozilla_Public_License_2.0',
    ],
  },
];

// write readme file.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} created successfully.`);
    }
  });
}

// Initialize README generator.
function init() {
  inquirer.prompt(questions).then((data) => {
    const selectedLicense = data.license;
    const markdown = generateMarkdown(data, selectedLicense);
    writeToFile('README.md', markdown);
  });
}

init();
