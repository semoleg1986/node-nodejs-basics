import { promises as fs, readdir } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
const read = async () => {
    const dirName = 'files';
    const readFile = 'fileToRead.txt'
    try {     
        const filePath = await fileURLToPath(import.meta.url);
        const directoryPath = await path.dirname(filePath);
        const filePathToRead= await path.join(directoryPath, dirName ,readFile);
        const data = await fs.readFile(filePathToRead, 'utf-8');
        console.log(data);
    }catch (err) {
        console.error('FS operation failed');
      }


};

await read();