/*
Subarray with given sum

	Given an unsorted array A of size N that contains only non-negative integers, 
		find a continuous sub-array which adds to a given number S 
		and return the left and right index(1-based indexing) of that subarray.

	In case of multiple subarrays, 
		return the subarray indexes which comes first on moving from left to right.

	Note:- Both the indexes in the array should be according to 1-based indexing. 
		You have to return an arraylist consisting of two elements left and right. 
		In case no such subarray exists return an array consisting of element -1.

	Example 1:

		Input:
		N = 5, S = 12
		A[] = {1,2,3,7,5}
		Output: 2 4
		Explanation: The sum of elements 
		from 2nd position to 4th position 
		is 12.


	Example 2:

	Input:
	N = 10, S = 15
	A[] = {1,2,3,4,5,6,7,8,9,10}
	Output: 1 5
	Explanation: The sum of elements 
	from 1st position to 5th position
	is 15.

	Your Task:
		You don't need to read input or print anything. 
		The task is to complete the function subarraySum() which takes arr, N, and S as input 
		parameters and returns an arraylist containing the starting and ending positions 
		of the first such occurring subarray from the left where sum equals to S. 
		The two indexes in the array should be according to 1-based indexing. 
		If no such subarray is found, return an array consisting of only one element that is -1.



	Expected Time Complexity: O(N)
	Expected Auxiliary Space: O(1)
*/
class Solution {
	//Function to find a continuous sub-array which adds up to a given number.
	subarraySum(arr, n, s) {
		let start = 0;
		let end = 1;
		let sum = arr[start] + arr[end];

		while (end < n) {
			if (sum < s) {
				end++;
				sum += arr[end] || 0;
			} else {
				sum -= arr[start];
				start++;
			}

			if (sum === s && start < end) {
				return [start + 1, end + 1];
			}
		}

		return -1;
	}

	// time O(N)
	// space O(1)
	/**
	 * Calculate the maximum sum of n consecutive elements in the array
	 *
	 * @param {int[]} arr Array of integers
	 * @param {int} n count of consecutive elements
	 *
	 * @returns {int} Max sum of consecutive elements in array
	 */
	maxSubarraySum(arr, n) {
		if (arr.length === 0 || arr.length < n) return null;

		let maxSum = 0;
		let tempSum = 0;

		// calculate initial sum of first n elements of array
		for (let i = 0; i < n; i++) {
			maxSum += arr[i];
		}

		// save max sum in to temp sum
		tempSum = maxSum;

		// iterate start from given n
		for (let i = n; i < arr.length; i++) {
			// arr[i - n] : old head, to be removed
			// arr[i] : new tail, to be added
			tempSum = tempSum - arr[i - n] + arr[i];
			maxSum = Math.max(tempSum, maxSum);
		}

		return maxSum;
	}

	/**
	 * Return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
	 * 
	 * @param {int[]} arr
	 * @param {int} n
	 *
	 * @returns {int}
	 */
	minSubArrayLen(arr, n) {
		return 0;
	}
}

module.exports = {
	Solution
}
