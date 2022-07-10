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
