const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

//testing intern obj
test("Should set the school from constructor", () => {
    const testSchool = "UW";
    const emp = new Intern("Spencer", 42, "Spencer@gmail.com", testSchool);

    expect(emp.getSchool()).toBe(testSchool);
});


//Get role
test('Should getRole of employee to be Intern ', () => {
    const testRole = "Intern";
    const emp = new Intern('Spencer', 42, 'Spencer@gmail.com', testRole);

    expect(emp.getRole()).toBe(testRole);
}); 