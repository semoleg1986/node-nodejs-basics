import { promises as fs } from 'fs';

const OLD_NAME = 'wrongFilename.txt';
const NEW_NAME = 'properFilename.md'
const FOLDER = 'files';
const oldFileURL = new URL(`${FOLDER}/${OLD_NAME}`,import.meta.url)
const newFileURL = new URL(`${FOLDER}/${NEW_NAME}`,import.meta.url)

const rename = async () => {
  try {
    await fs.access(newFileURL);
    console.log('FS operation failed');
  } catch(err){
    try{
      await fs.access(oldFileURL);
      await fs.rename(oldFileURL, newFileURL);
    } catch(err){
      console.error('FS operation failed')
    }
  }
};

await rename();