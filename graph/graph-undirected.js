const buildGraph = (edges) => {
	const graph = {}

	for(let edge of edges){
		const [a, b] = edge;
		if( !(a in graph) ) graph[a] = [];
		if( !(b in graph) ) graph[b] = [];

		graph[a].push(b);
		graph[b].push(a);
	}

	return graph;
}

const undirectedPath = (edges, nodeA, nodeB) => {
	const graph = buildGraph(edges);
	return hasPath(graph, nodeA, nodeB)
}

const hasPath = (graph, src, dst, memo={}) => {
	if( src === dst ) return true;
	if( src in memo ) return false;

	memo[src] = true;

	for(let neighbor of graph[src]){
		if( hasPath(graph, neighbor, dst, memo) === true ){
			return true;	
		} 
	}
	
	return false;
}

module.exports = {
	buildGraph,
	undirectedPath,
	hasPath,
};