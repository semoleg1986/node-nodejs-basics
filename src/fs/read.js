import { promises as fs, readdir } from 'fs';

const read = async () => {
    const FOLDER = 'files';
    const READ_FILE = 'fileToRead.txt'
    const fileToRead = new URL(`${FOLDER}/${READ_FILE}`,import.meta.url)
    try {     
        const data = await fs.readFile(fileToRead, 'utf-8');
        console.log(data);
    }catch (err) {
        console.error('FS operation failed');
      }
};

await read();