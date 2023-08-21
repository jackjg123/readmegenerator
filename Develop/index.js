const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('generate-markdown');
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
    message: 'Enter installation procedure:',
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
  inquirer.createPromptModule(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}
