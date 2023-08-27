// function renderLicenseName(license) {
//   if (!license) return '';
//   const choice = license.map((license) => {
//     return license.name;
//   });
//   console.log(choice);
// }

function getLicenseBadgeWithLink() {
  const licenseInfo = licenseSelected.find((lic) => lic.name === licenseName);
  if (!licenseInfo) {
    return licenseBadge; // Return the original badge if license info not found
  }

  const badgeWithLink = `${licenseBadge}\n\n[Learn more about ${licenseInfo.name}](${licenseInfo.url})`;
  return badgeWithLink;
}

function generateMarkdown(data, selectedLicense) {
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

This project is licensed under the [${selectedLicense.name}](${selectedLicense.url}) license.

${selectedLicense.badge}
`;
  // You can add more sections as needed
}

module.exports = generateMarkdown;
module.exportrgetLicenseBadgeWithLink;
