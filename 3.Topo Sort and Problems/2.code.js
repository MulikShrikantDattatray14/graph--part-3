// Test
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
let edges = [
  [2, 3],
  [3, 1],
  [4, 0],
  [4, 1],
  [5, 0],
  [5, 2],
];
let V = 6;
const adj = [];
for (let i = 0; i <= V; i++) {
  adj.push([]);
}
for (const [u, v] of edges) {
  adj[u].push(v);
}

let ans = topoSort(V, adj);
for (let node of ans) {
  process.stdout.write(node + " ");
}
console.log("");

function topoSort(V, adj) {
  let q = new Queue();
  let indegree = new Array(V).fill(0);
  for (let i = 0; i < V; i++) {
    for (let j = 0; j < adj[i].length; j++) {
      indegree[adj[i][j]]++;
    }
  }

  for (let i = 0; i < V; i++) {
    // first element will have no incoming
    if (indegree[i] === 0) {
      q.enqueue(i);
    }
  }
  let topo = [];
  let i = 0;
  while (q.getLength() !== 0) {
    let node = q.dequeue();
    topo[i++] = node;
    for (let j = 0; j < adj[node].length; j++) {
      let it = adj[node][j];
      indegree[it]--;
      if (indegree[it] === 0) {
        q.enqueue(it);
      }
    }
  }
  return topo;
}
