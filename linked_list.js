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

  prepend(val) {
    if(!this.head) this.head = this.tail = new Node(val)
    else {
      let oldHead = this.head
      this.head = new Node(val)
      oldHead.prev = this.head
      this.head.next = oldHead
    }
  }

  removeHead() {}

  removeTail() {}

  search() {}
}

// TEST
const ll = new LinkedList()
ll.append(33)
ll.append(55)
ll.prepend(11)

console.log('LL: ', ll.head.next)
