const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

//testing manager obj
test("Should set the office number from constructor", () => {
    const testNumber = 24;
    const emp = new Manager("Spencer", 42, "Spencer@gmail.com", testNumber);

    expect(emp.officeNumber).toBe(testNumber);
});


//Get role
test('Should getRole of employee to be Manager ', () => {
    testRole = "Manager";
    const emp = new Manager('Spencer', 42, 'Spencer@gmail.com', 24);

    expect(emp.getRole()).toBe("Manager");
}); 