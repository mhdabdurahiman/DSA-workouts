class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        let node = new Node(value);
        if(this.isEmpty()) {
            this.root = node;
        } else { 
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    findNode(root, value){
        if(root === null) return null;

        if(root.value === value) return root;

        if(value < root.value) {
            return this.findNode(root.left, value);
        }

        return this.findNode(root.right, value);
    }

    find(value){
        const node = this.findNode(this.root, value);
        return node ? node.value: null;
    }
}

const tree = new Tree();

tree.insert(3);
tree.insert(6);
tree.insert(1);
tree.insert(8);
tree.insert(7);
tree.insert(4);

console.log(tree.find(6));
console.log(tree.find(10));

