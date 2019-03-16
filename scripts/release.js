if (require("yargs").argv.execahook) {
  require("./execaHook").hook()
}

require('multi-semantic-release/bin/cli')
