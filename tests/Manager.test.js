// Importing Manager from classes folder 
const Manager = require("../classes/Manager");

// Makes sure name is being created for new Manager object 
test("can add name for Manager", () => {
    const newHire = new Manager('Alex', 25, 'alex.brgs25@gmail.com');
    expect(newHire.getName()).toEqual(expect.any(String));
});

// Makes sure ID is being created for new Manager object 
test("can add ID number for Manager", () => {
    const newHire = new Manager('Alex', 25, 'alex.brgs25@gmail.com');
    expect(newHire.getID()).toEqual(expect.any(Number));
});

// Makes sure email is being created for new Manager object 
test("can check email for Manager", () => {
    const emailTest = 'alex.brgs25@gmail.com';
    const newHire = new Manager('Alex', 25, emailTest);
    expect(newHire.getEmail()).toBe(emailTest)
});

// Makes sure the role being given to the Manager is the correct one 
test("can check for Manager role", () => {
    const newHire = new Manager('Alex', 25, 'alex.brgs25@gmail.com');
    expect(newHire.getRole()).toEqual("Manager");
});

// Makes sure the office number being given to the Manager is the correct one 
test("can check for Manager's office number'", () => {
    const newHire = new Manager('Alex', 25, 'alex.brgs25@gmail.com', 1997);
    expect(newHire.getOfficeNumber()).toEqual(expect.any(Number));
});

// Makes sure that Manager object is being created before going into array
test("Create new Manager", () => {
    const newHire = new Manager('Alex', 25, 'alex.brgs25@gmail.com', 1997);

    expect(newHire.name).toEqual(expect.any(String));
    expect(newHire.id).toEqual(expect.any(Number));
    expect(newHire.email).toEqual(expect.any(String));
    expect(newHire.officeNumber).toEqual(expect.any(Number));
});