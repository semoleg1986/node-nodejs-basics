import crypto from 'crypto'
import { promises as fs } from 'fs';

const FOLDER = 'files';
const FILE = 'fileToCalculateHashFor.txt'

const calculateHash = async () => {
    const fileURL = new URL(`${FOLDER}/${FILE}`,import.meta.url)
    
    const data = await fs.readFile(fileURL);
    const hash = crypto.createHash('sha256').update(data);
    console.log(hash.digest('hex'));
};

await calculateHash();