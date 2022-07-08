const fs = require('fs')
const test = require('tape')
const { getName, getHash } = require('../')

test('creates a hash', t => {
    const pic = fs.readFileSync(__dirname + '/cinnamon-roll.jpg')
    getName(pic).then(hashName => {
        t.ok(hashName, 'should create a hash filename')
        t.ok(hashName.includes('.sha256'), 'should use "sha256" by default')
        // base64url version
        // t.equal(hashName, 'Ho1XhW2dp4bNJLZrYkurZPxlUhqrknD_Uu_nDp-KnMg.sha256',
        //     'should return the expected hash, url version')
        t.equal(hashName, '1e8d57856d9da786cd24b66b624bab64fc65521aab9270ff52efe70e9f8a9cc8.sha256',
            'should return the expected hash, hex version')
        t.end()
    })
})

test('getHash and getName are the same', async t => {
    const pic = fs.readFileSync(__dirname + '/cinnamon-roll.jpg')
    const name = await getName(pic)
    const hash = await getHash(pic)
    t.equal(name, hash, 'getName and getHash are synonymous')
    t.end()
})

test('with a base64 image', async t => {
    const pic = fs.readFileSync(__dirname + '/cinnamon-roll.jpg')
    const buf = Buffer.from(pic).toString('base64')
    const hash = await getName(buf)
    console.log('from base64', hash)
    t.ok(hash, 'got a hash via base64 image')
    t.end()
})
