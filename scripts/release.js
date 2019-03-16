const execa = require('execa')
const hook = require('require-in-the-middle')

const _execa = (...args) => {
  const result =  new Promise((resolve, reject) => {
    try {
      resolve(execa.sync(...args))
    } catch (e) {
      reject(e)
    }
  })

  result.stdout = new String('')
  result.stderr = new String('')
  result.stdout.pipe = () => {}
  result.stderr.pipe = () => {}

  return result
}

Object.assign(_execa, execa)

delete require.cache[require.resolve('execa')]

hook(['execa'], () => _execa)

require('multi-semantic-release/bin/cli')
