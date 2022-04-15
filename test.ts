import assert from 'node:assert'
import childProcess from 'node:child_process'
import metal from './index.js'

// returns a random two-part metal name
{
  const name = metal()
  assert(name.length > 0)
  assert.name.includes(' ')
}

// returns a start
assert.ok(metal({ fragment: 'start' }).length > 0)

// returns an end
assert.ok(metal({ fragment: 'end' }).length > 0)

// CLI returns a random two-part metal name
{
  const name = childProcess.spawnSync('./cli.js')
  assert.ok(name.stdout.toString().length > 0)
  assert.ok(name.stdout.toString().includes(' '))
  assert.strictEqual(name.status, 0)
  assert.strictEqual(name.stderr.toString(), '')
}
