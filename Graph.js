class Graph {
    constructor() {
        this.adjascencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjascencyList[vertex]){
            this.adjascencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjascencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if(!this.adjascencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjascencyList[vertex1].add(vertex2)
        this.adjascencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjascencyList[vertex1].delete(vertex2)
        this.adjascencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if(!this.adjascencyList[vertex]) {
            return
        }
        for(let adjascentVertex of this.adjascencyList[vertex]) {
            this.removeEdge(vertex, adjascentVertex)
        }
        delete this.adjascencyList[vertex]
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjascencyList[vertex1].has(vertex2) &&
            this.adjascencyList[vertex2].has(vertex1)
        )
    }

    display() {
        for(let vertex in this.adjascencyList) {
            console.log(vertex + " -> " + [...this.adjascencyList[vertex]])
        }
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B")
graph.addEdge("B", "C")

graph.display()
console.log(graph.hasEdge("A", "B"))
graph.removeVertex("B")
graph.display()