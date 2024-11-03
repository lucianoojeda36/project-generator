import path from 'path';

export const getDirname = (metaUrl: string): string => {
  const url = new URL(metaUrl);
  const basePath = decodeURI(url.pathname);
  const desiredPath = path.join(basePath, '..', '..', 'templates');
  return desiredPath;
};
