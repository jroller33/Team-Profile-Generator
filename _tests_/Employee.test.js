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
    });
    describe("employeeName", () => {
        it("render name from employeeName()", () => {
            const test = "John";
            const employee = new Employee(test);
            expect(employee.employeeName()).toBe(test);
        });
    });
    describe("employeeId", () => {
        it("render id from employeeId", () => {
            const test = 456;
            const employee = new Employee("John", test);
            expect(employee.employeeId()).toBe(test);
        });
    });
    describe("employeeEmail", () => {
        it("render id from employeeEmail", () => {
            const test = "john@gmail.com";
            const employee = new Employee("John", 456, test);
            expect(employee.employeeEmail()).toBe(test);
        });
    });
    


})