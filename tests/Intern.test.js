// Importing Intern from classes folder 
const Intern = require("../classes/Intern");

// Makes sure name is being created for new Intern object 
test("can add name for Intern", () => {
    const newHire = new Intern('Alex', 25, 'alex.brgs25@gmail.com');
    expect(newHire.getName()).toEqual(expect.any(String));
});

// Makes sure ID is being created for new Intern object 
test("can add ID number for Intern", () => {
    const newHire = new Intern('Alex', 25, 'alex.brgs25@gmail.com');
    expect(newHire.getID()).toEqual(expect.any(Number));
});

// Makes sure email is being created for new Intern object 
test("can check email for Intern", () => {
    const emailTest = 'alex.brgs25@gmail.com';
    const newHire = new Intern('Alex', 25, emailTest);
    expect(newHire.getEmail()).toBe(emailTest)
});

// Makes sure the role being given to the Intern is the correct one 
test("can check for Intern role", () => {
    const newHire = new Intern('Alex', 25, 'alex.brgs25@gmail.com');
    expect(newHire.getRole()).toEqual("Intern");
});

// Makes sure the school being given to the Intern is the correct one 
test("can check for Intern's github'", () => {
    const newHire = new Intern('Alex', 25, 'alex.brgs25@gmail.com', 'UCF');
    expect(newHire.getSchool()).toEqual(expect.any(String));
});

// Makes sure that Intern object is being created before going into array
test("Create new Intern", () => {
    const newHire = new Intern('Alex', 25, 'alex.brgs25@gmail.com', 'UCF');

    expect(newHire.name).toEqual(expect.any(String));
    expect(newHire.id).toEqual(expect.any(Number));
    expect(newHire.email).toEqual(expect.any(String));
    expect(newHire.school).toEqual(expect.any(String));
});