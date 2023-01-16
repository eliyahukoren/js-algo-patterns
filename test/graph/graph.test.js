// const {} = require("../graph-directed-1");
const { depthHasPath, breadthHasPath } = require("../../graph/graph-directed-2");
const { buildGraph, undirectedPath, hasPath } = require("../../graph/graph-undirected");

const graphObj = {
	f: ["g", "i"],
	g: ["h"],
	i: ["k", "g"],
	j: ["i"],
	k: [],
	h: [],
};

const graphObj1 = {
	a: ["b", "d"],
	d: ["e"],
	e: ["k"],
	b: ["g"],
	g: ["i", "f"],
	f: ["j"],
	j: ["h"],
	c: ["f", "t", "k"],
	h: [],
	k: [],
	i: [],
	t: [],
};

const graphComplex = {
	a: ["j"],
	b: ["l", "f"],
	c: ["i", "d"],
	d: [],
	e: ["h"],
	f: [],
	g: ["d"],
	j: ["e"],
	h: ["f", "k"],
	k: ["i"],
	i: ["g"],
	l: ["n"],
	m: ["b", "c", "p", "l"],
	n: [],
	o: [],
	p: ["o"],
};

describe("Depth Has Path - Graph", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(depthHasPath).toBeDefined();
			expect(breadthHasPath).toBeDefined();
		});
	});

	describe("Check power", () => {
		it("Unit test depth has path", () => {
			expect(depthHasPath(graphObj, "f", "k")).toEqual(true);
			expect(depthHasPath(graphObj, "f", "i")).toEqual(true);
			expect(depthHasPath(graphObj, "f", "h")).toEqual(true);
			expect(depthHasPath(graphObj, "f", "g")).toEqual(true);
			expect(depthHasPath(graphObj, "f", "j")).toEqual(false);

			expect(depthHasPath(graphObj1, "b", "c")).toEqual(false);
			expect(depthHasPath(graphObj1, "a", "h")).toEqual(true);
			expect(depthHasPath(graphObj1, "a", "c")).toEqual(false);

			expect(depthHasPath(graphComplex, "a", "f")).toEqual(true);
			expect(depthHasPath(graphComplex, "a", "d")).toEqual(true);
			expect(depthHasPath(graphComplex, "m", "d")).toEqual(true);

			expect(depthHasPath(graphComplex, "a", "m")).toEqual(false);
			expect(depthHasPath(graphComplex, "b", "c")).toEqual(false);
		});

		it("Unit test breadth has path", () => {
			expect(breadthHasPath(graphObj, "f", "k")).toEqual(true);
			expect(breadthHasPath(graphObj, "f", "i")).toEqual(true);
			expect(breadthHasPath(graphObj, "f", "h")).toEqual(true);
			expect(breadthHasPath(graphObj, "f", "g")).toEqual(true);
			expect(breadthHasPath(graphObj, "f", "j")).toEqual(false);

			expect(breadthHasPath(graphObj1, "b", "c")).toEqual(false);
			expect(breadthHasPath(graphObj1, "a", "h")).toEqual(true);
			expect(breadthHasPath(graphObj1, "a", "c")).toEqual(false);

			expect(breadthHasPath(graphComplex, "a", "f")).toEqual(true);
			expect(breadthHasPath(graphComplex, "a", "d")).toEqual(true);
			expect(breadthHasPath(graphComplex, "m", "d")).toEqual(true);

			expect(breadthHasPath(graphComplex, "a", "m")).toEqual(false);
			expect(breadthHasPath(graphComplex, "b", "c")).toEqual(false);
		});
	});
});

const graphUndirected = {
	i: ["j", "k"],
	j: ["i", "k"],
	k: ["i", "j", "l", "m"],
	l: ["k"],
	m: ["k"],
	o: ["p"],
	p: ["o"],
};

const undirectedArray = [
	["i", "j"],
	["k", "i"],
	["m", "k"],
	["k", "l"],
	["o", "p"],
];

const convertedGraph = {
	i: ["j", "k"],
	j: ["i"],
	k: ["i", "m", "l"],
	m: ["k"],
	l: ["k"],
	o: ["p"],
	p: ["o"],
};


describe("Undirected Graph", () => {

	describe("Build graph", () => {
		test("Is buildGraph function exists", () => {
			expect(buildGraph).toBeDefined();
		});

		test("Is buildGraph convert array to graph", () => {
			const edges = [
				["a", "b"],
				["b", "c"],
				["c", "d"],
			];
			const expected = {
				a: ["b"],
				b: ["a", "c"],
				c: ["b", "d"],
				d: ["c"],
			};
			expect(buildGraph(edges)).toEqual(expected);
			const graph = buildGraph(undirectedArray);
			expect(graph).toEqual(convertedGraph);
		});
	});

	describe("Undirected Path", () => {
		test("Is undirectedPath function exist", () => {
			expect(undirectedPath).toBeDefined();
		});

		test("Is hasPath function exist", () => {
			expect(hasPath).toBeDefined();
		});

		test("Is i hasPath to j equal true", () => {
			expect(undirectedPath(undirectedArray, "i", "j")).toEqual(true);
		})

		test("Is i hasPath to o equal false", () => {
			expect(undirectedPath(undirectedArray, "i", "o")).toEqual(false);
		});
	});

});
