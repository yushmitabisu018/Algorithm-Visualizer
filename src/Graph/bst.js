class Node {
    constructor(val) {
      this.val = val;
      this.left = undefined;
      this.right = undefined;
    }
  }
  
  export class BST {
    constructor() {
      this.root = undefined;
    }
  
    insert(x) {
      this.root = this.insertX(x, this.root);
    }
  
    insertX(x, node) {
      if (node === undefined) {
        return new Node(x);
      }
  
      if (node.val === x) {
        return node; 
      } else if (x < node.val) {
        node.left = this.insertX(x, node.left);
      } else {
        node.right = this.insertX(x, node.right);
      }
  
      return node; 
    }
  
    inOrderTraversal(node = this.root) {
      if (!node) return;
      this.inOrderTraversal(node.left);
      console.log(node.val);
      this.inOrderTraversal(node.right);
    }
  }
  