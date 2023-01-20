const inquirer = require('inquirer');
const fs = require('fs');

// team subclasses in lib
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern")

// inq prompts for manager
const addManager = () => {
    return inquirer.createPromptModule([
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