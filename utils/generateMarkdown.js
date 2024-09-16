// Creates a function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if(license!== null){
    return `![license-badge](https://img.shields.io/badge/${license}_License-01a6ff)`
  } else {
    return ``
  }
}

// Creates a function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if(license !== null) {
    return `#license`
  } else {
    return ``
  }
}

// Creates a function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if(license !== null) {
    return `This project is covered under the ${license} license.`
  } else {
    return ``
  }
}

// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [License](${renderLicenseLink(data.license)})
- [Questions](#questions)

## Description

${data.description}

## Installation

${data.install}

## Usage

${data.usage}

## How to Contribute

${data.contribution}

## Tests

${data.test}

## License

${renderLicenseSection(data.license)}

---

## Questions

GitHub username: [${data.username}](https://github.com/${data.username}) <br>
Email: ${data.email}
`;
}

export default generateMarkdown;
