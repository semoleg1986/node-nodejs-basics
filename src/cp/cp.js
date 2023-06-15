import {fork} from 'child_process';

const FOLDER = 'files'
const FILE = 'script.js'
const fileURL = new URL(`${FOLDER}/${FILE}`,import.meta.url)

const spawnChildProcess = async (args) => {
    const childProcess = fork(fileURL, args, { silent: true });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.stdout.on('data', chunk => {
        process.stdout.write(`Received from child process: ${chunk}`)
    });
};
spawnChildProcess();
