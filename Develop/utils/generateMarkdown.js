function renderLicenseName(license) {
  if (!license) return '';
  const choice = license.map((license) => {
    return license.name;
  });
  console.log(choice);
}

function renderLicenseLink(license) {
  if (!license) return '';
  const link = license.map((license) => {
    return license.url;
  });
  return link;
}

function generateMarkdown(data) {
  return `# ${data.title}

${data.license}   

## Description
${data.description}

## License
This project is licensed under the [${data.chooseLicense}](${licenseLink}) license.`;
  // You can add more sections as needed
}

module.exports = generateMarkdown;
