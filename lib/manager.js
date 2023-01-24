const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    //Turns employee into manager role
    getRole() {
        return "Manager";
    }

}

module.exports = Manager;