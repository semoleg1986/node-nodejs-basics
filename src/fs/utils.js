import path from 'path';
import { fileURLToPath } from 'url';

export const getFilePath = async (filePath) => {
    const currentFilePath = fileURLToPath(import.meta.url);
    const directoryPath = path.dirname(currentFilePath);
    const filePathToCreate = path.join(directoryPath, filePath);
    return filePathToCreate;
};
