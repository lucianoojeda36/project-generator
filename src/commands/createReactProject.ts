import fs from 'fs-extra';
import path from 'path';
import execa from 'execa';
import ora from 'ora';
import { getDirname } from '../utils/helpers.js';

const createReactProject = async (basePath: string, name: string) => {
  const spinner = ora('Initializing project creation...').start();

  try {
    const projectPath = path.join(basePath);

    if (!fs.existsSync(basePath)) {
      spinner.text = 'Creating project directory...';
      await fs.mkdirp(basePath);
    }

    spinner.text = 'Running create-react-app...';
    await execa('npx', ['create-react-app', name, '--template', 'typescript'], {
      cwd: basePath,
      shell: true,
    });

    spinner.succeed(`React project ${name} created successfully!`);

    const projectDir = path.join(projectPath, name, 'src');

    const templateDir = path.join(getDirname(import.meta.url), 'react');

    if (!fs.existsSync(templateDir)) {
      console.error(`Template not found at path: ${templateDir}`);
      return;
    }

    spinner.text = 'Copying custom structure...';
    await fs.copy(templateDir, projectDir, { overwrite: true });

    spinner.succeed(`Custom structure copied to project ${name}.`);
  } catch (err: any) {
    spinner.fail(`Error creating the React project: ${err.message}`);
  }
};

export default createReactProject;
