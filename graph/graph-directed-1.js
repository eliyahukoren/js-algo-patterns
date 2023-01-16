// will be like stack
const depthFirstPrint = (graph, source) => {
	const stack = [ source ];

	while (stack.length > 0){
		// remove last element and return that element
		const current = stack.pop();
		console.log(current);

		// nested loop on neighbors and add them to the stack
		for(let neighbor of graph[current]){
			// push next point to the top of stack
			// last in first out (LIFO)
			stack.push(neighbor);
		}
	}
}

const depthFirstPrintRecursive = ( graph, source ) => {
	console.log(source);

	for(let neighbor of graph[source]){
		depthFirstPrintRecursive(graph, neighbor);
	}
}

const breadthFirstPrint = (graph, source) => {
	const queue = [ source ];

	while (queue.length > 0){
		const current = queue.shift();

		console.log(current);
		for( neighbor of graph[current] ){
			// push next point to the queue
			// last in last out (LILO)
			queue.push(neighbor);
		}
	}
}


const directedGraph = {
	a: ['c', 'b'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: [],
};

console.log('depth first:')
depthFirstPrint(directedGraph, 'a'); // abdfce
console.log("depth recursion:");
depthFirstPrintRecursive(directedGraph, 'a');
console.log("breadth first:");
breadthFirstPrint(directedGraph, 'a'); // acbedf
/*
[a] = stack
print a

[b, c] = stack
print c

[b, e] = stack
print e

print b
[d] = stack

*/
