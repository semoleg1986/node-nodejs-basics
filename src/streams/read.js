import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const folder = 'files'
    const file = 'fileToRead.txt'

    const filePath = fileURLToPath(import.meta.url);
    const directoryPath = path.dirname(filePath);
    const filePathToRead = path.join(directoryPath, folder, file);
    const readStream = createReadStream(filePathToRead, { encoding: 'utf-8' });

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('error', (error) => {
        console.error('Error reading the file:', error);
    });

    readStream.on('end', () => {
        console.log('File read operation completed');
    });
};

await read();
