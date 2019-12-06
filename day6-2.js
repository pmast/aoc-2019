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

    getPath(start, goal, path = [start], visitedNodes = []) {
        // stop case
        if (start == goal)
            return path;

        let match;

        // try to fid path via children
        this.tree[start].children.filter(node => visitedNodes.indexOf(node) < 0).find(child => {
            match = this.getPath(child, goal, path.concat([child]), visitedNodes.concat([start]))
            return match;
        }, this);

        // try to fid path via parent
        if (!match && this.tree[start].parent && visitedNodes.indexOf(this.tree[start].parent) < 0)
            match = this.getPath(this.tree[start].parent, goal, path.concat([this.tree[start].parent]), visitedNodes.concat([start]))
        return match;
    }

    getTransfers(start, goal) {
        return this.getPath(start, goal).length - 3;
    }
}

let tree = new Tree();
lines.forEach(line => tree.addLink(...line.split(')')));
console.log(tree.getTransfers('YOU', 'SAN'));
