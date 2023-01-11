import base64url from 'base64url'
import { webcrypto } from 'one-webcrypto'

export const getHash = function getHash (data) {
    var _data = data
    if (typeof data === 'string') {
        const te = new TextEncoder()
        _data = te.encode(data)
    }

    return webcrypto.subtle.digest('SHA-256', _data).then(buf => {
        return base64url.encode(buf)

        // this is hex version
        // return (Array.from(new Uint8Array(buf), b => {
        //     return b.toString(16).padStart(2, '0')
        // }).join('')) + '.sha256'
    })
}

export default getHash
