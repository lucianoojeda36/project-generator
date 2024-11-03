import path from 'path';
import fs from 'fs-extra';
import createReactProject from './createReactProject';
import createNodeProject from './createNodeProject';

const createFullProject = async (projectPath: string, name: string) => {
  console.log(`Creando proyecto full-stack: ${name}...`);

  const projectDir = path.join(projectPath, name);

  await fs.mkdirp(projectDir);

  await createReactProject(path.join(projectDir), 'frontend');
  await createNodeProject(path.join(projectDir), 'backend');

  console.log(`Proyecto full-stack ${name} creado exitosamente!`);
};

export default createFullProject;
