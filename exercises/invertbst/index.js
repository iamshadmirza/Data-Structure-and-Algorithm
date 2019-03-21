// --- Directions
// Given a node, invert the binary search tree,
// ensuring that every node's left hand child is
// greater than the parent node's value, and that
// every node's right hand child is lesser than
// the parent, i.e., swap left and right branch

function invert(node) {
    if (!node) { return; } //break recursion when we reach leaf node
    const left = invert(node.left); //save left branch in left variable
    const right = invert(node.right); //save right branch in right variable
    node.left = right; //swap left and right branches
    node.right = left;
    return node;
}

module.exports = invert;
