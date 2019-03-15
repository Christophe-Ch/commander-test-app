const { exec } = require('child_process');

module.exports = (program) => {
    program.command('shout <message>')
        .action((message) => {
            exec(`echo ${message.toUpperCase()}`, (error, stdout, stderr) => {
                console.log(stdout);
            });
        });
}