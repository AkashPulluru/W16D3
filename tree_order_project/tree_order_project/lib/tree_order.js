function inOrderArray(root, result=[]) {
    if (!root) return [];


    inOrderArray(root.left, result);
    result.push(root.val);
    inOrderArray(root.right, result);

    return result;
}

function postOrderArray(root, result=[]) {
    if (!root) return [];

    postOrderArray(root.left, result);
    postOrderArray(root.right, result);
    result.push(root.val);

    return result;
}


module.exports = {
    inOrderArray,
    postOrderArray
};