const fs = require('fs');
const data = fs.readFileSync('/dev/stdin', 'utf-8');
const lines = data.split('\n');

class Tree{
    tree = {};

    addLink(parentNode, childNode){
        if (!(parentNode in this.tree))
            this.tree[parentNode] = {parent: undefined, children:[]};
        this.tree[parentNode].children.push(childNode);

        if (!(childNode in this.tree))
            this.tree[childNode] = {parent: undefined, children:[]};
        else
            console.log('node already exist', childNode);
        this.tree[childNode].parent = parentNode
    }

    getRoot() {
        var roots = [];
        for (var node in this.tree) {
            if (!this.tree[node].parent) roots.push(node)
        }
        if (roots.length != 1) console.log('many roots');
        return roots[0];
    }

    getTreeLinks() {
        const root = this.getRoot();
        return this.getNumLinks(root);
    }

    getNumLinks(node, depth = 0) {
        if (this.tree[node].children.length == 0) return depth;
        return depth + this.tree[node].children.reduce((acc, child) => acc + this.getNumLinks(child, depth + 1), 0)
    }

    printTree(tree) {
        console.log(this.tree);
    }
}

let tree = new Tree();
lines.forEach(line => tree.addLink(...line.split(')')));
tree.printTree();
console.log('root:', tree.getRoot())
console.log('links:', tree.getTreeLinks())


