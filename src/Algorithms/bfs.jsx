export function bfsdfs(grid, startNode, endNode, algo) {
    const nodesInOrder = [];
    const list = [];

    list.push(startNode);
    startNode.isVisited = true;

    while (list.length) {
        const currentNode = (algo === "bfs" ? list.shift() : list.pop());
        nodesInOrder.push(currentNode);

        if (currentNode === endNode) return nodesInOrder;

        const neighbors = getNeighbours(grid, currentNode);
        for (const neighbor of neighbors) {
            neighbor.isVisited = true;  // mark visited when pushed
            neighbor.previousNode = currentNode;
            list.push(neighbor);
        }
    }
    return nodesInOrder;
}

function getNeighbours(grid, node) {
    const neighbors = [];
    const { col, row } = node;

    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

    // Only unvisited and non-wall nodes
    return neighbors.filter(neighbor => !neighbor.isVisited && !neighbor.isWall);
}
