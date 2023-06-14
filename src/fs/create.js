import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const fileName = 'fresh.txt';
  const dirName = 'files';
  const text = 'I am fresh and young';

  const filePath = fileURLToPath(import.meta.url);
  const directoryPath = path.dirname(filePath);
  const filePathToCreate = path.join(directoryPath, dirName, fileName);

  try {
    await fs.writeFile(filePathToCreate, text, { flag: 'wx' });
    console.log('FS operation successfully.');
  } catch (err) {
    console.error('FS operation failed');
  }
};

await create();
