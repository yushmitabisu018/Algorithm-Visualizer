import graph from "./images/graph.png";
import primes from "./images/pr.jpg";
import sort from "./images/sort.png";    
import recursionSort from "./images/recusrionSort.png";    
import binSearch from "./images/binary.png";
import Recursion from "./images/recursion.png";

export function getDetails() {
  return [
    {
      id: 1,
      title: "Pathfinder",
      description: "Visualize graph algorithms like Dijkstra, BFS, DFS",
      route: "/pathfinder",
      img: graph,
    },
    {
      id: 2,
      title: "Sorting Algorithm",
      description: "Compare different sorting algorithms",
      route: "/sort",
      img: sort,
    },
    {
      id: 3,
      title: "Recursive Sorting",
      description: "Compare different recursive sorting algorithms",
      route: "/recursivesort",
      img: recursionSort,
    },
    {
      id: 4,
       title: "Recursion Tree",
      description:
        "The process in which a function calls itself directly or indirectly is called recursion. Work in progress",
      route: "/graph",
      img: Recursion,
    },
    {
      id: 5,
      title: "Binary Search",
      description:
        "Binary search is an efficient algorithm for finding an item from a sorted list of items",
      route: "/binarysearch",
      img: binSearch,
    },
    {
      id: 6,
        title: "Prime Numbers",
      description: "Visualize how Sieve is better than brute force",
      route: "/prime",
      img: primes,
    },
  ];
}
