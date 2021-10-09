class Node {
  constructor(value, prev, next) {
    this.val = value
    this.prev = prev || null
    this.next = next || null
  }
}


class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  // add node to the and of LL
  append(val) {
    // if LL is empty - tale and head is same new Node
    if(this.tail === null) this.tail = this.head = new Node(val)
    else {
      // grab oldTale - it has reference to prev node
      let oldTale = this.tail
      // append new node as tail
      this.tail = new Node(val)
      // connect oldTale's next pointer to new tale
      oldTale.next = this.tail
      // connect new tail's prev to oldTale
      this.tail.prev = oldTale
    }
  }

  prepend() {
  }

  removeHead() {}

  removeTail() {}

  search() {}
}

// TEST
const ll = new LinkedList()
ll.append(5)

console.log(
  'LL: ', ll
)
