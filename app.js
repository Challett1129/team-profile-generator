const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const {writeFile, copyFile} = require('./utils/generate-site');

let ifManager = false; 
let employeeArr = [];
let engArr = []
let internArr = [];
let manArr = [];

promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeName',
                message: `What is your employee's name?`,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log(`Please enter a name!`)
                        return false;
                    }
                }
            },
            {
                type: 'input', 
                name: 'email',
                message: `What is your employee's email?`,
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log(`Please enter an email!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: `What is your employee's ID number?`,
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log(`Please enter an ID!`)
                        return false
                    }
                }
            },
            {
                type: 'list',
                name: 'role', 
                choices: ifManager ? ['Engineer', 'Intern'] : ['Manager', 'Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: `What is your manager's office number?`,
                when: ({ role }) => {
                    if(role === 'Manager') {
                        ifManager = true;
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: numberInput => {
                    if(numberInput) {
                        return true;
                    } else {
                        console.log(`Please enter your manager's office number!`);
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: `What is this engineer's github?`,
                when: ({ role }) => {
                    if(role === 'Engineer') {
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: githubInput => {
                    if(githubInput) {
                        return true;
                    } else {
                        console.log(`Please enter a github account for your engineer!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: `What school is this intern attending?`,
                when:  ({ role }) => {
                    if(role === 'Intern') {
                        return true;
                    } else {
                        return false;
                    }
                },
                validate: schoolInput => {
                    if(schoolInput) {
                        return true; 
                    } else {
                        console.log(`Please enter a school for your intern!`)
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAnother',
                message: 'Would you like to add another team member?',
                default: false
            }
        ])
        .then(employeeData => {
            employeeArr.push(employeeData);
            // console.log(employeeArr);
            if(employeeData.confirmAnother) {
                return promptUser() 
            } else {
                return employeeArr;
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

const sortEmployee = employeeArr => {

    employeeArr.map(employee => {
        if(employee.role === 'Manager') {
            const manager = new Manager(employee.employeeName, employee.email, employee.id, employee.officeNumber);
            return manArr.push(manager);
            // console.log(manArr);
        } 
        else if (employee.role === 'Engineer') {
            const engineer = new Engineer(employee.employeeName, employee.email, employee.id, employee.github);
            
            return engArr.push(engineer);
            // console.log(engArr);
        } else {
            const intern = new Intern(employee.employeeName, employee.email, employee.id, employee.school);
            return internArr.push(intern); 
            // console.log(internArr)
        }
    })
}

promptUser()     
    .then(sortEmployee)
    .then(() => {
        const HTML = generatePage(manArr, engArr, internArr);
        writeFile(HTML);
        copyFile();
    })
