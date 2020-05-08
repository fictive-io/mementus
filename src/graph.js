import GraphBuilder from "./graph-builder";

class Graph {
  constructor(initializer) {
    const builder = new GraphBuilder();

    if (initializer) {
      initializer(builder);
    }

    this.structure = builder.graph();
    this.index = new Map();
  }

  get nodesCount() {
    return this.structure.nodesCount;
  }

  get edgesCount() {
    return this.structure.edgesCount;
  }

  node(id) {
    return this.structure.node(id);
  }

  nodes(match=null) {
    return this.structure.nodes(match);
  }

  edge(id) {
    return this.structure.edge(id);
  }

  edges(match=null) {
    return this.structure.edges(match);
  }

  hasNode(node) {
    return this.structure.hasNode(node);
  }

  hasEdge(edge) {
    return this.structure.hasEdge(edge);
  }

  outgoing(id) {
    return this.structure.outgoing(id);
  }

  incoming(id) {
    return this.structure.incoming(id);
  }
}

export default Graph;
