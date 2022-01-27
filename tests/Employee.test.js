// Importing employee from classes folder 
const Employee = require("../classes/Employee");

// Makes sure name is being created for new employee object 
test("can add name for employee", () => {
    const newHire = new Employee('Alex', '25', 'alex.brgs25@gmail.com');
    expect(newHire.getName()).toEqual(expect.any(String));
});

// Makes sure ID is being created for new employee object 
test("can add ID number for employee", () => {
    const newHire = new Employee('Alex', '25', 'alex.brgs25@gmail.com');
    expect(newHire.getID()).toEqual(expect.any(Number));
});

// Makes sure email is being created for new employee object 
test("can check email for employee", () => {
    const newHire = new Employee('Alex', '25', emailTest);
    const emailTest = 'alex.brgs25@gmail.com';
    expect(newHire.getEmail().toBe(emailTest))
});

// Makes sure the role being given to teh employee is the correct one 
test("can check for employee role", () => {
    const newHire = new Employee('Alex', '25', 'alex.brgs25@gmail.com');
    expect(newHire.getRole().toBe("Employee"));
});

// Makes sure that employee object is being created before going into array
test("Create new employee", () => {
    const newHire = new Employee('Alex', '25', 'alex.brgs25@gmail.com');

    expect(newHire.name).toEqual(expect.any(String));
    expect(newHire.id).toEqual(expect.any(Number));
    expect(newHire.email).toEqual(expect.any(String));
});