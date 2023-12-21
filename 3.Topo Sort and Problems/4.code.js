function Queue() {
  var a = [],
    b = 0;
  this.getLength = function () {
    return a.length - b;
  };
  this.isEmpty = function () {
    return 0 == a.length;
  };
  this.enqueue = function (b) {
    a.push(b);
  };
  this.dequeue = function () {
    if (a.length === 0) return undefined;
    const c = a[b++];
    if (2 * b >= a.length) {
      a = a.slice(b);
      b = 0;
    }
    return c;
  };

  this.peek = function () {
    return 0 < a.length ? a[b] : void 0;
  };
}

function findOrder(n, m, prerequisites) {
  // Form a graph
  const adj = new Array(n).fill(0).map(() => []);

  for (let i = 0; i < m; i++) {
    adj[prerequisites[i][1]].push(prerequisites[i][0]);
  }

  const indegree = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < adj[i].length; j++) {
      indegree[adj[i][j]]++;
    }
  }

  const q = new Queue();
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      q.enqueue(i);
    }
  }

  const topo = new Array(n);
  let ind = 0;

  // O(v + e)
  while (q.getLength() !== 0) {
    const node = q.dequeue();
    topo[ind++] = node;

    for (let j = 0; j < adj[node].length; j++) {
      const neighbor = adj[node][j];
      indegree[neighbor]--;

      if (indegree[neighbor] === 0) {
        q.enqueue(neighbor);
      }
    }
  }

  if (ind === n) {
    return topo;
  }

  return [];
}

const N = 4;
const M = 3;
const prerequisites = [
  [0, 1],
  [1, 2],
  [2, 3],
];

const ans = findOrder(N, M, prerequisites);

for (const task of ans) {
  process.stdout.write(task + " ");
}
console.log("");
