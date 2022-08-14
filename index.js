const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');

const employees = []; // constructors are pushed in this array
// html cards will be generated using this array of constructors

function initHTML() {
    const html = `
        base html template that cards are added onto
    `;
}
function init() {
    initHTML()
    addTeamMember();
    
}
const addTeamMember = () => {
    inquirer.prompt(managerQuestions).then(response => {
        const manager = new Manager(response.managerName, response.managerEmail, response.managerId, response.managerOffice)
        employees.push(manager);
        menu();
        // const htmlPageContent = generateHtml(employees);
        // fs.writeFile('index.html', htmlPageContent, (err) =>
        //     err ? console.log(err) : console.log('Successfully created index.html')
        // );

    })
};
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's ID?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email address?",
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is the manager's office number?",
    }
];
function menu() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: "Choose one of the following options:",
        choices: ["Engineer", "Intern", "Finish Building Team"],
    }).then(response => {
        if (response.menu === "Engineer") {
            addEngineer();
        } else if (response.menu === "Intern") {
            addIntern();
        } else {
            finishTeam();
        }
    })
};
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is the engineer's ID?",
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email?",
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the engineer's GitHub username?",
    },
];
function addEngineer() {
    inquirer.prompt(engineerQuestions).then(response => {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
        employees.push(engineer);
        menu();
    })
};
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the intern's ID?",
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email?",
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is the intern's school?",
    },
];
function addIntern() {
    inquirer.prompt(internQuestions).then(response => {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
        employees.push(intern);
        menu();
    })
};
function finishTeam() {
//    console.log(employees);
    for (let i of employees) {
        if (i.getRole() === "Manager") {
            // console.log(i);
            // console.log("there's a manager");
            addToContainer(i);
        }
        else if (i.getRole() === "Engineer") {
            // console.log(i);
            // console.log("ingineer");
            addToContainer(i);
        }
        else if (i.getRole() === "Intern") {
            // console.log(i);
            // console.log("inturn");
            addToContainer(i);
        }
        else {
            console.log("nope");
        }
    }
}

function addToContainer(teamMember) {
    console.log(teamMember); // working. ('i' in for loop = teamMember in addToContainer) 

    return new Promise(function (resolve, reject) {
        const name = teamMember.getName();
        const role = teamMember.getRole();
        const id = teamMember.getId();
        const email = teamMember.getEmail();
        let data = "";
        if (role === "Manager") {
            const officeNumber = teamMember.officeNumber;
            data = `
            
            `
        } else if (role === "Engineer") {
            const gitHub = teamMember.github;
            data = `
            
            `
        } else {
            const school = teamMember.school;
            data = `
            
            `
        }
        console.log("Team Member was added!");
        fs.appendFile("./dist/projectTeamProfile.html", data, function(err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });


}

init();

//   const init = () => {
//     inquirer.prompt(managerQuestions).then(response => {
//         const manager = new Manager(response.managerName, response.managerEmail, response.managerId, response.managerOffice)
//     employees.push(manager);
//     menu();
//     })
//   };
// .then((answers) => {
//     const htmlPageContent = generateHTML(answers);
//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });

