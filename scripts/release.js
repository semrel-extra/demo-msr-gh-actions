const execa = require('execa')
const hook = require('require-in-the-middle')
const { sync, stdout, stderr, shell, shellSync } = execa

sync.sync = sync
sync.stdout = stdout
sync.stderr = stderr
sync.shell = shell
sync.shellSync = shellSync

delete require.cache[require.resolve('execa')]

hook(['execa'], function (exports, name, basedir) {
  return sync
})

require('multi-semantic-release/bin/cli')
