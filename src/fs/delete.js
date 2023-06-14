import { fileURLToPath } from 'url';
import path from 'path';
import { promises as fs } from 'fs';

const remove = async () => {
  const removeFile = 'fileToRemove.txt';
  const dirName = 'files';

  try {
    const filePath = fileURLToPath(import.meta.url);
    const directoryPath = path.dirname(filePath);
    const filePathToDelete = path.join(directoryPath,dirName,removeFile);

    await fs.unlink(filePathToDelete);
    console.log('File removed successfully.');
  } catch (err) {
    console.error('FS operation failed');
  }
};

await remove();
