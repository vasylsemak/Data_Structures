class Node {
  constructor(value, prev, next) {
    this.value = value
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

  removeTail() {
    // if NO tail and head
    if(!this.tail) return null
    else {
      let oldTale = this.tail
      // if only ONE node
      if(this.tail === this.head) this.tail = this.head = null
      // 2 or more nodes
      else {
        this.tail = oldTale.prev
        this.tail.next = null
      }
      // return node value or null If One node
      return oldTale.value
    }
  }

  search() {}
}

// TEST
const ll = new LinkedList()
ll.append(33)
ll.append(55)
ll.prepend(11)

console.log('------------------------------------------------------')
console.log('removed tail: ', ll.removeTail())
console.log('LL: ', ll)
