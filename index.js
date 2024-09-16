// Included packages needed for this application
import inquirer from 'inquirer';
import gM from './utils/generateMarkdown.js';
import fs from 'fs';

//Creates an array of questions for user input
const questions = ['What is the project title?',
    'Project description?',
    'Installation instructions?',
    'How will your project be used?',
    'Contribution guidelines?',
    'Test instruction?',
    'License?',
    'GitHub username?',
    'Email address?'
];

//Creates a function to write README file that takes two parameters: the name of the file and the data to store in the file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success README file created!')
    );
}
    
// TODO: Create a function to initialize app
function init() {
    //uses inquirer module to ask user the questions
    inquirer
    .prompt([
        {
        type: 'input',
        message: questions[0],
        name: 'title',
        },
        {
        type: 'input',
        message: questions[1],
        name: 'description',
        },
        {
        type: 'input',
        message: questions[2],
        name: 'install',
        },
        {
        type: 'input',
        message: questions[3],
        name: 'usage',
        },
        {
        type: 'input',
        message: questions[4],
        name: 'contribution',
        },
        {
        type: 'input',
        message: questions[5],
        name: 'test',
        },
        {
        type: 'list',       //License question in form of list based on acceptance criteria
        message: questions[6],
        name: 'license',
        choices: [
            'MIT',
            'GPLv2',
            'Apache',
            'BSD 3-clause'
        ],
        },
        {
        type: 'input',
        message: questions[7],
        name: 'username',
        },
        {
        type: 'input',
        message: questions[8],
        name: 'email',
        },
        
    ])
    .then((response) =>
        writeToFile('README.md', gM(response))   //takes the response from the user and writes to README.md via writeToFile function
    );
}

// Function call to initialize app
init();
