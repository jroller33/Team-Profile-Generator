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
    for (let i of employees) {
        console.log(i)
        if (i === i.Engineer) {
            console.log('engineer: ', i);
        } else if (i === i.Intern) {
            console.log('intern: ', i);
        } else if (i === i.Manager) {
            console.log('manager: ', i);
        } else {
            console.log('error \n');
        }
    };
}




const init = () => {
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

