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

    const createNode = node => {
      if(val === node.value) {
        console.log('This value exist in BST! Insert different value.')
        return
      }
      if(newNode.value < node.value) {
        if(!node.left) node.left = newNode
        else createNode(node.left)
      }
      if(newNode.value > node.value) {
        if(!node.right) node.right = newNode
        else createNode(node.right)
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

  // check if BST contains val
  contains(val) {
    let currNode = this.root

    while(currNode) {
      if(currNode.value === val) return true
      if(val < currNode.value) currNode = currNode.left
      else currNode = currNode.right
    }

    return false
  }

  /* DeptFirstSearch */
  // pre order: value, left, right
  preOrderDFS() {
    const stack = []

    /*
      - push node value to stack
      - if left node - recursively traverse left
      - if right node - recursively traverse right
    */
    const traverse = node => {
      stack.push(node.value)

      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }

    traverse(this.root)

    return stack
  }

  /*
    - if left node - recursively traverse left
    - push node value to stack
    - if right node - recursively traverse right
  */
  inOrderDFS() {
    const stack = []

    const traverse = node => {
      if(node.left) traverse(node.left)
      stack.push(node.value)
      if(node.right) traverse(node.right)
    }

    traverse(this.root)

    return stack
  }

  // post order value, left, right
  postOrderDFS() {
    const stack = []

    const traverse = node => {
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      stack.push(node.value)
    }

    traverse(this.root)

    return stack
  }

  /*
    traverse level by level
    start from root, push it to queue
    until queue is empty:
      - push first elem to stack
      - push left and right nodes of first elem to end of queue
    return stack (final array)
  */
  breadthFirstSearch() {
    const stack = []
    const queue = []
    queue.push(this.root)

    while(queue.length) {
      let currNode = queue.shift()
      stack.push(currNode.value)

      if(currNode.left) queue.push(currNode.left)
      if(currNode.right) queue.push(currNode.right)
    }

    return stack
  }

  /*
    recursive f-n will check node
    base case - no node - return 0
    else call itself recursively on left and right nodes
    find if left or right node makes more f-n calls
    add 1 to every recursive call on left or right node
  */
  findDepth() {
    const recursiveFN = node => {
      if(!node) return 0
      else return 1 + Math.max(recursiveFN(node.left), recursiveFN(node.right))
    }

    return recursiveFN(this.root)
  }

}


let myBST = new BST(6)
myBST.insert(3)
myBST.insert(10)
myBST.insert(1)
myBST.insert(4)
myBST.insert(12)


console.log('                        ')
console.log('myBst: ', myBST)
// console.log('min value: ', myBST.min())
// console.log('max value: ', myBST.max())
// console.log('contains 7: ', myBST.contains(7))
// console.log('contains 99: ', myBST.contains(99))
// console.log('preorder DFS: ', myBST.preOrderDFS())
// console.log('inorder DFS: ', myBST.inOrderDFS())
// console.log('postorder DFS: ', myBST.postOrderDFS())
// console.log('breadthFirstSearch: ', myBST.breadthFirstSearch())
console.log('findDepth: ', myBST.findDepth())
console.log('                        ')
