module.exports = (program) => {
    program.command('hw <name>')
        .action((name) => {
            console.log(`Hello world ${name}!`);
        });
}