import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    const folder = 'files'
    const file = 'fileToWrite.txt'

    const filePath = fileURLToPath(import.meta.url);
    const directoryPath = path.dirname(filePath);
    const filePathToWrite = path.join(directoryPath, folder, file);

    const writeStream = createWriteStream(filePathToWrite, { encoding: 'utf-8' });

    process.stdin.pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('Data written to the file');
    });

    writeStream.on('error', (error) => {
        console.error('Error writing to the file:', error);
    });
    process.stdin.on('data', (data) => {
        const input = data.toString().trim();
        if (input === 'stop') {
          writeStream.end();
        } 
      });
};

await write();
