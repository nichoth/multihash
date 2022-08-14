const base64url = require('base64url')
const webcrypto = window.crypto

function getHash (data) {
    var _data = data
    if (typeof data === 'string') {
        const te = new TextEncoder()
        _data = te.encode(data)
    }

    return webcrypto.subtle.digest('SHA-256', _data).then(buf => {
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
