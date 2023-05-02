// TODO: Include packages needed for this application\
const inquirer = require('inquirer');
const fs = require("fs");
// TODO: Create an array of questions for user input

let questions = [
    {
        // NAME QUESTION
        type: 'input',
        name: 'givenName',
        message: 'Enter your name for this project: '
    },
    {
        // TITLE QUESTION
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project: '
    },
    {
        // DESCRIPTION QUESTION
        type: 'input',
        name: 'description',
        message: 'Enter a description for the project: '
    },
    {
        // INSTALLATION QUESTION
        type: 'input',
        name: 'installation',
        message: 'Detail how to install this program: '
    },
    {
        // USAGE QUESTION
        type: 'input',
        name: 'usage',
        message: 'Enter usage information: '
    },
    {
        // TESTS QUESTION
        type: 'input',
        name: 'test',
        message: 'Enter the way(s) a user can test the program: '
    },
    {
        // CONTRIBUTION QUESTION
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines: '
    },
    {
        // GITHUB USERNAME QUESTION
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username (for "questions" section): '
    },
    {
        // EMAIL ADDRESS QUESTION
        type: 'input',
        name: 'email',
        message: 'Enter your email address (for "questions" section): '
    },
    {
        // LICENSE QUESTION
        type: 'list',
        name: 'license',
        choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License', 'no license'],
        message: 'Choose a license: '
    },
    {
        // YEAR QUESTION
        type: 'number',
        name: 'year',
        message: 'Enter the current year to be listed on the license: '
    }

]

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
// tests
console.log("hello");

inquirer.prompt(questions)
    .then(answers => {
        generateMarkdown(answers);
        generateLicense(answers);
    })

function generateLicense(answers) {
    if (answers.license == 'Apache License v2.0') {
        generateApache(answers)
    }
    else if (answers.license == 'GNU General Public License v3.0') {
        generateGNU(answers)
    }
    else if (answers.license == 'MIT License') {
        generateMIT(answers)
    }
    else if (answers.license == 'no license') {
        generateNoLicense(answers)
    }
}

function generateApache(answers) {
    fs.appendFileSync("README.md",
        `Copyright ${answers.year} ${answers.givenName}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    `
    )
}

function generateGNU(answers) {
    fs.appendFileSync("README.md",
        `Copyright (C) ${answers.year} ${answers.givenName}

        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
    
        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.
    `
    )
}

function generateMIT(answers) {
    fs.appendFileSync("README.md",
        `Copyright ${answers.year} ${answers.givenName}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this 
    software and associated documentation files (the “Software”), to deal in the Software 
    without restriction, including without limitation the rights to use, copy, modify, merge, 
    publish, distribute, sublicense, and/or sell copies of the Software, and to permit 
    persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies 
    or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, 
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR 
    IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
    SOFTWARE.
    `
    )
}

function generateNoLicense() {
    fs.appendFileSync("README.md",
        `- A license is not included in this program.
    `
    )
}


function generateMarkdown(answers) {
    fs.writeFileSync("README.md",
        `# ${answers.title}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Description
- ${answers.description}

## Installation
- ${answers.installation}

## Usage
- ${answers.usage}

## Tests
- ${answers.test}

## Contributing
- ${answers.contributing}

## Questions
- Contacts for questions about the software:
- GitHub: github.com/${answers.username}
- Email: ${answers.email}

## License

`
    )
    const readMeText = fs.readFileSync("README.md", "utf-8");
    console.log("readme.md: ", readMeText)
}