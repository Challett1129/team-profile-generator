const { expect, test } = require("@jest/globals");
const Employee = require("../lib/Employee");

// jest.mock('../lib/Employee');

test(`creates an employee object and employee's name`, () => {
    const employee = new Employee('Collin');
    console.log(employee.name);

    expect(employee.name).toBe('Collin')
    
})

test(`gets employee's email, id, and role`, () => {
    const employee = new Employee('Collin');
    
    employee.email = 'n';
    employee.id = '3';
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
    console.log(employee);
    console.log(employee.getRole());
})

