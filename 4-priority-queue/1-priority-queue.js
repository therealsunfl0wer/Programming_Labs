/*
Task 4: Implementing a Bi-Directional Priority Queue

Implement a priority queue that allows:
	•	Retrieving both the highest and lowest priority elements from any end.
	•	Retrieving elements based on order of insertion (FIFO/LIFO) from either end.

Requirements:
1.	Core Priority Queue Functionality
	•	Support inserting elements with an associated priority value.
	•	Allow peeking and dequeuing elements based on priority order (highest or lowest).
	•	Allow peeking and dequeuing elements based on insertion order (oldest or newest).
2.	Operations:
	•	enqueue(item, priority): Insert an element with a priority.
	•	dequeue(highest, lowest, oldest, newest)
	*	peek(highest, lowest, oldest, newest)
*/

class PriorityQueue {
  constructor() {
    this.queue = [];
    this.Element = class {
      constructor(value = undefined, priority = Infinity) {
        this.value = value;
        this.priority = priority;
        this.timestamp = Date.now();
      }
    };
  }
  enqueue(item, priority) {
    const e = new this.Element(item, priority);
    this.queue.push(e);
  }
  dequeue(highest, lowest, oldest, newest) {
    if (highest + lowest + oldest + newest != 1) {
      throw new Error(
        `Exactly one argument must be true. Received: highest=${highest}, lowest=${lowest}, oldest=${oldest}, newest=${newest}`
      );
    }
    if (highest) {
      if (this.queue.length === 0) return undefined;
      let iCurrent = 0;
      let best = this.queue[0].priority;
      for (let i = 1; i < this.queue.length; ++i) {
        if (this.queue[i].priority > best) {
          best = this.queue[i].priority;
          iCurrent = i;
        }
      }
      return this.queue.splice(iCurrent, 1)[0];
    }
    if (lowest) {
      if (this.queue.length === 0) return undefined;
      let iCurrent = 0;
      let worst = this.queue[0].priority;
      for (let i = 1; i < this.queue.length; ++i) {
        if (this.queue[i].priority < worst) {
          worst = this.queue[i].priority;
          iCurrent = i;
        }
      }
      return this.queue.splice(iCurrent, 1)[0];
    }
    if (oldest) {
      return this.queue.shift();
    }
    if (newest) {
      return this.queue.pop();
    }
  }
  peek(highest, lowest, oldest, newest) {
    if (highest + lowest + oldest + newest != 1) {
      throw new Error(
        `Exactly one argument must be true. Received: highest=${highest}, lowest=${lowest}, oldest=${oldest}, newest=${newest}`
      );
    }
    if (highest) {
      if (this.queue.length === 0) return undefined;
      let iCurrent = 0;
      let best = this.queue[0].priority;
      for (let i = 1; i < this.queue.length; ++i) {
        if (this.queue[i].priority > best) {
          best = this.queue[i].priority;
          iCurrent = i;
        }
      }
      return this.queue[iCurrent];
    }
    if (lowest) {
      if (this.queue.length === 0) return undefined;
      let iCurrent = 0;
      let worst = this.queue[0].priority;
      for (let i = 1; i < this.queue.length; ++i) {
        if (this.queue[i].priority < worst) {
          worst = this.queue[i].priority;
          iCurrent = i;
        }
      }
      return this.queue[iCurrent];
    }
    if (oldest) {
      return this.queue[0];
    }
    if (newest) {
      return this.queue[this.queue.length - 1];
    }
  }
}

export { PriorityQueue };
