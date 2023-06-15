import { createReadStream } from 'fs';
import { pipeline } from 'stream';

const FOLDER = 'files'
const FILE = 'fileToRead.txt'

const fileURL = new URL(`${FOLDER}/${FILE}`,import.meta.url)


const read = async () => {
    pipeline(createReadStream(fileURL), process.stdout, (error) => {
        if (error) {
          console.error('Error reading the file:', error);
        } else {
          console.log('File read operation completed');
        }
      });
};

await read();
