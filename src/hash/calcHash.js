import crypto from 'crypto'
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const folder = 'files';
    const file = 'fileToCalculateHashFor.txt'

    const calculateSHA256 = async (data) => {
        const hash = crypto.createHash('sha256');
        hash.update(data);
        return hash.digest('hex');
      };

    try{
        const filePath = await fileURLToPath(import.meta.url);
        const directoryPath = await path.dirname(filePath);
        const filePathToHush = await path.join(directoryPath, folder, file);
        const data = await fs.readFile(filePathToHush, 'utf-8');
        const sha256Hash = calculateSHA256(data)
        console.log(sha256Hash)
    } catch(err) {
        console.log(err)
    }

};

await calculateHash();