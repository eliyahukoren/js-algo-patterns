const {
	power,
	factorial,
	productOfArray,
	recursiveRange,
	fib, 
	fibA
} = require("../../recursion/recursion");


describe("Power - Recursion", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(power).toBeDefined();
		});
	});

	describe("Check power", () => {
		test.each`
			base | exponent | expected
			${2} | ${0}     | ${1}
			${2} | ${1}     | ${2}
			${2} | ${2}     | ${4}
			${2} | ${3}     | ${8}
			${2} | ${4}     | ${16}
		`(
			"power with $base and $exponent expect to return $expected",
			({ base, exponent, expected }) => {
				expect(power(base, exponent)).toEqual(expected);
			}
		);
	});
});

describe("Factorial - Recursion", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(factorial).toBeDefined();
		});
	});

	describe("Check factorial", () => {
		test.each`
			num | expected
			${0} | ${1}
			${1} | ${1}
			${2} | ${2}
			${3} | ${6}
			${4} | ${24}
			${7} | ${5040}
			${9}| ${362_880}
		`(
			"factorial with $num expect to return $expected",
			({ num, expected }) => {
				expect(factorial(num)).toEqual(expected);
			}
		);
	});
});

describe("Product Of Array - Recursion", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(productOfArray).toBeDefined();
		});
	});

	describe("Check product of array", () => {
		test.each`
			arr              | expected
			${[1, 2, 3]}     | ${6}
			${[1, 2, 3, 10]} | ${60}
			${[2, 2, 2, 2]}  | ${16}
			${[1, 2, 2, 2]}  | ${8}
		`(
			"productOfArray with $arr expect to return $expected",
			({ arr, expected }) => {
				expect(productOfArray(arr)).toEqual(expected);
			}
		);
	});
});


describe("Recursive Range - Recursion", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(recursiveRange).toBeDefined();
		});
	});

	describe("Check recursive range", () => {
		test.each`
			num   | expected
			${6}  | ${21}
			${10} | ${55}
		`(
			"recursiveRange with $num expect to return $expected",
			({ num, expected }) => {
				expect(recursiveRange(num)).toEqual(expected);
			}
		);
	});
});

describe("Fibonacci - Recursion", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(fib).toBeDefined();
		});
	});

	describe("Check Fibonacci", () => {
		test.each`
			num   | expected
			${4}  | ${3}
			${10} | ${55}
			${28} | ${317_811}
			${35} | ${9_227_465}
			${37} | ${24_157_817}
			${50} | ${12_586_269_025}
		`("fib with $num expect to return $expected", ({ num, expected }) => {
			expect(fib(num)).toEqual(expected);
		});
	});
});

describe("Fibonacci - NOT Recursion", () => {
	describe("Test if function is exists", () => {
		it("Function exists", () => {
			expect(fibA).toBeDefined();
		});
	});

	describe("Check NOT Recursion Fibonacci", () => {
		test.each`
			num   | expected
			${4}  | ${3}
			${10} | ${55}
			${28} | ${317_811}
			${35} | ${9_227_465}
			${37} | ${24_157_817}
			${50} | ${12_586_269_025}
		`("fib with $num expect to return $expected", ({ num, expected }) => {
			expect(fibA(num)).toEqual(expected);
		});
	});
});
