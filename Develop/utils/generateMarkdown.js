function renderLicenseName(license) {
  if (!license !== 'none') {
    return `## License
    
    This project is licensed under the ${license} license.`;
  }
  return '';
}

function renderBadge(license) {
  if (license !== 'none') {
    return `![License Badge](https://img.shields.io/badge/License-${license}-blue)`;
  }
  return '';
}
function renderLink(license) {
  if (license !== 'none') {
    return `[License](#license)`;
  }
}
function generateMarkdown(data) {
  return `# ${data.title}
${renderBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installations](#installations)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Features
${data.features}

## Contributions
${data.contribution}

## Tests
${data.tests}

${renderLicenseName(data.license)}
`;
}

module.exports = generateMarkdown;
