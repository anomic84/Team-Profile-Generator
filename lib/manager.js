const Employee = require('./employee')

class Manager extends Employee {
    contructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //Turns employee into manager role
    getRole() {
        return "Manager";
    }

}

module.exports = Manager;