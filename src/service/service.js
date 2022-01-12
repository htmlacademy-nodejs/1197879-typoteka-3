'use strict';

const DEFAULT_COMMAND = `--help`;

const {Cli} = require(`./cli/cli.js`);

const userArguments = process.argv.slice(2);
const userCommand = userArguments[0];

if (userArguments.length === 0 || !Cli[userCommand]) {
  Cli[DEFAULT_COMMAND].run();
  process.exit(0);
}

Cli[userCommand].run(userArguments.slice(1));
