const Intern = require(`../lib/Intern`);

test(`Creates an Intern object with the role "Intern"`, () => {
    const intern = new Intern(`Collin`);

    expect(intern.name).toBe(`Collin`);
    expect(intern.getRole()).toEqual(`Intern`);
})

test(`Intern has a value of this.school`, () => {
    const intern = new Intern(`Collin`);

    expect(intern.getSchool()).toEqual(this.school)
})

test(`Intern object returns its role`, () => {
    const intern = new Intern(`Collin`);

    expect(intern.getRole()).toEqual(`Intern`);
})