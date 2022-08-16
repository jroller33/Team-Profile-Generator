# Team Profile Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
## Description
🚧Under development🚧

This is a Node.js CLI application that uses `inquirer` to receive input about employees and generate an HTML page that shows summaries for each person. There's unit tests (using `jest`) for each class. 

```
User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

Acceptance Criteria
✅ GIVEN a command-line application that accepts user input
✅ WHEN I am prompted for my team members and their information
✅ THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
✅ WHEN I start the application
✅ THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
✅ WHEN I enter the team manager’s name, employee ID, email address, and office number
✅ THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
✅ WHEN I select the engineer option
✅ THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
✅ WHEN I select the intern option
✅ THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
✅ WHEN I decide to finish building my team
✅ THEN I exit the application, and the HTML is generated
```
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Video Demo Link](#video-demo-link)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)

## Installation
1. Clone the repo (https://github.com/jroller33/Team-Profile-Generator.git)
2. Run `npm i` and then `node index.js` to start.

## Usage
After you start the app, you will be asked a series of questions about the employees on your team. First you'll be asked for the manager's info. Then you'll be given a list of options to add additional employees. You can add as many employees as you need and they will be dynamically added to the HTML file. You'll be prompted to enter each employee's information. Once you're done entering all the employees select "Finish Team" and the HTML will be created in ./dist/
## Screenshots

#
## Video Demo Link
You can find a video demonstration at the following link: <br/>

## Contribution
You can contribute at https://github.com/jroller33/Team-Profile-Generator

## Tests
Tests for this application are located in /\_tests\_/<br/>
## License
This project is licensed under the MIT License. <br/>
https://www.mit.edu/~amini/LICENSE.md

## Contact
GitHub: https://github.com/jroller33 <br/>
Email: jr@gmail.com