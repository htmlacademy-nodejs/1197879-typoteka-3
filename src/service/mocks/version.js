const packageFile = require(`../../../package.json`);

module.exports = {
  name: `--version`,
  run() {
    console.info(packageFile.version);
  }
};
