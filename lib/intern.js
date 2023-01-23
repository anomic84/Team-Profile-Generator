const Employee = require('./employee')

class Intern extends Employee {
    contructor(name, id, email, school) {
        super(name, id, email);
        this.officeNumber = school;
    }
    //Turns employee into intern role
    getRole() {
        return "Intern";
    }

}

module.exports = Intern;