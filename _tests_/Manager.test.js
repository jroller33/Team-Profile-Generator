const Manager = require("../lib/Manager")

it("Set office number", () => {
    const test = "12";
    const employee = new Manager("John", 4567, "John@gmail.com", test);
    expect(employee.officeNumber).toBe(test);
});

describe("getRole", () => {
    it("returns Manager", () => {
        const manager = new Manager("John", 4567, "John@gmail.com", 12);
        manager.getRole();
        expect(manager.getRole()).toBe("Manager");
    });
});

it("gets name", () => {
    const test = "John";
    const employee = new Manager(test, 4567, "John@gmail.com", "jroller");
    expect(employee.name.toBe(test));
});

it("gets id", () => {
    const test = "1234";
    const employee = new Manager("John", test, "John@gmail.com", "jroller");
    expect(employee.id.toBe(test));
});
