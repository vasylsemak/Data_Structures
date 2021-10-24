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

  /*
    recursive f-n:
      1. check edge case if new val = current val
      2. compares value to root
      3. if val < root:
        - if no root.left: appoint newNode as left node
        - else: run itself recursively on left node (step 1)
      4. if val > root:
        - if no root.right: appoint newNode as right node
        - else: run itself recursively on right node (step 1)
  */
  insert(val) {
    let newNode = new Node(val)
    this.count++

    const createNode = root => {
      if(val === root.value) {
        console.log('This value exist in BST! Insert different value.')
        return
      }
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

  // find minimum value in BST
  min() {
    let currMin = this.root

    while(currMin.left) {
      currMin = currMin.left
    }

    return currMin.value
  }

  max() {
    let currMax = this.root

    while(currMax.right) {
      currMax = currMax.right
    }

    return currMax.value
  }

}


let myBST = new BST(6)
myBST.insert(3)
myBST.insert(9)
myBST.insert(1)
myBST.insert(7)


console.log('                        ')
console.log('myBst: ', myBST)
console.log('min value: ', myBST.min())
console.log('max value: ', myBST.max())
console.log('                        ')
