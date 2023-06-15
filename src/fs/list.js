import { promises as fs, readdir } from 'fs';

const list = async () => {
    const FOLDER = 'files';
    const folderURL = new URL(`${FOLDER}`,import.meta.url)
    try {
        const files = await fs.readdir(folderURL);
        console.log(files);
    } catch(err){
        console.log('FS operation failed')
    }
};

await list();