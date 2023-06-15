import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

const copy = async () => {
    const FOLDER = 'files';
    const COPY_FOLDER = 'files_copy';
    const folderPath = new URL(`${FOLDER}`,import.meta.url)
    const copyFolderPath = new URL(`${COPY_FOLDER}`,import.meta.url)

    try {
        await fs.access(folderPath);
        try {
            await fs.access(COPY_FOLDER);
        } catch(err){
            await fs.mkdir(copyFolderPath);
        }
        const files = await fs.readdir(folderPath);
        for (const file of files){
            await fs.copyFile(fileURLToPath(`${folderPath}/${file}`), fileURLToPath(`${copyFolderPath}/${file}`));
        }
    }
    catch(err){
        console.log('FS operation failed')
    }
  };

await copy();
