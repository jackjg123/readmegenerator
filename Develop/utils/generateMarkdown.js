function renderLicenseName(license) {
  if (!license !== 'none') {
    return `## License
    
    This project is licensed under the $license) license.`;
  }
  return '';
}

function getLicenseBadge() {
  const licenseInfo = licenseSelected.find((lic) => lic.name === licenseName);
  if (!licenseInfo) {
    return licenseBadge; // Return the original badge if license info not found
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

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

## License
${renderLicenseName(data.license)}
`;
}

module.exports = generateMarkdown;
