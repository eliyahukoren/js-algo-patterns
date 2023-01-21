const {
	power,
	factorial,
	productOfArray,
	recursiveRange,
	fib,
	fibA,
	reverse,
	flatten,
	someRecursive,
	isPalindrome,
	sumTo,
	capitalizeFirst,
	nestedEvenSum,
	capitalizeWords,
	stringifyNumbers,
	collectStrings,
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
			num  | expected
			${0} | ${1}
			${1} | ${1}
			${2} | ${2}
			${3} | ${6}
			${4} | ${24}
			${7} | ${5040}
			${9} | ${362_880}
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

describe("Recursion - Reverse Word", () => {
	test("Is reverse word function defined", () => {
		expect(reverse).toBeDefined();
	});

	const tests = [[""], ["act"], ["awesome"], ["rithmschool"], ["Vine snake"]];

	test.each(tests)("Expect '%s' to be reversed", (word) => {
		expect(reverse(word)).toEqual(word.split("").reverse().join(""));
	});
});

describe("Testing flatten", () => {
	it("flatten function defined", () => {
		expect(flatten).toBeDefined();
	});

	const tests = [
		[
			[1, 2, 3],
			[1, 2, 3],
		],
		[
			[1, 2, 3, []],
			[1, 2, 3],
		],
		[
			[1, 2, 3, [[4]]],
			[1, 2, 3, 4],
		],
		[
			[1, [2, [3, [4, [5, [6]]]]]],
			[1, 2, 3, 4, 5, 6],
		],
		[[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]], [1, 2, 3]],
	];

	it.each(tests)("expect %j to be %j", (act, exp) => {
		expect(flatten(act)).toEqual(exp);
	});
});

describe("Recursion - Some Recursive", () => {
	const f = val => val % 2 !== 0

	const tests = [
		[[1, 2, 3, 4], f, true],
		[[4, 6, 8, 9], f, true],
		[[4, 6, 8], f, false],
		[[4, 6, 8, 9], val => val > 10, false],
	];
	test("Is someRecursive function defined", () => {
		expect(someRecursive).toBeDefined();
	});

	it.each(tests)("someRecursive testing %j", (array, callback, expected) => {
		expect(someRecursive(array, callback)).toEqual(expected);
	})
});

describe("Recursion - Is Palindrome", () => {
	// isPalindrome('awesome') // false
	// isPalindrome('foobar') // false
	// isPalindrome('tacocat') // true
	// isPalindrome('amanaplanacanalpanama') // true
	// isPalindrome('amanaplanacanalpandemonium') // false
	const tests = [
		["awesome", false],
		["foobar", false],
		["tacocat", true],
		["amanaplanacanalpanama", true],
		["amanaplanacanalpandemonium", false],
	];
	test("Is isPalindrome function defined", () => {
		expect(isPalindrome).toBeDefined();
	});

	it.each(tests)("'%s', expect to be %s", (word, expected) => {
		expect(isPalindrome(word)).toEqual(expected);
	});
});

describe("Recursion - Sum To", () => {

	const tests = [
		[1, 1],
		[2, 3],
		[3, 6],
		[4, 10],
		[100, 5050],
	];
	test("Is sumTo function defined", () => {
		expect(sumTo).toBeDefined();
	});

	it.each(tests)("Sum to %s, expect to be %s", (num, expected) => {
		expect(sumTo(num)).toEqual(expected);
	});
});

describe("Recursion - Capitalize First Letter", () => {
	const tests = [
		[["car", "taco", "banana"],
		["Car", "Taco", "Banana"]],
		[["cat"],["Cat"]]
	];
	test("Is capitalizeFirst function defined", () => {
		expect(capitalizeFirst).toBeDefined();
	});

	it.each(tests)("Sum to %s, expect to be %s", (array, expected) => {
		expect(capitalizeFirst(array)).toEqual(expected);
	});
});

