import { createWriteStream } from 'fs';

const FOLDER = 'files'
const FILE = 'fileToWrite.txt'
const fileURL = new URL(`${FOLDER}/${FILE}`,import.meta.url)

const write = async () => {
    const writeStream = createWriteStream(fileURL, { flags: 'a' });
    process.stdin.pipe(writeStream);
};

await write();
