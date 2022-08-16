const Engineer = require("../lib/Engineer")

it("Set Github username", () => {
    const test = "jroller";
    const employee = new Engineer("John", 4567, "John@gmail.com", test);
    expect(employee.getGithub()).toBe(test);
});

describe("getRole", () => {
    it("returns Engineer", () => {
        const engineer = new Engineer("John", 4567, "John@gmail.com", "jroller");
        engineer.getRole();
        expect(engineer.getRole()).toBe("Engineer");
    });
});

it("gets name", () => {
    const test = "John";
    const employee = new Engineer(test, 4567, "John@gmail.com", "jroller");
    expect(employee.name.toBe(test));
});

it("gets id", () => {
    const test = "1234";
    const employee = new Engineer("John", test, "John@gmail.com", "jroller");
    expect(employee.id.toBe(test));
});
