const execa = require('execa')
const hook = require('require-in-the-middle')
const { sync, stdout, stderr, shell, shellSync } = execa
require('debug').enable('semantic-release:*')

const _execa = (...args) => {
  const result =  new Promise((resolve, reject) => {
    try {
      resolve(sync(...args))
    } catch (e) {
      reject(e)
    }
  })

  result.stdout.pipe = () => {}
  result.stderr.pipe = () => {}

  return result
}


Object.assign(_execa, execa)
_execa.sync = sync
_execa.stdout = stdout
_execa.stderr = stderr
_execa.shell = shell
_execa.shellSync = shellSync

delete require.cache[require.resolve('execa')]

hook(['execa'], () => _execa)

require('multi-semantic-release/bin/cli')
