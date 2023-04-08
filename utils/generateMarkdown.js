// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
## Description
This app allows developers to create a professional READ.me file in a way that is clean, efficient and simple to use.

${data.description}

## Table of Contents

-[Installation] (#Installation)
-[Usage] (#Usage)
-[github] (#github)
-[Contributions] (#Contributions)
-[Test] (#Test)
-[Email] (#Email)
-[License] (#License)

## Installation
The following dependencies must be instaleed to run the application properly: inquirer, fs, utils

${data.installation}

## Usage
In order to use this app, run it in the terminal

${data.usage}

## github
https://github.com/Letmego1st/Node.js-Challenge-Readme-Generator/blob/main/index.js

${data.github}

## Contributions
Contributors: N/A

${data.contributions}

## Test
The following is needed to run test: node index.js

${data.test}

## Email
The following email will be used for contact purposes: imalways1st@me.com 
${data.email}

## license
This project is licensed under the MIT license.

${renderLicenseBadge(data.license)}

  `;
}

module.exports = generateMarkdown;




