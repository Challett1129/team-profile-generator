const inquirer = require("inquirer")

class Employee {
    constructor(name = '', email, id){
        this.name = name
        this.email = email
        this.id = id
    }
    
    getEmail(){
        return this.email
    }
    
    getId(){
        return this.id
    }
    
    getRole(){
        return `Employee`
    }
}




// function Employee (name) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
// }
module.exports = Employee;