const depthHasPath = (graph, source, dest) => {
	if( source === dest ) return true;
	
	for(let neighbor of graph[source]){
		if( depthHasPath(graph, neighbor, dest) === true ) return true;
	}
	
	return false;
}

const breadthHasPath = (graph, src, dest) => {
	if( src === dest ) return true;

	const queue = [src];

	while( queue.length > 0){
		const current = queue.shift();
		
		if (current === dest ) return true;

		for( let neighbor of graph[current] ){
			queue.push(neighbor);
		}
	}

	return false;
}

module.exports = {
	depthHasPath,
	breadthHasPath,
};