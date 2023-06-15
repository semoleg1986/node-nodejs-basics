import { promises as fs } from 'fs';

const remove = async () => {
  const REMOVE_FILE = 'fileToRemove.txt';
  const FOLDER = 'files';

  try {
    const filePathToDelete = new URL(`${FOLDER}/${REMOVE_FILE}`,import.meta.url)
    await fs.unlink(filePathToDelete);
  } catch (err) {
    console.error('FS operation failed');
  }
};

await remove();
