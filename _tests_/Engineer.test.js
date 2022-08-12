const Engineer = require("../lib/Engineer")

it("Set Github username", () => {
    const test = "john@gmail.com";
    const employee = new Engineer("John", 1234, "john@gmail.com", test);
    expect(employee.github).toBe(test);
});
it("adds role to engineer object with employeeRole()", () => {
    const test = "Engineer";
    const employee = new Engineer("Alex", 1234, "alex@gmail.com", test);
    expect(employee.employeeRole()).toBe(test);
});
it("adds github username to engineer object with gitHubUserName()", () => {
    const test = "alex@github.com";
    const employee = new Engineer("Jon", 1234, "alex@gmail.com", test);
    expect(employee.githubUserName()).toBe(test);
});