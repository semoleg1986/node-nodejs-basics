import { promises as fs, readdir } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const copy = async () => {
    const sourceFolder = 'files';
    const targetFolder = 'files_copy';

    const filePath = fileURLToPath(import.meta.url);
    const directoryPath = path.dirname(filePath);
    const sourceFolderC = path.join(directoryPath);

    try {
        const sourceFolderPath = await fs.realpath(`${sourceFolderC}/${sourceFolder}`);
        try {
            await fs.access(targetFolder);
        } catch(err){
            await fs.mkdir(`${sourceFolderC}/${targetFolder}`);
            console.log(err)
        }
        const files = await fs.readdir(`${sourceFolderC}/${sourceFolder}`);
        for (const file of files){
            const sourcePath = join(`${sourceFolderC}/${sourceFolder}`, file);
            const targetPath = join(`${sourceFolderC}/${targetFolder}`, file);
            await fs.copyFile(sourcePath, targetPath);
        }
    }
    catch(err){
        console.log('FS operation failed')
    }
        
  
  };


await copy();
