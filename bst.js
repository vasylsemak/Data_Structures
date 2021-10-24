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
    this.count = 1
  }

  size() {
    return this.count
  }

  // create new Node with val
  // increment count
  /*
    if val is less than rootVal:
      if no left - append left as new Node
      else - recursively go in leftNode
  */
  // do same for right
  insert(val) {
    let newNode = new Node(val)
    this.count++

    const createNode = root => {
      if(newNode.value < root.value) {
        if(!root.left) root.left = newNode
        else createNode(root.left)
      }
      if(newNode.value > root.value) {
        if(!root.right) root.right = newNode
        else createNode(root.right)
      }
      return newNode
    }

    createNode(this.root)
  }

}


let myBST = new BST(8)
myBST.insert(4)
myBST.insert(3)
myBST.insert(6)
myBST.insert(5)


console.log('                                                       ')
console.log('myBst: ', myBST.root)
