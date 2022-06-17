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

test('with a base64 image', t => {
    const pic = fs.readFileSync(__dirname + '/cinnamon-roll.jpg')
    const buf = Buffer.from(pic).toString('base64')
    const hash = getName(buf)
    console.log('from base64', hash)
    t.ok(hash, 'got a hash via base64 image')
    t.end()
})
