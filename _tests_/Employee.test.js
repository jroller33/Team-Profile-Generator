const Employee = require('../lib/employee');

describe("Employee", () => {
    it("Create employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object")
    });

    it("Can make name to equal constructor argument", () => {
        const name = "John";
        const employee = new Employee(name);
        expect (employee.name).toBe(name);
    });
    
    describe("getName", () => {
        it("render name from getName()", () => {
            const test = "John";
            const employee = new Employee(test);
            expect(employee.getName()).toBe(test);
        });
    });

    describe("getId", () => {
        it("render id from getId", () => {
            const test = 456;
            const employee = new Employee("John", test);    // does this need 3rd arg in ()?
            expect(employee.getId()).toBe(test);
        });
    });

    describe("getEmail", () => {
        it("render email from getEmail", () => {
            const test = "john@gmail.com";
            const employee = new Employee("John", 456, test);
            expect(employee.getEmail()).toBe(test);
        });
    });

    describe("getRole", () => {
        it("returns Employee", () => {
            const employee = new Employee("John", 4567, "John@gmail.com", 12);
            employee.getRole();
            expect(employee.getRole()).toBe("Employee");
        });
    });
});