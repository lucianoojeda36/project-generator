import { exec } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { getDirname } from '../utils/helpers.js';

const execPromise = (command: string, options: object) => {
  return new Promise((resolve, reject) => {
    exec(command, options, (err, stdout, stderr) => {
      if (err) {
        reject(new Error(`Command failed: ${stderr || stdout}`));
      } else {
        resolve(stdout);
      }
    });
  });
};

const createNodeProject = async (projectPath: string, name: string) => {
  try {
    console.log(`Creating Node.js project: ${name}...`);

    await fs.mkdirp(projectPath);

    const projectDir = path.join(projectPath, name);
    await fs.mkdirp(projectDir);

    await execPromise(`npm init -y && npm install express`, {
      cwd: projectDir,
    });

    const templateDir = path.join(
      getDirname(import.meta.url),
      '../templates/node',
    );

    await fs.copy(templateDir, projectDir, { overwrite: true });

    console.log(`Node.js project ${name} created successfully!`);
  } catch (error: any) {
    console.error(`Error creating Node.js project: ${error.message}`);
  }
};

export default createNodeProject;
