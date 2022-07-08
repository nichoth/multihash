# multihash

Create path & URL safe hashes of files. Suitable for use in a browser

Inspired by [ssbc/multiblob](https://github.com/ssbc/multiblob), but this
deals only with a `blob -> filename` interface, not storage of blobs.

## install

```
npm i -S @nichoth/multihash
```

## example

```js
const fs = require('fs')
const { getHash } = require('@nichoth/multihash')

const pic = fs.readFileSync(__dirname + '/cinnamon-roll.jpg')
const hashName = getHash(pic)
console.log('hash name', hashName)
// =>     hash name Ho1XhW2dp4bNJLZrYkurZPxlUhqrknD_Uu_nDp-KnMg.sha256
```

--------------------------------------

Using these:
```js
const createHash = require('create-hash')
const base64url = require('base64url');
var Buffer = require('buffer/').Buffer
```

results in this bundle size:
```
-rw-r--r--    1 nick  staff   230K Jul  8 08:08 bundle.js
```

vs with `one-webcrypto`:
```
-rw-r--r--    1 nick  staff   471B Jul  8 08:23 bundle.js
```

