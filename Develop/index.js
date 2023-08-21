const inquirer = require('inquirer');

inquirer.prompt([
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
  {
    type: 'input',
    name: 'title',
    message: '',
  },
]);
