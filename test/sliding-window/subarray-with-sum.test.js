const { Solution } = require("../../sliding-window/subarray-with-sum");

const sw = new Solution();

describe("Sliding Window - Subarray with given sum", () => {
	const dataExist = [
		[[1, 2, 3, 7, 5], 5, 12, [2, 4]],
		[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 15, [1, 5]],
		[[1, 2, 3, 7, 5], 5, 19, -1],
		[
			[
				142, 112, 54, 69, 148, 45, 63, 158, 38, 60, 124, 142, 130, 179,
				117, 36, 191, 43, 89, 107, 41, 143, 65, 49, 47, 6, 91, 130, 171,
				151, 7, 102, 194, 149, 30, 24, 85, 155, 157, 41, 167, 177, 132,
				109, 145, 40, 27, 124, 138, 139, 119, 83, 130, 142, 34, 116, 40,
				59, 105, 131, 178, 107, 74, 187, 22, 146, 125, 73, 71, 30, 178,
				174, 98, 113,
			],
			74,
			665,
			-1,
		],
	];

	it("Function 'subarraySum' defined", () => {
		expect(sw.subarraySum).toBeDefined();
	});

	test.each(dataExist)(
		"Find subarray with sum. Given %j, length: %i, sum %i, expect to be %j",
		(arr, n, s, expected) => {
			expect(sw.subarraySum(arr, n, s)).toEqual(expected);
		}
	);
});

describe("Sliding Window - Maximum Sum of n consecutive elements in the array", () => {
	const testData = [
		[2, [1, 2, 5, 2, 8, 1, 5], 10],
		[4, [1, 2, 5, 2, 8, 1, 5], 17],
		[1, [4, 2, 1, 6], 6],
		[4, [4, 2, 1, 6, 2], 13],
		[4, [], null],
	];

	it("Function 'maxSubarraySum' defined", () => {
		expect(sw.maxSubarraySum).toBeDefined();
	});

	test.each(testData)(
		"Calc max sum of %i consecutive",
		(n, arr, expected) => {
			expect(sw.maxSubarraySum(arr, n)).toEqual(expected);
		}
	);
});
