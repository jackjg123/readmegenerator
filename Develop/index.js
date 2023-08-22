const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log('🚀 ~ file: index.js:4 ~ generateMarkdown:', generateMarkdown);
const license = [
  {
    name: 'GNU Affero General Public License V3.0',
    url: 'https://api.github.com/licenses/agpl-3.0',
    badge: '',
  },
  {
    name: 'Apache License 2.0',
    url: 'https://api.github.com/licenses/apache-2.0',
    badge: '',
  },
  {
    name: 'BSD 2-Clause "Simplified" License',
    url: 'https://api.github.com/licenses/bsd-2-clause',
    badge: '',
  },
  {
    name: 'BSD 3-Clause "New" or "Revised" License',
    url: 'https://api.github.com/licenses/bsd-3-clause',
    badge: '',
  },
  {
    name: 'Boost Software License 1.0',
    url: 'https://api.github.com/licenses/bsl-1.0',
    badge: '',
  },
  {
    name: 'Creative Commons Zero v1.0 Universal',
    url: 'https://api.github.com/licenses/cc0-1.0',
    badge: '',
  },
  {
    name: 'Eclipse Public License 2.0',
    url: 'https://api.github.com/licenses/epl-2.0',
    badge: '',
  },
  {
    name: 'GNU General Public License v2.0',
    url: 'https://api.github.com/licenses/gpl-2.0',
    badge: '',
  },
  {
    name: 'GNU General Public License v3.0',
    url: 'https://api.github.com/licenses/gpl-3.0',
    badge: '',
  },
  {
    name: 'GNU Lesser General Public License v2.1',
    url: 'https://api.github.com/licenses/lgpl-2.1',
    badge: '',
  },
  {
    name: 'MIT License',
    url: 'https://api.github.com/licenses/mit',
    badge: '',
  },
  {
    name: 'Mozilla Public License 2.0',
    url: 'https://api.github.com/licenses/mpl-2.0',
    badge: '',
  },
  {
    name: 'The Unlicense',
    url: 'https://api.github.com/licenses/unlicense',
    badge: '',
  },
];
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
    name: 'chooseLicense',
    message: 'Please select a license:',
    choices: license,
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
    const markdown = generateMarkdown(data);
    writeToFile('README.md', markdown);
  });
}

init();
