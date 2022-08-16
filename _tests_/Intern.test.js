const Intern = require("../lib/Intern")

it("Set school", () => {
    const test = "school";
    const employee = new Intern("John", 4567, "John@gmail.com", test);
    expect(employee.getSchool()).toBe(test);
});

describe("getRole", () => {
    it("returns Intern", () => {
        const intern = new Intern("John", 4567, "John@gmail.com", "school");
        intern.getRole();
        expect(intern.getRole()).toBe("Intern");
    });
});

it("gets name", () => {
    const test = "John";
    const employee = new Intern(test, 4567, "John@gmail.com", "school");
    expect(employee.name.toBe(test));
});

it("gets id", () => {
    const test = "1234";
    const employee = new Intern("John", test, "John@gmail.com", "school");
    expect(employee.id.toBe(test));
});
