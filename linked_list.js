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
    return this.tail
  }

  prepend(val) {
    if(!this.head) this.head = this.tail = new Node(val)
    else {
      let oldHead = this.head
      this.head = new Node(val)
      oldHead.prev = this.head
      this.head.next = oldHead
    }
    return this.head
  }


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


  removeHead() {
    if(!this.head) return null
    else {
      let oldHead = this.head

      if(this.head === this.tail) this.head = this.tail = null
      else {
        this.head = oldHead.next
        this.head.prev = null
      }
      return oldHead.value
    }
  }


  search(val) {
    // start searching from the Head
    let currNode = this.head

    while(currNode) {
      // if node val = search val - return node
      if(currNode.value === val) return currNode
      // else continue to next node
      else currNode = currNode.next
    }
    // if while loop got here - no value found in LL
    return null
  }


  addAfterN(val, n = 0) {
    if(n < 0) {
      console.log("Please index can't be negative num!")
      return null
    }
    if(!this.head || n === 0) return this.prepend(val)
    if(this.head === this.tail) this.append(val)

    let counter = 1
    let currNode = this.head

    while(counter < n && currNode.next) {
      currNode = currNode.next
      counter++
    }

    console.log('counter --> ', counter)

    if(n > counter) {
      console.log(`List has ${n} nodes. Enter less placement num!`)
      return null
    }
    if(n === counter) this.append(val)

    let nextNode = currNode.next
    let newNode = new Node(val)

    nextNode.prev = newNode
    newNode.next = nextNode
    newNode.prev = currNode
    currNode.next = newNode

    return newNode
  }

}


// TEST
const ll = new LinkedList()
ll.append(33)
ll.append(55)
// ll.prepend(11)
ll.addAfterN('44', 1)

console.log('                                                         ')
console.log('---------------------------------------------------------')
// console.log('removed head: ', ll.removeHead())
// console.log('removed tail: ', ll.removeTail())
// console.log('search ==> ', ll.search(9999))
// console.log('LL BEFORE: ', ll)
console.log('LL AFTER: ', ll)
