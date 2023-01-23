const inquirer = require('inquirer');
const fs = require('fs');

// team subclasses in lib
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern")
const Employee = require("./lib/employee")

let teamArray = [];

// inq prompts for manager
const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'name',
            validate: (managerNameInput) => { if (managerNameInput) { return true } else { return 'Manager name is needed.' } },
        },
        {
            type: 'input',
            message: "What is the manager's employee ID?",
            name: 'id',
            validate: (managerIdInput) => { if (managerIdInput) { return true } else { return 'Manager ID is needed.' } },
        },
        {
            type: 'input',
            message: "What is the manager's email address?",
            name: "email",
            validate: (managerEmailInput) => { if (managerEmailInput) { return true } else { return 'Manager email is needed.' } },
        },
        {
            type: 'input',
            message: "What is the manager's office number",
            name: "officeNumber",
            validate: (managerONumberInput) => { if (managerONumberInput) { return true } else { return 'Manager office number is needed.' } },
        },
    ]).then(({ name, id, email, officeNumber }) => {
        const newManager = new Manager(name, id, email, officeNumber)
        teamArray.push(newManager)

    })
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: "name",
            validate: (engineerNameInput) => { if (engineerNameInput) { return true } else { return 'Engineer name is needed.' } },
        },
        {
            type: 'input',
            message: "What is the Engineer's employee ID?",
            name: "id",
            validate: (engineerIdInput) => { if (engineerIdInput) { return true } else { return 'Engineer ID is needed.' } },
        },
        {
            type: 'input',
            message: "What is the Engineer's email address?",
            name: "email",
            validate: (engineerEmailInput) => { if (engineerEmailInput) { return true } else { return 'Engineer email is needed.' } },
        },
        {
            type: 'input',
            message: "What is the Engineer's Github username?",
            name: "github",
            validate: (engineerGithubInput) => { if (engineerGithubInput) { return true } else { return 'Engineer Github address is needed.' } },
        },
    ]).then(({ name, id, email, github }) => {
        const newEngineer = new Engineer(name, id, email, github)
        teamArray.push(newEngineer)

    })
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: "name",
            validate: (internNameInput) => { if (internNameInput) { return true } else { return 'Intern name is needed.' } },
        },
        {
            type: 'input',
            message: "What is the Intern's employee ID?",
            name: "id",
            validate: (internIdInput) => { if (internIdInput) { return true } else { return 'Intern ID is needed.' } },
        },
        {
            type: 'input',
            message: "What is the Intern's email address?",
            name: "email",
            validate: (internEmailInput) => { if (internEmailInput) { return true } else { return 'Intern email is needed.' } },
        },
        {
            type: 'input',
            message: "What is the Intern's school",
            name: "school",
            validate: (internSchoolInput) => { if (internSchoolInput) { return true } else { return 'Intern office number is needed.' } },
        },
    ]).then(({ name, id, email, school }) => {
        const newIntern = new Intern(name, id, email, school)
        teamArray.push(newIntern)

    })
}