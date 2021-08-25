const { test } = require('@jest/globals')
const Engineer = require('../lib/Engineer')

test(`creates an engineer object`, () => {
    const engineer = new Engineer('Collin')

    console.log(engineer);
})

test(`creates an engineer object with the role of Engineer`, () => {
    const engineer = new Engineer(`Collin`);

    expect(engineer.getRole()).toEqual(`Engineer`);
    console.log(engineer.getRole());
})

