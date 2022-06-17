# hash

Create path & URL safe hashes of files. Suitable for use in a browser

Inspired by [ssbc/multiblob](https://github.com/ssbc/multiblob), but this
deals only with a `blob -> filename` interface, not storage of blobs.

## install

```
npm i -S @nichoth/multihash
```

## example

```js
const { getHash } = require('@nichoth/multihash')

const pic = fs.readFileSync(__dirname + '/cinnamon-roll.jpg')
const hashName = getHash(pic)
console.log('hash name', hashName)
// =>     hash name Ho1XhW2dp4bNJLZrYkurZPxlUhqrknD_Uu_nDp-KnMg.sha256
```
