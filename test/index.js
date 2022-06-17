const fs = require('fs')
const test = require('tape')
const { getName, getHash } = require('../')

test('creates a hash', t => {
    const pic = fs.readFileSync(__dirname + '/cinnamon-roll.jpg')
    const hashName = getName(pic)
    console.log('hash name', hashName)
    t.ok(hashName, 'should create a hash filename')
    t.ok(hashName.includes('.sha256'), 'should use "sha256" by default')
    t.end()
})

test('getHash and getName are the same', t => {
    const pic = fs.readFileSync(__dirname + '/cinnamon-roll.jpg')
    const name = getName(pic)
    const hash = getHash(pic)
    t.equal(name, hash, 'getName and getHash are synonymous')
    t.end()
})
