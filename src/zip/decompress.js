import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createGunzip } from 'zlib';


const FOLDER = 'files'
const FILE = 'fileToCompress.txt'
const ZIP_FILE = 'archive.gz'
const fileURL = new URL(`${FOLDER}/${FILE}`,import.meta.url)
const zipURL = new URL(`${FOLDER}/${ZIP_FILE}`,import.meta.url)

const decompress = async () => {
    pipeline(
        createReadStream(zipURL),
        createGunzip(),
        createWriteStream(fileURL),
        (err) => {
          if (err) {
            console.error('FAIL', err);
          } else {
            console.log('SUCCESS');
          }
        }
      );
};

await decompress();