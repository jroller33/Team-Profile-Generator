// ignore this file. just trying to build this a different way.



// const { default: inquirer } = require("inquirer");
// const Engineer = require("../lib/Engineer");
// const Intern = require("../lib/Intern");
// const Manager = require("../lib/Manager");
// const fs = require('fs');

// const teamMembers = [];

// function init() {
//     initHTML()
//     addTeamMember();
// }

// function addTeamMember() {
//     //prompt commom Employee questions
//     inquirer.prompt([
//         {
//             message: "Team member name?",
//             name: "name",
//         },
//         {
//             type: "list",
//             message: "what is this team members role",
//             choices: [
//                 "Manager",
//                 "Engineer",
//                 "Intern"
//             ],
//             name: "role"
//         },
//         {
//             message: "What is this team members ID?",
//             name: "id"
//         },
//         {
//             message: "What is the team member's email?",
//             name: "email"
//         }
//     ])
//         // set role specific questions
//         .then(function ({ name, role, id, email }) {
//             let tmInfo = "";
//             if (role === "Manager") {
//                 tmInfo = "officeNumber?";
//             } else if (role === "Engineer") {
//                 tmInfo = "GitHub"
//             } else {
//                 tmInfo = "School?"
//             }

//             inquirer.prompt([
//                 {
//                     message: `Please enter in team member's ${tmInfo}`,
//                     name: "tmInfo"
//                 },
//                 {
//                     type: "list",
//                     message: "Would you like to add another team member?",
//                     choices: [
//                         "Yes",
//                         "No"
//                     ],
//                     name: "addTM"
//                 }
//             ])
//                 .then(function ({ tmInfo, addTM }) {
//                     let addNewTM;
//                     if (role === "Manager") {
//                         addNewTM = new Manager(name, id, email, tmInfo);
//                     } else if (role === "Engineer") {
//                         addNewTM = new Engineer(name, id, email, tmInfo);
//                     } else {
//                         addNewTM = new Intern(name, id, email, tmInfo);
//                     }
//                     teamMembers.push(addNewTM);
//                     addToContainer(addNewTM)
//                         .then(function () {
//                             if (addNewTM === "Yes") {
//                                 addTeamMember();
//                             } else {
//                                 completeFile();
//                             }
//                         });
//                 });
//         });
// }



// function initHTML() {
//     const html = `
//         html goes here


//         `;
//     fs.writeFile("./dist/project_team_profile.html", html, function (err) {
//         if (err) {
//             console.log(err);
//         }
//     });
// }

// function addToContainer(teamMember) {
//     return new Promise(function (resolve, reject) {
//         const name = teamMember.employeeName();
//         const role = teamMember.employeeRole();
//         const id = teamMember.employeeId();
//         const email = teamMember.employeeEmail();
//         let data = "";
//         if (role === "Manager") {
//             const officeNumber = teamMember.officeNum();
//             data = `
//                 manager's html
//                 ${role}
//                 ${id}
//                 ${email}
//                 ${officeNumber}

//                 `
//         } else if (role === "Engineer") {
//             const gitHub = teamMember.gitHubUserName();
//             data = `
//                 Engineer's html
//                 ${name}
//                 ${role}
//                 ${id}
//                 ${email}
//                 ${gitHub}

//                 `
//         } else {
//             const school = teamMember.schoolName();
//             data = `
//                 intern html
//                 ${name}
//                 ${id}
//                 ${email}
//                 ${school}

//                 `
//         }
//         console.log("Your team member was added!");
//         fs.appendFile("./dist/project_team_profile.html", data, function (err) {
//             if (err) {
//                 return reject(err);
//             };
//             return resolve();
//         });
//     });

// };

// function completeFile() {
//     const finish = `
//                 html

//                 `;

//     fs.appendFile("./dist/project_team_profile.html", finish, function (err) {
//         if (err) {
//             console.log(err);
//         }
//     });
// }
// init();