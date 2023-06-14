import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const oldNameFile = 'wrongFilename.txt';
    const newNameFile = 'properFilename.md'
    const dirName = 'files';

    const renameFile = async (oldPath, newPath) => {
        try {
          await fs.rename(oldPath, newPath);
          console.log('FS operation successfully.');
        } catch (err) {
          console.error('FS operation failed');
        }
      };
    try {
        const filePath = await fileURLToPath(import.meta.url);
        const directoryPath = await path.dirname(filePath);
        const filePathToOldFile = await path.join(directoryPath, dirName, oldNameFile);
        const filePathToNewFile = await path.join(directoryPath, dirName, newNameFile);
        await renameFile(filePathToOldFile, filePathToNewFile);
    } catch(err){
        console.log(err)
    }
};

await rename();