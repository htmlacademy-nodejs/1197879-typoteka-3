'use strict';

const {Cli} = require(`./cli/cli.js`);
const {DEFAULT_COMMAND} = require(`./cli/consts.js`);

const userArguments = process.argv.slice(2);
const userCommand = userArguments[0];

if (userArguments.length === 0 || !Cli[userCommand]) {
  Cli[DEFAULT_COMMAND].run();
  process.exit(0);
}

Cli[userCommand].run(userArguments.slice(1));
