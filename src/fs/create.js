import { promises as fs } from 'fs';

const create = async () => {
  const FILE = 'fresh.txt';
  const FOLDER = 'files';
  const DATA = 'I am fresh and young';
  const filePathToCreate = new URL(`${FOLDER}/${FILE}`,import.meta.url)
  
  
  try {
    await fs.writeFile(filePathToCreate, DATA, { flag: 'wx' });
    console.log('FS operation successfully.');
  } catch (err) {
    console.error('FS operation failed');
  }
};

await create();
