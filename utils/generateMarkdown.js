// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  let yourLicense = ''
  if (license !== "none"){
  yourLicense = `![License:  ](https://img.shields.io/badge/License${license}-yellow.svg)`
  }
   
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//  TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
## Description
![](https://github.com/nicolewallace09/readme-generator/raw/master/utils/README-GENERATOR%20(1).gif)


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


${data.installation}

## Usage


${data.usage}

## github
https://github.com/Letmego1st/Node.js-Challenge-Readme-Generator/blob/main/README.md


${data.github}

## Contributions


${data.contributions}

## Test


${data.test}

## Email
 
${data.email}

## license


${renderLicenseBadge(data.license)}

  `;
}

module.exports = generateMarkdown;