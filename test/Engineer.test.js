const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

//testing engineer obj
test("Should set the github user from constructor", () => {
    const github = 'github';
    const emp = new Engineer("Spencer", 42, "Spencer@gmail.com", github);

    expect(emp.github).toBe('github');
});


//Get role
test('Should getRole of employee to be Engineer ', () => {
    const testRole = "Engineer";
    const emp = new Engineer('Spencer', 42, 'Spencer@gmail.com', 'github');

    expect(emp.getRole()).toBe(testRole);
}); 