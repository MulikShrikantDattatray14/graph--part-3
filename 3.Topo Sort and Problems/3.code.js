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

// const N = 4;
// const prerequisites = [
//   [1, 0],
//   [2, 1],
//   [3, 2],
// ];

const N = 4;
const P = 4;
const prerequisites = [
  [1, 2],
  [4, 3],
  [2, 4],
  [4, 1],
];
const ans = isPossible(N, prerequisites);
if (ans) {
  console.log("YES");
} else {
  console.log("NO");
}
function isPossible(V, prerequisites) {
  // Form a graph
  const adj = [];
  for (let i = 0; i <= V; i++) {
    adj.push([]);
  }
  const m = prerequisites.length;
  for (let i = 0; i < m; i++) {
    adj[prerequisites[i][0]].push(prerequisites[i][1]);
  }
  const indegree = new Array(V + 1).fill(0);
  for (let i = 0; i <= V; i++) {
    for (let j = 0; j < adj[i].length; j++) {
      indegree[adj[i][j]]++;
    }
  }
  const q = new Queue();
  for (let i = 0; i <= V; i++) {
    if (indegree[i] === 0) {
      q.enqueue(i);
    }
  }
  const topo = [];
  // O(V + E)
  while (q.getLength() > 0) {
    const node = q.dequeue();
    topo.push(node);
    for (let j = 0; j < adj[node].length; j++) {
      const it = adj[node][j];
      indegree[it]--;
      if (indegree[it] === 0) q.enqueue(it);
    }
  }
  console.log(topo);
  return topo.length === V;
}
