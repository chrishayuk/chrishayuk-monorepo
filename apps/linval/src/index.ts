import chalk from 'chalk';
import { createServer } from "./server";

// get the port
const PORT = process.env.PORT || 3000;

// setup the logger
const log = console.log;

// setup chalk
const success = chalk.bold.blue;
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');
const info = chalk.yellow;
const x = q;

// log
log(info(`Hi, i'm Linval, i'm a very slow but happy image server`));

// create the server
const server = createServer();

// listen
server.listen(PORT, () => {
    log(success(`Linval is now running on port ${PORT}`));
});