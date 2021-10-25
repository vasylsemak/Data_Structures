function hash(key, tableSize) {
  let len = key.length
  let hashCode = 0

  for(let i = 0; i < len; i++) {
    hashCode += key.charCodeAt(i)
  }

  return hashCode % tableSize
}


class HashTable {
  constructor(size) {
    this.size = size
    this.buckets = Array(this.size)

    for(let i = 0; i < this.size; i++) {
      this.buckets[i] = new Map
    }
  }

  insert(key, val) {
    let idx = hash(key, this.size)
    this.buckets[idx].set(key, val)
  }

  search(key) {
    let idx = hash(key, this.size)

    return this.buckets[idx].get(key)
  }

  remove(key) {
    let idx = hash(key, this.size)
    let deleted = this.buckets[idx].delete(key)

    // console.log('removed: ', deleted)
    return deleted
  }

}

let hTable = new HashTable(12)

hTable.insert('Donald', 'Trump')
hTable.insert('Joe', 'Biden')
hTable.insert('Hillary', 'Clinton')
hTable.insert('Barack', 'Obama')
hTable.remove('Donald')

console.log('                               ')
console.log('search=> ', hTable.search('Joe'))
console.log('HashTable: ', hTable)
console.log('                               ')
