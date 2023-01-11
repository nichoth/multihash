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
// =>     hash name 1e8d57856d9da786cd24b66b624bab64fc65521aab9270ff52efe70e9f8a9cc8
```

--------------------------------------

## bundle size

```
total 16
-rw-r--r--   1 nick  staff   469B Jan 10 17:39 index.cjs
-rw-r--r--   1 nick  staff   576B Jan 10 17:39 index.mjs
```

