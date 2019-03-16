// NOTE this workaround forces execa calls to be always sync
// Discussion: https://github.com/semantic-release/semantic-release/issues/193#issuecomment-462063871

const execa = require('execa')
const ritm = require('require-in-the-middle')

let interceptor

const uncache = () => delete require.cache[require.resolve('execa')]

const getExecaSyncPromisified = () => Object.assign((...args) => {
  const result = new Promise((resolve, reject) => {
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
}, execa)

const hook = () => {
  if (interceptor) {
    return
  }

  uncache()
  interceptor = ritm(['execa'], () => getExecaSyncPromisified())
}

const unhook = () => {
  if (interceptor) {
    interceptor.unhook()
    interceptor = null
    uncache()
  }
}

module.exports = {
  hook,
  unhook
}
