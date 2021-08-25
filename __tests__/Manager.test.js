const { TestWatcher } = require("jest");
const Manager = require(`../lib/Manager`);

test(`Creates a manager object which returns role "Manager"`, () =>{
    const manager = new Manager(`Collin`);

    expect(manager.name).toBe(`Collin`);
    expect(manager.getRole()).toEqual(`Manager`);
});