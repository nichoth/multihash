const { webcrypto } = require('one-webcrypto')
const base64url = require('base64url')

// data should be Uint8Array
function getHash (data) {
    return webcrypto.subtle.digest('SHA-256', data).then(buf => {
        return base64url.encode(buf) + '.sha256'

        // this is hex version
        // return (Array.from(new Uint8Array(buf), b => {
        //     return b.toString(16).padStart(2, '0')
        // }).join('')) + '.sha256'
    })
}

module.exports = {
    getHash
}
