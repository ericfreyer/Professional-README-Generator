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
            message: "Were there any special licenses used for this project?"
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
            message: "Are there any contribution rules?"
        },
    ])}


//write function for prompts






//generate readme



//generate markdown



//write file 