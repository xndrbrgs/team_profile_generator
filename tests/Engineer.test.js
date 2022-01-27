// Importing engineer from classes folder 
const Engineer = require("../classes/Engineer");

// Makes sure name is being created for new engineer object 
test("can add name for engineer", () => {
    const newHire = new Engineer('Alex', 25, 'alex.brgs25@gmail.com');
    expect(newHire.getName()).toEqual(expect.any(String));
});

// Makes sure ID is being created for new engineer object 
test("can add ID number for engineer", () => {
    const newHire = new Engineer('Alex', 25, 'alex.brgs25@gmail.com');
    expect(newHire.getID()).toEqual(expect.any(Number));
});

// Makes sure email is being created for new engineer object 
test("can check email for engineer", () => {
    const emailTest = 'alex.brgs25@gmail.com';
    const newHire = new Engineer('Alex', 25, emailTest);
    expect(newHire.getEmail()).toBe(emailTest)
});

// Makes sure the role being given to the engineer is the correct one 
test("can check for engineer role", () => {
    const newHire = new Engineer('Alex', 25, 'alex.brgs25@gmail.com');
    expect(newHire.getRole()).toEqual("Engineer");
});

// Makes sure the github username being given to the engineer is the correct one 
test("can check for engineer's github'", () => {
    const newHire = new Engineer('Alex', 25, 'alex.brgs25@gmail.com', 'xndrbrgs');
    expect(newHire.getGithub()).toEqual(expect.any(String));
});

// Makes sure that engineer object is being created before going into array
test("Create new engineer", () => {
    const newHire = new Engineer('Alex', 25, 'alex.brgs25@gmail.com', 'xndrbrgs');

    expect(newHire.name).toEqual(expect.any(String));
    expect(newHire.id).toEqual(expect.any(Number));
    expect(newHire.email).toEqual(expect.any(String));
    expect(newHire.github).toEqual(expect.any(String));
});