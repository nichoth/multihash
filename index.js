// const isCanonicalBase64 = require('is-canonical-base64')
// const createHash = require('create-hash')
// const base64url = require('base64url');
// var blobIdRegex = isCanonicalBase64('&', '.sha256', 32)
// var Buffer = require('buffer/').Buffer
// var isBuffer = Buffer.isBuffer
const { webcrypto } = require("one-webcrypto")

// given a blob, return a URL/path friendly string
// function getHash (toHash, alg) {
//     // @TODO -- blake
//     const hash = alg === 'blake2s' ?
//         blake() :
//         createHash(alg || 'sha256')

//     hash.update(toHash)
//     const digested = hash.digest('base64') + '.' + (alg || 'sha256')
//     return (base64url.fromBase64(digested))
// }



function getHash (data) {
    return webcrypto.subtle.digest('SHA-256', data).then(buf => {
        return (Array.from(new Uint8Array(buf), b => {
            return b.toString(16).padStart(2, '0')
        }).join('')) + '.sha256'
    })
}

module.exports = {
    getHash,
    getName: getHash
}
