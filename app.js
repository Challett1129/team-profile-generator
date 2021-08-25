const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');

let ifManager = false; 
let employeeArr = []

promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeName',
                message: `What is your employee's name?`
            },
            {
                type: 'input', 
                name: 'email',
                message: `What is your employee's email?`
            },
            {
                type: 'input',
                name: 'id',
                message: `What is your employee's id number?`
            },
            {
                type: 'list',
                name: 'role', 
                choices: ifManager ? ['Engineer', 'Intern'] : ['Manager', 'Engineer', 'Intern']
            }
        ])
        .then(({ employeeName, email, id, role }) => {
            if (role === 'Manager'){
                ifManager = true;

                const manager = new Manager(employeeName, email, id);

                managerPrompt(manager);
            } else if (role === 'Engineer') {
                const engineer = new Engineer(employeeName, email, id);
                engineerPrompt(engineer);

            } else {
                const intern = new Intern(employeeName, email, id);
                internPrompt(intern);
            }
            
        })      
}

managerPrompt = (manager) => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: `What is ${manager.name}'s office number?`
            }
        ])
        .then(({ officeNumber }) => {
            manager.officeNumber = officeNumber;

            employeeArr.push(manager);
            confirmAnotherEmployee();
        })
}

engineerPrompt = (engineer) => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: `What is ${engineer.name}'s github?`
            }
        ])
        .then(({ github }) => {
            engineer.github = github;

            employeeArr.push(engineer);
            confirmAnotherEmployee();
        })
}

internPrompt = (intern) => {
    return inquirer
        .prompt([{
            type: 'input',
            name: 'school',
            message: `What school is ${intern.name} attending?`
        }])
        .then(({ school }) => {
            intern.school = school;
            
            employeeArr.push(intern);
            confirmAnotherEmployee();
        })
}

confirmAnotherEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'confirmAnother',
                message: 'Would you like to add another team member?',
                default: false
            }
        ])
        .then(({ confirmAnother }) => {
            if (confirmAnother) {
                promptUser();
            } else {
                return generatePage(employeeArr);
            }
        })
}

// mockData = [
//     Manager {
//       name: 'Collin',
//       email: 'c@aol.com',
//       id: '1',
//       officeNumber: '12'
//     },
//     Engineer {
//       name: 'Michael ',
//       email: 'm@aol.com',
//       id: '2',
//       github: 'michaelGit'
//     },
//     Engineer {
//       name: 'Chris',
//       email: 'chris@aol.com',
//       id: '3',
//       github: 'chrisGit'
//     },
//     Intern {
//       name: 'Crispin',
//       email: 'Crsipin@aol.com',
//       id: '4',
//       school: 'CrispinSchool'
//     }
//   ]
promptUser()