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
// const V = 12;
// const adj = Array.from({ length: V }, () => []);
// adj[0].push(1);
// adj[1].push(2);
// adj[2].push(3);
// adj[2].push(4);
// adj[3].push(4);
// adj[3].push(5);
// adj[4].push(6);
// adj[5].push(6);
// adj[6].push(7);
// adj[8].push(1);
// adj[8].push(9);
// adj[9].push(10);
// adj[10].push(8);
// adj[11].push(9);
const V = 4;
const adj = Array.from({ length: V }, () => []);
adj[0].push(1);
adj[1].push(2);
adj[2].push(3);
adj[2].push(0);
const safeNodes = eventualSafeNodes(V, adj);
console.log(safeNodes.join(" "));
function eventualSafeNodes(V, adj) {
  const adjRev = []; // reversing
  for (let i = 0; i < V; i++) {
    adjRev.push([]);
  }
  const indegree = new Array(V).fill(0);
  // reverse and count the indegree
  for (let i = 0; i < V; i++) {
    for (let j = 0; j < adj[i].length; j++) {
      const it = adj[i][j];
      adjRev[it].push(i);
      indegree[i]++;
    }
  }
  const q = new Queue();
  const safeNodes = [];
  for (let i = 0; i < V; i++) {
    if (indegree[i] === 0) {
      q.enqueue(i);
    }
  }
  while (q.getLength() > 0) {
    const node = q.dequeue();
    safeNodes.push(node);
    for (let j = 0; j < adjRev[node].length; j++) {
      const it = adjRev[node][j];
      indegree[it]--;
      if (indegree[it] === 0) {
        q.enqueue(it);
      }
    }
  }
  safeNodes.sort((a, b) => a - b);
  return safeNodes;
}
