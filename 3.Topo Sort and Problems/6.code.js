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
//N words and k starting alphabets of a standard dictionary.
var N = 3; // i.e dict.length
var K = 3;
var dict = ["caa", "aaa", "aab"]; //c a b

// N = 5, K = 4
// dict = ["baa","abcd","abca","cab","cad"]////Output: b d a c

var ans = findOrder(dict, N, K);
for (var i = 0; i < ans.length; i++) {
  process.stdout.write(ans.charAt(i) + " ");
}
console.log("");

function findOrder(dict, N, K) {
  var adj = [];
  for (var i = 0; i < K; i++) {
    adj.push([]);
  }
  for (var i = 0; i < N - 1; i++) {
    var s1 = dict[i];
    var s2 = dict[i + 1];
    var len = Math.min(s1.length, s2.length);
    for (var ptr = 0; ptr < len; ptr++) {
      if (s1.charAt(ptr) !== s2.charAt(ptr)) {
        adj[s1.charCodeAt(ptr) - "a".charCodeAt(0)].push(
          s2.charCodeAt(ptr) - "a".charCodeAt(0)
        );
        break;
      }
    }
  }
  var topo = topoSort(K, adj);
  var ans = "";
  for (var i = 0; i < topo.length; i++) {
    ans = ans + String.fromCharCode(topo[i] + "a".charCodeAt(0));
  }
  return ans;
}
function topoSort(V, adj) {
  var indegree = new Array(V).fill(0);
  for (var i = 0; i < V; i++) {
    for (var j = 0; j < adj[i].length; j++) {
      var it = adj[i][j];
      indegree[it]++;
    }
  }
  var q = new Queue();
  for (var i = 0; i < V; i++) {
    if (indegree[i] === 0) {
      q.enqueue(i);
    }
  }
  var topo = [];
  while (q.getLength() !== 0) {
    var node = q.dequeue();
    topo.push(node);
    for (var j = 0; j < adj[node].length; j++) {
      var it = adj[node][j];
      indegree[it]--;

      if (indegree[it] === 0) {
        q.enqueue(it);
      }
    }
  }
  return topo;
}
