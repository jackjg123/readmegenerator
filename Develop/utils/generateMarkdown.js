// Return chosen license badge or empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  const badges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    // Add more badges for other licenses as needed
  };
}

function renderLicenseLink(license) {
  if (!license) return '';
  const link = {
    MIT: 'https://opensource.org/licenses/MIT',
  };
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);

  return `# ${data.title}

${licenseBadge}  // Add the license badge here

## Description
${data.description}

## License
This project is licensed under the [${data.license}](${licenseLink}) license.`;
  // You can add more sections as needed
}

module.exports = generateMarkdown;
