// TODO: Include packages needed for this application\
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
let questions = [
    {
        // TEST QUESTION
        type: 'input',
        name: 'givenName',
        message: 'Enter your given name: '
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
        // USAGE QUESTION
        type: 'input',
        name: 'usage',
        message: 'Enter usage information: '
    },
    {
        // CONTRIBUTION QUESTION
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines: '
    },
    {
        // TESTS QUESTION
        type: 'input',
        name: 'test',
        message: 'Enter the way(s) a user can test the program: '
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
        choices: [ 'Apache License v2.0', 'GNU General Public License v3.0', 'MIT License', 'no license']
    }

]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
// tests
console.log("hello");

inquirer.prompt(questions)
    .then(answers => {
      console.log(answers.givenName);
    })

