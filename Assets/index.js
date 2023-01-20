const inquirer = require('inquirer');
const fs = require('fs');

// team subclasses in lib
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern")

// inq prompts for manager
const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: "manager name",
            validate: (managerNameInput) => { if (managerNameInput) { return true } else { return 'Manager name is needed.' } },
        },
        {
            type: 'input',
            message: "What is the manager's employee ID?",
            name: "manager ID",
            validate: (managerIdInput) => { if (managerIdInput) { return true } else { return 'Manager ID is needed.' } },
        },
        {
            type: 'input',
            message: "What is the manager's email address?",
            name: "manager email",
            validate: (managerEmailInput) => { if (managerEmailInput) { return true } else { return 'Manager email is needed.' } },
        },
        {
            type: 'input',
            message: "What is the manager's office number",
            name: "manager office number",
            validate: (managerONumberInput) => { if (managerONumberInput) { return true } else { return 'Manager office number is needed.' } },
        },
    ])
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: "engineer name",
            validate: (engineerNameInput) => { if (engineerNameInput) { return true } else { return 'Engineer name is needed.' } },
        },
        {
            type: 'input',
            message: "What is the Engineer's employee ID?",
            name: "engineer ID",
            validate: (engineerIdInput) => { if (engineerIdInput) { return true } else { return 'Engineer ID is needed.' } },
        },
        {
            type: 'input',
            message: "What is the Engineer's email address?",
            name: "engineer email",
            validate: (engineerEmailInput) => { if (engineerEmailInput) { return true } else { return 'Engineer email is needed.' } },
        },
        {
            type: 'input',
            message: "What is the Engineer's office number",
            name: "engineer office number",
            validate: (engineerONumberInput) => { if (engineerONumberInput) { return true } else { return 'Engineer office number is needed.' } },
        },
    ])
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: "intern name",
            validate: (internNameInput) => { if (internNameInput) { return true } else { return 'Intern name is needed.' } },
        },
        {
            type: 'input',
            message: "What is the Intern's employee ID?",
            name: "intern ID",
            validate: (internIdInput) => { if (internIdInput) { return true } else { return 'Intern ID is needed.' } },
        },
        {
            type: 'input',
            message: "What is the Intern's email address?",
            name: "intern email",
            validate: (internEmailInput) => { if (internEmailInput) { return true } else { return 'Intern email is needed.' } },
        },
        {
            type: 'input',
            message: "What is the Intern's office number",
            name: "intern office number",
            validate: (internONumberInput) => { if (internONumberInput) { return true } else { return 'Intern office number is needed.' } },
        },
    ])
}