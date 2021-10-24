class Node {
  constructor(val) {
    this.value = val
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(val) {
    this.root = new Node(val)
    this.count = 0
  }
}

let myBst = new BST(55)

console.log('myBst: ', myBst)
