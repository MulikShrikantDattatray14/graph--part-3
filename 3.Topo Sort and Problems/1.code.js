// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   // Push element onto the stack
//   push(element) {
//     this.items.push(element);
//   }

//   // Pop element from the stack
//   pop() {
//     if (this.isEmpty()) {
//       return "Underflow";
//     }
//     return this.items.pop();
//   }

//   // Peek at the top element of the stack without removing it
//   peek() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     }
//     return this.items[this.items.length - 1];
//   }

//   // Check if the stack is empty
//   isEmpty() {
//     return this.items.length === 0;
//   }

//   // Get the size of the stack
//   size() {
//     return this.items.length;
//   }

//   // Print the stack elements
//   print() {
//     console.log(this.items);
//   }
// }

// // Example usage:
// //const stack = new Stack();

// // let edges = [
// //   [5, 0],
// //   [4, 0],
// //   [4, 1],
// //   [3, 1],
// //   [2, 3],
// //   [5, 2],
// // ]; //5 4 2 3 1 0
// // const V = 6; // nodes
// let edges=[[1,0],[3,0],[2,0]];//3 2 1 0
// let V=4

// const adj = [];
// for (let i = 0; i <= V; i++) {
//   adj.push([]);
// }
// for (const [u, v] of edges) {
//   adj[u].push(v);
// }

// const result = topoSort(V, adj);
// for (let i = 0; i < result.length; i++) {
//   process.stdout.write(result[i] + " ");
// }
// console.log("");

// function topoSort(V, adj) {
//   const vis = new Array(V).fill(0);
//   const stack = new Stack();
//   for (let i = 0; i < V; i++) {
//     if (vis[i] === 0) {
//       let node = i;
//       dfs(node, vis, stack, adj);
//     }
//   }

//   const ans = new Array(V);
//   let index = 0;
//   while (stack.size() > 0) {
//     ans[index++] = stack.peek();
//     stack.pop();
//   }
//   return ans;
// }

// function dfs(node, vis, stack, adj) {
//   vis[node] = 1;
//   for (let i = 0; i < adj[node].length; i++) {
//     const it = adj[node][i];
//     if (vis[it] === 0) dfs(it, vis, stack, adj);
//   }
//   //After visiting all its adjacent nodes, DFS will backtrack to the previous node and //meanwhile, the current node is pushed into the stack.
//   stack.push(node);
// }


//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//Return the topological ordering of the graph and if it doesn't exist then return an ////empty array.

////If there is a solution return the correct ordering. If there are multiple solutions //print the lexographically smallest one.
let edges = [[6, 3],[6, 1],[5, 1],[5, 2],[3, 4],[4, 2]];// [5, 6, 1, 3, 4, 2]
let V = 6;

class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Peek at the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Print the stack elements
    print() {
      console.log(this.items);
    }
  }
  
  
  
  const adj = [];
  for (let i = 0; i <= V; i++) {
    adj.push([]);
  }
  for (const [u, v] of edges) {
    adj[u].push(v);
  }
  
  const result = topoSort(V, adj);
  console.log(result)


function topoSort(V, adj) {
    const vis = new Array(V + 1).fill(0);
    const stack = new Stack();
    for (let i = 1; i <= V; i++) {
      if (vis[i] === 0) {
        let node = i;
        dfs(node, vis, stack, adj);
      }
    }
  
    const ans = [];
    while (stack.size() > 0) {
      ans.push(stack.peek());
      stack.pop();
    }
   return ans;
    
  }
  
  function dfs(node, vis, stack, adj) {
    vis[node] = 1;
    for (let i = 0; i < adj[node].length; i++) {
      const it = adj[node][i];
      if (vis[it] === 0) dfs(it, vis, stack, adj);
    }
    //After visiting all its adjacent nodes, DFS will backtrack to the previous node and //meanwhile, the current node is pushed into the stack.
    stack.push(node);
  }
  