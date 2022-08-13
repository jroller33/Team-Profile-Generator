const Employee = require('../lib/employee');

describe("Employee", () => {
    it("Create employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object")
    });
    it("Can make name to equal constructor argument", () => {
        const name = "Jon";
        const employee = new Employee(name);

        expect (employee.name).toBe(name);
    });
    it("Can make ID to equal constructor argument", () => {
        const test = 456;
        const employee = new Employee("John", test);

        expect (employee.id).toBe(test);
    });
    it("Can make ID to equal constructor argument", () => {
        const test = "john@gmail.com";
        const employee = new Employee("John", 456, test);

        expect (employee.email).toBe(test);
    })
})