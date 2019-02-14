export function createPriorityQueue() {
  const queue = []
  return {
    enqueue(item) {
      let itemObj = {val: item, priority: 0}
      queue.unshift(itemObj)
    },
    dequeue() {
      return queue.pop()
    },
    peek() {
      return queue[queue.length-1].val
    },
    get length() {
      return queue.length()
    },
    isEmpty() {
      return queue.length === 0
    },
    logQueue() {
      console.log(queue)
    },
    upPriority(item) {
      for (let obj of queue) {
        if (obj.val ===item) {
          obj.priority += 1;
        }
      }
      queue.sort((a, b)=> b.priority - a.priority )
    },
    downPriority(item ) {
      for (let obj of queue) {
        if (obj.val ===item) {
          obj.priority -= 1;
        }
      }
      queue.sort((a, b)=> b.priority - a.priority )
    }
  }
}
