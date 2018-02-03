const electron = require('electron');
const proc = require('child_process');
const path = require('path');

const modules_path = path.resolve(path.dirname(module.filename), "../");
const child = proc.spawn(electron, [path.resolve(modules_path, 'test_mod')]);

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
