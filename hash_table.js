function hash(key, tableSize) {
  let len = key.length
  let hashCode = 0

  for(let i = 0; i < len; i++) {
    hashCode += key.charCodeAt(i)
    console.log('nextHash: ', hashCode)
  }

  return hashCode % tableSize
}

console.log(hash('Hello Worl', 7))
