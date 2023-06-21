import {fork} from 'child_process';

const FOLDER = 'files'
const FILE = 'script.js'
const fileURL = new URL(`${FOLDER}/${FILE}`,import.meta.url)

const spawnChildProcess = async (args) => {
    const child = fork(fileURL, args, { stdio: 'pipe' });


    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
  
    child.on('close', (code) => {
      console.log(`Child process exited with code ${code}`);
    });
  };
  
await spawnChildProcess(['arg1', 'arg2']);
