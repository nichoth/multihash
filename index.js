// const isCanonicalBase64 = require('is-canonical-base64')
const createHash = require('create-hash')
// var blobIdRegex = isCanonicalBase64('&', '.sha256', 32)
// var Buffer = require('buffer/').Buffer
// var isBuffer = Buffer.isBuffer

// function isString (s) { return typeof s === 'string' }

// function desigil (hash) {
//     return isBlob(hash) ? hash.substring(1) : hash
// }

// function resigil (hash) {
//     return isBlob(hash) ? hash : '&' + hash
// }

// const isBlob = function (data) {
//     return isString(data) && blobIdRegex.test(data)
// }

// const isHash = function (data) {
//     return (isString(data) &&
//         /^[A-Za-z0-9\/+]{43}=\.(?:blake2s|sha256)$/.test(data))
// }

// take a buffer,
// return a string in base64, + hash algorithm:
//   `abc.sha256`
// const encode = function (buf, alg) {
//     if(!isBuffer(buf)) throw new Error('hash should be a buffer, was:' + buf)
//     return buf.toString('base64') + '.' + (alg || 'sha256')
// }

// take a string in format `abc.sha256`
// return { hash: buffer, alg: algorithm string }
// const decode = function (str) {
//     var i = str.indexOf('.')
//     var alg = str.substring(i+1)
//     return { hash: Buffer.from(str.substring(0, i), 'base64'), alg: alg }
// }

// function toPath (str) {
//     if (!str || !isHash(str)) return false
//     var d = decode(str)
//     var h = d.hash.toString('hex')
//     return path.join(d.alg, h.substring(0, 2), h.substring(2))
// }

// module.exports = {
//     isBlob,
//     encode,
//     decode
// }


// exports.createHash = function (alg, noCompat) {
//     alg = alg || 'blake2s'
//     var hash = algs[alg]()

//     var hasher = pull.through(function (data) {
//       data = isBuffer(data) ? data : new Buffer(data)
//       hasher.size += data.length
//       hash.update(data)
//     }, function () {
//       return hasher.digest = noCompat === true ? hash.digest() : hash.digest('base64') + '.' + alg
//   //    hasher.digest = digest
//     })

//     hasher.size = 0
//     return hasher
// }

// given a blob, return a URL/path friendly string
function getHash (toHash, alg) {
    const hash = alg === 'blake2s' ?
        blake() :
        createHash(alg || 'sha256')

    // const hash = createHash(alg || 'sha256')
    hash.update(toHash)
    return hash.digest('base64url') + '.' + (alg || 'sha256')
}

// given a blob, return a URL/path friendly string
function getName (file, alg) {
    return getHash(file, alg)
}

module.exports = {
    getHash,
    getName
}

