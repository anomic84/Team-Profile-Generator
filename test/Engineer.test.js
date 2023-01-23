const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');

//testing manager obj
test("Should set the github user from constructor", () => {
    const testGithub = userId;
    const emp = new Engineer("Spencer", 42, "Spencer@gmail.com", testGithub);

    expect(emp.github).toBe(testGithub);
});


//Get role
test('Should getRole of employee to be Engineer ', () => {
    testRole = "Engineer";
    const emp = new Engineer('Spencer', 42, 'Spencer@gmail.com', userId);

    expect(emp.getRole()).toBe(testRole);
}); 