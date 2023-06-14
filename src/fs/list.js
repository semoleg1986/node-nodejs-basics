import { promises as fs, readdir } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const list = async () => {
    const dirName = 'files';
    const filePath = fileURLToPath(import.meta.url);
    const directoryPath = path.dirname(filePath);
    const filePathToPrint = path.join(directoryPath, dirName);
    try {
        const files = await fs.readdir(filePathToPrint);
        console.log(files);
    } catch(err){
        console.log('FS operation failed')
    }

};

await list();