describe("Recursion - Nested Even Sum", () => {
	const obj1 = {
		outer: 2,
		some: 1,
		obj: {
			inner: 2,
			sobj: {
				superObj: 2,
				notNumber: true,
				alsoNotANumber: "hello"
			}
		}
	};
	const obj2 = {
		a: 2,
		b: {
			c: "c",
			d: true,
			e: {
				a: 1,
				b: false,
				dd: "p",
				ef: {
					n: 2,
					m: 3,
					o: {
						h: {
							k: 2,
							ld: {
								f: 2,
								d: 2
							}
						}
					}
				}
			}
		},
		c: "string",
		d: false
	};
	const obj3 = {
		a: 2,
		b: {
			c: "c",
			d: true,
			e: {
				a: 1,
				b: false,
				dd: "p",
				ef: {
					n: 2,
					m: 3,
					o: {
						h: {
							k: 2,
						},
					},
				},
			},
		},
		c: "string",
		d: false,
		o: 2,
		y: {
			e: {
				h: {
					a: true,
					b: 2,
					c: 1,
					e: 2
				}
			}
		}
	};


	const tests = [
		[obj1, 6],
		[obj2, 10],
		[obj3, 12],
	];

	test("Is nestedEvenSum function defined", () => {
		expect(nestedEvenSum).toBeDefined();
	});

	it.each(tests)("Sum to %j, expect to be %s", (obj, expected) => {
		expect(nestedEvenSum(obj)).toEqual(expected);
	});
});


describe("Recursion - Capitalize Words", () => {
	test("Is capitalizeWords function defined", () => {
		expect(capitalizeWords).toBeDefined();
	});

	const tests = [
		[
			["i", "am", "playing", "with", "recursion"],
			["I", "AM", "PLAYING", "WITH", "RECURSION"],
		],
		[["Single"], ["SINGLE"]],
		[[], []],
	];

	it.each(tests)("expect %j to be %j", (array, expected) => {
		expect(capitalizeWords(array)).toEqual(expected);
	})
});

describe("Recursion - Stringify Numbers", () => {
	test("Is stringifyNumbers function defined", () => {
		expect(stringifyNumbers).toBeDefined();
	});

	const fromObj = {
		a: 1,
		b: "text",
		c: false,
		d: {
			a: "someA",
			b: {
				a: "nestedString",
				b: true,
				c: 2,
				d: 3,
				e: {
					a: 1
				}
			}
		}
	};
	const toObj = {
		a: "1",
		b: "text",
		c: false,
		d: {
			a: "someA",
			b: {
				a: "nestedString",
				b: true,
				c: "2",
				d: "3",
				e: {
					a: "1"
				}
			}
		}
	};

	const fromObj1 = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: {
			a: 11
		}
	};
	const toObj1 = {
		a: "1",
		b: "2",
		c: "3",
		d: "4",
		e: {
			a: "11"
		}
	};

	const fromObj2 = {
		a: 2,
		b: [],
		c: "3"
	};
	const toObj2 = {
		a: "2",
		b: [],
		c: "3"
	};

	const tests = [
		[fromObj, toObj],
		[fromObj1, toObj1],
		[fromObj2, toObj2]
	];

	it.each(tests)("expect %j to be %j", (obj, expected) => {
		expect(stringifyNumbers(obj)).toEqual(expected);
	});
});

describe("Recursion - Collect Strings", () => {
	test("Is collectStrings function defined", () => {
		expect(collectStrings).toBeDefined();
	});

	const obj = {
		stuff: "foo",
		data: {
			val: {
				thing: {
					info: "bar",
					moreInfo: {
						evenMoreInfo: {
							weMadeIt: "baz"
						}
					}
				}
			}
		}
	};
	const res = ["foo", "bar", "baz"];

	const tests = [
		[obj, res]
	];

	test.each(tests)("expect %j to be equal %j", (obj, expected) => {
		expect(collectStrings(obj)).toEqual(expected)
	})
});

