const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');

const employees = []; // constructors are pushed in this array
// html cards will be generated using this array of constructors
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
function init() {
    initHTML()
    addTeamMember();
}
function initHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Example HTML</title>
    </head>
    <body>
    <nav class="flex justify-center mx-auto py-10 bg-red-600 text-white text-5xl ">My Team</nav>

        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:gird-cols-3 xl:grid-cols-4">
    `;
    fs.writeFile("./dist/projectTeamProfile.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
}
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
const addTeamMember = () => {
    inquirer.prompt(managerQuestions).then(response => {
        const manager = new Manager(response.managerName, response.managerEmail, response.managerId, response.managerOffice)
        employees.push(manager);
        menu();
    })
};
function addEngineer() {
    inquirer.prompt(engineerQuestions).then(response => {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
        employees.push(engineer);
        menu();
    })
};
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
        addToContainer(i);
    }
    completeFile();
}
function addToContainer(teamMember) {
 //   console.log(teamMember.github); // working. (i in for loop=teamMember) 
    return new Promise(function (resolve, reject) {
        const name = teamMember.getName();
        const role = teamMember.getRole();
        const id = teamMember.getId();
        const email = teamMember.getEmail();
        let data = "";
        if (role === "Manager") {
            const officeNumber = teamMember.officeNumber;
            data = `
            <div class="justify-evenly">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-xl text-center leading-tight font-medium mb-2 bg-blue-600 bg-cover px-19 text-white rounded-lg">${name}<br/>
                ${role}</h5>
                        <ul class="text-gray-700 text-base mb-4">
                        <li>ID # ${id}</li>
                        <li>Email: ${email}</li>
                        <li>Office Number: ${officeNumber}</li>
                        </ul>
                    </div>
                </div>`
        } else if (role === "Engineer") {
            const gitHub = teamMember.github;
            data = `
            <div class="justify-evenly">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-xl text-center leading-tight font-medium mb-2 bg-blue-600 bg-cover px-19 text-white rounded-lg">${name}<br/>
                ${role}</h5>
                        <ul class="text-gray-700 text-base mb-4">
                        <li>ID # ${id}</li>
                        <li>Email: ${email}</li>
                        <li>GitHub: ${gitHub}</li>
                        </ul>
                    </div>
                </div>`
        } else {
            const school = teamMember.school;
            data = `
            <div class="justify-evenly">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-xl text-center leading-tight font-medium mb-2 bg-blue-600 bg-cover px-19 text-white rounded-lg">${name}<br/>
                ${role}</h5>
                        <ul class="text-gray-700 text-base mb-4">
                        <li>ID # ${id}</li>
                        <li>Email: ${email}</li>
                        <li>School: ${school}</li>
                        </ul>
                    </div>
                </div>`
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
function completeFile() {
    const finish = `</div>
    </body>
    </html>`;

    fs.appendFile("./dist/projectTeamProfile.html", finish, function (err) {
        if (err) {
            console.log(err);
        }
    });
}
init();