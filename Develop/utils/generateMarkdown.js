const licenseInformation = [
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

function renderLicenseBadge(license) {
  if (!license) return '';
  const badges = {
    MIT: '(https://img.shields.io/badge/License-MIT-yellow.svg)',
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

${licenseBadge}  

## Description
${data.description}

## License
This project is licensed under the [${data.license}](${licenseLink}) license.`;
  // You can add more sections as needed
}

module.exports = generateMarkdown;
