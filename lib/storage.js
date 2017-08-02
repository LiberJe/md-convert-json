/**
 * Transforming data into tree structure
 */

class Tree {
  constructor (data) {
    let node = new Node(data)
    this.root = node
  }

  addNode (data) {}

  removeNode (data) {}
}

class Node {
  constructor (data, parent, children) {
    this.data = data || {}
    this.parent = parent || null
    this.children = children || []
  }
}

function recombination (data) {
  let dataTree = new Tree()
  let tempData = {
    self: {},
    block: []
  }
  let level = 1
  let currentNode = dataTree.root
  data.forEach((item, i) => {
    if (item.type === 'heading') {
      if (item.depth > level) {
        if (level === 1) {
          dataTree.root.data = tempData
        }
        level = item.depth
        let node = new Node(tempData, currentNode)
        currentNode.children.push(node)
        currentNode = node
      } else if (item.depth === level && level !== 1) {
        let node = new Node(tempData, currentNode.parent)
        currentNode.parent.children.push(node)
        currentNode = node
      } else if (item.depth < level) {
        let diff = level - item.depth
        for (let j = 0; j < diff; j++) {
          currentNode = currentNode.parent
        }
        level = item.depth
      }
      tempData.self = item
    } else {
      tempData.block.push(item)
    }
  })
  return dataTree
}

function storage (data) {
  let storageData = recombination(data)
  return storageData
}

module.exports = storage
