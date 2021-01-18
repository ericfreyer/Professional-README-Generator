const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

userQuestions()
//array of questions to ask
function userQuestions() {

    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your Github username?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your project's title?"
        },  
        {
            type: "input",
            name: "install",
            message: "Explain the installation process."
        },
        {
            type: "input",
            name: "description",
            message: "Please write a brief description of your project."
        },
        {
            type: "checkbox",
            name: "license",
            message: "Were there any special licenses used for this project?",
            choices: [
                "[MIT License](LICENSE.txt)", 
                "[GNU GPLv3 License](COPYING.txt)"
                     ]
        },
        {
            type: "input",
            name: "usage",
            message: "Please explain the usage of the program."
        },
        {
            type: "input",
            name: "tests",
            message: "Are you running any tests for this program?"
        },
        {
            type: "input",
            name: "contribution",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "dependencies",
            message: "Is there any additional software needed for this application to run?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        }
    ])}


//write function for prompts
function render(response) {
  return `${response.title} by ${response.username}
    
## Project Description
* ${response.description}

##Dependencies
* ${response.dependencies}

## Installation Instructions
* ${response.install}

## Usage Information
* ${response.usage}

## Contributors
* ${response.contribution}

## Test Instructions
* ${response.tests}.

## License
* This project is licensed under the ${response.license} License.

## Questions
* For questions about collaboration, please contact ${response.email}`;
  
}





//generate readme


//generate markdown



//write file 