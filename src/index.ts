#!/usr/bin/env node

import inquirer from 'inquirer';
import path from 'path';
import createReactProject from './commands/createReactProject.js';
import createNodeProject from './commands/createNodeProject.js';
import createFullProject from './commands/createFullProject.js';

const main = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: 'What type of project would you like to create?',
      choices: [
        { name: 'React', value: 'react' },
        { name: 'Node.js', value: 'node' },
        { name: 'React + Node.js (Full-stack)', value: 'full' },
      ],
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of the project?',
      validate: (input) => (input ? true : 'The project name cannot be empty.'),
    },
  ]);

  const { projectType, projectName } = answers;
  const projectPath = path.join(process.cwd());

  switch (projectType) {
    case 'react':
      createReactProject(projectPath, projectName);
      break;
    case 'node':
      createNodeProject(projectPath, projectName);
      break;
    case 'full':
      createFullProject(projectPath, projectName);
      break;
  }
};

main();
