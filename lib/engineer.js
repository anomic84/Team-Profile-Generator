const Employee = require('./employee')

class Engineer extends Employee {
    contructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    //Turns employee into Engineer role
    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;